import { useEffect, useRef } from "react";

interface ParticleTextProps {
  text?: string;
  className?: string;
}

// Resting face is white; touched particles light up blue.
const FACE = [240, 244, 255];
const TOUCH = [96, 156, 255]; // glow blue
// Extruded side: deep blue (far) -> mid blue (near) for static 3D depth.
const EXT_FAR = [12, 22, 70];
const EXT_NEAR = [30, 60, 150];

interface Particle {
  hx: number; // home x (with centring offset baked in)
  hy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  energy: number; // 0 rest .. 1 just touched
  size: number;
}

/**
 * ParticleText — a static, centred 3D extruded particle wordmark in white.
 * Depth is a pre-rendered blue extrusion behind a white dotted face. At rest
 * the text is static; particles touched by the cursor push away, brighten to
 * blue and glow, then spring back. Pure canvas, no dependencies.
 */
export default function ParticleText({
  text = "OPHRON",
  className = "",
}: ParticleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    if (!canvasRef.current) return;
    const sample = document.createElement("canvas");
    const ext = document.createElement("canvas"); // pre-rendered extrusion
    const ctx0 = canvasRef.current.getContext("2d");
    const sctx0 = sample.getContext("2d", { willReadFrequently: true });
    const ectx0 = ext.getContext("2d");
    if (!ctx0 || !sctx0 || !ectx0) return;
    const cv: HTMLCanvasElement = canvasRef.current;
    const ctx: CanvasRenderingContext2D = ctx0;
    const sctx: CanvasRenderingContext2D = sctx0;
    const ectx: CanvasRenderingContext2D = ectx0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let raf = 0;

    function build() {
      const parent = cv.parentElement ?? cv;
      const rect = parent.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));

      cv.width = width * dpr;
      cv.height = height * dpr;
      cv.style.width = width + "px";
      cv.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      sample.width = width;
      sample.height = height;
      ext.width = width * dpr;
      ext.height = height * dpr;
      ectx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const family = getComputedStyle(cv).fontFamily || "Arial, sans-serif";
      sctx.clearRect(0, 0, width, height);
      sctx.textAlign = "center";
      sctx.textBaseline = "middle";

      // Fit to ~92% of the frame width and centre it.
      let fontSize = height;
      sctx.font = `800 ${fontSize}px ${family}`;
      const measured = sctx.measureText(text).width || 1;
      fontSize = (fontSize * (width * 0.92)) / measured;
      fontSize = Math.min(fontSize, height * 0.82);
      sctx.font = `800 ${fontSize}px ${family}`;
      sctx.fillStyle = "#fff";
      sctx.fillText(text, width / 2, height / 2);

      const data = sctx.getImageData(0, 0, width, height).data;

      const extDepth = Math.max(8, fontSize * 0.13);
      const dirX = 0.55;
      const dirY = 0.62;
      const ox = -extDepth * dirX * 0.5;
      const oy = -extDepth * dirY * 0.5;

      const gap = width > 1100 ? 5 : 4;
      const pSize = gap > 4 ? 2 : 1.7;
      const next: Particle[] = [];
      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          if (data[(y * width + x) * 4 + 3] > 128) {
            next.push({
              hx: x + ox,
              hy: y + oy,
              x: x + ox,
              y: y + oy,
              vx: 0,
              vy: 0,
              energy: 0,
              size: pSize,
            });
          }
        }
      }
      particles = next;

      // Pre-render the static blue extrusion once.
      ectx.clearRect(0, 0, width, height);
      const layers = Math.max(8, Math.round(extDepth / 1.6));
      const extSize = extDepth / layers + 1.2;
      for (let i = layers; i >= 1; i--) {
        const f = i / layers;
        const t = 1 - f;
        const off = f * extDepth;
        const r = Math.round(EXT_FAR[0] + (EXT_NEAR[0] - EXT_FAR[0]) * t);
        const g = Math.round(EXT_FAR[1] + (EXT_NEAR[1] - EXT_FAR[1]) * t);
        const b = Math.round(EXT_FAR[2] + (EXT_NEAR[2] - EXT_FAR[2]) * t);
        ectx.fillStyle = `rgb(${r},${g},${b})`;
        const px = off * dirX;
        const py = off * dirY;
        for (let k = 0; k < next.length; k++) {
          ectx.fillRect(next[k].hx + px, next[k].hy + py, extSize, extSize);
        }
      }
    }

    const RADIUS = 70;
    const RADIUS2 = RADIUS * RADIUS;

    function frame() {
      ctx.clearRect(0, 0, width, height);
      // Static extrusion (device-pixel blit).
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(ext, 0, 0);
      ctx.restore();

      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Cursor touch: push away + raise energy.
        const dx = p.x - mx;
        const dy = p.y - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < RADIUS2 && d2 > 0.01) {
          const d = Math.sqrt(d2);
          const force = (RADIUS - d) / RADIUS;
          p.vx += (dx / d) * force * 3.2;
          p.vy += (dy / d) * force * 3.2;
          if (force > p.energy) p.energy = force;
        }

        // Spring home + friction; energy decays.
        p.vx += (p.hx - p.x) * 0.12;
        p.vy += (p.hy - p.y) * 0.12;
        p.vx *= 0.8;
        p.vy *= 0.8;
        p.x += p.vx;
        p.y += p.vy;
        p.energy *= 0.92;

        // Colour: white at rest, blue glow when touched.
        const e = p.energy;
        const r = Math.round(FACE[0] + (TOUCH[0] - FACE[0]) * e);
        const g = Math.round(FACE[1] + (TOUCH[1] - FACE[1]) * e);
        const b = Math.round(FACE[2] + (TOUCH[2] - FACE[2]) * e);

        if (e > 0.05) {
          ctx.shadowColor = `rgba(96,156,255,${0.7 * e})`;
          ctx.shadowBlur = 10 * e;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        const s = p.size + e * 1.6;
        ctx.fillRect(p.x, p.y, s, s);
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(frame);
    }

    function onMove(ev: MouseEvent) {
      const rect = cv.getBoundingClientRect();
      mouse.current.x = ev.clientX - rect.left;
      mouse.current.y = ev.clientY - rect.top;
    }
    function onLeave() {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    }

    build();
    raf = requestAnimationFrame(frame);

    const ro = new ResizeObserver(() => build());
    const parentEl = cv.parentElement;
    if (parentEl) ro.observe(parentEl);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [text]);

  return <canvas ref={canvasRef} className={`font-display ${className}`} />;
}

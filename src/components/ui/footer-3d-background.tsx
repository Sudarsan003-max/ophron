import ParticleText from "./particle-text";

interface Footer3DBackgroundProps {
  text?: string;
  className?: string;
}

/**
 * Cinematic footer background.
 * - Rotating 3D ParticleText "OPHRON" model (white -> blue),
 *   auto-fit to the frame width.
 * - Perspective grid floor, drifting glow orbs and floating 3D shapes.
 */
export default function Footer3DBackground({
  text = "OPHRON",
  className = "pointer-events-none absolute inset-0 z-0 overflow-hidden",
}: Footer3DBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={className}
    >
      <style>{`
        @keyframes f3d-orb-a {
          0%   { transform: translate3d(-10%, 10%, 0) scale(1); }
          50%  { transform: translate3d(8%, -6%, 0) scale(1.15); }
          100% { transform: translate3d(-10%, 10%, 0) scale(1); }
        }
        @keyframes f3d-orb-b {
          0%   { transform: translate3d(12%, -8%, 0) scale(1.1); }
          50%  { transform: translate3d(-6%, 10%, 0) scale(0.9); }
          100% { transform: translate3d(12%, -8%, 0) scale(1.1); }
        }
        @keyframes f3d-float {
          0%   { transform: translateY(0) rotate(0deg); }
          50%  { transform: translateY(-22px) rotate(8deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes f3d-float-slow {
          0%   { transform: translateY(0) rotate(0deg); }
          50%  { transform: translateY(18px) rotate(-10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        @keyframes f3d-grid {
          0%   { background-position: 0 0; }
          100% { background-position: 0 60px; }
        }
      `}</style>

      {/* Perspective grid floor */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%]"
        style={{
          transform: "perspective(520px) rotateX(62deg)",
          transformOrigin: "bottom center",
          backgroundImage:
            "linear-gradient(to right, rgba(92,133,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(92,133,255,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "f3d-grid 6s linear infinite",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,0.9), transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,0.9), transparent 80%)",
        }}
      />

      {/* Drifting glow orbs */}
      <div
        className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(27,59,245,0.45), transparent 65%)",
          animation: "f3d-orb-a 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute right-[6%] bottom-[12%] h-80 w-80 rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(92,133,255,0.4), transparent 65%)",
          animation: "f3d-orb-b 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute left-[42%] top-[8%] h-56 w-56 rounded-full blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(120,150,255,0.22), transparent 65%)",
          animation: "f3d-orb-a 22s ease-in-out infinite",
        }}
      />



      {/* Floating 3D shapes */}
      <div
        className="absolute left-[14%] top-[22%] h-16 w-16 rounded-2xl border border-white/10"
        style={{
          background:
            "linear-gradient(135deg, rgba(92,133,255,0.18), rgba(27,59,245,0.04))",
          boxShadow: "0 20px 40px -18px rgba(27,59,245,0.5)",
          transform: "rotate(12deg)",
          animation: "f3d-float 9s ease-in-out infinite",
        }}
      />
      <div
        className="absolute right-[16%] top-[30%] h-12 w-12 rounded-full border border-white/10"
        style={{
          background:
            "linear-gradient(135deg, rgba(120,150,255,0.18), transparent)",
          animation: "f3d-float-slow 11s ease-in-out infinite",
        }}
      />
      <div
        className="absolute left-[30%] bottom-[18%] h-10 w-10 border border-white/10"
        style={{
          background:
            "linear-gradient(135deg, rgba(92,133,255,0.16), transparent)",
          transform: "rotate(28deg)",
          animation: "f3d-float 13s ease-in-out infinite",
        }}
      />

      {/* Vignette for depth and legibility of foreground content */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 85% at 50% 45%, transparent 42%, rgba(10,10,10,0.5) 100%)",
        }}
      />
    </div>
  );
}

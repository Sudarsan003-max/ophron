import { useState, useEffect } from "react";
import { SectionHead } from "./About";
import logo from "./logo.png";

type TabType = "DAILY" | "WEEKLY" | "MONTHLY" | "ALL";

export default function Showcase() {
  const [activeTab, setActiveTab] = useState<TabType>("MONTHLY");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scene, setScene] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [islandExpanded, setIslandExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [tilt, setTilt] = useState<{ id: number; x: number; y: number } | null>(null);

  // Monitor screen size to disable 3D rotation on mobile viewports
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-play the iPhone screen scene slideshow (walkthrough animation)
  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setScene((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoplay]);

  // Trigger dynamic island notification wave on scene changes
  useEffect(() => {
    setIslandExpanded(true);
    const timer = setTimeout(() => {
      setIslandExpanded(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [scene]);

  // Handle dynamic gimbal 3D tilt tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: number) => {
    if (isMobile) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setTilt({ id: cardId, x, y });

    // Set cursor coordinate CSS properties for radial spotlight glow
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    card.style.setProperty("--mx", `${px}px`);
    card.style.setProperty("--my", `${py}px`);
  };

  const handleMouseLeave = () => {
    setTilt(null);
  };

  // Real shift data mapped to OPHRON Singapore operations
  const dailyShifts = [8, 14, 12, 18, 24, 28, 22, 30, 26, 34, 32, 40];
  const weeklyShifts = [45, 60, 52, 78, 92, 115, 108, 130, 142, 155, 160, 175];
  const monthlyShifts = [180, 220, 260, 310, 380, 440, 510, 580, 640, 710, 780, 850];
  const allShifts = [1200, 2400, 3800, 5200, 6900, 8500, 10400, 12800, 15200, 18000, 21000, 24500];

  const getShifts = (): number[] => {
    switch (activeTab) {
      case "DAILY": return dailyShifts;
      case "WEEKLY": return weeklyShifts;
      case "MONTHLY": return monthlyShifts;
      case "ALL": return allShifts;
    }
  };

  // Convert shift values to percentage heights for the bar chart
  const getHeights = (): number[] => {
    const data = getShifts();
    const maxVal = Math.max(...data);
    return data.map((val) => (val / maxVal) * 90 + 10);
  };

  // Compute card transform inline styles based on tilt states
  const getCardStyle = (cardId: number) => {
    const isHovered = tilt?.id === cardId;
    if (isMobile) {
      return {
        transform: isHovered ? "scale(1.02)" : "scale(1)",
        transition: "transform 0.4s ease",
      };
    }

    switch (cardId) {
      case 1:
        return {
          transform: hoveredCard === 1
            ? "rotateY(8deg) translateZ(10px) scale(0.96)"
            : "rotateY(20deg) translateZ(-30px) scale(0.91)",
          transition: "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
        };
      case 2:
        return {
          transform: (isHovered && tilt)
            ? `rotateY(${13 + tilt.x * 16}deg) rotateX(${-tilt.y * 16}deg) translateZ(25px) scale(1.03)`
            : "rotateY(13deg) translateZ(-10px) scale(0.97)",
          transition: isHovered ? "transform 0.08s ease-out" : "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
          transformStyle: "preserve-3d" as const,
        };
      case 3:
        return {
          transform: (isHovered && tilt)
            ? `translateZ(60px) scale(1.04) rotateY(${tilt.x * 12}deg) rotateX(${-tilt.y * 12}deg)`
            : "translateZ(35px) scale(1.01)",
          transition: isHovered ? "transform 0.08s ease-out" : "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
          transformStyle: "preserve-3d" as const,
        };
      case 4:
        return {
          transform: (isHovered && tilt)
            ? `rotateY(${-13 + tilt.x * 16}deg) rotateX(${-tilt.y * 16}deg) translateZ(25px) scale(1.03)`
            : "rotateY(-13deg) translateZ(-10px) scale(0.97)",
          transition: isHovered ? "transform 0.08s ease-out" : "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
          transformStyle: "preserve-3d" as const,
        };
      case 5:
        return {
          transform: hoveredCard === 5
            ? "rotateY(-8deg) translateZ(10px) scale(0.96)"
            : "rotateY(-20deg) translateZ(-30px) scale(0.91)",
          transition: "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
        };
      default:
        return {};
    }
  };

  const isLightScene = false;

  const rx = (tilt?.id === 3 && tilt) ? -tilt.x * 35 : 0;
  const ry = (tilt?.id === 3 && tilt) ? -tilt.y * 35 : 0;

  return (
    <section id="gallery" className="relative py-28 bg-[#032147] text-[#EDE5DA] overflow-hidden" style={{ background: "#032147", color: "#EDE5DA" }}>
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B7A38B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 -left-40 w-96 h-96 bg-[#B7A38B]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-5">
        <SectionHead n="006" label="OPHRON OS Live Dashboard" light />

        <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-canela font-bold text-[38px] sm:text-[58px] lg:text-[76px] leading-[0.95] tracking-tight text-white">
              Visualizing your <span className="font-serif-i italic text-[#B7A38B]">operational</span>
              <br />
              infrastructure dashboard.
            </h2>
          </div>
          <p className="lg:col-span-5 font-inter text-[15px] leading-relaxed text-[#EDE5DA]/80 max-w-md lg:ml-auto">
            A real-time operational dashboard system engineered to track workforce deployment, hygiene compliance, IFM Lite facility uptime, and commercial performance across Singapore & international facilities.
          </p>
        </div>

        {/* Widescreen Behance-style Layout with 3D Perspective Container */}
        <div 
          className="mt-20 relative flex items-center justify-center gap-6 py-16 overflow-x-auto lg:overflow-visible scrollbar-hide max-w-full"
          style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
        >
          
          {/* Card 1: Leftmost Abstract Vertical Bars (3D Curled Back) */}
          <div 
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="hidden xl:flex w-44 h-[380px] bg-[#0c1e3d] border border-white/10 rounded-3xl overflow-hidden items-end justify-between p-6 opacity-45 hover:opacity-85 shrink-0 shadow-2xl"
            style={getCardStyle(1)}
          >
            <div className="w-3 bg-gradient-to-t from-[#B7A38B] to-transparent rounded-full" style={{ height: "60%" }} />
            <div className="w-3 bg-gradient-to-t from-white to-transparent rounded-full" style={{ height: "85%" }} />
            <div className="w-3 bg-gradient-to-t from-[#B7A38B] to-transparent rounded-full" style={{ height: "45%" }} />
            <div className="w-3 bg-gradient-to-t from-white to-transparent rounded-full" style={{ height: "90%" }} />
            <div className="w-3 bg-gradient-to-t from-[#B7A38B] to-transparent rounded-full" style={{ height: "70%" }} />
          </div>

          {/* Card 2: Overhead Reduction & Active Contracts (3D Angled Left) */}
          <div 
            onMouseMove={(e) => handleMouseMove(e, 2)}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => { handleMouseLeave(); setHoveredCard(null); }}
            className="relative w-80 h-[380px] bg-[#0a1e3f]/95 border border-[#B7A38B]/30 rounded-3xl p-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),_0_25px_60px_-15px_rgba(0,0,0,0.9),_0_0_40px_rgba(183, 163, 139,0.1)] hover:border-[#B7A38B]/60 shrink-0 flex flex-col justify-between overflow-hidden"
            style={getCardStyle(2)}
          >
            <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-[#B7A38B]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] rounded-3xl" />
            
            {/* Spotlight Glow Layer */}
            <div 
              className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-3xl z-10"
              style={{ 
                background: `radial-gradient(circle 180px at var(--mx, 0px) var(--my, 0px), rgba(183, 163, 139, 0.25), transparent 80%)`,
                opacity: tilt?.id === 2 ? 1 : 0
              }}
            />

            <div style={{ transform: "translateZ(15px)" }}>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold">140+ SG Contracts</div>
              <div className="text-[9px] font-mono text-[#EDE5DA]/60 mt-0.5">Average Overhead Reduction</div>
              <div className="mt-5 text-4xl font-montserrat font-bold tracking-tight text-white">30%+ Cost Saved</div>
            </div>

            {/* Glowing Chart Peak Tooltip */}
            <div 
              className="absolute right-8 top-[165px] bg-[#B7A38B] text-[#032147] text-[10px] font-mono font-bold px-2.5 py-1 rounded-full shadow-lg shadow-[#B7A38B]/30 animate-pulse z-10 border border-white/20"
              style={{ transform: "translateZ(30px)" }}
            >
              ▲ 99.8% SLA
            </div>

            <div className="relative h-44 w-full mt-4 overflow-hidden rounded-xl bg-black/40 border border-white/10" style={{ transform: "translateZ(10px)" }}>
              <svg viewBox="0 0 300 200" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#B7A38B" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#B7A38B" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Horizontal reference grid lines */}
                <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                <line x1="0" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                {/* Area Gradient */}
                <path d="M 0 170 Q 50 160 100 130 T 200 90 T 300 40 L 300 200 L 0 200 Z" fill="url(#chartGlow)" />
                {/* Stroke Line */}
                <path d="M 0 170 Q 50 160 100 130 T 200 90 T 300 40" fill="none" stroke="#B7A38B" strokeWidth="3.5" strokeLinecap="round" />
                {/* Point pulse */}
                <circle cx="300" cy="40" r="5" fill="#ffffff" className="animate-ping" />
                <circle cx="300" cy="40" r="4.5" fill="#B7A38B]" />
              </svg>
            </div>
          </div>

          {/* Center: 3D iPhone Mockup (Elevated & Hover Interactive) */}
          <div 
            onMouseMove={(e) => handleMouseMove(e, 3)}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => { handleMouseLeave(); setHoveredCard(null); }}
            className="relative w-[310px] h-[620px] shrink-0 z-20 select-none"
            style={getCardStyle(3)}
          >
            {/* Volume & Power Buttons (3D Protrusions) */}
            <div className="absolute top-[100px] -left-[3px] w-[3px] h-[28px] bg-gradient-to-b from-[#8f939d] via-[#3a3b3f] to-[#121314] rounded-l-md shadow-lg" style={{ transform: "translateZ(-3px)" }} />
            <div className="absolute top-[145px] -left-[3px] w-[3px] h-[52px] bg-gradient-to-b from-[#8f939d] via-[#3a3b3f] to-[#121314] rounded-l-md shadow-lg" style={{ transform: "translateZ(-3px)" }} />
            <div className="absolute top-[210px] -left-[3px] w-[3px] h-[52px] bg-gradient-to-b from-[#8f939d] via-[#3a3b3f] to-[#121314] rounded-l-md shadow-lg" style={{ transform: "translateZ(-3px)" }} />
            <div className="absolute top-[170px] -right-[3px] w-[3px] h-[78px] bg-gradient-to-b from-[#8f939d] via-[#3a3b3f] to-[#121314] rounded-r-md shadow-lg" style={{ transform: "translateZ(-3px)" }} />

            {/* 3D Side Depth/Thickness Frames */}
            <div 
              className="absolute inset-0 rounded-[52px] bg-gradient-to-b from-[#3a4c6a] via-[#10223f] to-[#0a1220] border border-black/40 shadow-2xl" 
              style={{ transform: "translateZ(-8px)" }} 
            />
            <div 
              className="absolute inset-0 rounded-[52px] bg-gradient-to-b from-[#5c7295] via-[#1d3255] to-[#0c182b] border border-black/35 shadow-xl" 
              style={{ transform: "translateZ(-4px)" }} 
            />

            {/* Outer Titanium Chassis (3D Frame) */}
            <div 
              className="w-full h-full rounded-[52px] p-[3.5px] bg-gradient-to-b from-[#B7A38B] via-[#3d4045] to-[#032147] shadow-[inset_0_1.5px_2.5px_rgba(255,255,255,0.55),_inset_0_-1.5px_2.5px_rgba(0,0,0,0.75),_0_35px_80px_rgba(0,0,0,0.95),_0_0_50px_rgba(3, 33, 71,0.4)] flex items-center justify-center relative"
              style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }}
            >
              
              {/* Inner bezel & screen container */}
              <div className="w-full h-full rounded-[49px] p-[8px] bg-[#000000] flex items-center justify-center relative">
                
                {/* Speaker Ear Piece Grill */}
                <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#222] rounded-full z-30" />

                {/* Main Screen */}
                <div 
                  className={`w-full h-full rounded-[41px] overflow-hidden relative flex flex-col justify-between p-6 select-none transition-colors duration-500 bg-[#061426]`}
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 50% 35%, rgba(183, 163, 139, 0.18) 0%, transparent 60%),
                      radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 40px, transparent 40px, transparent 80px)
                    `,
                    backgroundSize: "100% 100%, 20px 20px, 80px 100%"
                  }}
                >
                  {/* Dynamic Island */}
                  <div 
                    className={`absolute top-3 left-1/2 -translate-x-1/2 bg-[#000000] rounded-full z-50 flex items-center justify-between px-3 border border-white/5 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.06),_0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out overflow-hidden ${
                      islandExpanded ? "w-[195px] h-[26px]" : "w-[90px] h-[24px]"
                    }`}
                  >
                    {islandExpanded ? (
                      <div className="flex items-center justify-between w-full text-[8.5px] font-mono font-bold text-white px-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-[#B7A38B] rounded-full animate-ping" />
                          <span className="w-1.5 h-1.5 bg-[#B7A38B] rounded-full absolute" />
                          <span className="text-white/90 text-[8px] tracking-tight whitespace-nowrap">
                            {scene === 0 && "OPHRON OS Active..."}
                            {scene === 1 && "Staffing SLA: 100%"}
                            {scene === 2 && "SFA Audit Readiness: Pass"}
                            {scene === 3 && "Pan Pacific SLA Logged"}
                          </span>
                        </div>
                        {/* Tiny live waves */}
                        <div className="flex gap-[1px] h-2 items-center">
                          <span className="w-[1.5px] h-1.5 bg-[#B7A38B] rounded-xs animate-bounce" style={{ animationDelay: "0.1s" }} />
                          <span className="w-[1.5px] h-2.5 bg-[#B7A38B] rounded-xs animate-bounce" style={{ animationDelay: "0.2s" }} />
                          <span className="w-[1.5px] h-2 bg-[#B7A38B] rounded-xs animate-bounce" style={{ animationDelay: "0.3s" }} />
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Camera Lens */}
                        <div className="w-[7px] h-[7px] bg-[#0c0c0c] rounded-full flex items-center justify-center border border-white/5 shrink-0">
                          <div className="w-[3px] h-[3px] bg-[#B7A38B] rounded-full opacity-65" />
                        </div>
                        {/* Proximity / Light Sensor */}
                        <div className="w-[12px] h-[3px] bg-[#0a0a0a] rounded-full opacity-50 border border-white/5 shrink-0" />
                      </>
                    )}
                  </div>

                  {/* Status Bar */}
                  <div className="absolute top-0 inset-x-0 h-10 px-8 pt-3 flex items-center justify-between text-[10px] font-semibold text-white/95 z-40 select-none">
                    <span>09:41</span>
                    <div className="flex items-center gap-[6px] opacity-90">
                      <div className="flex items-end gap-[1.5px] h-[9px]">
                        <div className="w-[2px] h-[3px] bg-white rounded-xs" />
                        <div className="w-[2px] h-[5px] bg-white rounded-xs" />
                        <div className="w-[2px] h-[7px] bg-white rounded-xs" />
                        <div className="w-[2px] h-[9px] bg-white rounded-xs" />
                      </div>
                      <svg className="w-[13px] h-[13px] fill-current" viewBox="0 0 24 24">
                        <path d="M12 21a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-6.236-4.5a8.775 8.775 0 0 1 12.472 0 .75.75 0 0 1 0 1.06l-.47.47a.75.75 0 0 1-1.06 0 6.675 6.675 0 0 0-9.412 0 .75.75 0 0 1-1.06 0l-.47-.47a.75.75 0 0 1 0-1.06zm-3-3a13.175 13.175 0 0 1 18.708 0 .75.75 0 0 1 0 1.06l-.47.47a.75.75 0 0 1-1.06 0 11.075 11.075 0 0 0-15.648 0 .75.75 0 0 1-1.06 0l-.47-.47a.75.75 0 0 1 0-1.06zm-3-3a17.575 17.575 0 0 1 24.944 0 .75.75 0 0 1 0 1.06l-.47.47a.75.75 0 0 1-1.06 0 15.475 15.475 0 0 0-21.884 0 .75.75 0 0 1-1.06 0l-.47-.47a.75.75 0 0 1 0-1.06z" />
                      </svg>
                      <div className="flex items-center gap-[1px]">
                        <div className="w-[20px] h-[10px] border border-white/80 rounded-[2.5px] p-[1px] flex items-center">
                          <div className="h-full w-[85%] bg-white rounded-[1px]" />
                        </div>
                        <div className="w-[1.2px] h-[3.5px] bg-white/80 rounded-r-[0.8px]" />
                      </div>
                    </div>
                  </div>

                  {/* Specular Glare Reflection overlay */}
                  <div 
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.09] z-30 transition-transform duration-300 ease-out"
                    style={{ transform: `translate(${rx}px, ${ry}px) rotate(30deg) scale(1.5)` }}
                  />

                  {/* Phone Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3.5 pt-6 mt-4 z-10">
                    <div className="flex items-center gap-2">
                      <img src="/images/brand/ophron-gold-emblem-transparent.png" className="h-5 w-auto object-contain" alt="OPHRON Logo" />
                      <span className="text-[12px] font-display font-bold tracking-wider text-[#EDE5DA]">OPHRON PLATFORM</span>
                    </div>
                    <span className="text-[8.5px] font-mono uppercase tracking-[0.15em] bg-[#B7A38B] text-[#032147] px-2 py-0.5 rounded-full font-bold">
                      LIVE OS
                    </span>
                  </div>

                  {/* SCENE 0: Platform Intro */}
                  <div 
                    className={`absolute inset-x-6 top-24 bottom-20 flex flex-col justify-center items-center text-center space-y-4 transition-all duration-700 ease-in-out ${
                      scene === 0 ? "opacity-100 translate-x-0 scale-100 pointer-events-auto" : "opacity-0 translate-x-4 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B7A38B]/30 to-[#032147]/80 border border-[#B7A38B]/50 shadow-[0_15px_30px_rgba(3, 33, 71,0.6)] flex items-center justify-center relative">
                      <img src="/images/brand/ophron-gold-emblem-transparent.png" className="h-10 w-auto object-contain z-10 filter drop-shadow-[0_4px_10px_rgba(183, 163, 139,0.5)]" alt="OPHRON Emblem" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[18px] font-canela font-bold leading-tight text-white">
                        Hospitality Operational Infrastructure
                      </h4>
                      <p className="text-[10.5px] font-inter text-white/70 leading-relaxed max-w-[200px] mx-auto">
                        Powering People, Hygiene, Facilities, Technology, and Intelligence across Singapore & globally.
                      </p>
                    </div>
                  </div>

                  {/* SCENE 1: Operational Compliance & SLA */}
                  <div 
                    className={`absolute inset-x-5 top-24 bottom-20 flex flex-col justify-center gap-3.5 transition-all duration-700 ease-in-out ${
                      scene === 1 ? "opacity-100 translate-x-0 scale-100 pointer-events-auto" : "opacity-0 translate-x-4 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-center text-[#B7A38B] font-bold">
                      // SLA Compliance & Shift Index
                    </div>
                    
                    {/* Circular Radial Gauge */}
                    <div className="relative w-24 h-24 flex items-center justify-center mx-auto">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="48" cy="48" r="38" stroke="rgba(255,255,255,0.08)" strokeWidth="8" fill="transparent" />
                        <circle 
                          cx="48" 
                          cy="48" 
                          r="38" 
                          stroke="#B7A38B" 
                          strokeWidth="8" 
                          fill="transparent" 
                          strokeDasharray="238" 
                          strokeDashoffset="10" 
                          strokeLinecap="round" 
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center justify-center text-center">
                        <span className="text-xl font-montserrat font-bold text-white leading-none">99.8%</span>
                        <span className="text-[7.5px] font-mono uppercase tracking-wider text-[#B7A38B] mt-0.5">Uptime SLA</span>
                      </div>
                    </div>

                    {/* Metric Card Details */}
                    <div className="grid grid-cols-2 gap-2 w-full mt-1">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-2 flex flex-col text-left">
                        <span className="text-[8px] font-mono text-white/60 uppercase">Staffing SLA</span>
                        <span className="text-[13px] font-montserrat font-bold text-white mt-0.5">100% On-Duty</span>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-2 flex flex-col text-left">
                        <span className="text-[8px] font-mono text-white/60 uppercase">Active SG Venues</span>
                        <span className="text-[13px] font-montserrat font-bold text-[#B7A38B] mt-0.5">140+ Contracts</span>
                      </div>
                    </div>
                  </div>

                  {/* SCENE 2: Integrated Hygiene & Operations Pipeline */}
                  <div 
                    className={`absolute inset-x-5 top-24 bottom-20 flex flex-col justify-center items-center text-center space-y-3 transition-all duration-700 ease-in-out ${
                      scene === 2 ? "opacity-100 translate-x-0 scale-100 pointer-events-auto" : "opacity-0 translate-x-4 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold">Shift Pipeline</div>
                      <h4 className="text-[18px] font-canela font-bold leading-tight text-white">
                        SFA Hygiene & IFM Log
                      </h4>
                      <p className="text-[10px] text-white/60">Digital checklist & chemical audit flow</p>
                    </div>

                    <div className="w-full space-y-2 text-left bg-black/45 p-3 rounded-2xl border border-white/10 relative overflow-hidden">
                      <div className="space-y-1 relative z-10">
                        <div className="flex justify-between text-[8px] font-mono text-white/60">
                          <span>1. WSQ WORKFORCE ON-SITE</span>
                          <span className="text-white font-semibold">100% Filled</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[#B7A38B] rounded-full" style={{ width: "100%" }} />
                        </div>
                      </div>

                      <div className="space-y-1 relative z-10">
                        <div className="flex justify-between text-[8px] font-mono text-white/60">
                          <span>2. CANOPY & DEEP CLEAN 🔒</span>
                          <span className="text-[#B7A38B] font-semibold">Verified</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[#B7A38B] rounded-full" style={{ width: "85%" }} />
                        </div>
                      </div>

                      <div className="space-y-1 relative z-10">
                        <div className="flex justify-between text-[8px] font-mono text-white/60">
                          <span>3. NEA DISINFECTION LOG 🔒</span>
                          <span className="text-white font-semibold">Logged</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[#B7A38B] rounded-full" style={{ width: "95%" }} />
                        </div>
                      </div>

                      <div className="space-y-1 relative z-10">
                        <div className="flex justify-between text-[8px] font-mono text-white/60">
                          <span>4. SUPERVISOR SFA AUDIT 🔒</span>
                          <span className="text-[#B7A38B] font-semibold">Grade A Pass</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[#B7A38B] rounded-full shadow-[0_0_8px_rgba(183, 163, 139,0.8)]" style={{ width: "100%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SCENE 3: Verified Client Endorsement */}
                  <div 
                    className={`absolute inset-x-5 top-24 bottom-20 flex flex-col justify-center gap-3.5 transition-all duration-700 ease-in-out ${
                      scene === 3 ? "opacity-100 translate-x-0 scale-100 pointer-events-auto" : "opacity-0 translate-x-4 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-center text-[#B7A38B] font-bold">
                      // Verified Leadership Endorsement
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2 text-left relative overflow-hidden">
                      <div className="flex items-center gap-0.5 text-[#B7A38B] text-[10px]">
                        {"★★★★★".split("").map((s, k) => <span key={k}>{s}</span>)}
                      </div>
                      
                      <p className="text-[10px] leading-relaxed text-white/90 italic font-inter">
                        "OPHRON transformed our back-of-house stewarding and hygiene. 100% SFA inspection confidence across our Singapore hotels."
                      </p>
                      
                      <div className="border-t border-white/10 pt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6.5 h-6.5 rounded-full bg-[#B7A38B] text-[#032147] flex items-center justify-center text-[8.5px] font-montserrat font-bold">
                            PP
                          </div>
                          <div>
                            <div className="text-[9px] font-bold text-white">General Manager</div>
                            <div className="text-[8px] text-white/60">Pan Pacific Hotels SG</div>
                          </div>
                        </div>
                        <div className="text-[9px] font-mono bg-[#B7A38B]/20 text-[#B7A38B] px-1.5 py-0.5 rounded font-bold">
                          100% SLA
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive iOS Tab Bar */}
                  <div className="mt-auto z-10 px-2 py-1.5 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-between gap-1 backdrop-blur-md">
                    {[
                      { label: "Home", sceneId: 0 },
                      { label: "SLA", sceneId: 1 },
                      { label: "Hygiene", sceneId: 2 },
                      { label: "Reviews", sceneId: 3 },
                    ].map((tab) => {
                      const isActive = scene === tab.sceneId;
                      return (
                        <button
                          key={tab.sceneId}
                          onClick={() => {
                            setScene(tab.sceneId);
                            setIsAutoplay(false);
                          }}
                          className={`flex-1 flex flex-col items-center justify-center py-1 rounded-xl transition-all duration-300 relative cursor-pointer ${
                            isActive ? "text-[#B7A38B] scale-105" : "text-white/50 hover:text-white/80"
                          }`}
                        >
                          <span className="text-[8px] font-mono font-bold tracking-tight">{tab.label}</span>
                          {isActive && (
                            <span className="absolute bottom-0 w-3 h-[1.5px] bg-[#B7A38B] rounded-full shadow-[0_0_8px_rgba(183, 163, 139,0.8)] animate-pulse" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Phone Bottom Footer */}
                  <div className="space-y-2 z-10 mt-2">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#B7A38B]/40 to-transparent" />
                    <div className="text-[8px] font-mono uppercase tracking-[0.2em] text-center text-white/50">
                      140+ Contracts · 20+ Yrs Track Record
                    </div>
                    <div className="w-24 h-1 mx-auto rounded-full bg-white/60" />
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Operational Shift Velocity Bar Chart (3D Angled Right) */}
          <div 
            onMouseMove={(e) => handleMouseMove(e, 4)}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => { handleMouseLeave(); setHoveredCard(null); }}
            className="relative w-80 h-[380px] bg-[#0a1e3f]/95 border border-[#B7A38B]/30 rounded-3xl p-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),_0_25px_60px_-15px_rgba(0,0,0,0.9),_0_0_40px_rgba(183, 163, 139,0.1)] hover:border-[#B7A38B]/60 shrink-0 flex flex-col justify-between overflow-hidden"
            style={getCardStyle(4)}
          >
            <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-[#B7A38B]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] rounded-3xl" />
            
            {/* Spotlight Glow Layer */}
            <div 
              className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-3xl z-10"
              style={{ 
                background: `radial-gradient(circle 180px at var(--mx, 0px) var(--my, 0px), rgba(183, 163, 139, 0.25), transparent 80%)`,
                opacity: tilt?.id === 4 ? 1 : 0
              }}
            />

            <div style={{ transform: "translateZ(15px)" }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B7A38B] font-bold">Shift & Audit Velocity</div>
                  <div className="text-[9px] font-mono text-[#EDE5DA]/60 mt-0.5">Deployment Operations Log</div>
                </div>
                <div className="h-6 w-6 bg-[#B7A38B]/20 border border-[#B7A38B]/30 rounded-md grid place-items-center">
                  <span className="text-[#B7A38B] text-xs font-bold">✦</span>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="mt-5 flex gap-3 border-b border-white/10 pb-2 text-[9px] font-mono font-medium tracking-wide">
                {(["DAILY", "WEEKLY", "MONTHLY", "ALL"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`transition-colors cursor-pointer ${activeTab === tab ? "text-[#B7A38B] font-bold" : "text-[#EDE5DA]/40 hover:text-white"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Column Bars */}
            <div className="relative h-40 w-full mt-4 flex items-end justify-between gap-1.5 p-2 bg-black/40 rounded-xl overflow-hidden border border-white/10" style={{ transform: "translateZ(10px)" }}>
              <div className="absolute top-[30%] inset-x-0 h-[1px] bg-[#B7A38B]/30 border-t border-dashed border-[#B7A38B]/40 z-0 pointer-events-none" />
              <div className="absolute top-[20%] left-2 text-[7px] font-mono text-[#B7A38B] z-10 select-none bg-[#0a1e3f]/90 px-1 py-0.5 rounded border border-[#B7A38B]/30 font-bold">
                100% SLA Met
              </div>

              {getHeights().map((heightPct, i) => {
                const rawValue = getShifts()[i];
                return (
                  <div
                    key={`${activeTab}-${i}`}
                    className="flex-1 bg-[#B7A38B]/30 hover:bg-[#B7A38B] transition-all duration-500 rounded-t-sm relative group cursor-pointer z-10"
                    style={{ height: `${heightPct}%` }}
                  >
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#032147] border border-[#B7A38B]/50 text-[8px] font-mono text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20 shadow-md font-bold">
                      {rawValue} Shifts
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 5: Rightmost Abstract Horizontal Blocks (3D Curled Back) */}
          <div 
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
            className="hidden xl:flex w-44 h-[380px] bg-[#0c1e3d] border border-white/10 rounded-3xl overflow-hidden flex-col justify-between p-6 opacity-45 hover:opacity-85 shrink-0 shadow-2xl"
            style={getCardStyle(5)}
          >
            <div className="h-5 w-full bg-gradient-to-r from-transparent to-[#B7A38B]/60 rounded-full" />
            <div className="h-5 w-4/5 bg-gradient-to-r from-transparent to-white/50 rounded-full self-end" />
            <div className="h-5 w-5/6 bg-gradient-to-r from-transparent to-[#B7A38B]/60 rounded-full" />
            <div className="h-5 w-full bg-gradient-to-r from-transparent to-white/50 rounded-full" />
            <div className="h-5 w-3/4 bg-gradient-to-r from-transparent to-[#B7A38B]/60 rounded-full self-end" />
          </div>

        </div>

        <div className="mt-10 text-center text-[12px] font-mono uppercase tracking-[0.22em] text-[#EDE5DA]/60 font-semibold">
          ✦ Real‑Time compliance monitoring · SFA & NEA auditable operational logs ✦
        </div>
      </div>
    </section>
  );
}

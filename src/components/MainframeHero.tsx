import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import ScrubVideo from "./ScrubVideo";

const MAINFRAME_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4";

// 1. Typewriter Hook
function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);

    let index = 0;
    let intervalId: any;

    const delayId = setTimeout(() => {
      intervalId = setInterval(() => {
        setDisplayed(text.slice(0, index + 1));
        index++;
        if (index >= text.length) {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(delayId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

export default function MainframeHero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  // Typewriter invocation
  const { displayed, done } = useTypewriter("we'd love to\nhear from you!", 38, 600);

  const serviceOptions = ["Brand", "Digital", "Campaign", "Other"];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  return (
    <div className="relative bg-white text-neutral-900 font-sans selection:bg-[#EAECE9] selection:text-[#1C2E1E] antialiased overflow-x-hidden flex flex-col lg:block lg:min-h-screen">
      
      {/* 4. Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center bg-transparent">
        {/* Logo Left */}
        <a href="#blog" className="flex flex-row items-center gap-2.5 select-none">
          <img src="/images/brand/ophron-navy-emblem-transparent.png" className="h-6 w-auto object-contain" alt="OPHRON" />
          <span className="text-[21px] sm:text-[26px] tracking-tight text-black font-medium">Mainframe®</span>
          <span className="text-[25px] sm:text-[30px] text-black tracking-[-0.02em] font-medium leading-none mb-1">✳</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex text-[23px] text-black items-center">
          <a href="#mainframe" className="hover:opacity-60 transition-opacity">Labs</a>
          <span className="opacity-40">,&nbsp;</span>
          <a href="#mainframe" className="hover:opacity-60 transition-opacity">Studio</a>
          <span className="opacity-40">,&nbsp;</span>
          <a href="#mainframe" className="hover:opacity-60 transition-opacity">Openings</a>
          <span className="opacity-40">,&nbsp;</span>
          <a href="#mainframe" className="hover:opacity-60 transition-opacity">Shop</a>
        </nav>

        {/* Desktop CTA / Back Link */}
        <div className="hidden md:block">
          <a href="#top" className="text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity">
            Back to home
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 h-10 w-10 z-50 cursor-pointer"
          aria-label="Toggle Mobile Menu"
        >
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[2px] bg-black transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-sm flex flex-col justify-center px-10 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6 text-3xl font-medium text-black">
          <a href="#mainframe" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition">Labs</a>
          <a href="#mainframe" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition">Studio</a>
          <a href="#mainframe" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition">Openings</a>
          <a href="#mainframe" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition">Shop</a>
          <a href="#top" onClick={() => setIsMobileMenuOpen(false)} className="hover:opacity-60 transition text-neutral-500">Back to home</a>
        </nav>
      </div>

      {/* Background 3D render — pre-decoded frame-cache scrubbing (see ScrubVideo) */}
      <div className="order-last lg:order-none relative lg:absolute lg:inset-0 lg:z-0 overflow-hidden pointer-events-none w-full aspect-square md:aspect-video lg:aspect-auto lg:h-full bg-neutral-50 lg:bg-transparent">
        <ScrubVideo src={MAINFRAME_VIDEO} videoClassName="object-right lg:object-right-bottom" />
      </div>

      {/* 5. Content Layout */}
      <div className="relative z-10 flex flex-col order-first lg:order-none w-full bg-white lg:bg-transparent pb-8 lg:pb-0 lg:min-h-screen">
        <main id="spade-hero" className="w-full max-w-7xl mx-auto px-6 py-24 sm:py-28 flex-1 flex flex-col justify-center">
          
          {/* Typewriter Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h1 className="text-5xl md:text-6xl lg:text-[76px] font-normal tracking-tight text-black leading-[1.08] mb-8 select-none w-full whitespace-pre-wrap">
              {displayed}
              {!done && <span className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink" />}
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-[#5A635A] leading-relaxed font-normal mb-14 max-w-2xl">
              Whether you have questions, feedback, <br /> drop us a message and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          {/* Pills Multi-Select */}
          <div className="w-full">
            <h3 className="text-2xl font-medium tracking-tight mb-2">What sort of service?</h3>
            <p className="opacity-85 text-[#738273] mb-8">Select all that apply</p>

            <div className="flex flex-wrap gap-3">
              {serviceOptions.map((srv) => {
                const active = selectedServices.includes(srv);
                return (
                  <motion.button
                    key={srv}
                    onClick={() => toggleService(srv)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition cursor-pointer ${
                      active
                        ? "bg-[#1C2E1E] text-white shadow-md shadow-emerald-950/5"
                        : "bg-white text-[#1C2E1E] border border-[#F1F3F1] hover:bg-[#F1F3F1]/55"
                    }`}
                  >
                    {active && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Check className="h-4 w-4" />
                      </motion.span>
                    )}
                    {srv}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Status Banner */}
          <div className="mt-8 max-w-xl">
            <AnimatePresence mode="wait">
              {selectedServices.length === 0 ? (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  className="italic text-xs text-neutral-500"
                >
                  Please click to select services above.
                </motion.p>
              ) : (
                <motion.div
                  key="active"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="bg-[#FAFBF9] border border-neutral-100 rounded-2xl p-4 flex flex-row items-center justify-between gap-4">
                    <span className="text-sm text-neutral-700">
                      Ready to inquire about: <strong className="font-semibold text-black">{selectedServices.join(", ")}</strong>
                    </span>
                    <button className="flex items-center gap-1 text-[#4D6D47] uppercase text-xs font-semibold hover:opacity-80 transition cursor-pointer">
                      Let's Go <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </main>
      </div>

    </div>
  );
}

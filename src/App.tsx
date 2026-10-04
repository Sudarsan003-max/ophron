import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import About from "./components/About";
import Founder from "./components/Founder";
import Problems from "./components/Problems";
import Approach from "./components/Approach";
import Solutions from "./components/Solutions";
import Showcase from "./components/Showcase";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AllArticles from "./components/AllArticles";
import MainframeHero from "./components/MainframeHero";
import Gallery from "./components/Gallery";
import ServicesPage from "./components/ServicesPage";
import Ecosystem from "./components/Ecosystem";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";

import { initScrollEngine, initAutoReveals } from "./motion";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  // 1. Initialize Unified Smooth Scroll & GSAP Motion Engine (LAW 1 & LAW 6)
  useEffect(() => {
    const { destroy, scrollTo } = initScrollEngine();

    // Smooth Anchor & Hash Navigation Handler
    const handleHash = () => {
      const currentHash = window.location.hash;
      setHash(currentHash);

      const cleanHash = currentHash.split("?")[0];
      if (cleanHash && cleanHash !== "#" && cleanHash !== "#top" && cleanHash !== "#services") {
        try {
          const targetEl = document.querySelector(cleanHash);
          if (targetEl) {
            scrollTo(targetEl as HTMLElement, -70);
            return;
          }
        } catch {
          // Selector fallback
        }
      }

      window.scrollTo(0, 0);
      scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHash);

    // Initial Auto Reveal Scanner
    const cleanupReveals = initAutoReveals();

    return () => {
      window.removeEventListener("hashchange", handleHash);
      cleanupReveals();
      destroy();
    };
  }, []);

  // 2. Route/Hash Change Refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      initAutoReveals();
      (window as any).__lenis?.resize();
    }, 200);

    return () => clearTimeout(timer);
  }, [hash]);

  const isAboutPage = hash === "#about";
  const isServicesPage = hash === "#services" || hash.startsWith("#services?");
  const isWhyPage = hash === "#why";
  const isGalleryPage = hash === "#gallery" || hash === "#gallery-grid";
  const isBlogPage = hash === "#blog";
  const isContactPage = hash === "#contact";
  const isFounderPage = hash === "#founder";
  const isAllArticlesPage = hash === "#all-articles";
  const isMainframePage = hash === "#mainframe";

  if (isMainframePage) {
    return <MainframeHero />;
  }

  return (
    <div className="relative min-h-screen bg-paper text-ink grain overflow-x-hidden">
      {/* Accessible Keyboard Skip Link (WCAG 2.1 AA - BT-A11Y-001) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[#032147] focus:text-[#EDE5DA] focus:rounded-lg focus:shadow-2xl focus:font-montserrat focus:font-bold focus:outline-none focus:ring-2 focus:ring-[#B7A38B] focus:border focus:border-[#B7A38B]"
      >
        Skip to main content
      </a>

      <Nav />
      {isAboutPage ? (
        <main id="main-content" tabIndex={-1} className="pt-24 focus:outline-none">
          <About />
          <Problems />
          <Ecosystem />
          <Founder />
        </main>
      ) : isServicesPage ? (
        <main id="main-content" tabIndex={-1} className="pt-24 focus:outline-none">
          <ServicesPage />
        </main>
      ) : isWhyPage ? (
        <main id="main-content" tabIndex={-1} className="pt-24 focus:outline-none">
          <WhyUs />
          <Showcase />
          <Testimonials />
        </main>
      ) : isGalleryPage ? (
        <main id="main-content" tabIndex={-1} className="pt-24 focus:outline-none">
          <Gallery />
        </main>
      ) : isBlogPage ? (
        <main id="main-content" tabIndex={-1} className="pt-24 focus:outline-none">
          <Blog />
          <AllArticles />
        </main>
      ) : isContactPage ? (
        <main id="main-content" tabIndex={-1} className="pt-24 focus:outline-none">
          <Contact />
        </main>
      ) : isFounderPage ? (
        <main id="main-content" tabIndex={-1} className="pt-24 focus:outline-none">
          <Founder />
        </main>
      ) : isAllArticlesPage ? (
        <main id="main-content" tabIndex={-1} className="pt-24 focus:outline-none">
          <AllArticles />
        </main>
      ) : (
        /* OPHRON Sales Journey — per hi.md strategy brief */
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          {/* §001 HOOK — Who we are, what we solve, what to do next */}
          <Hero />
          {/* §002 SOCIAL PROOF — Trust signals, client logos */}
          <Logos />
          {/* §003 PROBLEM — Operational realities, friction recognition */}
          <Problems />
          {/* §004 THE STRATEGIC ADVANTAGE — OphronOS platform & pillars */}
          <Approach />
          {/* §005 SERVICES — Service cards with outcome framing */}
          <Solutions />
          {/* §006 DIFFERENTIATION — Why OPHRON, not another vendor */}
          <WhyUs />
          {/* §007 PROCESS + WHO WE SERVE — Journey to action */}
          <HowItWorks />
          {/* §008 PROOF — Live Dashboard, operational intelligence */}
          <Showcase />
          {/* §009 FREQUENTLY ASKED — Direct answers before final action */}
          <FAQ />
          {/* §010 FINAL CONVERSION — Qualify and start a conversation */}
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
}

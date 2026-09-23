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

import Lenis from "lenis";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  // Initialize Lenis Smooth Scroll and Viewport Reveal Observers
  useEffect(() => {
    // 1. Initialize Lenis for luxurious, silky smooth scrolling
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth exponential easeOut
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
      infinite: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 2. Smooth Anchor & Hash Navigation
    const handleHash = () => {
      const currentHash = window.location.hash;
      setHash(currentHash);
      if (currentHash && currentHash !== "#" && currentHash !== "#top") {
        const targetEl = document.querySelector(currentHash);
        if (targetEl) {
          lenis.scrollTo(targetEl as HTMLElement, { offset: -70, duration: 1.2 });
          return;
        }
      }
      lenis.scrollTo(0, { duration: 0.9 });
    };

    window.addEventListener("hashchange", handleHash);

    // 3. Viewport Intersection Observer for Reveal Animations
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    const observeElements = () => {
      const els = document.querySelectorAll<HTMLElement>(
        ".reveal, .reveal-stagger, .mask-up, .scroll-fade, .scroll-fade-stagger, .split-line-headline, .scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-down, .scroll-reveal-scale, .scroll-reveal-stagger, .curtain-reveal, .hr-expand"
      );
      els.forEach((el) => {
        if (!el.classList.contains("in")) {
          io.observe(el);
        }
      });
    };

    observeElements();

    // Re-observe on subtle DOM updates without heavy continuous polling
    const timer = setTimeout(observeElements, 500);

    return () => {
      window.removeEventListener("hashchange", handleHash);
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
      io.disconnect();
      lenis.destroy();
    };
  }, [hash]);

  const isAboutPage = hash === "#about";
  const isServicesPage = hash === "#services" || hash.startsWith("#services?");
  const isWhyPage = hash === "#why";
  const isGalleryPage = hash === "#gallery";
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
      <Nav />
      {isAboutPage ? (
        <main className="pt-24">
          <About />
          <Founder />
        </main>
      ) : isServicesPage ? (
        <main className="pt-24">
          <ServicesPage />
        </main>
      ) : isWhyPage ? (
        <main className="pt-24">
          <WhyUs />
          <Testimonials />
        </main>
      ) : isGalleryPage ? (
        <main className="pt-24">
          <Gallery />
        </main>
      ) : isBlogPage ? (
        <main className="pt-24">
          <AllArticles />
        </main>
      ) : isContactPage ? (
        <main className="pt-24">
          <Contact />
        </main>
      ) : isFounderPage ? (
        <main className="pt-24">
          <Founder />
        </main>
      ) : isAllArticlesPage ? (
        <main className="pt-24">
          <AllArticles />
        </main>
      ) : (
        <main>
          <Hero />
          <Logos />
          <About />
          <Problems />
          <Approach />
          <Solutions />
          <Gallery />
          <Showcase />
          <WhyUs />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
      )}
      <Footer />
    </div>
  );
}

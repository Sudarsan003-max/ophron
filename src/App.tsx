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
import FloatingActions from "./components/FloatingActions";

import { initScrollEngine, initAutoReveals } from "./motion";

// Helper to determine active route from URL path or legacy hash
export function resolveCurrentRoute(): string {
  if (typeof window === "undefined") return "/";
  
  const rawPath = window.location.pathname.toLowerCase().replace(/\/+$/, "") || "/";
  const rawHash = window.location.hash.toLowerCase().replace(/^#\/?/, "");

  // Check known route paths
  const knownRoutes = [
    "about",
    "services",
    "why",
    "gallery",
    "gallery-grid",
    "blog",
    "contact",
    "founder",
    "all-articles",
    "mainframe",
  ];

  // If path matches a known route
  for (const r of knownRoutes) {
    if (rawPath === `/${r}` || rawPath.startsWith(`/${r}/`)) {
      return `/${r}`;
    }
  }

  // If visited via legacy hash (e.g. #about, #services), support and upgrade
  for (const r of knownRoutes) {
    if (rawHash === r || rawHash.startsWith(`${r}?`) || rawHash.startsWith(`${r}/`)) {
      return `/${r}`;
    }
  }

  return "/";
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(resolveCurrentRoute());

  // 1. Initialize Unified Smooth Scroll & GSAP Motion Engine
  useEffect(() => {
    const { destroy, scrollTo } = initScrollEngine();

    const handleLocationChange = () => {
      const route = resolveCurrentRoute();
      setCurrentRoute(route);

      // Legacy hash auto-upgrade to clean SEO URL (e.g. /#about -> /about)
      const rawHash = window.location.hash.toLowerCase();
      if (
        rawHash === "#about" ||
        rawHash === "#services" ||
        rawHash === "#why" ||
        rawHash === "#gallery" ||
        rawHash === "#blog" ||
        rawHash === "#contact" ||
        rawHash === "#founder" ||
        rawHash === "#all-articles" ||
        rawHash === "#mainframe"
      ) {
        window.history.replaceState(null, "", `/${rawHash.slice(1)}`);
      }

      // Smooth in-page section jump if hash corresponds to an ID (e.g. #contact, #solutions)
      if (rawHash && !rawHash.includes("/")) {
        try {
          const targetEl = document.querySelector(rawHash);
          if (targetEl) {
            scrollTo(targetEl as HTMLElement, -70);
            return;
          }
        } catch {
          // Selector fallback
        }
      }

      // If page route changed, scroll to top
      window.scrollTo(0, 0);
      scrollTo(0, 0);
    };

    // Global link click interceptor for instant SPA transitions
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href) return;

      // Allow external links, protocols, and downloads
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        target.getAttribute("target") === "_blank" ||
        target.hasAttribute("download")
      ) {
        return;
      }

      // Handle in-page anchors
      if (href.startsWith("#")) {
        e.preventDefault();
        const cleanId = href.replace(/^#/, "");
        if (cleanId === "top" || cleanId === "") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          (window as any).__lenis?.scrollTo(0);
        } else {
          const el = document.getElementById(cleanId);
          if (el) {
            (window as any).__lenis?.scrollTo(el, { offset: -70 }) || el.scrollIntoView({ behavior: "smooth" });
          }
        }
        return;
      }

      // Handle clean path navigation
      if (href.startsWith("/")) {
        e.preventDefault();
        if (window.location.pathname !== href) {
          window.history.pushState(null, "", href);
          handleLocationChange();
        }
      }
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    document.addEventListener("click", handleGlobalClick);

    // Initial Auto Reveal Scanner
    const cleanupReveals = initAutoReveals();

    // Check if initial load had a legacy hash to upgrade
    handleLocationChange();

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
      document.removeEventListener("click", handleGlobalClick);
      cleanupReveals();
      destroy();
    };
  }, []);

  // SEO Dynamic Route Metadata Map
  const ROUTE_METADATA: Record<string, { title: string; description: string; canonical: string }> = {
    "/": {
      title: "OPHRON — Hospitality Operational Infrastructure Platform | Singapore",
      description: "OPHRON powers hospitality operations across Singapore & internationally — unifying People, Hygiene, Facilities, Technology, and Commercial Intelligence on a single strategic platform.",
      canonical: "https://ophronsystems.com/",
    },
    "/about": {
      title: "About OPHRON — Strategic Operating Platform | Singapore",
      description: "Learn how OPHRON unifies People, Hygiene, Facilities, Technology, and Commercial Intelligence for Singapore hotels and F&B establishments.",
      canonical: "https://ophronsystems.com/about",
    },
    "/services": {
      title: "Specialized Services & SOP Catalog — OPHRON Singapore",
      description: "Explore 14 specialized operational services including marble polishing, kitchen hygiene, rope access façade, and stewarding crews.",
      canonical: "https://ophronsystems.com/services",
    },
    "/why": {
      title: "Why Choose OPHRON — NEA Licensed & bizSAFE 3 Partner",
      description: "20+ years of operational discipline, supervisor-signed accountability, and 100% SLA compliance for Singapore hospitality venues.",
      canonical: "https://ophronsystems.com/why",
    },
    "/gallery": {
      title: "Project Gallery & Portfolio — OPHRON Singapore",
      description: "View verified visual field photography of marble grinding, commercial kitchen deep degreasing, hotel suites, and event turnovers.",
      canonical: "https://ophronsystems.com/gallery",
    },
    "/gallery-grid": {
      title: "Project Gallery & Portfolio — OPHRON Singapore",
      description: "View verified visual field photography of marble grinding, commercial kitchen deep degreasing, hotel suites, and event turnovers.",
      canonical: "https://ophronsystems.com/gallery",
    },
    "/blog": {
      title: "Operations Research & Industry Benchmarks — OPHRON",
      description: "Empirical research briefings and whitepapers on SFA Grade A kitchen audits, NEA disinfection biocides, and labor yield optimization.",
      canonical: "https://ophronsystems.com/blog",
    },
    "/all-articles": {
      title: "Editorial Research Whitepapers & Field Guides — OPHRON",
      description: "Comprehensive library of hospitality operations whitepapers, compliance blueprints, and vendor consolidation frameworks.",
      canonical: "https://ophronsystems.com/all-articles",
    },
    "/founder": {
      title: "Isaac Vivian, Founder — OPHRON Operational Infrastructure",
      description: "Executive profile and vision of Isaac Vivian, Founder of OPHRON Systems Singapore.",
      canonical: "https://ophronsystems.com/founder",
    },
    "/contact": {
      title: "Contact Singapore Operations — OPHRON Systems",
      description: "Initiate your operational review with OPHRON. Call +65 9295 1155 or submit your facility requirements for rapid 24h response.",
      canonical: "https://ophronsystems.com/contact",
    },
  };

  // Sync SEO Title, Meta Description, and Canonical URL on route change
  useEffect(() => {
    const meta = ROUTE_METADATA[currentRoute] || ROUTE_METADATA["/"];
    document.title = meta.title;

    // Update or create Meta Description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement("meta");
      descMeta.setAttribute("name", "description");
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute("content", meta.description);

    // Update or create Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", meta.canonical);

    // Update OpenGraph Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", meta.canonical);

    const timer = setTimeout(() => {
      initAutoReveals();
      (window as any).__lenis?.resize();
    }, 200);

    return () => clearTimeout(timer);
  }, [currentRoute]);

  const isAboutPage = currentRoute === "/about";
  const isServicesPage = currentRoute === "/services";
  const isWhyPage = currentRoute === "/why";
  const isGalleryPage = currentRoute === "/gallery" || currentRoute === "/gallery-grid";
  const isBlogPage = currentRoute === "/blog";
  const isContactPage = currentRoute === "/contact";
  const isFounderPage = currentRoute === "/founder";
  const isAllArticlesPage = currentRoute === "/all-articles";
  const isMainframePage = currentRoute === "/mainframe";

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
      <FloatingActions />
    </div>
  );
}

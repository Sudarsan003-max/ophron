import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { CONTACT, SERVICES } from "../data/site";
import { CompanyLogo } from "./CompanyLogo";
import { TextHoverEffect, FooterBackgroundGradient } from "./ui/hover-footer";

/* ------------------------------------------------------------------ */
/*  Subtle Singapore-Inspired Premium Background Layer                */
/* ------------------------------------------------------------------ */

function SingaporeBackgroundOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
      {/* Ambient Dark Pine Backdrop & Lighting Pools */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08130E] via-[#050B08] to-[#020604]" />
      
      {/* Soft Brass & Emerald Ambient Lighting */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-brass/10 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-950/50 blur-[110px]" />
      <div className="absolute top-1/2 left-0 h-80 w-80 rounded-full bg-brass/5 blur-[100px]" />

      {/* Architectural Precision Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(211, 176, 102, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(211, 176, 102, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  GKT International — Interactive Hover Footer                       */
/* ------------------------------------------------------------------ */

export default function Footer() {
  const footerLinks = [
    {
      title: "Core Capabilities",
      links: SERVICES.map((s) => ({
        label: s.name,
        href: s.route,
      })),
    },
    {
      title: "Company & Info",
      links: [
        { label: "About GKT", href: "/about" },
        { label: "Quality Standards", href: "/why-us" },
        { label: "Our Services", href: "/services" },
        { label: "Project Gallery", href: "/gallery" },
        { label: "Insights & News", href: "/blog" },
        { label: "Contact & Quote", href: "/contact", pulse: true },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Phone size={18} className="text-brass-300" />,
      text: CONTACT.hotlineDisplay,
      subtext: "Kelvin (Direct)",
      secondaryText: CONTACT.hotlineSecondary,
      secondarySubtext: "Admin & Operations",
      href: CONTACT.telHref,
      secondaryHref: CONTACT.telSecondaryHref,
    },
    {
      icon: <Mail size={18} className="text-brass-300" />,
      text: CONTACT.email,
      secondaryText: CONTACT.emailSecondary,
      href: `mailto:${CONTACT.email}`,
      secondaryHref: `mailto:${CONTACT.emailSecondary}`,
    },
    {
      icon: <MessageCircle size={18} className="text-emerald-400" />,
      text: "WhatsApp Instant Scoping",
      subtext: CONTACT.whatsappDisplay,
      href: CONTACT.waHref,
    },
    {
      icon: <MapPin size={18} className="text-brass-300" />,
      text: CONTACT.address,
      href: "/contact",
    },
  ];

  const accreditations = [
    { title: "NEA Licensed", desc: "Class A Operator" },
    { title: "bizSAFE Level 3", desc: "Workplace Safety" },
    { title: "WSQ Certified", desc: "Trained Specialists" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-brass/30 bg-[#08130E] text-paper pt-6 pb-6" aria-label="Site Footer">
      <SingaporeBackgroundOverlay />
      <FooterBackgroundGradient />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-4">
          
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <CompanyLogo size="md" />
            <p className="mt-2 font-display text-lg sm:text-xl font-medium leading-snug tracking-tight text-paper">
              Spotless is <span className="italic font-light text-brass-300">a standard,</span>
              <br />
              not an accident.
            </p>
            <p className="text-xs sm:text-sm text-sage leading-relaxed">
              Specialist commercial cleaning contractor providing scheduled janitorial care, kitchen exhaust degreasing, and facility sanitisation across Singapore.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 font-mono text-[10px] text-sage/80">
              <span className="h-1.5 w-1.5 rounded-full bg-brass" />
              <span>EST. 2012</span>
            </div>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-mono text-xs font-semibold tracking-[0.2em] text-brass-300 uppercase mb-5">
                {section.title}
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <Link
                      to={link.href}
                      className="text-xs sm:text-sm text-paper/80 hover:text-brass-300 transition-colors inline-flex items-center gap-1.5"
                    >
                      {link.label}
                    </Link>
                    {link.pulse && (
                      <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Accreditation section */}
          <div>
            <h4 className="font-mono text-xs font-semibold tracking-[0.2em] text-brass-300 uppercase mb-5">
              Direct Contact
            </h4>
            <ul className="space-y-3.5">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-xs sm:text-sm">
                  <span className="mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-brass-300 transition-colors text-paper font-medium font-mono text-xs sm:text-sm block"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-paper/90 font-body text-xs sm:text-sm block">
                        {item.text}
                      </span>
                    )}
                    {item.subtext && (
                      <span className="block text-[10px] text-sage/70 font-mono">
                        {item.subtext}
                      </span>
                    )}

                    {item.secondaryText && item.secondaryHref && (
                      <div className="mt-1 pt-1 border-t border-paper/5">
                        <a
                          href={item.secondaryHref}
                          className="hover:text-brass-300 transition-colors text-paper/80 font-medium font-mono text-xs sm:text-sm block"
                        >
                          {item.secondaryText}
                        </a>
                        {item.secondarySubtext && (
                          <span className="block text-[10px] text-sage/70 font-mono">
                            {item.secondarySubtext}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Accreditations Row */}
            <div className="mt-6 pt-4 border-t border-paper/10">
              <div className="flex flex-wrap gap-2">
                {accreditations.map((badge) => (
                  <span
                    key={badge.title}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded border border-brass/30 bg-pine-900/60 font-mono text-[9px] text-champagne"
                  >
                    <ShieldCheck className="h-3 w-3 text-brass-300" />
                    {badge.title}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>

        {/* Interactive Big Text Hover Effect - Glowing Neon Scale */}
        <div className="relative flex justify-center items-center h-[8rem] sm:h-[11rem] lg:h-[14rem] w-full max-w-4xl mx-auto my-1 pointer-events-auto overflow-hidden">
          <div className="absolute inset-x-1/4 top-1/2 -translate-y-1/2 h-20 w-1/2 rounded-full bg-brass/20 blur-[50px] pointer-events-none" />
          <TextHoverEffect text="GKT INT" className="w-full h-full relative z-10" />
        </div>

        <hr className="border-t border-paper/10 my-3" />

        {/* Footer bottom */}
        <div className="relative z-20 flex flex-col md:flex-row justify-between items-center text-xs text-sage font-mono space-y-4 md:space-y-0">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} GKT International Pte. Ltd. All rights reserved. Registered in Singapore.
          </p>

          <div className="flex space-x-4">
            <Link to="/about" className="hover:text-brass-300 transition-colors">
              About
            </Link>
            <span>·</span>
            <Link to="/why-us" className="hover:text-brass-300 transition-colors">
              Standards
            </Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-brass-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

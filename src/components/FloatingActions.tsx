import { useState } from "react";
import { Phone } from "lucide-react";

export default function FloatingActions() {
  const [hoveredBtn, setHoveredBtn] = useState<"wa" | "phone" | null>(null);

  const WHATSAPP_URL =
    "https://wa.me/6592951155?text=Hello%20OPHRON%2C%20I%20would%20like%20to%20inquire%20about%20your%20hospitality%20operations%20and%20services.";
  const PHONE_URL = "tel:+6592951155";

  return (
    <aside
      aria-label="Quick Contact Options"
      className="fixed right-4 sm:right-6 bottom-5 sm:bottom-7 z-50 flex flex-col items-center gap-3 select-none pointer-events-auto"
    >
      {/* ── 1. WhatsApp Button (Gold/Champagne Solid with Dark Icon) ── */}
      <div className="relative flex items-center justify-center">
        {/* Accessible Hover Tooltip (Desktop) */}
        <span
          className={`pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#032147] border border-[#B7A38B]/40 px-3 py-1.5 text-[11px] font-montserrat font-bold text-[#EDE5DA] shadow-xl transition-all duration-200 hidden md:block ${
            hoveredBtn === "wa"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2"
          }`}
        >
          Chat on WhatsApp
        </span>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with OPHRON on WhatsApp (+65 9295 1155)"
          onMouseEnter={() => setHoveredBtn("wa")}
          onMouseLeave={() => setHoveredBtn(null)}
          className="group relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-gradient-to-br from-[#F5EFEB] via-[#CBB59B] to-[#B7A38B] text-[#032147] shadow-[0_8px_25px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-[0_12px_30px_rgba(183,163,139,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B7A38B]"
        >
          {/* WhatsApp Icon */}
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 sm:h-6.5 sm:w-6.5 fill-current transition-transform duration-300 group-hover:scale-105"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.04 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.64 13.5 14.47 13.46 14.31 13.71C14.15 13.96 13.68 14.51 13.54 14.67C13.4 14.84 13.25 14.86 13 14.73C12.75 14.61 11.71 14.27 10.47 13.16C9.51 12.3 8.86 11.24 8.72 10.99C8.58 10.74 8.7 10.61 8.83 10.48C8.94 10.37 9.08 10.19 9.21 10.05C9.33 9.9 9.38 9.79 9.46 9.62C9.55 9.46 9.5 9.31 9.44 9.19C9.38 9.06 8.89 7.86 8.68 7.37C8.48 6.89 8.28 6.95 8.13 6.94C7.99 6.93 7.82 6.93 7.65 6.93C7.49 6.93 7.22 6.99 6.99 7.24C6.76 7.49 6.12 8.09 6.12 9.31C6.12 10.53 7.01 11.71 7.13 11.87C7.26 12.04 8.88 14.53 11.35 15.6C11.94 15.85 12.39 16 12.75 16.12C13.34 16.31 13.88 16.28 14.31 16.22C14.79 16.15 15.78 15.62 15.99 15.03C16.19 14.45 16.19 13.96 16.13 13.85C16.07 13.74 15.93 13.68 15.68 13.56L16.56 14.39Z" />
          </svg>
        </a>
      </div>

      {/* ── 2. Phone Call Button (Dark Navy Solid with Gold Border & Icon) ── */}
      <div className="relative flex items-center justify-center">
        {/* Accessible Hover Tooltip (Desktop) */}
        <span
          className={`pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#032147] border border-[#B7A38B]/40 px-3 py-1.5 text-[11px] font-montserrat font-bold text-[#EDE5DA] shadow-xl transition-all duration-200 hidden md:block ${
            hoveredBtn === "phone"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2"
          }`}
        >
          Call +65 9295 1155
        </span>

        <a
          href={PHONE_URL}
          aria-label="Call OPHRON Hotline at +65 9295 1155"
          onMouseEnter={() => setHoveredBtn("phone")}
          onMouseLeave={() => setHoveredBtn(null)}
          className="group relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#032147] border-2 border-[#B7A38B] text-[#B7A38B] shadow-[0_8px_25px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#021A36] hover:border-[#F5EFEB] hover:text-[#F5EFEB] hover:shadow-[0_12px_30px_rgba(3,33,71,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B7A38B]"
        >
          <Phone className="h-5 w-5 sm:h-5.5 sm:w-5.5 transition-transform duration-300 group-hover:rotate-12" />
        </a>
      </div>
    </aside>
  );
}

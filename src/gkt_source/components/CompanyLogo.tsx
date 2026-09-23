import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

interface CompanyLogoProps {
  className?: string;
  imgClassName?: string;
  size?: "sm" | "md" | "lg" | "xl" | "custom";
  showText?: boolean;
  textClassName?: string;
  linkToHome?: boolean;
}

export function CompanyLogo({
  className = "",
  imgClassName = "",
  size = "md",
  showText = true,
  textClassName = "",
  linkToHome = true,
}: CompanyLogoProps) {
  const sizeMap = {
    sm: "h-7 w-auto",
    md: "h-9 w-auto sm:h-10",
    lg: "h-12 w-auto sm:h-14",
    xl: "h-16 w-auto sm:h-20",
    custom: "",
  };

  const content = (
    <div className={cn("group flex items-center gap-3 shrink-0", className)}>
      <div className="relative flex items-center justify-center rounded-full bg-[#032147] p-2 border border-[#B7A38B]/40 transition-all duration-300 group-hover:border-[#B7A38B] group-hover:shadow-[0_0_15px_rgba(183, 163, 139,0.3)]">
        <img
          src="/images/brand/ophron-gold-emblem-transparent.png"
          alt="OPHRON Logo"
          className={cn("object-contain filter drop-shadow-sm", sizeMap[size], imgClassName)}
        />
      </div>

      {showText && (
        <div className={cn("leading-none", textClassName)}>
          <span className="block font-display text-lg sm:text-xl font-bold tracking-wider text-[#EDE5DA]">
            OPHRON <span className="italic font-light text-[#B7A38B]">Systems</span>
          </span>
          <span className="mt-1 block font-mono text-[8px] sm:text-[9px] tracking-[0.25em] text-[#B7A38B]/90 uppercase whitespace-nowrap">
            Operational Infrastructure
          </span>
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <Link to="/" aria-label="OPHRON Systems Home">
        {content}
      </Link>
    );
  }

  return content;
}

export default CompanyLogo;

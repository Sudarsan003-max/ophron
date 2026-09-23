import React from "react";

export type LogoVariant = "gold" | "navy" | "white";
export type LogoFormat = "emblem" | "full" | "horizontal";

interface OphronLogoProps {
  variant?: LogoVariant;
  format?: LogoFormat;
  size?: "sm" | "md" | "lg" | "xl" | number;
  className?: string;
  showSubtitle?: boolean;
  subtitle?: string;
}

export const OphronLogo: React.FC<OphronLogoProps> = ({
  variant = "gold",
  format = "emblem",
  size = "md",
  className = "",
  showSubtitle = false,
  subtitle = "Hospitality Operational Infrastructure",
}) => {
  // Determine asset path
  const emblemSrc =
    variant === "navy"
      ? "/images/brand/ophron-navy-emblem-transparent.png"
      : variant === "white"
      ? "/images/brand/ophron-white-emblem-transparent.png"
      : "/images/brand/ophron-gold-emblem-transparent.png";

  const fullSrc =
    variant === "navy"
      ? "/images/brand/ophron-navy-transparent.png"
      : variant === "white"
      ? "/images/brand/ophron-white-transparent.png"
      : "/images/brand/ophron-gold-transparent.png";

  // Height mappings
  const heightClass =
    typeof size === "number"
      ? ""
      : size === "sm"
      ? "h-6"
      : size === "md"
      ? "h-9"
      : size === "lg"
      ? "h-14"
      : "h-20";

  const customStyle = typeof size === "number" ? { height: `${size}px` } : {};

  if (format === "full") {
    return (
      <div className={`inline-flex flex-col items-center select-none ${className}`}>
        <img
          src={fullSrc}
          alt="OPHRON"
          style={customStyle}
          className={`${heightClass} w-auto object-contain drop-shadow-sm`}
        />
        {showSubtitle && (
          <span
            className={`text-[9px] font-mono tracking-[0.2em] uppercase mt-1.5 font-semibold ${
              variant === "navy" ? "text-[#032147]/80" : "text-[#B7A38B]"
            }`}
          >
            {subtitle}
          </span>
        )}
      </div>
    );
  }

  if (format === "horizontal") {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        <img
          src={emblemSrc}
          alt="OPHRON Emblem"
          style={customStyle}
          className={`${heightClass} w-auto object-contain`}
        />
        <div className="leading-tight flex flex-col justify-center">
          <span
            className={`text-[17px] font-display font-bold tracking-wider ${
              variant === "navy" ? "text-[#032147]" : variant === "white" ? "text-white" : "text-[#EDE5DA]"
            }`}
          >
            OPHRON
          </span>
          {showSubtitle && (
            <span
              className={`text-[8px] font-mono tracking-[0.2em] uppercase font-bold ${
                variant === "navy" ? "text-[#032147]/75" : "text-[#B7A38B]"
              }`}
            >
              {subtitle}
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default: emblem only
  return (
    <img
      src={emblemSrc}
      alt="OPHRON Emblem"
      style={customStyle}
      className={`select-none ${heightClass} w-auto object-contain ${className}`}
    />
  );
};

export default OphronLogo;

import React from "react";
import { Link } from "react-router-dom";

/**
 * Hand-written signature style brand mark: "Event By Salman Mughal".
 * `light` renders it for dark backgrounds (footer / hero).
 */
function SignatureLogo({ light = false, className = "" }) {
  return (
    <Link
      to="/"
      aria-label="Event By Salman Mughal – Home"
      className={`signature-logo group inline-flex flex-col items-center leading-none select-none ${className}`}
    >
      <span className="text-[9px] sm:text-[11px] tracking-[0.4em] sm:tracking-[0.45em] uppercase font-semibold text-[#9a6b1f] mb-0.5">
        Event By
      </span>
      <span
        className={`font-signature text-[26px] sm:text-[38px] whitespace-nowrap signature-ink ${
          light ? "signature-ink--light" : ""
        }`}
      >
        Salman Mughal
      </span>
      <svg
        viewBox="0 0 220 12"
        className="w-[130px] sm:w-[190px] -mt-1 signature-swash"
        aria-hidden="true"
      >
        <path
          d="M2 8 C 60 2, 120 14, 170 5 S 214 4, 218 6"
          fill="none"
          stroke="url(#sigGold)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="sigGold" x1="0" x2="1">
            <stop offset="0" stopColor="#b8862b" stopOpacity="0" />
            <stop offset="0.3" stopColor="#d9a845" />
            <stop offset="1" stopColor="#8a5f17" />
          </linearGradient>
        </defs>
      </svg>
    </Link>
  );
}

export default SignatureLogo;

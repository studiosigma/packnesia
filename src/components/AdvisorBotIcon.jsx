import React from 'react';

export default function AdvisorBotIcon({ className = 'w-16 h-16' }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Signal / Sparkle Rays around the head (Orange) */}
      <path d="M14 26L8 23" stroke="#EE5D26" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M12 36L6 37" stroke="#EE5D26" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M66 26L72 23" stroke="#EE5D26" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M68 36L74 37" stroke="#EE5D26" strokeWidth="2.5" strokeLinecap="round" />

      {/* Top Antenna */}
      <path d="M40 18V9" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
      <circle cx="40" cy="8" r="4.5" fill="#EE5D26" />

      {/* Ear / Headphone Nodes (Orange) */}
      <rect x="15" y="30" width="6" height="16" rx="3" fill="#EE5D26" />
      <rect x="59" y="30" width="6" height="16" rx="3" fill="#EE5D26" />

      {/* Robot Head Body (Soft White / Light Gray rounded) */}
      <rect x="18" y="18" width="44" height="40" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />

      {/* Screen Face (Dark Navy) */}
      <rect x="23" y="24" width="34" height="26" rx="9" fill="#13233C" />

      {/* Glowing Eyes (Cyan pill shapes) */}
      <ellipse cx="32" cy="35" rx="3.5" ry="4.5" fill="#38BDF8" />
      <ellipse cx="48" cy="35" rx="3.5" ry="4.5" fill="#38BDF8" />

      {/* Eye highlights */}
      <circle cx="33.5" cy="33.5" r="1.2" fill="#FFFFFF" />
      <circle cx="49.5" cy="33.5" r="1.2" fill="#FFFFFF" />

      {/* Cute smile line (Cyan / subtle) */}
      <path d="M37 42C38.5 43.5 41.5 43.5 43 42" stroke="#38BDF8" strokeWidth="1.8" strokeLinecap="round" />

      {/* Little Neck / Collar Base */}
      <path d="M32 58H48L45 64H35L32 58Z" fill="#CBD5E1" />
    </svg>
  );
}


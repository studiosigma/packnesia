import React from 'react';

export default function Logo({ variant = 'dark', className = '', showSubtitle = true }) {
  const isLight = variant === 'light';
  const logoSrc = isLight ? '/images/packnesia-logo-light.webp' : '/images/packnesia-logo-dark.webp';

  return (
    <div className={`flex flex-col cursor-pointer select-none group ${className}`}>
      <div className="flex items-center">
        <img
          src={logoSrc}
          alt="Packnesia"
          className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
        />
      </div>
      {showSubtitle && (
        <span
          className={`text-[8px] sm:text-[9px] font-semibold tracking-wider uppercase pl-[33px] sm:pl-[38px] -mt-1.5 transition-colors ${
            isLight ? 'text-gray-300 group-hover:text-white' : 'text-[#64748B] group-hover:text-brand-orange'
          }`}
        >
          Custom Packaging Solutions
        </span>
      )}
    </div>
  );
}

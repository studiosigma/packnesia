import React from 'react';

export default function Logo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light';
  const logoSrc = isLight ? '/images/packnesia-logo-light.webp' : '/images/packnesia-logo-dark.webp';

  return (
    <div className={`inline-flex items-center cursor-pointer select-none group ${className}`}>
      <img
        src={logoSrc}
        alt="Packnesia"
        width="144"
        height="36"
        decoding="async"
        className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
      />
    </div>
  );
}

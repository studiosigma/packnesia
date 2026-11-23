import React from 'react';

export default function Logo({ variant = 'dark', className = '', size = 'md' }) {
  const isLight = variant === 'light';
  const isIcon = variant === 'icon';

  let logoSrc = '/images/packnesia-logo-dark.webp';
  if (isLight) logoSrc = '/images/packnesia-logo-light.webp';
  if (isIcon) logoSrc = '/images/packnesia-icon.webp';

  return (
    <div className={`inline-flex items-center cursor-pointer select-none group ${className}`}>
      <img
        src={logoSrc}
        alt="Packnesia"
        width={isIcon ? '40' : '160'}
        height={isIcon ? '40' : '40'}
        decoding="async"
        className={`${isIcon ? 'h-8 sm:h-9 w-auto object-contain' : 'h-8 sm:h-9 w-auto object-contain'} transition-transform duration-200 group-hover:scale-102`}
      />
    </div>
  );
}

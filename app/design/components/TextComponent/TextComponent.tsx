import React from 'react';

interface CoolTextProps {
  variant?: 'gradient' | 'glow' | 'shimmer' | 'neon';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  text: string;
}

const TextComponent: React.FC<CoolTextProps> = ({ 
  variant = 'gradient',
  size = 'md',
  text
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-4xl',
    '2xl': 'text-6xl'
  };

  const variantClasses = {
    gradient: `
      bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500
      bg-clip-text text-transparent
      hover:from-purple-700 hover:via-blue-700 hover:to-cyan-600
    `,
    glow: `
      text-white
      drop-shadow-[0_0_10px_rgba(147,51,234,0.5)]
      hover:drop-shadow-[0_0_20px_rgba(147,51,234,0.8)]
      hover:text-purple-100
    `,
    shimmer: `
      bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500
      bg-clip-text text-transparent
      relative
      before:absolute before:inset-0
      before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
      before:transform before:-skew-x-12 before:-translate-x-full
      hover:before:translate-x-full
      before:transition-transform before:duration-1000 before:ease-out
      before:bg-clip-text before:text-transparent
    `,
    neon: `
      text-cyan-400
      drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]
      hover:text-cyan-300
      hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]
      hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]
    `
  };

  return (
    <span
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        font-bold tracking-wide
        transition-all duration-300 ease-out
        cursor-default select-none
        inline-block
        transform hover:scale-105
        relative overflow-hidden
      `.trim()}
    >
      {text}
    </span>
  );
};

export default TextComponent;
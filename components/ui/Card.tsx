import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({ children, className, hover = true, padding = 'md' }: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={clsx(
        'group relative rounded-2xl bg-white border border-gray-200/80 shadow-sm transition-all duration-300 ease-out',
        hover && 'hover:-translate-y-1 hover:shadow-elev-3 hover:border-primary-blue/40',
        paddingClasses[padding],
        className
      )}
    >
      {hover && (
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-blue to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
      {children}
    </div>
  );
}

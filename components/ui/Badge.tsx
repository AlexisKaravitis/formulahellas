import { ReactNode } from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: ReactNode;
  variant?: 'soft' | 'solid' | 'outline';
  className?: string;
}

const variants = {
  soft: 'bg-primary-blue/10 text-primary-blue-dark ring-1 ring-inset ring-primary-blue/20',
  solid: 'bg-primary-blue text-white shadow-sm',
  outline: 'text-white/90 ring-1 ring-inset ring-white/25 bg-white/5 backdrop-blur-sm',
};

export default function Badge({ children, variant = 'soft', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

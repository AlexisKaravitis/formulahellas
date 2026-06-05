import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'racing' | 'outline' | 'ghost' | 'flame';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading = false, disabled, className, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-[transform,box-shadow,background-color,color] duration-200 ease-out focus-ring disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-primary-blue text-white ring-1 ring-inset ring-white/15 shadow-glow-blue hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-8px_rgba(45,77,245,0.65)] active:translate-y-0 disabled:bg-gray-200 disabled:text-gray-500 disabled:shadow-none disabled:ring-0',
      secondary:
        'bg-white text-primary-blue-dark ring-1 ring-inset ring-primary-blue/30 hover:bg-primary-blue hover:text-white active:translate-y-0',
      racing:
        'bg-gradient-racing text-white shadow-md hover:shadow-glow-blue hover:-translate-y-0.5 active:translate-y-0',
      outline:
        'bg-transparent text-primary-blue-dark ring-1 ring-inset ring-primary-blue/40 hover:bg-primary-blue hover:text-white',
      ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
      flame: 'bg-flame text-ink shadow-md hover:-translate-y-0.5 active:translate-y-0',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={clsx(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

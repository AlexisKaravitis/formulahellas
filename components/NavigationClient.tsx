'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import clsx from 'clsx';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/events/2026', label: 'Competition' },
  { href: '/about', label: 'About' },
  { href: '/registration', label: 'Registration' },
  { href: '/rules', label: 'Rules & Documents' },
  { href: '/join-us', label: 'Join Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/team-portal', label: 'Team Portal' },
];

export default function NavigationClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(scrollTop > 20);
      setProgress(docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname?.startsWith(href));

  return (
    <nav
      className={clsx(
        'sticky top-0 z-50 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300',
        isScrolled
          ? 'bg-white/85 shadow-[0_6px_24px_-12px_rgba(10,14,26,0.25)] border-b border-gray-200/70'
          : 'bg-white/60 border-b border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={clsx('flex justify-between items-center transition-all duration-300', isScrolled ? 'h-14' : 'h-16')}>
          <Link href="/" className="flex items-center focus-ring rounded-md" aria-label="Formula Hellas — home">
            <Logo height={34} />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={clsx(
                    'relative px-3.5 py-2 text-sm font-medium rounded-md transition-colors focus-ring',
                    active
                      ? 'text-primary-blue-dark bg-primary-blue/10 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary-blue'
                      : 'text-gray-700 hover:text-primary-blue-dark hover:bg-gray-100/70'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-primary-blue-dark hover:bg-gray-100 transition-all focus-ring"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu (animated) */}
        <div
          className={clsx(
            'lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out',
            isOpen ? 'max-h-[34rem] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex flex-col gap-1 py-4 border-t border-gray-200">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={clsx(
                    'relative px-4 py-3 text-base font-medium rounded-md transition-colors focus-ring',
                    active
                      ? 'text-primary-blue-dark bg-primary-blue/10 before:absolute before:left-0 before:inset-y-2 before:w-1 before:rounded-full before:bg-primary-blue'
                      : 'text-gray-700 hover:text-primary-blue-dark hover:bg-gray-50'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll progress hairline */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-blue via-primary-blue-light to-flame transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden
      />
    </nav>
  );
}

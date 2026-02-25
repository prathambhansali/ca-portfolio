'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="bg-card border-border h-[46px] w-[46px] rounded-xl border p-3" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="bg-card border-border/60 hover:border-primary group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border shadow-xl transition-all duration-500 hover:scale-110 active:scale-90"
      aria-label="Toggle theme">
      <div className="bg-primary absolute inset-0 -z-10 scale-0 rounded-full opacity-0 transition-all group-hover:scale-100 group-hover:opacity-10 md:group-hover:opacity-5" />
      {theme === 'dark' ? (
        <Sun className="text-foreground h-5 w-5 transition-transform group-hover:rotate-90 md:h-6 md:w-6" />
      ) : (
        <Moon className="text-foreground h-5 w-5 transition-transform group-hover:-rotate-12 md:h-6 md:w-6" />
      )}
    </button>
  );
}

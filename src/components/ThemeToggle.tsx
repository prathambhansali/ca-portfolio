'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="bg-card border-border h-[46px] w-[46px] rounded-xl border p-3" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="bg-card border-border hover:border-primary hover:bg-muted rounded-xl border p-3 shadow-sm transition-all duration-300"
      aria-label="Toggle theme">
      {theme === 'dark' ? (
        <Sun className="text-primary h-4 w-4" />
      ) : (
        <Moon className="text-primary h-4 w-4" />
      )}
    </button>
  );
}

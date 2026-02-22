"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-xl bg-white border border-border hover:border-primary hover:bg-muted transition-all duration-300 shadow-sm"
      aria-label="Toggle theme">
      {theme === "dark" ?
        <Sun className="w-4 h-4 text-primary" />
      : <Moon className="w-4 h-4 text-primary" />}
    </button>
  );
}

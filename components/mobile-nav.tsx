import React from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

interface MobileNavProps {
  textSecondaryClass: string;
  activeSection: string;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  cardBgClass: string;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
}

export default function MobileNav({
  setDarkMode,
  darkMode,
  cardBgClass,
  setIsMenuOpen,
  isMenuOpen,
  textSecondaryClass,
}: MobileNavProps) {
  return (
    <div className="lg:hidden flex items-center gap-2">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`p-2 rounded-lg ${cardBgClass} border transition-all`}
      >
        {darkMode ? (
          <Sun size={20} className="text-yellow-400" />
        ) : (
          <Moon size={20} className="text-purple-600" />
        )}
      </button>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`${textSecondaryClass} p-2`}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
}

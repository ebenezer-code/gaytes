import React from "react";
import { Sun, Moon } from "lucide-react";
interface DesktopNavProps {
  sections: string[];
  scrollToSection: (sectionId: string) => void;
  textClass: string;
  textSecondaryClass: string;
  activeSection: string;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  cardBgClass: string;
}

export default function DesktopNav({
  sections,
  scrollToSection,
  textClass,
  textSecondaryClass,
  activeSection,
  setDarkMode,
  darkMode,
  cardBgClass,
}: DesktopNavProps) {
  return (
    <div className="hidden lg:flex items-center gap-2">
      <div className="flex items-baseline space-x-1">
        {sections
          .filter((s) => s !== "home")
          .map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`px-3 py-2 cursor-pointer rounded-md text-sm font-medium transition-all duration-300 ${
                activeSection === section
                  ? "text-blue-600 bg-blue-600/10"
                  : `${textSecondaryClass} hover:${textClass}`
              }`}
            >
              {section === "work"
                ? "Our Work"
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`p-2 rounded-lg ${cardBgClass} border transition-all hover:scale-110 ml-2`}
      >
        {darkMode ? (
          <Sun size={20} className="text-yellow-400 cursor-pointer" />
        ) : (
          <Moon size={20} className="text-purple-600 cursor-pointer" />
        )}
      </button>
    </div>
  );
}

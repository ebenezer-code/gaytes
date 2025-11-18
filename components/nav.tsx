import DesktopNav from "@/components/desktop-nav";
import MobileNav from "@/components/mobile-nav";
import Image from "next/image";
interface NavProps {
  textSecondaryClass: string;
  textClass: string;
  navBgClass: string;
  sections: string[];
  activeSection: string;
  cardBgClass: string;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  isMenuOpen: boolean;
  scrollToSection: (sectionId: string) => void;
  scrollY: number;
}
export default function Nav({
  navBgClass,
  scrollToSection,
  activeSection,
  sections,
  cardBgClass,
  scrollY,
  textClass,
  textSecondaryClass,
  darkMode,
  setDarkMode,
  isMenuOpen,
  setIsMenuOpen,
}: NavProps) {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? `${navBgClass} backdrop-blur-md shadow-lg`
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center cursor-pointer gap-2"
            onClick={() => scrollToSection("home")}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent">
              Gaytes
            </span>
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Gaytes Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          {/* Desktop Navigation */}
          <DesktopNav
            activeSection={activeSection}
            sections={sections}
            scrollToSection={scrollToSection}
            cardBgClass={cardBgClass}
            textClass={textClass}
            textSecondaryClass={textSecondaryClass}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          {/* Mobile menu button */}
          <MobileNav
            activeSection={activeSection}
            setDarkMode={setDarkMode}
            darkMode={darkMode}
            cardBgClass={cardBgClass}
            setIsMenuOpen={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            textSecondaryClass={textSecondaryClass}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className={`lg:hidden ${navBgClass} backdrop-blur-md max-h-96 overflow-y-auto`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {sections
              .filter((s) => s !== "home")
              .map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${textSecondaryClass} hover:${textClass}`}
                >
                  {section === "work"
                    ? "Our Work"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
}

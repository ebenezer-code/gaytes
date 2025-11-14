interface FooterProps {
  textSecondaryClass: string;
  darkMode: boolean;
  cardBgClass: string;
  scrollToSection: (sectionId: string) => void;
  textClass: string;
}

export default function Footer({
  darkMode,
  textClass,
  textSecondaryClass,
  scrollToSection,
}: FooterProps) {
  return (
    <footer
      className={`${
        darkMode ? "bg-slate-800/50" : "bg-gray-200"
      } backdrop-blur-sm border-t ${
        darkMode ? "border-white/10" : "border-gray-300"
      } py-8`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4
              className={`text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent`}
            >
              Gaytes
            </h4>
            <p className={`${textSecondaryClass} text-sm`}>
              Transforming ideas into reality with cutting-edge technology.
            </p>
          </div>
          <div>
            <h5 className={`${textClass} font-semibold mb-3`}>Company</h5>
            <div className="space-y-2">
              {["about", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block cursor-pointer ${textSecondaryClass} hover:text-blue-600 text-sm transition-colors`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h5 className={`${textClass} font-semibold mb-3`}>Services</h5>
            <div className="space-y-2">
              {["solutions", "products", "support"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block cursor-pointer ${textSecondaryClass} hover:text-blue-600 text-sm transition-colors`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h5 className={`${textClass} font-semibold mb-3`}>Connect</h5>
            <p className={`${textSecondaryClass} text-sm mb-2`}>
              franke.gaytes@gmail.com
            </p>
            <p className={`${textSecondaryClass} text-sm`}>+2347055535872</p>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/10">
          <p className={textSecondaryClass}>
            © 2025 GaytesSolution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

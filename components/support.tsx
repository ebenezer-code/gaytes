"use client";
interface SupportProps {
  textSecondaryClass: string;
  textClass: string;
  cardBgClass: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Support({
  textSecondaryClass,
  textClass,
  cardBgClass,
  scrollToSection,
}: SupportProps) {
  return (
    <section
      id="support"
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${textClass} mb-4`}>
            Support
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-white mx-auto mb-4"></div>
          <p className={`text-xl ${textSecondaryClass}`}>
            We're here to help you succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: "24/7 Support",
              desc: "Round-the-clock assistance from our dedicated support team",
              badge: "Always Available",
            },
            {
              title: "Documentation",
              desc: "Comprehensive guides and tutorials for all our products",
              badge: "Self-Service",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`${cardBgClass} cursor-pointer rounded-2xl p-8 border transition-all duration-500 hover:scale-105 text-center`}
            >
              <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-300 to-blue-600 rounded-full text-white text-sm font-semibold mb-4">
                {item.badge}
              </div>
              <h3 className={`text-2xl font-bold ${textClass} mb-4`}>
                {item.title}
              </h3>
              <p className={`${textSecondaryClass} leading-relaxed`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className={`${cardBgClass} rounded-2xl p-8 md:p-12 border`}>
          <h3 className={`text-3xl font-bold ${textClass} mb-6`}>Need Help?</h3>
          <p className={`${textSecondaryClass} text-lg leading-relaxed mb-6`}>
            Our support team is available 24/7 to assist you with any questions
            or issues. Contact us via email, phone, or live chat.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r cursor-pointer from-blue-400 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

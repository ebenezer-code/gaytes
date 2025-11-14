import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
interface ContactProps {
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  textClass: string;
  textSecondaryClass: string;
  formData: {
    name: string;
    email: string;
    message: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      message: string;
    }>
  >;
  darkMode: boolean;
  cardBgClass: string;
}

export default function Contact({
  textClass,
  textSecondaryClass,
  cardBgClass,
  formData,
  setFormData,
  darkMode,
  handleSubmit,
}: ContactProps) {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${textClass} mb-4`}>
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-white mx-auto mb-4"></div>
          <p className={`text-xl ${textSecondaryClass}`}>
            Let's create something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`${cardBgClass} backdrop-blur-sm rounded-2xl p-8 border`}
          >
            <div className="space-y-6">
              <div>
                <label className={`block ${textClass} font-medium mb-2`}>
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-gray-50 border-gray-300 text-gray-900"
                  } border placeholder-gray-400 focus:outline-none focus:ring-[0.5px] focus:ring-blue-600 transition-all`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className={`block ${textClass} font-medium mb-2`}>
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-gray-50 border-gray-300 text-gray-900"
                  } border placeholder-gray-400 focus:outline-none focus:ring-[0.5px] focus:ring-blue-600 transition-all`}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className={`block ${textClass} font-medium mb-2`}>
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? "bg-white/10 border-white/20 text-white"
                      : "bg-gray-50 border-gray-300 text-gray-900"
                  } border placeholder-gray-400 focus:outline-none focus:ring-[0.5px] focus:ring-blue-600 transition-all`}
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full cursor-pointer bg-gradient-to-r from-blue-400 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {[
              { icon: Mail, title: "Email", info: "franke.gaytes@gmail.com" },
              {
                icon: Phone,
                title: "Phone",
                info: "+234 705 553 5872",
                href: "tel:+2347055535872",
              },
              {
                icon: MapPin,
                title: "Location",
                info: "5 Adegbeyeni St, Allen 101233, Ikeja, Lagos, Nigeria",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex cursor-pointer items-start gap-4 ${cardBgClass} backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-white" size={24} />
                </div>
                <div>
                  <h4 className={`${textClass} font-semibold text-lg mb-1`}>
                    {item.title}
                  </h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`${textSecondaryClass} hover:underline`}
                    >
                      {item.info}
                    </a>
                  ) : (
                    <p className={textSecondaryClass}>{item.info}</p>
                  )}
                </div>
              </div>
            ))}

            <div
              className={`${cardBgClass} backdrop-blur-sm rounded-xl p-8 border`}
            >
              <h4 className={`${textClass} font-bold text-xl mb-4`}>
                Office Hours
              </h4>
              <p className={`${textSecondaryClass} leading-relaxed`}>
                Monday - Friday: 9:00 AM - 5:00 PM
                <br />
                Saturday: Closed
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

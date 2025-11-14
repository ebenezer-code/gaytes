"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import WhatWeDo from "@/components/solutions";
import Products from "@/components/products";
import Support from "@/components/support";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import img1 from "@/public/one.jpeg";
import img2 from "@/public/one1.jpeg";
import img3 from "@/public/one2.jpeg";
import img4 from "@/public/two.jpeg";
import img5 from "@/public/ten.jpeg";

export default function CompanySPA() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [img1, img2, img3, img4, img5];

  const sections = [
    "home",
    "about",
    "solutions",
    "products",
    "support",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name}`,
          redirect: "",
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  const bgClass = darkMode ? "bg-slate-900" : "bg-gray-50";
  const textClass = darkMode ? "text-white" : "text-gray-900";
  const textSecondaryClass = darkMode ? "text-gray-300" : "text-gray-600";
  const cardBgClass = darkMode
    ? "bg-white/5 border-white/10"
    : "bg-white border-gray-200";
  const navBgClass = darkMode ? "bg-slate-900/95" : "bg-white/95";

  return (
    <div className={`min-h-screen ${bgClass} transition-colors duration-300`}>
      {/* Navigation */}
      <Nav
        navBgClass={navBgClass}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
        sections={sections}
        cardBgClass={cardBgClass}
        textClass={textClass}
        textSecondaryClass={textSecondaryClass}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollY={scrollY}
      />
      {/* Home Section with Image Slider */}
      <Hero
        textSecondaryClass={textSecondaryClass}
        textClass={textClass}
        slides={slides}
        setCurrentSlide={setCurrentSlide}
        currentSlide={currentSlide}
        cardBgClass={cardBgClass}
        setIsMenuOpen={setIsMenuOpen}
        darkMode={darkMode}
        scrollToSection={scrollToSection}
      />
      {/* About Section */}
      <About
        textSecondaryClass={textSecondaryClass}
        textClass={textClass}
        cardBgClass={cardBgClass}
      />
      {/* Solutions Section */}
      <WhatWeDo
        textSecondaryClass={textSecondaryClass}
        textClass={textClass}
        cardBgClass={cardBgClass}
      />
      {/* Products Section */}
      <Products
        textSecondaryClass={textSecondaryClass}
        textClass={textClass}
        cardBgClass={cardBgClass}
      />

      {/* Support Section */}
      <Support
        textSecondaryClass={textSecondaryClass}
        textClass={textClass}
        cardBgClass={cardBgClass}
        scrollToSection={scrollToSection}
      />
      <Contact
        textSecondaryClass={textSecondaryClass}
        textClass={textClass}
        cardBgClass={cardBgClass}
        darkMode={darkMode}
        setFormData={setFormData}
        formData={formData}
        handleSubmit={handleSubmit}
      />
      {/* Footer */}
      <Footer
        textSecondaryClass={textSecondaryClass}
        textClass={textClass}
        cardBgClass={cardBgClass}
        darkMode={darkMode}
        scrollToSection={scrollToSection}
      />
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in {
          animation: fadeInUp 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

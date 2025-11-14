"use client";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroProps {
  textSecondaryClass: string;
  textClass: string;
  slides: StaticImageData[] | string[];
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  currentSlide: number;
  cardBgClass: string;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({
  scrollToSection,
  slides,
  currentSlide,
  darkMode,
  setCurrentSlide,
  textClass,
  textSecondaryClass,
}: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0">
        {slides.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 ${
                darkMode ? "bg-black/60" : "bg-white/40"
              }`}
            ></div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentSlide
                ? "bg-blue-600 w-8"
                : darkMode
                ? "bg-white/50"
                : "bg-gray-900/50"
            }`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1
          className={`text-5xl md:text-7xl font-bold ${textClass} mb-6 animate-fade-in`}
        >
          <span className="block bg-gradient-to-r from-blue-600 via-red-200 to-blue-600 bg-clip-text text-transparent animate-gradient">
            Gaytes Solution
          </span>
        </h1>
        <p
          className={`text-xl md:text-2xl ${textSecondaryClass} mb-8 max-w-3xl mx-auto animate-fade-in-delay !text-[#2d2d2d]`}
        >
          A company that provides adaptable state of the art technology that
          fulfills all customers’ requirement in real time
        </p>
        <button
          onClick={() => scrollToSection("contact")}
          className="group inline-flex cursor-pointer items-center gap-2 bg-gradient-to-r from-blue-300 to-blue-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Get Started
          <ArrowRight
            className="group-hover:translate-x-1 transition-transform"
            size={20}
          />
        </button>

        <div className="absolute top-43 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-200" />
        </div>
      </div>
    </section>
  );
}

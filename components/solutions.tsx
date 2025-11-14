"use client";
import {
  PhoneCall,
  Voicemail,
  Globe,
  Users,
  Headphones,
  PhoneForwarded,
  PhoneOutgoing,
  PhoneIncoming,
  FileAudio,
  Mic,
  FileSearch,
  Radio,
  Server,
  Users2,
  UsersRound,
  MessageSquare,
  Cpu,
  CalendarCheck,
  Smartphone,
} from "lucide-react";

interface SolutionProps {
  textSecondaryClass: string;
  textClass: string;
  cardBgClass: string;
}
export default function WhatWeDo({ textClass, cardBgClass }: SolutionProps) {
  return (
    <section
      id="solutions"
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${textClass} mb-4`}>
            Our Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-white mx-auto mb-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: PhoneCall,
              title: "Call Accounting",
            },
            {
              icon: Voicemail,
              title: "Voice Mail",
            },
            {
              icon: Globe,
              title: "IP Telephony",
            },

            {
              icon: Headphones,
              title: "Call Center Solutions",
            },
            {
              icon: PhoneForwarded,
              title: "Dialer Systems",
            },
            {
              icon: PhoneOutgoing,
              title: "Auto Dialer",
            },
            {
              icon: PhoneIncoming,
              title: "Preview Dialer",
            },
            {
              icon: PhoneOutgoing,
              title: "Predictive Dialer",
            },
            {
              icon: PhoneForwarded,
              title: "Progressive Dialer",
            },

            {
              icon: FileAudio,
              title: "PRI Voice Logger",
            },
            {
              icon: Mic,
              title: "Voice Loggers",
            },
            {
              icon: FileSearch,
              title: "Asterisk Loggers",
            },

            {
              icon: Radio,
              title: "Asterisk IP PBX",
            },
            {
              icon: Server,
              title: "IP PBX",
            },

            {
              icon: Users,
              title: "Asterisk Call Centers",
            },
            {
              icon: Users2,
              title: "Asterisk Contact Centers",
            },
            {
              icon: UsersRound,
              title: "Asterisk Conference",
            },

            {
              icon: MessageSquare,
              title: "SMS Solutions",
            },
            {
              icon: Cpu,
              title: "CTI Systems",
            },
            {
              icon: Smartphone,
              title: "IVR Systems",
            },

            {
              icon: CalendarCheck,
              title: "Attendance Management",
            },
            {
              icon: CalendarCheck,
              title: "Hotel Solution",
            },
          ].map((solution, idx) => (
            <div
              key={idx}
              className={`${cardBgClass} cursor-pointer rounded-2xl p-8 border transition-all duration-500 hover:scale-105 hover:shadow-2xl group`}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <solution.icon className="text-white" size={32} />
              </div>
              <h3 className={`text-lg font-bold ${textClass} mb-4`}>
                {solution.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

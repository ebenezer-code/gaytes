"use client";
import Image from "next/image";

interface SolutionProps {
  textSecondaryClass: string;
  textClass: string;
  cardBgClass: string;
}
const Solutions = [
  {
    title: "Call Center Solutions",
    //  image: "/placeholder1.jpg",
    content: `Our Call Center Solutions System is easy to customize, administer and use. The  System can be integrated within the existing communications infrastructure.The solutions allows seamless LAN connectivity options. Also supported is full Open Database Connectivity (ODBC) support for immediate and future CTI developments and the product is so developed that it supports PBX and PSTN integration.
Our Call Center Solutions System supported tapi based pbx like Panasonic PBX, NEC PBX, Siemens PBX, Avaya IP 500 PBX, Nortel BCM 50/500 PBX, Cisco Call Manager 5.0 PBX, Avaya IP 500 PBX, Nortel BCM 50/500 PBX.`,
  },
  {
    title: "CTI Applications System",
    //  image: "/placeholder2.jpg",
    content: `CTI (Computer telephony integration), is technology that allows interactions on a telephone and a computer to be integrated or co-ordinated. the definition of CTI has expanded to include the integration of all customer contact channels (voice, email, web, fax, etc.) with computer systems.`,
  },
  {
    title: "CRM",
    //  image: "/placeholder3.jpg",
    content: `Customer Relationship Management is a business strategy that enables organizations to get closer with their customers, to better serve their needs, improve customer service, enhance customer satisfaction and thereby maximize customer loyalty and retention.`,
  },
  {
    title: "Dialers",
    //  image: "/placeholder4.jpg",
    content: `Dialers is a contrivance that is linked to a telephone line to screen the dialed numbers and modify them to effortlessly provide services that otherwise require extensive access codes to be dialed. 

The Solutions are integrated with switching systems ( EPABX or Server & ACD ) to monitor agent’s status and its activities. Optimize agent utilization and thus enhance Call center productivity.We offer that in partnership with GAYTES Information Systems Ltd.`,
  },
  {
    title: "IP PBX",
    //  image: "/placeholder5.jpg",
    content: `we offer Panasonic IP PBX.....like Panasonic KX-NS500 Smart Hybrid IP Pbx System,NS 1000,TDE 100/200/500......Avaya Ip pbx,Asterick etc.`,
  },
  {
    title: "Hotel Management Solutions",
    //  image: "/placeholder6.jpg",
    content: `Hotel management software is a versatile solution for all kinds of hospitality industries. With intelligent engineering customized software provide efficient and simplified working solutions . It encompasses software for services like Hotel Management Software, Hotel Reservation Software (Billing Software). Hotel Reception Software and Hotel accounting Software. Unified rates offer the flexibility of all services at no extra cost. We offer this in partnership with Gaytes Information System Pvt limited.
Availability of the Z.LINK Hotel Lite Software :
a. Z.LINK Hotel Lite - Standard
b. Z.LINK Hotel Lite - Client/server
c. Z.LINK Hotel Lite - With COS( ext. lock/unlock)
d. Z.LINK Hotel Lite - Web based
e. Z.LINK Hotel Lite - PMSI Module`,
  },
];

export default function WhatWeDo({ textClass, cardBgClass }: SolutionProps) {
  return (
    <section
      id="solutions"
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${textClass} mb-4`}>
            We Focus on
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-white mx-auto mb-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Solutions.map((solution, idx) => (
            <div
              key={idx}
              className={`${cardBgClass} cursor-pointer rounded-2xl p-4 border transition-all duration-500 hover:scale-105 hover:shadow-2xl group h-auto w-none lg:w-[350px]`}
            >
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Image src={solution.image} alt="solution" className="text-white" />
              </div> */}
              <h3 className={`text-lg font-bold ${textClass} mb-4`}>
                {solution.title}
              </h3>
              <p
                className={`text-[10px] lg:text-[14px] content-center text-gray-500 white-space-pre-line`}
              >
                {solution.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

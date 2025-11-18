"use client";
interface AboutProps {
  textSecondaryClass: string;
  textClass: string;
  cardBgClass: string;
}
export default function About({
  textClass,
  textSecondaryClass,
  cardBgClass,
}: AboutProps) {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${textClass} mb-4`}>
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-white mx-auto"></div>
        </div>

        <div className="hidden md:flex gap-8 items-stretch mb-16">
          {[
            {
              title: "Creativity",
              desc: "Pushing boundaries with cutting-edge solutions that drive the future of technology and deliver unprecedented value.",
              num: 1,
            },
            {
              title: "Excellence",
              desc: "Committed to delivering unparalleled quality in every project we undertake, ensuring results that exceed expectations.",
              num: 2,
            },
            {
              title: "Partnership",
              desc: "Building lasting relationships through trust, transparency, and mutual success with every collaboration.",
              num: 3,
            },
          ].map((item) => (
            <div
              key={item.num}
              className={`flex-1 ${cardBgClass} cursor-pointer backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl mb-6 flex items-center justify-center text-3xl font-bold text-white">
                {item.num}
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

        <div className="md:hidden grid gap-6 mb-16">
          {[
            {
              title: "Innovation",
              desc: "Pushing boundaries with cutting-edge solutions that drive the future of technology.",
              num: 1,
            },
            {
              title: "Excellence",
              desc: "Committed to delivering unparalleled quality in every project we undertake.",
              num: 2,
            },
            {
              title: "Partnership",
              desc: "Building lasting relationships through trust, transparency, and mutual success.",
              num: 3,
            },
          ].map((item) => (
            <div
              key={item.num}
              className={`${cardBgClass} backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 hover:scale-105`}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl mb-4 flex items-center justify-center text-2xl font-bold text-white">
                {item.num}
              </div>
              <h3 className={`text-xl font-bold ${textClass} mb-3`}>
                {item.title}
              </h3>
              <p className={`${textSecondaryClass} leading-relaxed`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`${cardBgClass} backdrop-blur-sm rounded-2xl p-8 md:p-12 border`}
        >
          <h3 className={`text-3xl font-bold ${textClass} mb-6`}>Our Story</h3>
          <p className={`${textSecondaryClass} text-lg leading-relaxed mb-4`}>
            Creative and dedicated company who love IT service almost as much as
            we love our customers. In 2008 we set out to make the perfect
            company and Gaytes Solutions Limited was born. Since then it has
            been one of the #1 with an ever growing customer base of 150+
            wonderful customers. We encourage you to try Gaytes Solutions
            Limited.
          </p>
          <p className={`${textSecondaryClass} text-lg leading-relaxed`}>
            We provides telecom products – range starts from Call Accounting –
            Voice Mail – Call Center Solutions – Dialer – predictive dialer
            software – Progressive Dialer – pri voice logger on asterisk and
            Panasonic pbx, Auto Dialer – Preview Dialer – Voice Loggers – SMS
            Solutions – CTI – IVR – Attendance Management – Asterisk IP PBX – IP
            PBX – Asterisk Loggers – Asterisk Call Centers – Asterisk Contact
            Centers – Asterisk Conference and IP Telephony.
          </p>
        </div>
        <div
          className={`${cardBgClass} backdrop-blur-sm rounded-2xl p-8 md:p-12 border mt-10`}
        >
          <h3 className={`text-3xl font-bold ${textClass} mb-6`}>
            Our Partners
          </h3>
          <p className={`${textSecondaryClass} text-lg leading-relaxed mb-4`}>
            GAYTES information private Ltd, 511, "SAKAR-V" , Mithakhali
            Navrangpura, Ahmedabad -380 009.India.
          </p>
          <p className={`${textSecondaryClass} text-lg leading-relaxed`}>
            HUNE : Keyu Intelligence co Ltd. Xinhui District ,Jiangmen City,
            Guangdong .China
          </p>
        </div>
      </div>
    </section>
  );
}

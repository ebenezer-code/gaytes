"use client";
import Image from "next/image";
import OurWork from "@/components/work";

interface ProductsProps {
  textSecondaryClass: string;
  textClass: string;
  cardBgClass: string;
}

export default function Products({
  textClass,
  textSecondaryClass,
}: ProductsProps) {
  const products = [
    { name: "NexaCloud", image: "/three.jpeg" },
    { name: "NexaFlow", image: "/four4.jpeg" },
    { name: "NexaSecure", image: "/nine9.jpeg" },
    { name: "NexaInsight", image: "/six1.jpg" },
    { name: "NexaCloud", image: "/six.jpg" },
    { name: "NexaFlow", image: "/seven.jpeg" },
    { name: "NexaSecure", image: "/eight1.jpeg" },
    { name: "NexaInsight", image: "/nine2.jpeg" },
    { name: "NexaCloud", image: "/four.jpeg" },
    { name: "NexaFlow", image: "/five.jpeg" },
    { name: "NexaSecure", image: "/eleven.jpeg" },
    { name: "NexaInsight", image: "/eight.jpeg" },
  ];

  return (
    <>
      <section
        id="products"
        className="min-h-screen flex flex-col items-center py-20 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold ${textClass} mb-4`}>
              Our Products
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-200 to-white mx-auto mb-4"></div>
            <p className={`text-lg ${textSecondaryClass}`}>
              Explore our range of innovative products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-500"
              >
                {/* IMAGE */}
                <div className="relative w-full h-64 sm:h-72 md:h-80">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
                </div>

                {/* PRODUCT TITLE */}
                <div className="absolute bottom-4 left-4 z-20">
                  {/* <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-xl">
                    {product.name}
                  </h3> */}
                </div>

                {/* SHINE EFFECT */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.5),transparent)] bg-[length:200%_200%] animate-[shine_1.8s_ease-in-out]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OurWork textSecondaryClass={textSecondaryClass} textClass={textClass} />
    </>
  );
}

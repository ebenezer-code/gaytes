"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

interface OurWorkProps {
  textClass: string;
  textSecondaryClass: string;
}

interface VideoItem {
  title: string;
  thumbnail: string;
  videoUrl: string;
}

export default function OurWork({
  textClass,
  textSecondaryClass,
}: OurWorkProps) {
  const videos: VideoItem[] = [
    {
      title: "Cloud Infrastructure Deployment",
      thumbnail: "/work/nine2.jpeg",
      videoUrl: "/videos/three4.mp4",
    },
    {
      title: "Security Suite Demo",
      thumbnail: "/work/seven2.jpeg",
      videoUrl: "/videos/four3.mp4",
    },
  ];

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlay = (index: number) => {
    // Stop other videos
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    setPlayingIndex(index);

    // Disable swipe while playing
    if (swiperInstance) swiperInstance.allowSlideNext = false;
    videoRefs.current[index]?.play();
  };

  const handleStop = (index: number) => {
    videoRefs.current[index]?.pause();
    videoRefs.current[index]!.currentTime = 0;
    setPlayingIndex(null);

    // Enable swipe again
    if (swiperInstance) swiperInstance.allowSlideNext = true;
  };

  const handleVideoEnded = (index: number) => {
    handleStop(index);
  };

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-6 ${textClass}`}
        >
          Our Work
        </h2>
        <p
          className={`text-center max-w-2xl mx-auto mb-12 text-lg ${textSecondaryClass}`}
        >
          A glimpse into the innovative solutions we’ve delivered for clients.
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          {videos.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative group h-[280px] sm:h-[380px] md:h-[500px] rounded-3xl overflow-hidden">
                {/* Thumbnail */}
                {playingIndex !== index && (
                  <>
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover blur-[2px] scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                  </>
                )}

                {/* Play Button */}
                {playingIndex !== index && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => handlePlay(index)}
                      className="w-20 h-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center transition group-hover:scale-125"
                    >
                      <svg
                        className="w-10 h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                )}

                {/* Video */}
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={item.videoUrl}
                  controls
                  onPause={() => handleStop(index)}
                  onEnded={() => handleVideoEnded(index)}
                  className={`absolute inset-0 w-full h-full object-cover ${
                    playingIndex === index ? "block" : "hidden"
                  }`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

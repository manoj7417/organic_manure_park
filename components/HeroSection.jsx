"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
          isVideoPlaying ? "opacity-100" : "opacity-50"
        }`}
      >
        <source
          src="https://geniescareerhubbucket.lon1.cdn.digitaloceanspaces.com/organic_park.mp4"
          type="video/mp4"
        />
        {/* Fallback background for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"></div>
      </video>

      {/* Video Overlay with enhanced gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/50 z-10"></div>

      {/* Video Control Button */}
      <button
        onClick={toggleVideo}
        className="absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300 group"
        aria-label={isVideoPlaying ? "Pause video" : "Play video"}
      >
        {isVideoPlaying ? (
          <Pause className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        ) : (
          <Play className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        )}
      </button>

      {/* Main Content - Only Gaushala Section */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-2xl mb-4">
            <span className="text-green-400">Organic</span>{" "}
            <span className="text-white">Manure Park</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white font-light drop-shadow-lg mb-12">
            Sustainable. Natural. Revolutionary.
          </p>

          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Our Association with{" "}
            <span className="text-red-400 border-b-2 border-dotted border-red-400">
              Gaushalas
            </span>
          </h3>
          <p className="text-lg lg:text-xl text-white leading-relaxed drop-shadow-lg">
            Partnering with traditional cow shelters to create sustainable
            organic solutions
          </p>
          <Button
            onClick={() => {
              const parkSection = document.getElementById("park");
              if (parkSection) {
                parkSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="bg-green-600 hover:bg-green-700 text-white p-4 text-base font-semibold transition-all duration-300 hover:scale-105 mt-10 cursor-pointer"
          >
            Know More
          </Button>
        </div>
      </div>
    </div>
  );
}

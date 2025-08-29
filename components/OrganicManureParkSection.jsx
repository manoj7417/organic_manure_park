"use client";

import { useState, useEffect } from "react";
import { Target } from "lucide-react";

export default function OrganicManureParkSection() {
  const [stats, setStats] = useState({
    omp: 0,
    gaushala: 0,
    established: 0,
  });
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  // Animated statistics counter
  useEffect(() => {
    let observer;
    let timer;

    const animateStats = () => {
      const targets = { omp: 108, gaushala: 972, established: 1 };
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setStats({
          omp: Math.floor(targets.omp * progress),
          gaushala: Math.floor(targets.gaushala * progress),
          established: Math.floor(targets.established * progress),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setStats(targets);
        }
      }, stepDuration);
    };

    if (typeof window !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isStatsVisible) {
            setIsStatsVisible(true);
            // Add a small delay to ensure the section is fully visible
            setTimeout(() => {
              animateStats();
            }, 100);
          }
        },
        {
          threshold: 0.3,
          rootMargin: "0px 0px -100px 0px",
        }
      );

      const statsSection = document.getElementById("stats-section");
      if (statsSection) {
        observer.observe(statsSection);
      }
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isStatsVisible]);

  // Backup animation trigger - runs once when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isStatsVisible) {
        setIsStatsVisible(true);
        const targets = { omp: 108, gaushala: 972, established: 1 };
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;
        let currentStep = 0;

        const animationTimer = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;
          setStats({
            omp: Math.floor(targets.omp * progress),
            gaushala: Math.floor(targets.gaushala * progress),
            established: Math.floor(targets.established * progress),
          });
          if (currentStep >= steps) {
            clearInterval(animationTimer);
            setStats(targets);
          }
        }, stepDuration);
      }
    }, 1000); // Trigger after 1 second

    return () => clearTimeout(timer);
  }, []); // Empty dependency array - runs only once

  return (
    <section id="park" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Organic <span className="text-green-600">Manure Park</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Organic Manure Park is Proposed to be spread over a Minimum of 5
          acres and a Maximum of 15 acres to accommodate
        </p>
      </div>

      {/* Park Components - Three Columns */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="bg-white rounded-none shadow-none p-8 text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Animal & Shelter
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center text-left  text-black">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              Cows
            </li>
            <li className="flex items-center text-left">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              Bulls
            </li>
            <li className="flex items-center text-left">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              Shelter for Cows
            </li>
            <li className="flex items-center text-left">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              Feed Facility
            </li>
            <li className="flex items-center text-left">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              Drying Facility
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="bg-white rounded-none shadow-none p-8 text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Water & Infrastructure
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center text-left">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              Aqua tanks
            </li>
            <li className="flex items-center text-left">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              Spirulina Tanks
            </li>
            <li className="flex items-center text-left">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              Water Tanks – Mobile
            </li>
            <li className="flex items-center text-left">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              Water Tanks – Fixed
            </li>
            <li className="flex items-center text-left">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              Labor Colony
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="bg-white rounded-none shadow-none p-8 text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Processing & Storage
          </h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center text-left">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              Processing Unit
            </li>
            <li className="flex items-center text-left">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              Storage Facility
            </li>
            <li className="flex items-center text-left">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              Quality Control Lab
            </li>
            <li className="flex items-center text-left">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              Packaging Unit
            </li>
            <li className="flex items-center text-left">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
              Distribution Center
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Information - Enhanced Statistics */}
      <div id="stats-section" className="mt-16">
        <div className=" p-12 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-green-200 rounded-full opacity-10 -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-200 rounded-full opacity-10 translate-y-16 -translate-x-16"></div>

          {/* Header */}
          <div className="text-center mb-12 relative z-10">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Target <span className="text-green-600">Planned</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our ambitious goals for establishing Organic Manure Parks and
              partnering with Gaushalas across India
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative z-10">
            {/* OMP Statistic */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-5xl lg:text-6xl font-bold text-green-600 mb-3">
                {stats.omp}
              </div>
              <div className="text-xl font-semibold text-gray-800 mb-2">
                OMP
              </div>
              <div className="text-sm text-gray-600">
                Organic Manure Parks
              </div>
            </div>

            {/* Gaushala Statistic */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-5xl lg:text-6xl font-bold text-green-600 mb-3">
                {stats.gaushala}
              </div>
              <div className="text-xl font-semibold text-gray-800 mb-2">
                Gaushala
              </div>
              <div className="text-sm text-gray-600">Partner Shelters</div>
            </div>

            {/* Established Statistic */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-5xl lg:text-6xl font-bold text-green-600 mb-3">
                {stats.established}
              </div>
              <div className="text-xl font-semibold text-gray-800 mb-2">
                Established
              </div>
              <div className="text-sm text-gray-600">Current Parks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

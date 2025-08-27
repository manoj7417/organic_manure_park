'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight, Leaf, TreePine, Zap, Building2, Target, Phone } from 'lucide-react';

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer - set your launch date here
  useEffect(() => {
    const launchDate = new Date('2024-12-31T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" min-h-screen w-100 h-100">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero1.mp4" type="video/mp4" />
        {/* Fallback background for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-none from-green-50 via-emerald-50 to-teal-50"></div>
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Leaf className="w-8 h-8 text-green-400" />
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed">
        <TreePine className="w-6 h-6 text-emerald-400" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float">
        <Zap className="w-7 h-7 text-teal-400" />
      </div>

      <div className="absolute z-18 pt-8 pb-8 px-10sm:px-0 lg:px-00">
                <div className="max-w-10xl  mx-auto">
          <div className="flex">
            {/* Left Sidebar Navigation */}
            <div className="w-100 bg-white backdrop-blur-md  shadow-xl border-r border-green-200 min-h-screen w-100">
              <div className="p-0 space-y-0">
                {/* Logo and Brand */}
                {/* <div className="text-center pb-6 border-b border-green-100"
                  <h2 className="text-2xl font-bold text-green-800 mb-2">Organic Manure Park</h2>
                  <p className="text-sm text-gray-600">Sustainable. Natural. Revolutionary.</p>
                </div> */}

                {/* Navigation Links */}
                {/* <nav className="space-y-4">
                  <a href="#about" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-green-50 transition-colors duration-200 group">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                      <Leaf className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">About Us</div>
                      <div className="text-xs text-gray-500">Learn about our mission</div>
                    </div>
                  </a>

                  <a href="#park" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-green-50 transition-colors duration-200 group">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                      <Building2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Our Park</div>
                      <div className="text-xs text-gray-500">Explore our facility</div>
                    </div>
                  </a>

                  <a href="#projects" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-green-50 transition-colors duration-200 group">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                      <Target className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Projects</div>
                      <div className="text-xs text-gray-500">View our initiatives</div>
                    </div>
                  </a>

                  <a href="#contact" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-green-50 transition-colors duration-200 group">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Contact</div>
                      <div className="text-xs text-gray-500">Get in touch</div>
                    </div>
                  </a>
                </nav> */}

                {/* Gaushala Section */}
                <div className="pt-6 border-t border-green-100">
                  <div className="text-center mb-4">
                    <Image
                      src="/cow1.png"
                      alt="Our Association with Gaushalas"
                      width={250}
                      height={250}
                      className="w-full h-100 object-cover rounded-none mb-3"
                    />
                    <h3 className="text-lg font-bold text-gray-800 mb-8">
                      Our Association with{' '}
                      <span className="text-red-600 border-b-2 border-dotted border-red-400">
                        Gaushalas
                      </span>
                    </h3>
                    <p className="text-sm text-gray-600 mb-20">
                      Partnering with traditional cow shelters to create sustainable organic solutions
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                      Know More
                    </Button>
                  </div>
                </div>

                {/* Company Info */}
                {/* <div className="pt-4 border-t border-green-100 text-center">
                  <p className="text-xs text-gray-500 font-medium">
                    Promoted by MaAMMA Agribusiness Pvt Ltd
                  </p>
                </div> */}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 pl-8 lg:pl-12">
              <div className="space-y-20">
                {/* Coming Soon Badge */}
                {/* <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="text-2xl">🚀</span>
                  <span className="font-bold text-lg">COMING SOON</span>
                </div> */}

                {/* Main Heading */}
               {/* <div className="space-y-4"> */}
               <h1 className="mt-10 lg:mt-20 xl:mt-20 text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-lg">
  Organic{' '}
  <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
    Manure Park
  </span>
</h1>
                  <p className="text-xl lg:text-2xl text-white font-light drop-shadow-lg">
                    Sustainable. Natural. Revolutionary.
                  </p>
                 {/* </div> */}

                {/* Description */}
                {/* <p className="text-lg text-white leading-relaxed max-w-lg drop-shadow-lg">
                  Experience the future of sustainable agriculture with our innovative organic manure solutions. 
                  Join us in creating a greener, healthier world.
                </p> */}

                {/* CTA Buttons */}
                {/* <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold transition-all duration-300">
                    Get Updates
                  </Button>
                </div> */}

                {/* Countdown Timer */}
                {/* <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
                  <h3 className="text-lg font-semibold text-white mb-4 text-center">Launch Countdown</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                      <div key={unit} className="text-center">
                        <div className="bg-gradient-to-b from-green-500 to-emerald-600 text-white text-2xl font-bold rounded-lg py-3 px-2">
                          {value.toString().padStart(2, '0')}
                        </div>
                        <div className="text-sm text-white font-medium mt-2 capitalize">
                          {unit}
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-auto">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-44.51,206.8-46.5C438.64,25.34,512.34,59.56,583,72.05c69.27,12,138.3,6.19,206.56-2.81C856.17,60.18,921.27,48.51,1000,48.51c78.37,0,143.83,11.67,200,28V0Z"
            fill="#ffffff"
            opacity="0.8"
          />
        </svg>
      </div> */}
    </div>
  );
}

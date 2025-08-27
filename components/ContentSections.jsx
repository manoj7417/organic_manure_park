import { Button } from "@/components/ui/button";
import {
  Leaf,
  Users,
  Building2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Target,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ContentSections() {
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

  const ProjectsList = [
    {
      id: 1,
      type: "Large Scale Production",
      location: "Andhra Pradesh",
      title: "Organic Manure Facility",
      description: "High-capacity production unit",
      metric: "📊 Capacity: 5000 tons/year",
      icon: Building2,
    },
    {
      id: 2,
      type: "Medium Scale Production",
      location: "Andhra Pradesh",
      title: "Regional Processing Unit",
      description: "Community-focused facility",
      metric: "📊 Capacity: 2000 tons/year",
      icon: Building2,
    },
    {
      id: 3,
      type: "Small Scale Production",
      location: "Andhra Pradesh",
      title: "Local Processing Center",
      description: "Village-level facility",
      metric: "📊 Capacity: 500 tons/year",
      icon: Building2,
    },
    {
      id: 4,
      type: "Soil Health Studies",
      location: "Maharashtra",
      title: "Research & Development",
      description: "Comprehensive soil analysis",
      metric: "⏱️ Duration: 2-3 years",
      icon: MapPin,
    },
    {
      id: 5,
      type: "Crop Yield Analysis",
      location: "Maharashtra",
      title: "Agricultural Research",
      description: "Performance evaluation studies",
      metric: "⏱️ Duration: 1-2 years",
      icon: MapPin,
    },
    {
      id: 6,
      type: "Technology Innovation",
      location: "Maharashtra",
      title: "Innovation Hub",
      description: "Advanced processing technologies",
      metric: "⏱️ Duration: Ongoing",
      icon: MapPin,
    },
    {
      id: 7,
      type: "Processing Units",
      location: "Global Facility",
      title: "Infrastructure Development",
      description: "Modern processing facilities",
      metric: "🔄 Status: In Progress",
      icon: Building2,
    },
    {
      id: 8,
      type: "Storage Facilities",
      location: "Global Facility",
      title: "Warehousing Solutions",
      description: "Climate-controlled storage",
      metric: "✅ Status: Completed",
      icon: Building2,
    },
    {
      id: 9,
      type: "Distribution Centers",
      location: "Global Facility",
      title: "Logistics Network",
      description: "Strategic distribution hubs",
      metric: "📋 Status: Planning",
      icon: Building2,
    },
  ];

  const RegionalAssociatesList = [
    {
      id: 1,
      city: "Vijayawada",
      state: "Andhra Pradesh",
      name: "Mrs Nirmala Vommi",
      role: "Business Associate",
      location: "📍 Vijayawada, AP",
      icon: MapPin,
    },
    {
      id: 2,
      city: "Guntur",
      state: "Andhra Pradesh",
      name: "Dr Radhika",
      role: "Business Associate",
      location: "📍 Guntur, AP",
      icon: MapPin,
    },
    {
      id: 3,
      city: "Visakhapatnam",
      state: "Andhra Pradesh",
      name: "Mrs Neeladri G. Chanadana",
      role: "Business Associate",
      location: "📍 Visakhapatnam, AP",
      icon: MapPin,
    },
    {
      id: 4,
      city: "Mumbai",
      state: "Maharashtra",
      name: "Mrs Manisha Mohte",
      role: "Business Associate",
      location: "📍 Mumbai, MH",
      icon: MapPin,
    },
    {
      id: 5,
      city: "Pune",
      state: "Maharashtra",
      name: "Mrs. Archana Kharbore",
      role: "Business Associate",
      location: "📍 Pune, MH",
      icon: MapPin,
    },
    {
      id: 6,
      city: "Global",
      state: "International",
      name: "Mrs Mashabe",
      role: "Business Associate",
      location: "📍 Global Operations",
      icon: Building2,
    },
  ];

  return (
    <div className="py-20 space-y-32">
      {/* Vision and Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vision & <span className="text-green-600">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to sustainable agriculture and soil health
            engineering
          </p>
        </div>

        {/* Cows Image */}
        {/* <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-noneshadow-none p-6">
            <img
              src="/logo.png"
              alt="Our Cows and Calves"
              className="w-80 h-80 object-cover rounded-none"
            />
          </div>
        </div> */}

        {/* Vision and Mission Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start relative">
          {/* Vision Statement */}
          <div className="bg-white rounded-none shadow-none  p-8 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Vision</h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>MaAMMA AGRIBUSINESS Pvt Ltd (MAPL) aspires to make our</p>
              <p className="font-bold text-black-600 text-base">
                Organic Manure Park (OMP) as the global benchmark for value
                creation in providing Soil Health Engineering (SHE)
              </p>
            </div>
          </div>

          {/* Vertical Separator Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

          {/* Mission Statement */}
          <div className="bg-white rounded-none shadow-none  p-8 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Mission</h3>
            <div className="text-lg text-gray-700 leading-relaxed">
              <p>
                MaAMMA AGRIBUSINESS Pvt Ltd's mission is to{" "}
                <span className="font-bold text-black-600">establish</span>{" "}
                Organic Manure Parks across various locations in India and
                globally to strengthen the agricultural base through effective
                and efficient utilization of resources, employing modern
                technologies, and providing various solutions for soil health
                engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organic Manure Park Section */}
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

        {/* Cows Image */}
        {/* <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-none shadow-none p-6">
            <img
              src="/baragur.png"
              alt="Our Cows and Calves"
              className="w-110 h-100 object-cover rounded-none"
            />
          </div>
        </div> */}

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

      {/* About Us Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-green-600">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are pioneers in sustainable agriculture, dedicated to
            revolutionizing farming practices through innovative organic manure
            solutions.
          </p>
        </div>

        {/* Principal Promoter */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white rounded-2xl shadow-lg border border-green-100 p-8 max-w-md">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center text-center mx-auto mb-6">
              <Image
                src="/Srinivas.jpeg"
                alt="SRINIVAS CHADA"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              SRINIVAS CHADA
            </h3>
            <p className="text-lg text-gray-600 mb-2">
              Director - Strategic Planning & Management
            </p>
            <p className="text-green-600 font-semibold">
              Principal Promoter of MAPL
            </p>
          </div>
        </div>

        {/* Our Associate Promoters */}
        {/* <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Associate Promoters</h3>
          <p className="text-xl text-gray-600 mb-8">Meet our dedicated team of associate promoters</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-6">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center text-left mx-auto mb-4">
                <span className="text-2xl font-bold text-white">W</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">WALTER</h4>
              <p className="text-gray-600 mb-2">Associate Promoter</p>
              <p className="text-green-600 font-semibold">Investment Relations</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-6">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center text-left mx-auto mb-4">
                <span className="text-2xl font-bold text-white">M</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">MICHEAL</h4>
              <p className="text-gray-600 mb-2">Associate Promoter</p>
              <p className="text-green-600 font-semibold">Project Management</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-6">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center text-left mx-auto mb-4">
                <span className="text-2xl font-bold text-white">AB</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">AMIT BAJAJ</h4>
              <p className="text-gray-600 mb-2">Associate Promoter</p>
              <p className="text-green-600 font-semibold">Strategic Business Development</p>
            </div>
          </div>
        </div> */}

        {/* Regional Business Associates */}
        <div className="space-y-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Regional{" "}
              <span className="text-green-600">Business Associates</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of business associates across different
              regions, working together to promote sustainable agriculture
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            // pagination={{ clickable: true }}
            pagination={false}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="my-swiper h-[500px]"
          >
            {RegionalAssociatesList.map((associate) => {
              const IconComponent = associate.icon;
              return (
                <SwiperSlide key={associate.id}>
                  <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 w-full h-[320px] flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="w-7 h-7 text-green-600" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xl font-bold text-gray-900 truncate">
                          {associate.city}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {associate.state}
                        </p>
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 flex-1 flex flex-col justify-center">
                      <h5 className="font-semibold text-gray-800 mb-3 text-lg leading-tight">
                        {associate.name}
                      </h5>
                      <p className="text-base text-gray-600 mb-2">
                        {associate.role}
                      </p>
                      <p className="text-sm text-green-600">
                        {associate.location}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our innovative projects that are transforming agriculture
            and promoting sustainability.
          </p>
        </div>

        {/* Projects Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={false}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="my-swiper h-[500px]"
        >
          {ProjectsList.map((project) => {
            const IconComponent = project.icon;
            return (
              <SwiperSlide key={project.id}>
                <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 w-full h-[320px] flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-green-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xl font-bold text-gray-900 truncate">
                        {project.type}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {project.location}
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 flex-1 flex flex-col justify-center">
                    <h5 className="font-semibold text-gray-800 mb-3 text-lg leading-tight">
                      {project.title}
                    </h5>
                    <p className="text-base text-gray-600 mb-2">
                      {project.description}
                    </p>
                    <p className="text-sm text-green-600 font-semibold">
                      {project.metric}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-green-600">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to learn more about our organic manure
            solutions and sustainable farming initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Phone
                </h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-gray-600">+91 98765 43211</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Email
                </h3>
                <p className="text-gray-600">info@organicmanurepark.com</p>
                <p className="text-gray-600">support@organicmanurepark.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Address
                </h3>
                <p className="text-gray-600">Organic Manure Park</p>
                <p className="text-gray-600">Agricultural District, India</p>
                <p className="text-gray-600">PIN: 123456</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

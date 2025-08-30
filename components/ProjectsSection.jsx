"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Building2, MapPin } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectsSection() {
  const ProjectsList = [
    {
      id: 1,
      type: "Small Scale Production",
      location: "Andhra Pradesh",
      title: "Local Processing Center",
      description: "Village-level facility",
      metric: "📊 Capacity: 500 tons/year",
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
      type: "Large Scale Production",
      location: "Andhra Pradesh",
      title: "Organic Manure Facility",
      description: "High-capacity production unit",
      metric: "📊 Capacity: 5000 tons/year",
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

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Our <span className="text-green-600">Projects</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-5xl mx-auto">
          Discover our innovative projects that are transforming agriculture and
          promoting sustainability.
        </p>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Be associated & Partner with our innovative and proposed projects that
          will transform landscape of agriculture
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
                    <p className="text-sm text-gray-500">{project.location}</p>
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
  );
}

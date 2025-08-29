"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MapPin, Building2 } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AboutUsSection() {
  const [currentAssociateIndex, setCurrentAssociateIndex] = useState({});
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

  // Auto-rotate through associates for each state
  useEffect(() => {
    const intervals = {};

    Object.keys(StateWiseAssociates).forEach((state) => {
      intervals[state] = setInterval(() => {
        setCurrentAssociateIndex((prev) => ({
          ...prev,
          [state]: ((prev[state] || 0) + 1) % StateWiseAssociates[state].length,
        }));
      }, 3000); // Change every 3 seconds
    });

    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, []);

  const StateWiseAssociates = {
    "Andhra Pradesh": [
      {
        id: 1,
        city: "Vijayawada",
        state: "Andhra Pradesh",
        name: "Mrs Nirmala Vommi",
        role: "Business Associate",
        location: "📍 Vijayawada, AP",
        icon: "MapPin",
      },
      {
        id: 2,
        city: "Guntur",
        state: "Andhra Pradesh",
        name: "Dr Radhika",
        role: "Business Associate",
        location: "📍 Guntur, AP",
        icon: "MapPin",
      },
      {
        id: 3,
        city: "Visakhapatnam",
        state: "Andhra Pradesh",
        name: "Mrs Neeladri G. Chanadana",
        role: "Business Associate",
        location: "📍 Visakhapatnam, AP",
        icon: "MapPin",
      },
    ],
    Maharashtra: [
      {
        id: 4,
        city: "Mumbai",
        state: "Maharashtra",
        name: "Mrs Manisha Mohte",
        role: "Business Associate",
        location: "📍 Mumbai, MH",
        icon: "MapPin",
      },
      {
        id: 5,
        city: "Pune",
        state: "Maharashtra",
        name: "Mrs. Archana Kharbore",
        role: "Business Associate",
        location: "📍 Pune, MH",
        icon: "MapPin",
      },
    ],
    Uttarakhand: [
      {
        id: 6,
        city: "Dehradun",
        state: "Uttarakhand",
        name: "Mr. Rajesh Sharma",
        role: "Business Associate",
        location: "📍 Dehradun, UK",
        icon: "MapPin",
      },
      {
        id: 7,
        city: "Haridwar",
        state: "Uttarakhand",
        name: "Mrs. Sunita Rawat",
        role: "Business Associate",
        location: "📍 Haridwar, UK",
        icon: "MapPin",
      },
    ],
    "Tamil Nadu": [
      {
        id: 8,
        city: "Chennai",
        state: "Tamil Nadu",
        name: "Mr. Karthik Rajan",
        role: "Business Associate",
        location: "📍 Chennai, TN",
        icon: "MapPin",
      },
      {
        id: 9,
        city: "Coimbatore",
        state: "Tamil Nadu",
        name: "Mrs. Priya Lakshmi",
        role: "Business Associate",
        location: "📍 Coimbatore, TN",
        icon: "MapPin",
      },
      {
        id: 10,
        city: "Madurai",
        state: "Tamil Nadu",
        name: "Dr. Senthil Kumar",
        role: "Business Associate",
        location: "📍 Madurai, TN",
        icon: "MapPin",
      },
    ],
    Karnataka: [
      {
        id: 11,
        city: "Bangalore",
        state: "Karnataka",
        name: "Mr. Ramesh Kumar",
        role: "Business Associate",
        location: "📍 Bangalore, KA",
        icon: "MapPin",
      },
      {
        id: 12,
        city: "Mysore",
        state: "Karnataka",
        name: "Mrs. Lakshmi Devi",
        role: "Business Associate",
        location: "📍 Mysore, KA",
        icon: "MapPin",
      },
    ],
    Telangana: [
      {
        id: 13,
        city: "Hyderabad",
        state: "Telangana",
        name: "Mr. Venkatesh Reddy",
        role: "Business Associate",
        location: "📍 Hyderabad, TS",
        icon: "MapPin",
      },
      {
        id: 14,
        city: "Warangal",
        state: "Telangana",
        name: "Mrs. Anjali Rao",
        role: "Business Associate",
        location: "📍 Warangal, TS",
        icon: "MapPin",
      },
      {
        id: 15,
        city: "Karimnagar",
        state: "Telangana",
        name: "Dr. Mahesh Babu",
        role: "Business Associate",
        location: "📍 Karimnagar, TS",
        icon: "MapPin",
      },
    ],
    Kerala: [
      {
        id: 16,
        city: "Kochi",
        state: "Kerala",
        name: "Mr. Suresh Menon",
        role: "Business Associate",
        location: "📍 Kochi, KL",
        icon: "MapPin",
      },
      {
        id: 17,
        city: "Thiruvananthapuram",
        state: "Kerala",
        name: "Mrs. Geetha Pillai",
        role: "Business Associate",
        location: "📍 Thiruvananthapuram, KL",
        icon: "MapPin",
      },
    ],
    Gujarat: [
      {
        id: 18,
        city: "Ahmedabad",
        state: "Gujarat",
        name: "Mr. Amit Patel",
        role: "Business Associate",
        location: "📍 Ahmedabad, GJ",
        icon: "MapPin",
      },
      {
        id: 19,
        city: "Surat",
        state: "Gujarat",
        name: "Mrs. Rekha Shah",
        role: "Business Associate",
        location: "📍 Surat, GJ",
        icon: "MapPin",
      },
      {
        id: 20,
        city: "Vadodara",
        state: "Gujarat",
        name: "Dr. Parth Desai",
        role: "Business Associate",
        location: "📍 Vadodara, GJ",
        icon: "MapPin",
      },
    ],
  };

  return (
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

      {/* Regional Business Associates */}
      <div className="space-y-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Regional <span className="text-green-600">Business Associates</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of business associates across different regions,
            working together to promote sustainable agriculture
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={false}
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
          {Object.entries(StateWiseAssociates).map(([state, associates]) => {
            const currentIndex = currentAssociateIndex[state] || 0;
            const currentAssociate = associates[currentIndex];

            return (
              <SwiperSlide key={state}>
                <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 w-full h-[320px] flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-7 h-7 text-green-600" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xl font-bold text-gray-900 truncate">
                        {state}
                      </h4>
                      <p className="text-sm text-gray-500">
                        Associate {currentIndex + 1} of {associates.length}
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 flex-1 flex flex-col justify-center">
                    <div className="text-center space-y-4">
                      <div className="animate-fade-in">
                        <h5 className="font-semibold text-gray-800 text-lg leading-tight mb-2">
                          {currentAssociate.name}
                        </h5>
                        <p className="text-sm text-gray-600 mb-1">
                          {currentAssociate.role}
                        </p>
                        <p className="text-xs text-green-600">
                          {currentAssociate.city}
                        </p>
                      </div>

                      {/* Progress indicators */}
                      <div className="flex justify-center space-x-2 mt-6">
                        {associates.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentIndex
                                ? "bg-green-600 scale-125"
                                : "bg-green-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

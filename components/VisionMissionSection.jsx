export default function VisionMissionSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Vision & <span className="text-green-600">Mission</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our commitment to sustainable agriculture and soil health engineering
        </p>
      </div>

      {/* Vision and Mission Content */}
      <div className="grid lg:grid-cols-2 gap-10 items-start relative">
        {/* Vision Statement */}
        <div className="bg-white rounded-none shadow-none  p-8 text-center lg:text-justify">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Vision</h3>
          <div className="text-lg text-gray-700 leading-relaxed">
            <p>
              MaAMMA AGRIBUSINESS Pvt Ltd (MAPL) aspires to make our{" "}
              <span className="font-bold">Organic Manure Park (OMP)</span> as
              the global benchmark for value creation in providing{" "}
              <span className="font-bold">Soil Health Engineering (SHE)</span>
            </p>
          </div>
        </div>

        {/* Vertical Separator Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 transform -translate-x-1/2"></div>

        {/* Mission Statement */}
        <div className="bg-white rounded-none shadow-none  p-8 text-center lg:text-justify">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Mission</h3>
          <div className="text-lg text-gray-700 leading-relaxed">
            <p>
              <span className="font-bold text-black-600">
                MaAMMA AGRIBUSINESS Pvt Ltd's
              </span>{" "}
              mission is to establish Organic Manure Parks in 108 locations
              across India and Overseas to strengthen the agricultural base
              through effective and efficient utilization of local resources,
              employing modern technologies, and providing various solutions for
              soil health engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from '@/components/ui/button';
import { Leaf, Users, Building2, Phone, Mail, MapPin, Calendar, Target } from 'lucide-react';

export default function ContentSections() {
  return (
    <div className="py-20 space-y-32">
      {/* Vision and Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Vision & <span className="text-green-600">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to sustainable agriculture and soil health engineering
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
              <p>
                MaAMMA AGRIBUSINESS Pvt Ltd (MAPL) aspires to make our
              </p>
              <p className="font-bold text-black-600 text-xl">
                Organic Manure Park (OMP)
              
              
                as the global benchmark for value creation in providing
             
             
                Soil Health Engineering (SHE)
              </p>
            </div>
          </div>

          {/* Vertical Separator Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>

          {/* Mission Statement */}
          <div className="bg-white rounded-none shadow-none  p-8 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Mission</h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                MaAMMA AGRIBUSINESS Pvt Ltd's mission is to
              </p>
              <p>
                <span className="font-bold text-black-600">establish</span> Organic Manure Parks across various
              </p>
              <p>
                locations in India and Globally to strengthen
              </p>
              <p>
                Agricultural base through Effective & Efficient utilization
              </p>
              <p>
                of resources, employing modern technologies and
              </p>
              <p>
                providing various solutions for Soil Health Engineering
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
            Organic Manure Park is Proposed to be spread over a Minimum of 5 acres and a Maximum of 15 acres to accommodate
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Animal & Shelter</h3>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Water & Infrastructure</h3>
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
                Working Shed
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="bg-white rounded-none shadow-none p-8 text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Machinery & Facilities</h3>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-center text-left">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                Shredding Machine
              </li>
              <li className="flex items-center text-left">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                Compressing Machine
              </li>
              <li className="flex items-center text-left">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                Mixer Machine + Hopper
              </li>
              <li className="flex items-center text-left">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                Stores & Security Office
              </li>
              <li className="flex items-center text-left">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                Labor Colony
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-align-left">
          <div className="bg-green-50 rounded-none p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Target Planned</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <div className="text-4xl font-bold text-green-600 mb-2">108</div>
                <div className="text-lg text-gray-700">OMP</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">972</div>
                <div className="text-lg text-gray-700">Gaushala</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold text-green-600 mb-2">01</div>
                <div className="text-lg text-gray-700">Established</div>
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
            We are pioneers in sustainable agriculture, dedicated to revolutionizing farming practices 
            through innovative organic manure solutions.
          </p>
        </div>

        {/* Principal Promoter */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white rounded-2xl shadow-lg border border-green-100 p-8 max-w-md">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center text-center mx-auto mb-6">
              <span className="text-3xl font-bold text-green-600">SC</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">SRINIVAS CHADA</h3>
            <p className="text-lg text-gray-600 mb-2">Director - Strategic Planning & Management</p>
            <p className="text-green-600 font-semibold">Principal Promoter of MAPL</p>
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
          {/* Andhra Pradesh */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Andhra Pradesh</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Business Associate</h4>
                <p className="text-gray-600">Mrs Nirmala Vommi</p>
              </div>
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Business Associate</h4>
                <p className="text-gray-600">Dr Radhika</p>
              </div>
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Business Associate</h4>
                <p className="text-gray-600">Mrs Neeladri G. Chanadana</p>
              </div>
            </div>
          </div>

          {/* Maharashtra */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Maharashtra</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Business Associate</h4>
                <p className="text-gray-600">Mrs Manisha Mohte</p>
              </div>
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Business Associate</h4>
                <p className="text-gray-600">Mrs. Archana Kharbore</p>
              </div>
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Business Associate</h4>
                <p className="text-gray-600">-</p>
              </div>
            </div>
          </div>

          {/* Global Facility */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Global Facility</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Business Associate</h4>
                <p className="text-gray-600">Mrs Mashabe</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our innovative projects that are transforming agriculture and promoting sustainability.
          </p>
        </div>

        {/* Project Categories */}
        <div className="space-y-12">
          {/* Organic Manure Production */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Andhra Pradesh</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Type</h4>
                <p className="text-gray-600">Large Scale Production</p>
                <p className="text-green-600 font-semibold mt-2">Capacity: 5000 tons/year</p>
              </div>
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Type</h4>
                <p className="text-gray-600">Medium Scale Production</p>
                <p className="text-green-600 font-semibold mt-2">Capacity: 2000 tons/year</p>
              </div>
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Type</h4>
                <p className="text-gray-600">Small Scale Production</p>
                <p className="text-green-600 font-semibold mt-2">Capacity: 500 tons/year</p>
              </div>
            </div>
          </div>

          {/* Research & Development */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Maharashtra</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Type</h4>
                <p className="text-gray-600">Soil Health Studies</p>
                <p className="text-green-600 font-semibold mt-2">Duration: 2-3 years</p>
              </div>
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Type</h4>
                <p className="text-gray-600">Crop Yield Analysis</p>
                <p className="text-green-600 font-semibold mt-2">Duration: 1-2 years</p>
              </div>
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Type</h4>
                <p className="text-gray-600">Technology Innovation</p>
                <p className="text-green-600 font-semibold mt-2">Duration: Ongoing</p>
              </div>
            </div>
          </div>

          {/* Community Outreach */}
          {/* <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Madhya Pradesh</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Type</h4>
                <p className="text-gray-600">Farmer Training Programs</p>
                <p className="text-green-600 font-semibold mt-2">Reach: 1000+ farmers</p>
              </div>
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Type</h4>
                <p className="text-gray-600">Educational Workshops</p>
                <p className="text-green-600 font-semibold mt-2">Reach: 500+ participants</p>
              </div>
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Type</h4>
                <p className="text-gray-600">Demonstration Farms</p>
                <p className="text-green-600 font-semibold mt-2">Reach: 50+ locations</p>
              </div>
            </div>
          </div> */}

          {/* Infrastructure Development */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Global Facility</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Type</h4>
                <p className="text-gray-600">Processing Units</p>
                <p className="text-green-600 font-semibold mt-2">Status: In Progress</p>
              </div>
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Type</h4>
                <p className="text-gray-600">Storage Facilities</p>
                <p className="text-green-600 font-semibold mt-2">Status: Completed</p>
              </div>
              <div className="bg-white rounded-none shadow-none border border-green-100 p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Type</h4>
                <p className="text-gray-600">Distribution Centers</p>
                <p className="text-green-600 font-semibold mt-2">Status: Planning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-green-600">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to learn more about our organic manure solutions 
            and sustainable farming initiatives.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center text-left flex-shrink-0">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-gray-600">+91 98765 43211</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center text-left flex-shrink-0">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">info@organicmanurepark.com</p>
                <p className="text-gray-600">support@organicmanurepark.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center text-left flex-shrink-0">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600">Organic Manure Park</p>
                <p className="text-gray-600">Agricultural District, India</p>
                <p className="text-gray-600">PIN: 123456</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
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

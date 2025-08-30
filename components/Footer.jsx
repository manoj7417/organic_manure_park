import { Leaf, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-emerald-800 to-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Leaf className="w-8 h-8 text-green-300" />
              <span className="text-xl font-bold">Organic Manure Park</span>
            </div>
            <p className="text-green-100 leading-relaxed">
              Leading the way in sustainable agriculture with innovative organic
              solutions that benefit both farmers and the environment.
            </p>
            <p className="text-green-100">
              <span className="font-medium">Promoted by:</span>
              <br />
              MaAMMA Agribusiness Pvt Ltd
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-green-100 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#park"
                  className="text-green-100 hover:text-white transition-colors duration-200"
                >
                  Organic Manure Park
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-green-100 hover:text-white transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-green-100 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-300" />
                <span className="text-green-100">+91 8080738225</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-300" />
                <span className="text-green-100">info@agrovillage.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <div className="text-green-100">
                  <div>B-402, Brindavan Apts,</div>
                  <div>Krishnanagar ,Maharanipeta, Vishakapatanam – 530002</div>
                  <div>Andhra Pradesh, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <div className="space-y-2">
              <p className="text-green-100 text-sm">
                A leading name in sustainable agriculture and organic farming
                solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-green-100 text-sm">
              © 2025 All rights reserved with MaAmma Agribusiness Pvt Ltd ,
              India RoC No :{" "}
              <span className="font-bold">U47912AP2024PTC115516</span>
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-green-100 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-green-100 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

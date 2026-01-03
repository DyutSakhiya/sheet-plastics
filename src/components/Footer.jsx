import React from "react";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-blue-950 to-black text-white pt-16 pb-8">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6">
              <img 
                src="/sanidhy LOGO.png" 
                alt="Sanidhy Polytech" 
                className="w-48 mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-300 text-sm font-medium">A Quality That Matters</p>
              <p className="text-gray-400 text-xs mt-2">ISO 9001:2015 Certified</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-gray-300 ">Quick Links</h3>
            <ul className="flex flex-col gap-4 text-sm md:text-base">
              <li>
                <a href="/" className="text-gray-300 hover:text-orange-400 hover:pl-2 transition-all duration-300 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-300 hover:text-orange-400 hover:pl-2 transition-all duration-300 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-orange-400 hover:pl-2 transition-all duration-300 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-orange-400 hover:pl-2 transition-all duration-300 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-gray-300">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group cursor-pointer">
                <Phone className="w-5 h-5 text-orange-400 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300 font-medium group-hover:text-orange-400 transition-colors">+91 94086 64918</p>
                  <p className="text-gray-500 text-sm">Mon-Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group cursor-pointer">
                <Mail className="w-5 h-5 text-orange-400 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-gray-300 font-medium group-hover:text-orange-400 transition-colors">sanidhyapolytech@gmail.com</p>
                  <p className="text-gray-500 text-sm">Response within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 text-gray-300">Our Location</h3>
            <div className="flex items-start gap-3 group cursor-pointer">
              <MapPin className="w-5 h-5 text-orange-400 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
              <p className="text-gray-300 text-sm group-hover:text-orange-400 transition-colors">
                Plot no 11/12 R K Industrial Zone 9<br />
                Kuwadva Wankaner main road at Ranpur<br />
                Rajkot 360023, Gujarat, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 md:mt-16 mb-8 md:mb-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center text-sm md:text-base text-gray-400">
            Copyright © {new Date().getFullYear()} SANIDHYAL POLYTECH PVT. LTD. All rights reserved.
          </p>
          
          <p className="text-center text-sm md:text-base text-gray-400 mt-4 md:mt-0">
            Designed and developed by{" "}
            <span className="text-orange-400 hover:underline cursor-pointer">Ideate Labs</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
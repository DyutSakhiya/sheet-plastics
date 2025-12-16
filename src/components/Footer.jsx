import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-20">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo.jpg" alt="Siddhi Plast" className="w-20" />

            <div className="flex items-center gap-2 mt-21 cursor-pointer hover:underline group">
              <span className="text-sm md:text-base hover:text-orange-600">91574-33685</span>
              <ArrowRight className="w-4 md:w-5 group-hover:rotate-300 transition-transform" />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <ul className="flex flex-col md:flex-row md:justify-between gap-3 md:gap-0 text-sm md:text-base mr-35  w-[770px] ml-[125px]">
              <li>
                <a href="/" className="hover:text-orange-600 block text-center md:text-left">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-orange-600 block text-center md:text-left">
                  Product
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-orange-600 block text-center md:text-left">
                  About us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-600 block text-center md:text-left">
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-2 mt-6 md:mt-28 cursor-pointer group">
              <span className="text-sm md:text-base hover:text-orange-600 hover:underline">94088-41260</span>
              <ArrowRight className="w-4 md:w-5 group-hover:rotate-300 transition-transform" />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start justify-center  mt-27 group">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-sm md:text-base hover:text-orange-600 hover:underline text-center md:text-left">
                IdeateLabs@gmail.com
              </span>
              <ArrowRight className="w-4 md:w-5 group-hover:rotate-300 transition-transform" />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start justify-center pt-28  group">
            <div className="flex items-start gap-2 cursor-pointer ">
              <span className="text-sm md:text-base hover:text-orange-600 hover:underline text-center md:text-left">
                150 Feet Ring Road, Mavdi Circle, nr. ITC Fortune Hotel,
                Rajkot, Gujarat 360004
              </span>
              <ArrowRight className="w-6 md:w-10  mt-5 group-hover:rotate-300 transition-transform" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 md:mt-16 mb-8 md:mb-10"></div>

        <p className="text-center text-xs md:text-sm text-gray-400">
          Copyright © {new Date().getFullYear()} all rights reserved
        </p>

        <p className="text-center text-xs md:text-sm text-gray-400 mt-2 cursor-pointer">
          Designed and developed by <span className="hover:underline">Ideate Labs</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
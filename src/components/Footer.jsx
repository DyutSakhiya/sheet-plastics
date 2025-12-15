import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-[1300px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 justify-center ">
          <div>
            <img src="/logo.jpg" alt="Siddhi Plast" className="w-20  " />

            <div className="flex items-center gap-2 mb-6 cursor-pointer mt-6 hover:underline group ">
              <span className="text-base hover:text-orange-600 hover:underline">91574-33685</span>
              <ArrowRight className="w-5 group-hover:rotate-300" />
            </div>
          </div>

          <div className="">
            <ul className="space-y-4 text-base flex justify-between w-[770px] ml-[125px] ">
              <li>
                <a href="/" className=" hover:text-orange-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className=" hover:text-orange-600">
                  Product
                </a>
              </li>
              <li>
                <a href="/about" className=" hover:text-orange-600">
                  About us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-600 ">
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-2 mt-10 cursor-pointer  group ">
              <span className="text-base hover:text-orange-600 hover:underline">94088-41260</span>
              <ArrowRight className="w-5 group-hover:rotate-300" />
            </div>
          </div>

          <div className=" flex flex-col justify-center mt-15  group ">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-base hover:text-orange-600 hover:underline">IdeateLabs@gmail.com</span>
              <ArrowRight className="w-5 group-hover:rotate-300 " />
            </div>
          </div>

          <div className="flex flex-col justify-center mt-15  group">
            <div className="flex items-center gap-2 cursor-pointer ">
              <span className="text-base hover:text-orange-600 hover:underline">
                150 Feet Ring Road, Mavdi Circle, nr. ITC Fortune Hotel,
                Rajkot, Gujarat 360004
              </span>
              <ArrowRight className="w-10 group-hover:rotate-300" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 mb-10"></div>

        <p className="text-center text-sm text-gray-400">
          Copyright (C) {new Date().getFullYear()} all rights reserved
        </p>

        <p className="text-center text-sm text-gray-400 mt-2 cursor-pointer">
          Designed and developed by <span className="hover:underline">Ideate Labs</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

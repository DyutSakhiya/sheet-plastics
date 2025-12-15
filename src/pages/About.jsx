// src/pages/About.jsx
import React from "react";
import {
  FaBoxOpen,
  FaTruck,
  FaAward,
  FaSearch,
  FaMoneyBillAlt,
  FaHeadset,
  FaCalendarAlt,
  FaIndustry,
  FaGlobeAmericas,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen">
      <style>{`
        .hover-scale:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
        
        .hover-rotate:hover {
          transform: rotate(2deg);
          transition: transform 0.3s ease;
        }
        
        .hover-brightness:hover {
          filter: brightness(1.1);
          transition: filter 0.3s ease;
        }
        
        .hover-shadow:hover {
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          transition: box-shadow 0.3s ease;
        }
        
        .hover-zoom:hover {
          transform: scale(1.08);
          transition: transform 0.4s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          transition: transform 0.3s ease;
        }
        
        .hover-glow:hover {
          box-shadow: 0 0 15px rgba(255, 165, 0, 0.5);
          transition: box-shadow 0.3s ease;
        }
        
        .hover-pulse:hover {
          animation: pulse 0.5s ease-in-out;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
      
      <div className="bg-about-banner h-50 flex flex-col justify-center items-center text-white">
        <img src="/public/about1.jpg" alt="About banner" className="hover-zoom hover-shadow" />
        <h1 className="text-4xl font-bold">ABOUT US</h1>
        <p className="text-sm bg-about-breadcrumb px-3 py-1 mt-2 font-medium">
          HOME - ABOUT US
        </p>
      </div>

      <div className="relative text-center py-30 bg-gradient-to from-[#ffffff] to-[#f4f4f4]">
        <h1 className="text-4xl font-bold text-black">
          Manufacturing Excellence in
        </h1>
        <h2 className="text-4xl font-bold text-black mt-1">
          the Plastic Industry Since 1999
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-4">
          Our efficient infrastructure and skilled team meet bulk demands
          promptly with advanced production, ensuring quick dispatch of
          products.
        </p>
      </div>

      <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <div className="grid grid-cols-3 text-white text-center">
          <div className="bg-orange-300 from-[#ff4500] to-[#ff6a00] py-8 hover-lift hover-glow hover-pulse">
            <FaCalendarAlt className="text-3xl mx-auto mb-2" />
            <h2 className="text-2xl font-bold">15,000+</h2>
            <p className="text-sm">Sheets produced per day</p>
          </div>

          <div className="bg-orange-400 from-[#ff6a00] to-[#ff7a20] py-8 hover-lift hover-glow hover-pulse">
            <FaIndustry className="text-3xl mx-auto mb-2" />
            <h2 className="text-2xl font-bold">30,000+ sq ft</h2>
            <p className="text-sm">Floor area of factory</p>
          </div>

          <div className="bg-orange-500 from-[#ff7a20] to-[#ff8840] py-8 hover-lift hover-glow hover-pulse">
            <FaGlobeAmericas className="text-3xl mx-auto mb-2" />
            <h2 className="text-2xl font-bold">15+</h2>
            <p className="text-sm">Exported to countries</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-20 px-5 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            From Raw Materials to
          </h3>
          <h2 className="text-3xl font-bold text-black mt-1">
            Unrivaled Excellence
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Our expert team guarantees quality by using premium materials and a
            client-centric approach. We offer tailored solutions that drive
            long-term success, backed by our certified Grade Export House.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
         
          <img
            src="/row material.jpg"
            alt="Raw Material"
            className="rounded-2xl h-40 w-full object-cover shadow-md hover-scale hover-rotate hover-brightness"
          />

         
          <img
            src="/factory.jpg"
            alt="Quality Inspection"
            className="rounded-2xl h-[340px] w-full object-cover row-span-2 shadow-md hover-scale hover-rotate hover-brightness"
          />

          <img
            src="/sheet.jpg"
            alt="Finished Products"
            className="rounded-2xl h-40 w-full object-cover shadow-md hover-scale hover-rotate hover-brightness"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 pb-20 grid md:grid-cols-2 gap-14">
        <img
          src="/factory1.jpg"
          className="rounded-xl w-full h-72 object-cover hover-scale hover-rotate hover-brightness"
          alt="Factory facility"
        />

        <div>
          <h2 className="text-3xl font-bold text-black">
            Your One-Stop Source for <br />
            <span className="text-orange-600">Quality Solutions</span>
          </h2>

          <p className="text-gray-600 mt-4">
            We are one of the leading organizations involved in the provision of
            superior quality corrugated sheets with government-certified ISO
            9001:2015 standards.
          </p>
        </div>
      </div>

      <div className="py-20 bg-orange-500 from-[#ff3b23] via-[#ff6a00] to-[#ffa366] text-white text-center">
        <h2 className="text-4xl font-semibold">
          Reasons That Have Contributed to Our
        </h2>
        <h1 className="text-2xl font-bold mt-1 ">Remarkable Success Journey</h1>

        <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto ">
          <div className="text-center">
            <FaBoxOpen className="text-4xl mx-auto mb-2" />
            <p className="font-medium">Extensive Collection</p>
          </div>

          <div className="text-center">
            <FaTruck className="text-4xl mx-auto mb-2" />
            <p className="font-medium">Timely Delivery</p>
          </div>

          <div className="text-center">
            <FaAward className="text-4xl mx-auto mb-2" />
            <p className="font-medium">Business Morals</p>
          </div>

          <div className="text-center">
            <FaSearch className="text-4xl mx-auto mb-2" />
            <p className="font-medium">Quality Inspectors</p>
          </div>

          <div className="text-center">
            <FaMoneyBillAlt className="text-4xl mx-auto mb-2" />
            <p className="font-medium">Affordable Pricing</p>
          </div>

          <div className="text-center">
            <FaHeadset className="text-4xl mx-auto mb-2" />
            <p className="font-medium">Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
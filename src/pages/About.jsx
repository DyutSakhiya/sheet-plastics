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
  FaChevronRight,
  FaCheckCircle,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 to-orange-600/80 z-10"></div>
        <img 
          src="/public/about1.jpg" 
          alt="About banner" 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">ABOUT US</h1>
          <p className="text-xl mb-6 text-center max-w-2xl">
            Pioneering Excellence in Plastic Manufacturing Since 1999
          </p>
          <div className="flex items-center space-x-2 text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="font-medium">HOME</span>
            <FaChevronRight className="text-xs" />
            <span className="font-bold">ABOUT US</span>
          </div>
        </div>
      </div>

      <div className="relative py-20 bg-linear-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-100 rounded-full translate-x-32 translate-y-32"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Manufacturing Excellence in the <span className="text-blue-600">Plastic Industry</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over two decades of expertise, we have established ourselves as a trusted leader 
              in producing high-quality plastic sheets, combining innovation with reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: FaCalendarAlt, value: "15,000+", label: "Sheets produced per day", color: "from-blue-500 to-blue-600" },
              { icon: FaIndustry, value: "30,000+ sq ft", label: "Factory floor area", color: "from-blue-600 to-blue-700" },
              { icon: FaGlobeAmericas, value: "15+", label: "Countries exported to", color: "from-blue-700 to-blue-800" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-full bg-linear-to-r ${stat.color} flex items-center justify-center mb-6 mx-auto`}>
                  <stat.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600 text-center">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 mb-6">
                <FaCheckCircle className="mr-2" />
                <span className="font-semibold">Certified Excellence</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                From Raw Materials to <span className="text-blue-600">Unrivaled Excellence</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our expert team guarantees quality by using premium materials and a client-centric 
                approach. We offer tailored solutions that drive long-term success, backed by our 
                certified Grade Export House.
              </p>
              
              <div className="space-y-4">
                {[
                  "ISO 9001:2015 Certified",
                  "Government Approved Manufacturing",
                  "Quality Control at Every Stage",
                  "Environmentally Conscious Production"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src="/row material.jpg"
                  alt="Raw Material"
                  className="rounded-2xl h-48 w-full object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="/sheet.jpg"
                  alt="Finished Products"
                  className="rounded-2xl h-48 w-full object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <img
                  src="/factory.jpg"
                  alt="Quality Inspection"
                  className="rounded-2xl h-full w-full object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="py-20 bg-linear-to-r from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/factory1.jpg"
                className="rounded-3xl w-full h-[400px] object-cover shadow-2xl"
                alt="Factory facility"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <FaShieldAlt className="text-4xl text-blue-600 mb-2" />
                <p className="font-bold text-gray-900">ISO 9001:2015</p>
                <p className="text-sm text-gray-600">Certified Facility</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your One-Stop Source for <span className="text-blue-600">Quality Solutions</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We are one of the leading organizations involved in the provision of superior 
                quality corrugated sheets with government-certified ISO 9001:2015 standards.
              </p>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <FaUsers className="text-2xl text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Expert Team</h3>
                </div>
                <p className="text-gray-600">
                  Our skilled professionals with decades of experience ensure every product 
                  meets the highest quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-linear-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Reasons That Have Contributed to Our
            </h2>
            <h3 className="text-3xl text-orange-300 font-semibold">
              Remarkable Success Journey
            </h3>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FaBoxOpen, title: "Extensive Collection", desc: "Wide range of products to meet diverse needs" },
              { icon: FaTruck, title: "Timely Delivery", desc: "On-time dispatch with efficient logistics" },
              { icon: FaAward, title: "Business Ethics", desc: "Transparent and ethical business practices" },
              { icon: FaSearch, title: "Quality Assurance", desc: "Rigorous quality checks at every stage" },
              { icon: FaMoneyBillAlt, title: "Competitive Pricing", desc: "Best value without compromising quality" },
              { icon: FaHeadset, title: "24/7 Support", desc: "Round-the-clock customer assistance" },
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 group"
              >
                <div className="w-16 h-16 rounded-full bg-linear-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-2xl" />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 bg-linear-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Quality Manufacturing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with us for premium plastic sheets that exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">

            <button className="px-8 py-3 bg-white text-blue-700 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Request a Quote
            </button>
            </Link>
             <Link to="/products">
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
              View Products
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
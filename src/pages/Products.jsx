import React, { useState } from "react";
import {
  FaIndustry,
  FaMicrochip,
  FaLeaf,
  FaTshirt,
  FaBuilding,
  FaUtensils,
} from "react-icons/fa";

const Products = () => {
  const [selectedColor, setSelectedColor] = useState("orange");

  const colorImages = {
    orange: "/product/product.jpg",
    black: "/product/black product.jpg",
    yellow: "/product/yellow product.jpg",
    red: "/product/red product.jpg",
    green: "/product/green product.jpg",
    blue: "/product/blue product.jpg",
    gray: "/product/grey product.jpg",
  };

  const colors = {
    logoPrimary: "#1A365D",      
    logoAccent: "#2D5AA0",       
    brandTeal: "#00A8A8",        
    brandGold: "#D4AF37",     
    
    neutralDark: "#2C3E50",      
    neutralGray: "#7F8C8D",     
    neutralLight: "#F8F9FA",     
    neutralWhite: "#FFFFFF",    
    
    complementary: "#E74C3C",   
    success: "#27AE60",         
    warning: "#F39C12",         
  };

  return (
    <div className="w-full" style={{ backgroundColor: colors.neutralLight }}>

      

      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <img
            src={colorImages[selectedColor]}
            alt="PP Sheets"
            className="w-80 h-96 object-cover rounded-xl shadow-lg transition-all duration-300"
            style={{ 
              border: `4px solid ${colors.logoAccent}`,
              boxShadow: `0 10px 30px rgba(0, 0, 0, 0.1)`
            }}
          />
        </div>

        <div>
          <h2 
            className="text-3xl font-bold" 
            style={{ color: colors.logoPrimary }}
          >
            PP Corrugated Sheets
          </h2>
          <p className="mt-2" style={{ color: colors.neutralGray }}>
            We are engaged in leading manufacturer of PP corrugated sheets, who always
            gives priority to quality.
          </p>

          <p className="mt-4 font-semibold" style={{ color: colors.logoPrimary }}>
            Color:
          </p>
          <div className="flex gap-3 mt-2 flex-wrap">
            {Object.keys(colorImages).map((color) => (
              <span
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-9 h-9 rounded-full border-2 cursor-pointer transition-all duration-300 hover:scale-110
                ${selectedColor === color ? "ring-4" : ""}`}
                style={{ 
                  backgroundColor: color,
                  borderColor: colors.logoPrimary,
                  boxShadow: selectedColor === color ? `0 0 0 4px ${colors.brandGold}` : `0 2px 5px rgba(0,0,0,0.1)`
                }}
              ></span>
            ))}
          </div>

          <ul className="mt-6 space-y-2" style={{ color: colors.neutralDark }}>
            <li className="flex items-center">
              <span 
                className="inline-block w-2 h-2 mr-3 rounded-full"
                style={{ backgroundColor: colors.brandTeal }}
              ></span>
              Thickness: 1.5mm to 12mm
            </li>
            <li className="flex items-center">
              <span 
                className="inline-block w-2 h-2 mr-3 rounded-full"
                style={{ backgroundColor: colors.brandTeal }}
              ></span>
              Width: Upto 2200 mm
            </li>
            <li className="flex items-center">
              <span 
                className="inline-block w-2 h-2 mr-3 rounded-full"
                style={{ backgroundColor: colors.brandTeal }}
              ></span>
              Flute Pattern: Straight type
            </li>
            <li className="flex items-center">
              <span 
                className="inline-block w-2 h-2 mr-3 rounded-full"
                style={{ backgroundColor: colors.brandTeal }}
              ></span>
              Material: PP, impact co-polymer
            </li>
            <li className="flex items-center">
              <span 
                className="inline-block w-2 h-2 mr-3 rounded-full"
                style={{ backgroundColor: colors.brandTeal }}
              ></span>
              Special Property: Anti static & ESD (Conductive)
            </li>
            <li className="flex items-center">
              <span 
                className="inline-block w-2 h-2 mr-3 rounded-full"
                style={{ backgroundColor: colors.brandTeal }}
              ></span>
              Special Colour: Any colour considering MOQ
            </li>
          </ul>
        </div>
      </section>

      <section 
        className="py-16 text-center text-white relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${colors.logoPrimary} 0%, ${colors.brandTeal} 100%)`
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full" style={{ backgroundColor: colors.brandGold }}></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full" style={{ backgroundColor: colors.neutralWhite }}></div>
        </div>
        <div className="relative z-10">
          <h3 className="text-4xl font-extrabold">
            Serving Various Industries <span className="font-normal" style={{ color: colors.brandGold }}>With Our Sheets</span>
          </h3>
          <p className="text-lg mt-3 opacity-90">
            Versatile sheets for diverse industries, serving various applications.
          </p>
        </div>
      </section>

      <section 
        className="py-14"
        style={{ backgroundColor: colors.neutralLight }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-center">
          {[
            { icon: FaIndustry, text: "Industrial Packaging" },
            { icon: FaMicrochip, text: "Electronic" },
            { icon: FaLeaf, text: "Agriculture Gardening" },
            { icon: FaUtensils, text: "Food & FMCG" },
            { icon: FaTshirt, text: "Textile & Clothing" },
            { icon: FaBuilding, text: "Building & Construction" },
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div 
                className="w-20 h-20 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 group-hover:shadow-2xl"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.brandTeal} 0%, ${colors.logoAccent} 100%)`,
                  boxShadow: `0 5px 15px rgba(0, 168, 168, 0.2)`
                }}
              >
                <item.icon 
                  className="text-white text-3xl transform transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <p 
                className="mt-4 font-semibold text-lg transition-colors duration-300"
                style={{ color: colors.logoPrimary }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold" style={{ color: colors.logoPrimary }}>
          Explore Our Range <span className="font-normal" style={{ color: colors.brandTeal }}>of Sheets</span>
        </h2>
        <p className="text-center text-xl mt-2" style={{ color: colors.neutralGray }}>
          Premium Quality Based Offerings
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            { 
              img: "/public/boxes.jpg", 
              title: "Boxes & Crates", 
              desc: "Robust and durable boxes designed for effortless transportation.",
              color: colors.brandTeal
            },
            { 
              img: "/public/floor protectors.jpg", 
              title: "Floor Protectors", 
              desc: "High-quality floor protectors to preserve and enhance the longevity of floors.",
              color: colors.logoAccent
            },
            { 
              img: "/public/displaystands.jpg", 
              title: "Display Stands", 
              desc: "Cost-effective displays available in various thicknesses. Ideal for advertising.",
              color: colors.brandGold
            },
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ 
                borderTop: `4px solid ${item.color}`,
                boxShadow: `0 5px 15px rgba(0,0,0,0.08)`
              }}
            >
              <img
                src={item.img}
                className="w-full h-48 object-cover rounded-md"
                alt={item.title}
              />
              <h3 className="font-bold text-xl mt-4" style={{ color: colors.logoPrimary }}>
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {item.desc}
              </p>
              <button
                className="mt-4 px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-md"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.brandTeal} 0%, ${colors.logoAccent} 100%)`,
                  color: "white",
                  boxShadow: `0 4px 10px rgba(0, 168, 168, 0.3)`
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = `linear-gradient(135deg, ${colors.logoAccent} 0%, ${colors.brandTeal} 100%)`;
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = `linear-gradient(135deg, ${colors.brandTeal} 0%, ${colors.logoAccent} 100%)`;
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer 
        className="py-8 text-center"
        style={{ 
          backgroundColor: colors.logoPrimary,
          color: colors.neutralWhite
        }}
      >
        
      </footer>
    </div>
  );
};

export default Products;
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

  return (
    <div className="w-full">

      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">

        <div className="flex justify-center">
          <img
            src={colorImages[selectedColor]}
            alt="PP Sheets"
            className="w-80 h-96 object-cover rounded-xl shadow-lg transition-all duration-300"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900">PP Corrugated Sheets</h2>
          <p className="text-gray-600 mt-2">
            We are engaged in leading manufacturer of PP corrugated sheets, who always
            gives priority to quality.
          </p>

          <p className="mt-4 font-semibold">Color:</p>
          <div className="flex gap-3 mt-2">
            {Object.keys(colorImages).map((color) => (
              <span
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-7 h-7 rounded-full border cursor-pointer transition 
                ${selectedColor === color ? "ring-2 ring-black" : ""}`}
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>• Thickness: 1.5mm to 12mm</li>
            <li>• Width: Upto 2200 mm</li>
            <li>• Flute Pattern: Straight type</li>
            <li>• Material: PP, impact co-polymer</li>
            <li>• Special Property: Anti static & ESD (Conductive)</li>
            <li>• Special Colour: Any colour considering MOQ</li>
          </ul>
        </div>
      </section>

      <section className="bg-orange-600 bg-gradient from-orange-600 to-orange-500 py-16 text-center text-white">
        <h3 className="text-4xl font-extrabold">
          Serving Various Industries <span className="font-normal">With Our Sheets</span>
        </h3>
        <p className="text-lg mt-3 opacity-90">
          Versatile sheets for diverse industries, serving various applications.
        </p>
      </section>

      <section className="py-14 bg-orange-200 flex ">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-center">

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md">
              <FaIndustry className="text-orange-600 text-3xl" />
            </div>
            <p className="mt-3 font-semibold">Industrial Packaging</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md">
              <FaMicrochip className="text-orange-600 text-3xl" />
            </div>
            <p className="mt-3 font-semibold">Electronic</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md">
              <FaLeaf className="text-orange-600 text-3xl" />
            </div>
            <p className="mt-3 font-semibold">Agriculture Gardening</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md">
              <FaUtensils className="text-orange-600 text-3xl" />
            </div>
            <p className="mt-3 font-semibold">Food & FMCG</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md">
              <FaTshirt className="text-orange-600 text-3xl" />
            </div>
            <p className="mt-3 font-semibold">Textile & Clothing</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md">
              <FaBuilding className="text-orange-600 text-3xl" />
            </div>
            <p className="mt-3 font-semibold">Building & Construction</p>
          </div>

        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-center text-3xl font-bold">
          Explore Our Range <span className="font-normal">of Sheets</span>
        </h2>
        <p className="text-center text-2xl text-gray-600 mt-2">Based Offerings</p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">

          <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
            <img
              src="/public/boxes.jpg"
              className="w-full h-48 object-cover rounded-md"
              alt="Boxes"
            />
            <h3 className="font-bold text-lg mt-4">Boxes & Crates</h3>
            <p className="text-gray-600 text-sm">
              Robust and durable boxes designed for effortless transportation.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
            <img
              src="/public/floor protectors.jpg"
              className="w-full h-48 object-cover rounded-md"
              alt="Floor Protectors"
            />
            <h3 className="font-bold text-lg mt-4">Floor Protectors</h3>
            <p className="text-gray-600 text-sm">
              High-quality floor protectors to preserve and enhance the longevity of floors.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition">
            <img
              src="/public/displaystands.jpg"
              className="w-full h-48 object-cover rounded-md"
              alt="Display Stands"
            />
            <h3 className="font-bold text-lg mt-4">Display Stands</h3>
            <p className="text-gray-600 text-sm">
              Cost-effective displays available in various thicknesses. Ideal for advertising.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Products;

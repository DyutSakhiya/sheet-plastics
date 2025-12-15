import React, { useEffect } from 'react';
import { Zap, Feather, ShieldCheck, Droplet } from 'lucide-react'; 
import { Link } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: Zap, title: 'Durable', description: 'Engineered for maximum resilience and long service life.' },
    { icon: Feather, title: 'Light Weight', description: 'Easy to handle and transport, reducing logistics costs.' },
    { icon: ShieldCheck, title: 'Recyclable', description: 'Eco-friendly PP material promotes sustainability.' },
    { icon: Droplet, title: 'Water Proof', description: 'Impervious to moisture, ideal for harsh environments.' },
  ];

  return (
    <div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        /* SLOW MOTION ANIMATIONS */
        @keyframes slowFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes slowPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.02); opacity: 0.95; }
        }
        
        @keyframes slowSlideLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slowSlideRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slowFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slowWave {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(2px); }
          75% { transform: translateX(-2px); }
        }
        
        @keyframes slowGlow {
          0%, 100% { box-shadow: 0 0 5px rgba(255, 165, 0, 0.1); }
          50% { box-shadow: 0 0 10px rgba(255, 165, 0, 0.3); }
        }
        
        @keyframes slowBounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
          60% { transform: translateY(-2px); }
        }
        
        @keyframes slowZoom {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        /* SLOW MOTION CLASSES */
        .animate-slow-float {
          animation: slowFloat 4s ease-in-out infinite;
        }
        
        .animate-slow-pulse {
          animation: slowPulse 3s ease-in-out infinite;
        }
        
        .animate-slow-slide-left {
          animation: slowSlideLeft 1.2s ease-out forwards;
        }
        
        .animate-slow-slide-right {
          animation: slowSlideRight 1.2s ease-out forwards;
        }
        
        .animate-slow-fade-in {
          animation: slowFadeIn 1.2s ease-out forwards;
        }
        
        .animate-slow-wave {
          animation: slowWave 2s ease-in-out infinite;
        }
        
        .animate-slow-glow {
          animation: slowGlow 3s ease-in-out infinite;
        }
        
        .animate-slow-bounce {
          animation: slowBounce 3s infinite;
        }
        
        .animate-slow-zoom {
          animation: slowZoom 1.5s ease-out forwards;
        }
        
        /* Button hover effects */
        .hover-lift:hover {
          transform: translateY(-3px);
          transition: transform 0.4s ease;
        }
        
        .hover-slow-lift:hover {
          transform: translateY(-2px);
          transition: transform 0.6s ease;
        }
        
        /* Image hover effect */
        .hover-scale:hover {
          transform: scale(1.03);
          transition: transform 0.8s ease;
        }
        
        .hover-slow-scale:hover {
          transform: scale(1.02);
          transition: transform 1s ease;
        }
        
        .hover-slow-brightness:hover {
          filter: brightness(1.05);
          transition: filter 0.6s ease;
        }
        
        /* Initial state for animations */
        section {
          opacity: 0;
        }
      `}</style>
      
      <section className="bg-gray-300 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-siddhi-dark leading-tight animate-slow-slide-left">
              India's Top Manufacturer of <span className="text-siddhi-primary animate-slow-wave">PP Corrugated Sheets</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 animate-slow-slide-left" style={{animationDelay: '0.3s'}}>
              Providing exceptional, high-quality products that have gained the trust and loyalty of customers around the world since 1999.
            </p>
           <Link to="/products">
        <button className="mt-8 px-8 py-3 bg-orange-400 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 cursor-pointer hover-slow-lift animate-slow-pulse">
          Explore Our Products
        </button>
      </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-96 h-64 bg-gray-300 rounded-lg flex items-center justify-center text-gray-700 hover-slow-scale">
              <img 
              src="/public/hero.jpg" className="w-full h-full object-cover hover-slow-brightness animate-slow-zoom"></img>
            </div>
          </div>
        </div>
      </section>

     
<section className="bg-black text-white py-20">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

    <div>
      <h2 className="text-4xl font-light animate-slow-fade-in">
        Our <span className="font-semibold animate-slow-glow">Achievements</span>
      </h2>

      <p className="mt-6 text-gray-300 leading-relaxed animate-slow-fade-in" style={{animationDelay: '0.4s'}}>
        Providing exceptional, high-quality products that have gained the trust
        and loyalty of customers around the world. Our commitment to excellence 
        ensures that our products meet global standards, fostering enduring 
        relationships with clients everywhere.
      </p>
    </div>

    <div className="relative flex flex-col gap-12 pl-14 md:pl-20">

      <div className="absolute left-0 top-0 bottom-0 w-1.5 h-[370px] bg-gray-700 from-gray-800 via-gray-600 to-gray-800 
                      shadow-[0_0_10px_rgba(255,255,255,0.1)] animate-slow-glow"></div>

      <div className="absolute -left-2 top-0 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm animate-slow-float" style={{animationDelay: '0.2s'}}>1</div>
      <div className="absolute -left-2 top-[110px] w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm animate-slow-float" style={{animationDelay: '0.5s'}}>2</div>
      <div className="absolute -left-2 top-[225px] w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm animate-slow-float" style={{animationDelay: '0.8s'}}>3</div>
      <div className="absolute -left-2 top-[340px] w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm animate-slow-float" style={{animationDelay: '1.1s'}}>4</div>

      <div className="relative animate-slow-fade-in" style={{animationDelay: '0.2s'}}>
        <div className="absolute -left-14 md:-left-20 top-6 w-14 md:w-20">
          <div className="w-full h-px bg-white/30 transform origin-left rotate-[-30deg] animate-slow-pulse"></div>
        </div>
        
        <h3 className="text-4xl font-bold">30,000+ sq ft</h3>
        <p className="text-gray-400">Floor area of factory</p>
      </div>

      <div className="relative animate-slow-fade-in" style={{animationDelay: '0.5s'}}>
        <div className="absolute -left-14 md:-left-20 top-6 w-14 md:w-20">
          <div className="w-full h-px bg-white/30 transform origin-left rotate-[-30deg] animate-slow-pulse" style={{animationDelay: '0.3s'}}></div>
        </div>
        
        <h3 className="text-4xl font-bold">15,000+</h3>
        <p className="text-gray-400">Sheets produced per day</p>
      </div>

      <div className="relative animate-slow-fade-in" style={{animationDelay: '0.8s'}}>
        <div className="absolute -left-14 md:-left-20 top-6 w-14 md:w-20">
          <div className="w-full h-px bg-white/30 transform origin-left rotate-[-30deg] animate-slow-pulse" style={{animationDelay: '0.6s'}}></div>
        </div>
        
        <h3 className="text-4xl font-bold">15+</h3>
        <p className="text-gray-400">Exported to countries</p>
      </div>

      <div className="relative animate-slow-fade-in" style={{animationDelay: '1.1s'}}>
        <div className="absolute -left-14 md:-left-20 top-6 w-14 md:w-20">
          <div className="w-full h-px bg-white/30 transform origin-left rotate-[-30deg] animate-slow-pulse" style={{animationDelay: '0.9s'}}></div>
        </div>
        
        <h3 className="text-4xl font-bold animate-slow-bounce">Star grade export</h3>
        <p className="text-gray-400 animate-slow-float">Export certification</p>
        
      </div>
      

    </div>
  </div>
</section>

<section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">

    <div>
      <h2 className="text-4xl font-light text-black leading-snug animate-slow-slide-left">
        Government Certified For  
        <br />
        Assured <span className="font-semibold animate-slow-glow">Quality products</span>
      </h2>

      <p className="mt-6 text-gray-600 leading-relaxed animate-slow-slide-left" style={{animationDelay: '0.4s'}}>
        Established in 1999, Siddhi Plast is 
        <strong> ISO 9001:2015 certified </strong> and
        Government of India certified Star Grade Export House.
      </p>
<Link to="/about">
      <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition cursor-pointer hover-slow-lift animate-slow-pulse">
        Know More
      </button>
      </Link>
    </div>

    <div className="grid grid-cols-2 gap-8 place-items-center">
      <img src="/product/iso.jpg" className="w-55 ml-50 hover-slow-scale animate-slow-zoom" style={{animationDelay: '0.6s'}} />
    
    </div>

  </div>
</section>


<section className="py-20 bg-gray-400 text-center">

  <h2 className="text-4xl font-semibold text-black animate-slow-fade-in">
    Unbeatable Advantages <span className="font-light animate-slow-wave">of Our Sheets</span>
  </h2>

  <p className="mt-4 text-gray-800 animate-slow-fade-in" style={{animationDelay: '0.4s'}}>
    Solutions designed for packaging boxes, crates, and display stands —
    ensuring <strong className="animate-slow-pulse">quality and reliability.</strong>
  </p>

  <div className="max-w-5xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

    <div className="flex flex-col items-center animate-slow-fade-in" style={{animationDelay: '0.2s'}}>
      <div className="bg-orange-500 text-white p-4 rounded-full text-3xl animate-slow-float">🧽</div>
      <h3 className="font-semibold text-xl mt-4 animate-slow-pulse">Smooth Surface</h3>
    </div>

    <div className="flex flex-col items-center animate-slow-fade-in" style={{animationDelay: '0.4s'}}>
      <div className="bg-orange-500 text-white p-4 rounded-full text-3xl animate-slow-float" style={{animationDelay: '0.4s'}}>♻️</div>
      <h3 className="font-semibold text-xl mt-4 animate-slow-pulse">Recyclable</h3>
    </div>

    <div className="flex flex-col items-center animate-slow-fade-in" style={{animationDelay: '0.6s'}}>
      <div className="bg-orange-500 text-white p-4 rounded-full text-3xl animate-slow-float" style={{animationDelay: '0.6s'}}>🛡️</div>
      <h3 className="font-semibold text-xl mt-4 animate-slow-pulse">Durable</h3>
    </div>

    <div className="flex flex-col items-center animate-slow-fade-in" style={{animationDelay: '0.8s'}}>
      <div className="bg-orange-500 text-white p-4 rounded-full text-3xl animate-slow-float" style={{animationDelay: '0.8s'}}>💧</div>
      <h3 className="font-semibold text-xl mt-4 animate-slow-pulse">Water Proof</h3>
    </div>

    <div className="flex flex-col items-center animate-slow-fade-in" style={{animationDelay: '1.0s'}}>
      <div className="bg-orange-500 text-white p-4 rounded-full text-3xl animate-slow-float" style={{animationDelay: '1.0s'}}>🌬️</div>
      <h3 className="font-semibold text-xl mt-4 animate-slow-pulse">Light Weight</h3>
    </div>

    <div className="flex flex-col items-center animate-slow-fade-in" style={{animationDelay: '1.2s'}}>
      <div className="bg-orange-500 text-white p-4 rounded-full text-3xl animate-slow-float" style={{animationDelay: '1.2s'}}>🧹</div>
      <h3 className="font-semibold text-xl mt-4 animate-slow-pulse">Dustproof</h3>
    </div>

  </div>
</section>

    </div>
  );
};

export default Home;
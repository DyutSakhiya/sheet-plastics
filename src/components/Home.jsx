import React, { useEffect } from 'react';
import { Zap, Feather, ShieldCheck, Droplet } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const Home = () => {
  const colors = {
    primary: "#0A2463",          
    primaryLight: "#1E40AF",      
    primaryDark: "#0C1A4A",      
    
    accent: "#06B6D4",            
    accentLight: "#22D3EE",       
    accentDark: "#0891B2",       
    
    secondary: "#F59E0B",        
    secondaryLight: "#FCD34D",    
    secondaryDark: "#D97706",     
    
    dark: "#1E293B",              
    gray: "#64748B",              
    lightGray: "#F1F5F9",        
    white: "#FFFFFF",
    
    success: "#10B981",           
    warning: "#F59E0B",         
    error: "#EF4444",            
  };

  const gradients = {
    primary: `linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.accent} 100%)`,
    accent: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentDark} 100%)`,
    gold: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.secondaryLight} 100%)`,
    dark: `linear-gradient(135deg, ${colors.primaryDark} 0%, ${colors.primary} 100%)`,
    light: `linear-gradient(135deg, ${colors.lightGray} 0%, ${colors.white} 100%)`,
  };

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

  return (
    <div className="overflow-hidden">
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
          0%, 100% { box-shadow: 0 0 5px ${colors.accent}20; }
          50% { box-shadow: 0 0 15px ${colors.accent}50, 0 0 25px ${colors.accent}30; }
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
        
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }
        
        /* Animation Classes */
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
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
        
        .animate-shimmer {
          background: linear-gradient(90deg, 
            transparent 0%, 
            ${colors.accent}10 25%, 
            ${colors.accent}30 50%, 
            ${colors.accent}10 75%, 
            transparent 100%
          );
          background-size: 200px 100%;
          animation: shimmer 2s infinite;
        }
        
        /* Hover Effects */
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 25px ${colors.accent}30 !important;
        }
        
        .hover-glow:hover {
          box-shadow: 0 0 20px ${colors.accent}40, 0 0 40px ${colors.accent}20 !important;
        }
        
        .hover-scale {
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-scale:hover {
          transform: scale(1.03);
        }
        
        /* Gradient Text */
        .gradient-text {
          background: ${gradients.primary};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Section Initial State */
        section {
          opacity: 0;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${colors.lightGray};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${gradients.accent};
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${colors.accentDark};
        }
      `}</style>
      
      <section style={{ background: gradients.light }} className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight animate-slow-slide-left">
              <span style={{ color: colors.primary }}>India's Top Manufacturer of </span>
              <span className="gradient-text animate-slow-wave">PP Corrugated Sheets</span>
            </h1>
            <p className="mt-4 text-lg animate-slow-slide-left" style={{ animationDelay: '0.3s', color: colors.dark }}>
              Providing exceptional, high-quality products that have gained the trust and loyalty of customers around the world since 1999.
            </p>
            <Link to="/products">
              <button 
                className="mt-8 px-8 py-3 text-white font-semibold rounded-lg  hover-lift hover-glow animate-slow-pulse relative overflow-hidden group"
                style={{ 
                  background: gradients.primary,
                }}
              >
                <span className="relative z-10">Explore Our Products</span>
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-96 h-64 rounded-2xl overflow-hidden group hover-scale">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              <img 
                src="/public/hero.jpg" 
                className="w-full h-full object-cover animate-slow-zoom"
                alt="PP Corrugated Sheets Manufacturing"
                style={{ animationDelay: '0.6s' }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: gradients.dark }}></div>
        <div className="absolute inset-0 bg-linear-to-br from-transparent via-black/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-4xl font-light animate-slow-fade-in">
              Our <span className="font-semibold animate-slow-glow" style={{ color: colors.secondaryLight }}>Achievements</span>
            </h2>
            <p className="mt-6 leading-relaxed animate-slow-fade-in" style={{animationDelay: '0.4s', color: colors.lightGray}}>
              Providing exceptional, high-quality products that have gained the trust
              and loyalty of customers around the world. Our commitment to excellence 
              ensures that our products meet global standards, fostering enduring 
              relationships with clients everywhere.
            </p>
          </div>

          <div className="relative flex flex-col gap-12 pl-14 md:pl-20">
            <div 
              className="absolute left-0 top-0 bottom-0 w-1.5 h-[366px] animate-slow-glow rounded-full"
              style={{ 
                background: gradients.accent
              }}
            ></div>

            {[1, 2, 3, 4].map((num, index) => (
              <div 
                key={num}
                className="absolute -left-3"
                style={{ 
                  top: `${index * 115}px`,
                  animationDelay: `${index * 0.3}s`
                }}
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm animate-slow-float shadow-lg"
                  style={{ 
                    background: gradients.accent,
                    color: colors.white,
                    boxShadow: `0 4px 15px ${colors.accent}50`
                  }}
                >
                  {num}
                </div>
              </div>
            ))}

            {[
              { value: "30,000+ sq ft", label: "Floor area of factory", delay: '0.2s' },
              { value: "15,000+", label: "Sheets produced per day", delay: '0.5s' },
              { value: "15+", label: "Exported to countries", delay: '0.8s' },
              { 
                value: "Star grade export", 
                label: "Export certification", 
                delay: '1.1s',
                highlight: true 
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="relative animate-slow-fade-in group"
                style={{animationDelay: item.delay}}
              >
                <div 
                  className="absolute -left-14 md:-left-20 top-6 w-14 md:w-20"
                  style={{ animationDelay: `${index * 0.3 + 0.1}s` }}
                >
                  <div 
                    className="w-full h-px transform origin-left rotate-[-30deg] animate-slow-pulse"
                    style={{ 
                      backgroundColor: `${colors.accent}${item.highlight ? '70' : '50'}`,
                      boxShadow: item.highlight ? `0 0 10px ${colors.secondary}50` : 'none'
                    }}
                  ></div>
                </div>
                
                <h3 
                  className={`text-4xl font-bold ${item.highlight ? 'animate-slow-bounce' : ''}`}
                  style={{ 
                    color: item.highlight ? colors.secondaryLight : colors.white
                  }}
                >
                  {item.value}
                </h3>
                <p 
                  className={`mt-1 ${item.highlight ? 'animate-slow-float' : ''}`}
                  style={{ 
                    color: item.highlight ? colors.secondaryLight : `${colors.lightGray}CC`
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-light leading-snug animate-slow-slide-left">
              <span style={{ color: colors.primary }}>Government Certified For</span>
              <br />
              <span className="font-semibold gradient-text animate-slow-glow">Assured Quality Products</span>
            </h2>
            <p className="mt-6 leading-relaxed animate-slow-slide-left" style={{animationDelay: '0.4s', color: colors.gray}}>
              Established in 1999, Sheet Plastics is 
              <strong style={{ color: colors.primary }}> ISO 9001:2015 certified </strong> and
              Government of India certified Star Grade Export House.
            </p>
            <Link to="/about">
              <button 
                className="mt-8 text-white px-8 py-3 rounded-lg font-semibold hover-lift hover-glow animate-slow-pulse relative overflow-hidden group"
                style={{ 
                  background: gradients.primary,
                  boxShadow: `0 4px 20px ${colors.accent}40`
                }}
              >
                <span className="relative z-10">Know More</span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </button>
            </Link>
          </div>

          <div className="flex justify-center relative group">
            <div className="relative p-8 rounded-2xl bg-linear-to-br from-white to-gray-50 shadow-xl hover-scale animate-slow-zoom" style={{animationDelay: '0.6s'}}>
              <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <img 
                src="/product/iso.jpg" 
                className="relative w-64 h-auto rounded-lg shadow-lg"
                alt="ISO 9001:2015 Certification"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: gradients.accent }}
              >
                <span className="text-white font-bold">✓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: gradients.light }}></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/50 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-semibold animate-slow-fade-in">
            <span style={{ color: colors.primary }}>Unbeatable Advantages</span>
            <span className="font-light ml-2 gradient-text animate-slow-wave">of Our Sheets</span>
          </h2>
          <p className="mt-4 animate-slow-fade-in" style={{animationDelay: '0.4s', color: colors.dark}}>
            Solutions designed for packaging boxes, crates, and display stands —
            ensuring <strong className="gradient-text animate-slow-pulse">quality and reliability.</strong>
          </p>

          <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { emoji: '🧽', title: 'Smooth Surface', description: 'Perfect printing surface', delay: '0.2s' },
              { emoji: '♻️', title: 'Recyclable', description: 'Eco-friendly PP material', delay: '0.4s' },
              { emoji: '🛡️', title: 'Durable', description: 'Long-lasting strength', delay: '0.6s' },
              { emoji: '💧', title: 'Water Proof', description: 'Moisture resistant', delay: '0.8s' },
              { emoji: '🌬️', title: 'Light Weight', description: 'Easy to handle', delay: '1.0s' },
              { emoji: '🧹', title: 'Dustproof', description: 'Clean maintenance', delay: '1.2s' },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group animate-slow-fade-in hover-lift cursor-pointer"
                style={{animationDelay: feature.delay}}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-blue-50 to-cyan-50 rounded-bl-2xl"></div>
                  
                  <div 
                    className="relative w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl shadow-lg animate-slow-float group-hover:animate-none group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      background: gradients.primary,
                      boxShadow: `0 6px 20px ${colors.accent}40`,
                      animationDelay: feature.delay
                    }}
                  >
                    {feature.emoji}
                  </div>
                  
                  <h3 
                    className="font-bold text-xl mt-6 mb-2 relative"
                    style={{ color: colors.primary }}
                  >
                    {feature.title}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 rounded-full bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </h3>
                  
                  <p className="text-gray-600 mt-2">
                    {feature.description}
                  </p>
                  
                  <div className="mt-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center gap-1">
                      <span>Learn more</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 animate-slow-fade-in" style={{animationDelay: '1.4s'}}>
            <Link to="/contact">
              <button 
                className="px-10 py-4 rounded-xl font-semibold text-white hover-lift hover-glow transition-all duration-300"
                style={{ 
                  background: gradients.primary,
                  boxShadow: `0 6px 25px ${colors.accent}40`
                }}
              >
                Request Free Sample
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 relative" style={{ background: colors.lightGray }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-slow-pulse"
            style={{ 
              background: `${colors.accent}10`,
              border: `1px solid ${colors.accent}20`
            }}
          >
            <span className="text-blue-600 font-semibold">Trusted Worldwide</span>
          </div>
          
          <h3 className="text-3xl font-semibold mb-8" style={{ color: colors.primary }}>
            Trusted by Industry Leaders
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Export Excellence", value: "15+ Countries" },
              { name: "Quality Assurance", value: "ISO Certified" },
              { name: "Customer Satisfaction", value: "98%+" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-white shadow-lg hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div 
                  className="text-2xl font-bold gradient-text"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {stat.value}
                </div>
                <div className="mt-2 text-gray-600">
                  {stat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.contactNo.trim()) return "Phone number is required.";
    if (!formData.message.trim()) return "Message is required.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setSubmitMessage(error);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    const phone = "9408664918";
    const message = `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.contactNo}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setSubmitMessage("Opening WhatsApp to send your message...");
    setIsSubmitting(false);
  };

  return (
    <div 
      className="min-h-screen pt-20 pb-16 relative"
      style={{ 
        backgroundColor: colors.neutralLight,
        background: `linear-gradient(135deg, ${colors.neutralLight} 0%, #E8F4F8 100%)`
      }}
    >
     
      <div 
        className="absolute top-0 left-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        style={{ backgroundColor: colors.brandTeal }}
      ></div>
      <div 
        className="absolute top-0 right-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
        style={{ backgroundColor: colors.logoAccent }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
     
        <div className="text-center mb-16">
          
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight">
            <span className="block" style={{ color: colors.neutralDark }}>
              Your Turn to
            </span>
            <span className="block">
              <span 
                className="font-bold"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.brandTeal} 0%, ${colors.logoAccent} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Reach Out
              </span>
              <span style={{ color: colors.neutralDark }}>
                , We're Listening!
              </span>
            </span>
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto mt-4"
            style={{ color: colors.neutralDark }}
          >
            Tell us more about yourself and what you have in mind. We're excited to hear from you!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        
          <div className="lg:w-2/3">
            <div 
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              style={{ 
                border: `1px solid rgba(26, 54, 93, 0.1)`,
                boxShadow: `0 10px 40px rgba(26, 54, 93, 0.1)`
              }}
            >
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2" style={{ color: colors.logoPrimary }}>
                    Send Us a Message
                  </h2>
                  <p style={{ color: colors.neutralGray }}>
                    Fill in the details below and we'll get back to you
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: colors.neutralDark }}>
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{ 
                          borderColor: colors.neutralGray,
                          backgroundColor: colors.neutralLight
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: colors.neutralDark }}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{ 
                          borderColor: colors.neutralGray,
                          backgroundColor: colors.neutralLight
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: colors.neutralDark }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{ 
                          borderColor: colors.neutralGray,
                          backgroundColor: colors.neutralLight
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: colors.neutralDark }}>
                        Phone Number <span style={{ color: colors.complementary }}>*</span>
                      </label>
                      <input
                        type="tel"
                        name="contactNo"
                        placeholder="+91 12345 67890"
                        value={formData.contactNo}
                        onChange={handleChange}
                        required
                        className="w-full p-4 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2"
                        style={{ 
                          borderColor: colors.neutralGray,
                          backgroundColor: colors.neutralLight,
                          focusBorderColor: colors.brandTeal
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: colors.neutralDark }}>
                      Your Message <span style={{ color: colors.complementary }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full p-4 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                      style={{ 
                        borderColor: colors.neutralGray,
                        backgroundColor: colors.neutralLight
                      }}
                    />
                  </div>

                  {submitMessage && (
                    <div 
                      className={`p-4 rounded-lg ${submitMessage.includes("Opening") ? "border" : "border"}`}
                      style={{ 
                        backgroundColor: submitMessage.includes("Opening") ? 'rgba(39, 174, 96, 0.1)' : 'rgba(231, 76, 60, 0.1)',
                        borderColor: submitMessage.includes("Opening") ? colors.success : colors.complementary,
                        color: submitMessage.includes("Opening") ? colors.success : colors.complementary
                      }}
                    >
                      <div className="flex items-center gap-2">
                        {submitMessage.includes("Opening") ? (
                          <>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{submitMessage}</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <span>{submitMessage}</span>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.brandTeal} 0%, ${colors.logoAccent} 100%)`,
                      boxShadow: `0 4px 20px rgba(0, 168, 168, 0.3)`
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = `linear-gradient(135deg, ${colors.logoAccent} 0%, ${colors.brandTeal} 100%)`;
                      e.target.style.boxShadow = `0 6px 25px rgba(0, 168, 168, 0.4)`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = `linear-gradient(135deg, ${colors.brandTeal} 0%, ${colors.logoAccent} 100%)`;
                      e.target.style.boxShadow = `0 4px 20px rgba(0, 168, 168, 0.3)`;
                    }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.677-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.262-6.177-3.55-8.439" />
                        </svg>
                        Submit & Send via WhatsApp
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div 
              className="bg-white rounded-2xl shadow-xl overflow-hidden h-full"
              style={{ 
                border: `1px solid rgba(26, 54, 93, 0.1)`,
                boxShadow: `0 10px 40px rgba(26, 54, 93, 0.1)`
              }}
            >
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-6" style={{ color: colors.logoPrimary }}>
                    Contact Information
                  </h2>
                  
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-start gap-4">
                        <div 
                          className="p-3 rounded-lg"
                          style={{ backgroundColor: `${colors.brandTeal}15` }}
                        >
                          <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            style={{ color: colors.brandTeal }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1" style={{ color: colors.logoPrimary }}>
                            SANIDHY POLYTECH
                          </h3>
                          <p className="text-sm leading-relaxed" style={{ color: colors.neutralGray }}>
                            Plot no 11/12 R K Industrial Zone 9<br />
                            Kuwadva Wankaner main road,<br />
                            Ranpur, Rajkot 360023
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-4">
                        <div 
                          className="p-3 rounded-lg"
                          style={{ backgroundColor: `${colors.logoAccent}15` }}
                        >
                          <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            style={{ color: colors.logoAccent }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1" style={{ color: colors.logoPrimary }}>
                            Phone Number
                          </h3>
                          <p 
                            className="text-lg font-medium"
                            style={{ color: colors.logoAccent }}
                          >
                            +91 94086 64918
                          </p>
                          <p className="text-sm mt-1" style={{ color: colors.neutralGray }}>
                            Mon-Sat: 9:00 AM - 7:00 PM
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-4">
                        <div 
                          className="p-3 rounded-lg"
                          style={{ backgroundColor: `${colors.brandGold}15` }}
                        >
                          <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            style={{ color: colors.brandGold }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-bold mb-1" style={{ color: colors.logoPrimary }}>
                            Email Address
                          </h3>
                          <p 
                            className="text-lg font-medium"
                            style={{ color: colors.logoAccent }}
                          >
                            sanidhyapolytech@gmail.com
                          </p>
                          <p className="text-sm mt-1" style={{ color: colors.neutralGray }}>
                            We'll respond within 24 hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div 
                  className="rounded-xl p-6"
                  style={{ 
                    backgroundColor: `${colors.logoPrimary}05`,
                    border: `1px solid ${colors.logoPrimary}10`
                  }}
                >
                  <h3 className="font-bold mb-3" style={{ color: colors.logoPrimary }}>
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: colors.success }}>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span style={{ color: colors.neutralDark }}>Premium Quality Products</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: colors.success }}>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span style={{ color: colors.neutralDark }}>Competitive Wholesale Prices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: colors.success }}>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span style={{ color: colors.neutralDark }}>Fast Delivery Across India</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/9408664918"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 text-white px-6 py-4 rounded-full shadow-xl flex items-center gap-3 text-base font-semibold transform hover:scale-105 transition-all duration-300 z-50 group"
        style={{ 
          background: `linear-gradient(135deg, ${colors.success} 0%, #1E8449 100%)`,
          boxShadow: `0 6px 25px rgba(39, 174, 96, 0.4)`
        }}
        onMouseEnter={(e) => {
          e.target.style.background = `linear-gradient(135deg, #1E8449 0%, ${colors.success} 100%)`;
          e.target.style.boxShadow = `0 8px 30px rgba(39, 174, 96, 0.5)`;
        }}
        onMouseLeave={(e) => {
          e.target.style.background = `linear-gradient(135deg, ${colors.success} 0%, #1E8449 100%)`;
          e.target.style.boxShadow = `0 6px 25px rgba(39, 174, 96, 0.4)`;
        }}
      >
        <div className="relative">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.677-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.262-6.177-3.55-8.439" />
          </svg>
          <span 
            className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping opacity-75"
            style={{ backgroundColor: colors.neutralWhite }}
          ></span>
        </div>
        <span className="hidden md:inline">Start Your Wholesale Journey</span>
        <span className="inline md:hidden">Chat Now</span>
        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        /* Custom focus styles */
        input:focus, textarea:focus {
          border-color: ${colors.brandTeal} !important;
          box-shadow: 0 0 0 3px ${colors.brandTeal}20 !important;
        }
      `}</style>
    </div>
  );
};

export default Contact;
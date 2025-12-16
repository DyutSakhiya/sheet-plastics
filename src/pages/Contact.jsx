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

  
    const phone = "9157433685";
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
    <div className="min-h-screen bg-gray-50 pt-20 pb-16 relative">
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl sm:text-5xl font-light text-gray-900">
          Your Turn to <strong>Reach Out</strong>, <br /> We’re Listening!
        </h1>
        <p className="text-gray-500 mt-4">
          Tell us more about yourself and what you have got in mind.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="lg:w-3/5 bg-gray-300 p-8 rounded-lg shadow-md">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="p-3 rounded-md bg-white"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="p-3 rounded-md bg-white"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 rounded-md bg-white"
                />
                <input
                  type="tel"
                  name="contactNo"
                  placeholder="Phone Number *"
                  value={formData.contactNo}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-md bg-white"
                />
              </div>

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-white"
              />

              {submitMessage && (
                <div className="p-3 bg-green-100 text-green-700 rounded">
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md"
              >
                {isSubmitting ? "Sending..." : "Submit & Send via WhatsApp"}
              </button>
            </form>
          </div>

          <div className="lg:w-2/5 mt-12 lg:mt-0">
            <h3 className="font-semibold text-lg mb-2">SHEET PLASTICS</h3>
            <p className="text-gray-600 text-sm mb-6">
              150 Feet Ring Road, Mavdi Circle, Rajkot, Gujarat
            </p>

            <p className="text-sm">📞 91574-33685 / 94088-41260</p>
            <p className="text-sm mt-2">📧 dyutsakhiya@gmail.com</p>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/9157433685"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-medium"
      >
        <i className="bi bi-whatsapp text-lg"></i>
        Start Your Wholesale Journey
      </a>
    </div>
  );
};

export default Contact;
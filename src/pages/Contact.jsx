import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-16">
      
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-4xl sm:text-5xl font-light text-gray-900 leading-tight">
          Your Turn to <strong className="font-semibold">Reach Out</strong>, <br /> We're Listening!
        </h1>
        <p className="text-base text-gray-500 mt-4">
          Tell us more about yourself and what you have got in mind.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          
          <div className="lg:w-3/5 p-8 rounded-lg bg-gray-300 shadow-md">
            <form className="space-y-4">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="first-name" placeholder="Enter your first name bg-white" 
                         className="mt-1 w-full p-3 border-none rounded-md shadow-inner  bg-white focus:ring-orange-500 focus:border-orange-500" />
                </div>
                <div>
                  <label htmlFor="last-name" className="text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" id="last-name" placeholder="Enter your last name" 
                         className="mt-1 w-full p-3 border-none rounded-md shadow-inner bg-white focus:ring-orange-500 focus:border-orange-500" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email-id" className="text-sm font-medium text-gray-700 ">Email ID</label>
                  <input type="email" id="email-id" placeholder="Enter your email id" 
                         className="mt-1 w-full p-3 border-none rounded-md shadow-inner  bg-white focus:ring-orange-500 focus:border-orange-500" />
                </div>
                <div>
                  <label htmlFor="contact-no" className="text-sm font-medium text-gray-700">Contact No.</label>
                  <input type="tel" id="contact-no" placeholder="Enter your contact no." 
                         className="mt-1 w-full p-3 border-none rounded-md shadow-inner  bg-white focus:ring-orange-500 focus:border-orange-500" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows="4" placeholder="Type your message here" 
                          className="mt-1 w-full p-3 border-none rounded-md shadow-inner  bg-white focus:ring-orange-500 focus:border-orange-500"></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" 
                        className="w-full py-3 px-4 border-transparent rounded-md shadow-lg text-lg font-medium text-white 
                                   bg-orange-500 hover:bg-orange-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="lg:w-2/5 mt-12 lg:mt-0 p-4">
            
            <div className="mb-8 pb-4 border-b border-gray-300">
              <h3 className="text-base font-semibold text-gray-900 mb-2">SHEET PLASTICS</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                150 Feet Ring Road, Mavdi Circle,, nr. ITC Fortune Hotel, Rajkot, Gujarat 360004
              </p>
            </div>
            
            <h3 className="text-base font-semibold text-gray-900 mb-4">CONTACT INFO</h3>
            
            <div className="space-y-3">
            
              <p className="flex items-center text-sm text-gray-600">
                <span className="mr-3 text-siddhi-orange">📞</span> 
                91574-33685 / 94088-41260
              </p>
              <p className="flex items-center text-sm text-gray-600">
                <span className="mr-3 text-siddhi-orange">📧</span> 
                dyutsakhiya@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
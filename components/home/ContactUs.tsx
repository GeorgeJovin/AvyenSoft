"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto">
        {/* Header - Always on Top */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-gray-500 text-sm md:text-base uppercase tracking-wider mb-2">
            CONTACT US
          </p>
          <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-black">
            We Alway Here To Helps You
          </h2>
        </div>

        {/* Single Card Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mx-4">
          <div className="grid lg:grid-cols-2">
            {/* Image Section */}
            <div className="w-full h-[400px] lg:h-full relative">
              <Image
                src="https://ayvensoft.com/wp-content/uploads/2024/12/h1-footer01.jpg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>

            {/* Form Section */}
            <div className="w-full px-4 py-8 sm:px-16 flex items-center">
              <div className="w-full space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-black font-medium mb-2 text-base">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-black font-medium mb-2 text-base">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-black font-medium mb-2 text-base">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-black font-medium mb-2 text-base">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={3}
                    className="w-full px-5 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-base"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[rgb(94,111,181)] text-white font-semibold py-4 rounded-full transition-colors duration-300 cursor-pointer text-base uppercase tracking-wider"
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
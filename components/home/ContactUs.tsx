'use client';
import Image from 'next/image';
import React from 'react';
import { Button, message as antMessage } from 'antd';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity(); // 🔥 triggers native browser messages
      return;
    }

    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    const subject = encodeURIComponent(`Inquiry from ${name} via Contact Form`);
    const body = encodeURIComponent(
      `Dear Cass Technology Team,\n\n` +
        `I hope this message finds you well.\n\n` +
        `My name is ${name} and I would like to get in touch regarding your services.\n\n` +
        `Here are my contact details:\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n\n` +
        `Message: \n${message || 'N/A'}\n\n` +
        `Looking forward to hearing from you soon.\n\nBest regards,\n${name}`
    );

    const mailtoLink = `mailto:info@casscg.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    antMessage.success('Launching your email application for message review.');
    form.reset();
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-gray-500 text-sm md:text-base uppercase tracking-wider mb-2">
            CONTACT US
          </p>
          <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-black">
            We Are Always Here To Help You
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mx-4">
          <div className="grid lg:grid-cols-2">
            {/* Image Section */}
            <div className="w-full h-[400px] lg:h-full relative">
              <Image
                src="/assets/pic/cassImage12.webp"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>

            {/* Form Section */}
            <div className="w-full px-4 py-8 sm:px-16 flex items-center">
              <form onSubmit={handleSubmit} className="w-full space-y-4" noValidate={false}>
                <div>
                  <label className="block text-black font-medium mb-2 text-base">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
                    className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400 text-base transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-black font-medium mb-2 text-base">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400 text-base transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-black font-medium mb-2 text-base">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="^[0-9]{10}$"
                    maxLength={10}
                    inputMode="numeric"
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value
                        .replace(/[^0-9]/g, '')
                        .slice(0, 10);
                      e.currentTarget.setCustomValidity(''); // clear old custom message
                    }}
                    onInvalid={(e) => {
                      e.currentTarget.setCustomValidity(
                        'Please enter a valid 10-digit phone number'
                      );
                    }}
                    placeholder="Phone"
                    className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400 text-base transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-black font-medium mb-2 text-base">Message</label>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    rows={3}
                    className="w-full px-5 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400 resize-none text-base transition-all duration-200"
                  />
                </div>

                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full bg-[rgb(94,111,181)] hover:bg-[rgb(74,91,161)] text-white font-semibold py-4 rounded-full transition-all duration-300 text-base uppercase tracking-wider"
                  style={{ height: '48px' }}
                >
                  {'SEND'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

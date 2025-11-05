'use client';
import { useState } from 'react';
import { Button, message as antMessage } from 'antd';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity(); // ✅ triggers browser validation popup
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

    antMessage.success('Your email client is opening. Please review and send your message.');
    form.reset();
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_42%] gap-8">
          {/* Left Column - Form */}
          <div
            className="bg-gray-100 py-8 px-6 lg:px-8 rounded-2xl"
            style={{ backgroundColor: '#EDF4F2' }}
          >
            <h2 className="text-3xl font-bold text-black mb-4">Get in Touch Now</h2>
            <p className="text-gray-700 mb-8">
              Need personalized advice? Our dedicated team is here to assist you. Reach out today
              for expert support and tailored solutions to meet your needs.
            </p>

            <form onSubmit={handleSubmit} noValidate={false} className="space-y-6">
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400 bg-white placeholder:text-gray-600 placeholder:text-sm transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400 bg-white placeholder:text-gray-600 placeholder:text-sm transition-all duration-200"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-2">
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
                    e.currentTarget.setCustomValidity('Please enter a valid 10-digit phone number');
                  }}
                  placeholder="Phone"
                  className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400 bg-white placeholder:text-gray-600 placeholder:text-sm transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-gray-900 block mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Message"
                  className="w-full px-5 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400 resize-none bg-white placeholder:text-gray-600 placeholder:text-sm transition-all duration-200"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full bg-[rgb(94,111,181)] hover:bg-[rgb(74,91,161)] text-white font-semibold py-4 rounded-full transition-all duration-300 text-base uppercase tracking-wider"
                style={{ height: '48px' }}
              >
                {loading ? 'SENDING...' : 'SEND'}
              </Button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="bg-white p-8 rounded-2xl border border-[#0201014D] flex flex-col justify-center">
            <div className="space-y-10">
              {/* Email */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#5b9bb5] rounded-full flex items-center justify-center mb-4">
                  <Mail className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Address</h3>
                <p className="text-gray-700">info@casscg.com</p>
              </div>

              <div className="border-t border-black"></div>

              {/* Phone */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#5b9bb5] rounded-full flex items-center justify-center mb-4">
                  <Phone className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Number</h3>
                <p className="text-gray-700">+91 8604020699</p>
              </div>

              <div className="border-t border-black"></div>

              {/* Address */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#5b9bb5] rounded-full flex items-center justify-center mb-4">
                  <MapPin className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Office Address</h3>
                <p className="text-gray-700">
                  430 New Park Ave, PMB 136, West Hartford, Connecticut 06110, US
                </p>
              </div>

              <div className="border-t border-black"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

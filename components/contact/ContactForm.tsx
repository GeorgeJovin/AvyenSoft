'use client';
import { useState } from 'react';
import { Form, Input, Button, message as antMessage } from 'antd';
import { Mail, Phone, MapPin } from 'lucide-react';

const { TextArea } = Input;

const ContactForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        antMessage.success('Thank you for contacting us! We will get back to you soon.');
        form.resetFields();
      } else {
        throw new Error(data.message || 'Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      antMessage.error('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8">
          {/* Left Column - Form */}
          <div className="bg-gray-100 p-8 rounded-2xl" style={{ backgroundColor: '#EDF4F2' }}>
            <h2 className="text-3xl font-bold text-black mb-4">Get in Touch Now</h2>
            <p className="text-gray-700 mb-8">
              Need personalized advice? Our dedicated team is here to assist you. Reach out today
              for expert support and tailored solutions to meet your needs.
            </p>

            <Form form={form} layout="vertical" onFinish={onFinish} className="space-y-6">
              {/* Name */}
              <Form.Item
                name="name"
                label={
                  <span className="text-sm font-medium text-gray-900">
                    Name <span className="text-red-500">*</span>
                  </span>
                }
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input
                  placeholder="Name"
                  className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400 bg-white placeholder:text-gray-600 placeholder:text-sm transition-all duration-200"
                  style={{ height: '48px' }}
                />
              </Form.Item>

              {/* Email */}
              <Form.Item
                name="email"
                label={
                  <span className="text-sm font-medium text-gray-900">
                    Email <span className="text-red-500">*</span>
                  </span>
                }
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}
              >
                <Input
                  placeholder="Email"
                  className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400 bg-white placeholder:text-gray-600 placeholder:text-sm transition-all duration-200"
                  style={{ height: '48px' }}
                />
              </Form.Item>

              {/* Phone */}
              <Form.Item
                name="phone"
                label={
                  <span className="text-sm font-medium text-gray-900">
                    Phone <span className="text-red-500">*</span>
                  </span>
                }
                rules={[
                      { required: true, message: 'Please enter your phone' },
                      { 
                        pattern: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
                        message: 'Please enter a valid phone number'
                      }
                    ]}
              >
                <Input
                  placeholder="Phone"
                  className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400 bg-white placeholder:text-gray-600 placeholder:text-sm transition-all duration-200"
                  style={{ height: '48px' }}
                />
              </Form.Item>

              {/* Message */}
              <Form.Item
                name="message"
                label={<span className="text-sm font-medium text-gray-900">Message</span>}
              >
                <TextArea
                  placeholder="Message"
                  rows={5}
                  className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400 resize-none bg-white placeholder:text-gray-600 placeholder:text-sm transition-all duration-200"
                />
              </Form.Item>

              {/* Submit Button */}
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  className="w-full bg-[rgb(94,111,181)] hover:bg-[rgb(94,111,181)] text-white font-semibold py-4 rounded-full transition-all duration-300 text-base uppercase tracking-wider"
                  style={{ height: '48px' }}
                >
                  {loading ? 'SENDING...' : 'SEND'}
                </Button>
              </Form.Item>
            </Form>
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

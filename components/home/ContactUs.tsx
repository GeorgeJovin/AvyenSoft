'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Form, Input, Button, message as antMessage } from 'antd';

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
      antMessage.error('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-gray-500 text-sm md:text-base uppercase tracking-wider mb-2">
            CONTACT US
          </p>
          <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-black">
            We Are Always Here To Help You
          </h2>
        </div>

        {/* Form Card */}
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
              <div className="w-full space-y-4">
                <Form form={form} layout="vertical" onFinish={onFinish} className="space-y-4">
                  {/* Name Field */}
                  <Form.Item
                    name="name"
                    label={
                      <label className="block text-black font-medium mb-2 text-base">
                        Name <span className="text-red-500">*</span>
                      </label>
                    }
                    rules={[{ required: true, message: 'Please enter your name' }]}
                  >
                    <Input
                      placeholder="Name"
                      className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400 text-base transition-all duration-200"
                    />
                  </Form.Item>

                  {/* Email Field */}
                  <Form.Item
                    name="email"
                    label={
                      <label className="block text-black font-medium mb-2 text-base">
                        Email <span className="text-red-500">*</span>
                      </label>
                    }
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' },
                    ]}
                  >
                    <Input
                      placeholder="Email"
                      className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400 text-base transition-all duration-200"
                    />
                  </Form.Item>

                  {/* Phone Field */}
                  <Form.Item
                    name="phone"
                    label={
                      <label className="block text-black font-medium mb-2 text-base">
                        Phone <span className="text-red-500">*</span>
                      </label>
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
                      className="w-full px-5 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400 text-base transition-all duration-200"
                    />
                  </Form.Item>

                  {/* Message Field */}
                  <Form.Item
                    name="message"
                    label={
                      <label className="block text-black font-medium mb-2 text-base">Message</label>
                    }
                  >
                    <TextArea
                      placeholder="Message"
                      rows={3}
                      className="w-full px-5 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400 resize-none text-base transition-all duration-200"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

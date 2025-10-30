'use client';

import { useState } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import { Mail, Phone, MapPin } from 'lucide-react';

const { TextArea } = Input;
const { Option } = Select;

const ContactForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form values:', values);
      message.success('Thank you for contacting us! We will get back to you soon.');
      form.resetFields();
    } catch (error) {
      message.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#1a2744] mb-6">
              Send Us a Message
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="space-y-4"
            >
              <Form.Item
                name="name"
                label="Full Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input size="large" placeholder="John Doe" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email Address"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}
              >
                <Input size="large" placeholder="john@example.com" />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please enter your phone number' }]}
              >
                <Input size="large" placeholder="+1 (555) 123-4567" />
              </Form.Item>

              <Form.Item
                name="service"
                label="Service Interest"
                rules={[{ required: true, message: 'Please select a service' }]}
              >
                <Select size="large" placeholder="Select a service">
                  <Option value="strategic">Strategic Planning</Option>
                  <Option value="business">Business Planning</Option>
                  <Option value="process">Process Improvement</Option>
                  <Option value="technology">Technology Integration</Option>
                  <Option value="cloud">Cloud Solutions</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea
                  rows={4}
                  placeholder="Tell us about your project or inquiry..."
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  loading={loading}
                  className="w-full bg-[#5e6fb5] hover:bg-[#4a5a95]"
                  style={{ height: '48px', fontSize: '16px' }}
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#1a2744] mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#5e6fb5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#5e6fb5]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2744] mb-1">Location</h4>
                  <p className="text-gray-600">
                    Kissimmee, Florida<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#5e6fb5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#5e6fb5]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2744] mb-1">Phone</h4>
                  <p className="text-gray-600">Available upon request</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#5e6fb5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#5e6fb5]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a2744] mb-1">Email</h4>
                  <p className="text-gray-600">info@ayvensoft.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-[#1a2744] mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span>By Appointment</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

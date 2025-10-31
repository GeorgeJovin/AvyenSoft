'use client';

import React from 'react';

const ContactMap: React.FC = () => {
    return (
        <section className="bg-white pb-12">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <div className="relative w-full h-[400px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.7216890706855!2d-81.40768708495348!3d28.308110982553986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd8a6a20a1f6f7%3A0x13b7d09a2c3cc9d!2s1130%20E%20Donegan%20Ave%20ste.11%2C%20Kissimmee%2C%20FL%2034744%2C%20USA!5e0!3m2!1sen!2sus!4v1730373000000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactMap;

'use client';

import React from 'react';

const ContactMap: React.FC = () => {
    return (
        <section className="bg-white pb-12">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                <div className="relative w-full h-[400px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.2428822522236!2d-72.797628!3d41.743806799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7add6d69dd14d%3A0xb5d101e1198b5a08!2s430%20New%20Park%20Ave%2C%20West%20Hartford%2C%20CT%2006110%2C%20USA!5e0!3m2!1sen!2sus!4v1730373000000!5m2!1sen!2sus"
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
 
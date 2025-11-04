'use client';

import { TrendingUp, DollarSign, BarChart3, Sliders } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Strategic Planning:',
      description:
        'Crafting forward-looking strategies to align your vision with market dynamics, ensuring long-term success.',
    },
    {
      icon: DollarSign,
      title: 'Business Planning:',
      description:
        'Developing robust plans tailored to your operational and financial goals, enabling smarter decision-making and resource allocation.',
    },
    {
      icon: BarChart3,
      title: 'Process Improvement:',
      description:
        'Enhancing efficiency by identifying bottlenecks and implementing cutting-edge solutions to optimize workflows and outcomes.',
    },
    {
      icon: Sliders,
      title: 'Technology Integration:',
      description:
        'Leveraging the latest innovations to transform business processes and deliver measurable results.',
    },
  ];

  /** Motion Variants **/
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="py-16 md:py-20 bg-gray-100"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Heading Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-black mb-4 md:mb-6">
            Our Expertise:
          </h2>
          <p className="text-base md:text-[14px] text-black max-w-4xl mx-auto leading-relaxed px-4">
            We take pride in offering a wide range of consulting services designed to address the
            unique challenges of modern businesses. With a commitment to excellence, we help
            organizations navigate complexities and seize new opportunities. Our core services
            include:
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(94,111,181,0.25)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="bg-[#5E6FB5] rounded-2xl p-6 text-center text-white shadow-lg cursor-default"
            >
              <div className="flex justify-center mb-4">
                <service.icon size={42} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-lg font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-base md:text-[14px] leading-relaxed text-white">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;

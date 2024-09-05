import React, { useState } from 'react';
import Image from 'next/image';

const WhyChooseUs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex justify-between items-start p-10 px-16 bg-white">
      <div className="flex w-full gap-5">
        {/* Image Section */}
        <div className="relative w-1/2">
          <Image
            src="https://via.placeholder.com/600x400"
            alt="Global IT Services"
            className="rounded-lg"
            layout="responsive"
            width={500}
            height={500}
          />
          {/* Overlay Image */}
          <div className="absolute top-2/3 right-[20px] transform -translate-y-1/2 w-[250px] h-[150px]">
            <Image
              src="https://via.placeholder.com/250x150"
              alt="Client Support"
              className="object-cover rounded-lg shadow-lg"
              layout="responsive"
              width={350}
              height={150}
            />
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-80 rounded-full w-[50px] h-[50px] m-auto">
              <i className="text-2xl text-gray-800">▶</i>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-1/2">
          <h2 className="text-xl font-bold mb-3">Why Choose Us?</h2>
          <p className="text-gray-700 mb-5">
            We deliver innovative IT solutions with a focus on client satisfaction. Our expert team ensures high-quality services tailored to your business needs.
          </p>

          <div className="space-y-4">
            {accordionData.map((item, index) => (
              <div key={index} className="border border-gray-300 rounded-md">
                <div
                  className={`flex justify-between items-center p-4 cursor-pointer ${
                    activeIndex === index ? 'bg-gray-100' : 'bg-white'
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-medium">{item.title}</span>
                  <span className="text-lg">
                    {activeIndex === index ? '▲' : '▼'}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="p-4 bg-gray-50">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const accordionData = [
  {
    title: 'Global Expertise and 24/7 Support',
    content: 'Our team provides round-the-clock support and services to ensure your business runs smoothly worldwide.',
  },
  {
    title: 'Tailor-made IT Solutions',
    content: 'We offer customized IT services that align perfectly with your business objectives.',
  },
  {
    title: 'Proven Security Measures',
    content: 'We prioritize the safety and security of your data, with advanced protection against cyber threats.',
  },
  {
    title: 'Cost-effective and Efficient',
    content: 'Our solutions are designed to maximize your ROI by streamlining your IT processes at a competitive price.',
  },
  {
    title: 'Dedicated Account Management',
    content: 'Our team is always available to assist you with a personalized approach for each client.',
  },
  {
    title: 'Scalable Solutions for Growth',
    content: 'We provide scalable IT infrastructure and software solutions to support your company’s growth.',
  },
];

export default WhyChooseUs;

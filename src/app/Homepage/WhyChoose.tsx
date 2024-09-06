import React, { useState, useEffect } from 'react';
// import Image from 'next/image'; // Import Next.js Image component
import { FaQuestion } from "react-icons/fa";

interface CardData {
  text: string;
  imgSrc: string;
}

const cardData: CardData[] = [
  { text: '13+ Years of Expertise', imgSrc: '/Whychooseusimg7.png' },
  { text: 'Proven Track Record', imgSrc: '/Whychooseusimg9.png' },
  { text: 'Client-Centric Approach', imgSrc: '/Whychooseusimg5.png' },
  { text: 'On-time Project Delivery', imgSrc: '/Whychooseusimg6.png' },
  { text: 'Tailor-made Products', imgSrc: '/Whychooseusimg7.png' },
  { text: 'Software Updates', imgSrc: '/Whychooseusimg9.png' },
  { text: 'Annual Maintenance', imgSrc: '/Whychooseusimg10.png' },
  { text: 'Security Audit', imgSrc: '/Whychooseusimg5.png' },
  { text: 'Remote Support', imgSrc: '/Whychooseusimg6.png' },
];

const WhyChooseUs: React.FC = () => {
  // const [activeIndex, setActiveIndex] = useState<number>(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  //   }, 1500); // Change this value to adjust the timing

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="py-10">
      <div className='text-center'>
        <h2 className='text-3xl md:text-5xl font-bold text-primary flex items-center justify-center m-6'>
          Why Choose Us <FaQuestion className='ml-2 md:text-3xl text-xl' />
        </h2>
        {/* <p className='text-gray-600 mt-2 text-sm md:text-base'>
          Anyone would want to know why you are the best option they could opt for. Use this section to mention your strengths and prove that you are the best among others.
        </p> */}
      </div>

      {/* First Row: 5 Divs */}
      <div className='grid grid-cols-2 md:grid-cols-5 gap-4 justify-center mt-10 md:px-10'>
        {cardData.slice(0, 5).map((card, index) => (
          <div
            key={index}
            // style={{
            //   transform: activeIndex === index ? 'scale(1.1)' : 'scale(1)',
            //   transition: 'transform 0.5s ease-in-out',
            // }}
            className='flex flex-col items-center text-center'
          >
            <div className='flex shadow-primarycolor rounded-full p-6 shadow-lg'>
              <img
                src={card.imgSrc}
                width={80} // Specify width
                height={80} // Specify height
                alt={card.text}
              />
            </div>
            <p className='text-base font-semibold mt-4 text-gray-800'>{card.text}</p>
          </div>
        ))}
      </div>

      {/* Second Row: 4 Divs */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:mx-32 justify-center mt-12 md:px-10'>
        {cardData.slice(5).map((card, index) => (
          <div
            key={index}
            // style={{
            //   transform: activeIndex === index + 5 ? 'scale(1.1)' : 'scale(1)',
            //   transition: 'transform 0.5s ease-in-out',
            // }}
            className='flex flex-col items-center text-center'
          >
            <div className='flex shadow-primarycolor rounded-full p-6 shadow-lg'>
              <img
                src={card.imgSrc}
                width={80} // Specify width
                height={80} // Specify height
                alt={card.text}
              />
            </div>
            <p className='text-base font-semibold mt-4 text-gray-800'>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
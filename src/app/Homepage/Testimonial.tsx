import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample data for the testimonials
const testimonials = [
  {
    id: 1,
    name: 'James K. Goins',
    role: 'Consultant',
    feedback:
      'Absolutely fantastic service. The team went above and beyond to ensure the project was completed on time and to the highest standards.',
    rating: 5,
    avatar: '/client_img_1.png',
  },
  {
    id: 2,
    name: 'Annette Black',
    role: 'Consultant',
    feedback:
      'Absolutely fantastic service. The team went above and beyond to ensure the project was completed on time and to the highest standards.',
    rating: 5,
    avatar: '/client_img_2.png',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    role: 'Project Manager',
    feedback:
      'Absolutely fantastic service. The team went above and beyond to ensure the project was completed on time and to the highest standards.',
    rating: 4,
    avatar: '/client_img_3.png',
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    role: 'Architect',
    feedback:
      'Absolutely fantastic service. The team went above and beyond to ensure the project was completed on time and to the highest standards.',
    rating: 5,
    avatar: '/client_img_4.png',
  },
  {
    id: 5,
    name: 'Emily Davis',
    role: 'Interior Designer',
    feedback:
      'Great experience from start to finish. The attention to detail and quality of work were outstanding.',
    rating: 5,
    avatar: '/client_img_5.png',
  },
  {
    id: 6,
    name: 'Robert Brown',
    role: 'Engineer',
    feedback:
      'Professional, reliable, and great value. I would highly recommend their services to anyone.',
    rating: 4,
    avatar: '/client_img_6.png',
  },
];

const TestimonialComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-10 sm:h-[80vh] h-[40%]  md:px-8 lg:px-16">
      <div className="text-center">
      <h1 className='md:text-xl  text-primarycolor text-center font-semibold  '> <span className='text-primarycolor  text-[40px]'>.</span>Service Testimonial<span className='text-primarycolor text-[40px]'>.</span> </h1>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-8 text-gray-800">
          What Our Clients Say
        </h2>
      </div>
      <div className="mt-10">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-2 mb-10">
              <div className="relative bg-white shadow-m h-[280px] hover:shadow-xl shadow-primarycolor rounded-xl p-6 transition-shadow duration-300 md:w-96 lg:w-[600px]">
                {/* Triangle Watermark */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[90px] border-orange-200 rounded-lg border-r-[90px] border-r-transparent"></div>
                
                {/* Avatar and Stars */}
                <div className="flex flex-col items-center mb-4">
                  <div className="relative mb-3">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="rounded-full border-4 border-white shadow-md"
                      width={90}
                      height={90}
                    />
                    {/* <div className="absolute bottom-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow">
                      {testimonial.rating}★
                    </div> */}
                  </div>
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Feedback and Details */}
                <p className="text-gray-600 italic text-center mb-4">
                  "{testimonial.feedback}"
                </p>
                <h3 className="text-lg font-bold text-center text-gray-800">
                  {testimonial.name}, 
                  <span className="text-red-500 pl-1 font-semibold text-sm">
                    {testimonial.role}
                  </span>
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialComponent;

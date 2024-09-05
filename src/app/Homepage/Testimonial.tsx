import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    image: 'pexels-photo-1181686.jpeg.jpg',
    name: 'Shifa',
    role: 'Full Stack Developer',
    paragraph: 'This is a five-line paragraph about company experience for Person 1.This is a five-line paragraph about company experience for Person 1This is a five-line paragraph about company experience for Person 1This is a five-line paragraph about company experience for Person 1This is a five-line paragraph about company experience for Person 1This is a five-line paragraph about company experience for Person 1',
  },
  {
    image: 'pexels-photo-1222271.jpeg.jpg',
    name: 'Shifa girl',
    role: 'Full Stack Developer',
    paragraph: 'This is a five-line paragraph about company experience for Person 1.This is a five-line paragraph about company experience for Person 1This is a five-line paragraph about company experience for Person 1This is a five-line paragraph about company experience for Person 1This is a five-line paragraph about company experience for Person 1This is a five-line paragraph about company experience for Person 1',
  },
  {
    image: 'pexels-photo-1181686.jpeg.jpg',
    name: 'Shifasheik',
    role: 'Full Stack Developer',
    paragraph: 'This is a five-line paragraph about company experience for Person 1.This is a five-line paragraph about company experience for Person 1This is a five-line paragraph about company experience for Person 1This is a five-line paragraph about company experience for Person 1This is a five-line paragraph about company experience for Person 1This is a five-line paragraph about company experience for Person 1',
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <>
    <div className="flex flex-col lg:flex-row w-full py-8 md:px-20 px-5">
       
      {/* Left Section */}
      <div className="w-full lg:w-1/2 py flex justify-center items-center">
      <img src='./image-1.png' className='w-[80%]'/>
      </div>

      {/* Right Section with Slider */}
      <div className="w-full lg:w-1/2  flex flex-col items-center relative md:py-8  ">
    <div className='left-6'>
    <p className='text-orange-400 jump mr-[800px] bg-orange-400 md:px-4 md:py-2 border-none rounded-full'>p</p>

    </div>

        <div className="flex flex-col items-center ">
            
        <h1 className='md:text-xl  text-orange-400 font-semibold text-center '> <span className='text-orange-500  text-[40px]'>.</span> Service Testimonials <span className='text-orange-500 text-[40px]'>.</span> </h1>

        <h1 className='lg:text-4xl md:text-4xl text-xl font-bold text-center py-3 mb-3 '><span className=''>What People </span><span>Say About Us</span></h1>
        <p className='text-orange-200 jump ml-[400px] md:-mt-[30px] bg-orange-200 md:px-7 md:py-5 border-none rounded-full'>p</p>


          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="rounded-full w-24 h-24 mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold md:mt-">{testimonials[currentIndex].name}</h2>
          <h3 className="text-base text-gray-800 md:mt-">{testimonials[currentIndex].role}</h3>
          <p className="text-justify text-base md:mt-5 leading-loose mt-3 md:px-20 ">
            {testimonials[currentIndex].paragraph}
          </p>
          <div className=''>
    <p className='text-orange-400 ml-[500px] bg-orange-400 md:px-10 md:py-8 border-none rounded-full '>p</p>

    </div>

        </div>
        <p className='text-orange-200 ml-[350px] jump -mt-24 bg-orange-200 md:px-7 md:py-5 border-none rounded-full'>p</p>
        <p className='text-gray-100 md:ml-[380px] -mt- bg-gray-100 md:px-3 md:py-1 border-none rounded-full'>p</p>


        {/* Slider Arrows */}
        <button
          onClick={prevSlide}
          className="md:block hidden absolute  left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 py-2 px-2 rounded-full"
        >
          &#8592; {/* Left arrow */}
        </button>
        <button
          onClick={nextSlide}
          className=" md:block hidden absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 py-2 px-2 rounded-full"
        >
          &#8594; {/* Right arrow */}
        </button>
      </div>
    </div>
    </>
  );
};

export default Testimonial;
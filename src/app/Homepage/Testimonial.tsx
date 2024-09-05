// 'use client';
// import React, { useEffect } from 'react';
// import Image from "next/image";
// import style2 from '../../../public/style2.png';
// import profile1 from '../../../public/profile1.png';
// import style3 from '../../../public/style3.png';
// import star from '../../../public/stars.png';
// import Slider from 'react-slick';
// import SanityClient from '../SanityClient';


// function Testimonial() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2500,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 1164,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                     arrows: false,
//                 },
//             },
//             {
//                 breakpoint: 820,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                     arrows: false,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                     arrows: false,
//                 },
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 1,
//                     dots: true,
//                     arrows: false,
//                 },
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     dots: true,
//                     arrows: false,
//                 },
//             },
//         ],
//     };

//     return (
//         <>
//             <main className=' bg-bg drop-shadow-xl min-h-screen object-cover bg-cover flex md:flex-row flex-col'>
//                 <Slider {...settings} className="">
//                     {/* slider1 */}
//                     <div className='flex xl:space-x-5 lg:space-x-14 md:space-x-14 sm:space-x-14  pt-5'>
//                         <div>
//                             <img src='/style2.png' alt="style2" className=" ml-[30px] md:mt-[100px] lg:ml-[100px] w-[207px]" />
//                             <Image src={profile1} alt="Profile1" className="-mt-[210px] ml-[50px] md:-mt-[210px] w-[181px] lg:ml-[120px]" />
//                             <Image src={style3} alt="style2" className="ml-[30px] -mt-[180px] md:-mt-[200px] lg:ml-[100px] w-[57px] drop-shadow-md p-1" />
//                         </div>
//                         <div className='w-[50%] md:pt-24 '>
//                             <p className="text-left font-normal text-[#5D5D5D]">Virtual reality environments offer a way to ingrain knowledge more deeply and quickly compared to traditional methods. By prioritizing spatial information, VR helps learners map their understanding effectively.</p>
//                             <hr className=' h-0.5 bg-[#FF8900]  mt-4 ' />
//                             <div className='flex flex-row justify-between'>
//                                 <div>
//                                     <p className=' mt-4'>MARK</p>
//                                     <p className=' mt-4 text-[#FF8900]'>CEO</p>
//                                 </div>
//                                 <div>
//                                     <Image src={star} alt='' className='' />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* slider2 */}
//                     <div className='flex space-x-5 pt-5'>
//                         <div>
//                             <Image src={style2} alt="style2" className=" ml-[30px] md:mt-[100px] lg:ml-[100px] w-[207px]" />
//                             <Image src={profile1} alt="Profile1" className="-mt-[210px] ml-[50px] md:-mt-[210px] w-[181px] lg:ml-[120px]" />
//                             <Image src={style3} alt="style2" className="ml-[30px] -mt-[180px] md:-mt-[200px] lg:ml-[100px] w-[57px] drop-shadow-md p-1" />
//                         </div>
//                         <div className='w-[50%] md:pt-24'>
//                             <p className="text-left font-normal text-[#5D5D5D]">Virtual reality environments offer a way to ingrain knowledge more deeply and quickly compared to traditional methods. By prioritizing spatial information, VR helps learners map their understanding effectively.</p>
//                             <hr className=' h-0.5 bg-[#FF8900]  mt-4 ' />
//                             <div className='flex flex-row justify-between'>
//                                 <div>
//                                     <p className=' mt-4'>MARK</p>
//                                     <p className=' mt-4 text-[#FF8900]'>CEO</p>
//                                 </div>
//                                 <div>
//                                     <Image src={star} alt='' className=' ' />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <link
//                         rel="stylesheet"
//                         type="text/css"
//                         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//                     />
//                     <link
//                         rel="stylesheet"
//                         type="text/css"
//                         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//                     />                    
//                 </Slider>
//             </main >
//         </>
//     )
// }

// export default Testimonial


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

export default Testimonial;
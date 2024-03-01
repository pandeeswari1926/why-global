"use client"
import React, { useState } from 'react'
 import Image from 'next/image'
//  import heli from "../asset/helicopter.gif"
 import style2 from '../asset/style2.png';
import profile1 from '../asset/profile1.png';
import style3 from '../asset/style3.png';
import star from '../asset/stars.png';
import Slider from 'react-slick'

function slider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed:1500,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false,
          autoplay:true,
           autoplaySpeed:1500,
          }
          },]
    
  };
 
  return (

    
    <div className=''>
   
    {/* <link rel="stylesheet"
type="text/css"
charSet='UTF-8'
href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/> */}
<link rel="stylesheet"
type="text/css"
charSet='UTF-8'
href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"></link>
{/* <link
rel="stylesheet"
type="text/css"
href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/> */}
<link rel="stylesheet"
type="text/css"
href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"></link>
    <div className='bg-custom w-full h-full bg-no-repeat relative lg:p-10'>
    

    <div className='relative z-10'>
      
      <div className='w-full h-full lg:h-[400px] relative mx-auto bg-white right-0 z-10'>
        <div className='pt-6 pl-10'>
        <h1 className='text-2xl text-primarycolor font-semibold text-center'>Our Clients Review</h1>
      <h1 className='text-2xl text-gray-600 font-semibold text-center'>Our Clients Testimonials About</h1>
        </div>
      <div className='flex lg:flex-row flex-col gap-10 p-5'>
      <Slider {...settings} className='overflow-hidden'>
   <div>
   <div className='flex justify-center lg:flex-row flex-col w-[90%] relative mx-auto  pt-8'>
                          <div className='lg:w-[80%] w-full relative'>
                              <Image src={style2} alt="style2" className="lg:w-[80%] w-full" />
                              <Image src={profile1} alt="Profile1" className="lg:w-[70%] w-full top-2 absolute" />
                              <Image src={style3} alt="style2" className="absolute sm:w-[20%] w-[30%] top-0 right-[80%]" />
                          </div>
                          <div className='w-full lg:pt-2'>
                              <p className="lg:text-left lg:text-md font-normal text-[#5D5D5D] text-justify">Virtual reality environments offer a way to ingrain knowledge more deeply and quickly compared to traditional methods. By prioritizing spatial information, VR helps learners map their understanding effectively.</p>
                              <hr className=' h-0.5 bg-[#FF8900] mt-4 ' />
                              <div className='flex md:flex-row flex-col justify-between'>
                                  <div>
                                      <p className='text-center'>MARK</p>
                                      <p className=' text-center text-[#FF8900]'>CEO</p>
                                  </div>
                                  <div className='justify-center items-center pl-[10%] md:pl-0 md:w-[30%] mx-auto'>
                                      <Image src={star} alt='' className=' md:mt-5' />
                                  </div>
                              </div>
                          </div>
                         
                      </div>
   </div>
   <div>
   <div className='flex justify-center lg:flex-row flex-col w-[90%] relative mx-auto  pt-8'>
                          <div className='lg:w-[80%] w-full relative'>
                              <Image src={style2} alt="style2" className="lg:w-[80%] w-full" />
                              <Image src={profile1} alt="Profile1" className="lg:w-[70%] w-full top-2 absolute" />
                              <Image src={style3} alt="style2" className="absolute sm:w-[20%] w-[30%] top-0 right-[80%]" />
                          </div>
                          <div className='w-full lg:pt-2'>
                              <p className="lg:text-left lg:text-md font-normal text-[#5D5D5D] text-justify">Virtual reality environments offer a way to ingrain knowledge more deeply and quickly compared to traditional methods. By prioritizing spatial information, VR helps learners map their understanding effectively.</p>
                              <hr className=' h-0.5 bg-[#FF8900]  mt-4 ' />
                              <div className='flex md:flex-row flex-col justify-between'>
                                  <div>
                                      <p className='text-center'>MARK</p>
                                      <p className=' text-center text-[#FF8900]'>CEO</p>
                                  </div>
                                  <div className='justify-center items-center pl-[10%] md:pl-0 md:w-[30%] mx-auto'>
                                      <Image src={star} alt='' className=' md:mt-5' />
                                  </div>
                              </div>
                          </div>
                         
                      </div>
   </div>
   <div>
   <div className='flex justify-center lg:flex-row flex-col w-[90%] relative mx-auto  pt-8'>
                          <div className='lg:w-[80%] w-full relative'>
                              <Image src={style2} alt="style2" className="lg:w-[80%] w-full" />
                              <Image src={profile1} alt="Profile1" className="lg:w-[70%] w-full top-2 absolute" />
                              <Image src={style3} alt="style2" className="absolute sm:w-[20%] w-[30%] top-0 right-[80%]" />
                          </div>
                          <div className='w-full lg:pt-2'>
                              <p className="lg:text-left lg:text-md font-normal text-[#5D5D5D] text-justify">Virtual reality environments offer a way to ingrain knowledge more deeply and quickly compared to traditional methods. By prioritizing spatial information, VR helps learners map their understanding effectively.</p>
                              <hr className=' h-0.5 bg-[#FF8900]  mt-4 ' />
                              <div className='flex md:flex-row flex-col justify-between'>
                                  <div>
                                      <p className='text-center'>MARK</p>
                                      <p className=' text-center text-[#FF8900]'>CEO</p>
                                  </div>
                                  <div className='justify-center items-center pl-[10%] md:pl-0 md:w-[30%] mx-auto'>
                                      <Image src={star} alt='' className=' md:mt-5' />
                                  </div>
                              </div>
                          </div>
                         
                      </div>
   </div>
   </Slider>
      {/* <div className='flex justify-center lg:flex-row flex-col w-[50%] relative mx-auto  pt-8'>
                          <div className='lg:w-[80%] w-full relative'>
                              <Image src={style2} alt="style2" className="lg:w-[80%] w-full" />
                              <Image src={profile1} alt="Profile1" className="lg:w-[70%] w-full top-2 absolute" />
                              <Image src={style3} alt="style2" className="absolute sm:w-[20%] w-[30%] top-0 right-[80%]" />
                          </div>
                          <div className='w-full lg:pt-2'>
                              <p className="lg:text-left lg:text-md font-normal text-[#5D5D5D] text-justify">Virtual reality environments offer a way to ingrain knowledge more deeply and quickly compared to traditional methods. By prioritizing spatial information, VR helps learners map their understanding effectively.</p>
                              <hr className=' h-0.5 bg-[#FF8900]  mt-4 ' />
                              <div className='flex md:flex-row flex-col justify-between'>
                                  <div>
                                      <p className='text-center'>MARK</p>
                                      <p className=' text-center text-[#FF8900]'>CEO</p>
                                  </div>
                                  <div className='justify-center items-center pl-[10%] md:pl-0 md:w-[30%]'>
                                      <Image src={star} alt='' className=' md:mt-5' />
                                  </div>
                              </div>
                          </div>
                         
                      </div>
                      <div className='flex justify-center lg:flex-row flex-col w-[50%] relative mx-auto  pt-8'>
                          <div className='lg:w-[80%] w-full relative'>
                              <Image src={style2} alt="style2" className="lg:w-[80%] w-full" />
                              <Image src={profile1} alt="Profile1" className="lg:w-[70%] w-full top-2 absolute" />
                              <Image src={style3} alt="style2" className="absolute sm:w-[20%] w-[30%] top-0 right-[80%]" />
                          </div>
                          <div className='w-full lg:pt-2'>
                              <p className="lg:text-left lg:text-md font-normal text-[#5D5D5D] text-justify">Virtual reality environments offer a way to ingrain knowledge more deeply and quickly compared to traditional methods. By prioritizing spatial information, VR helps learners map their understanding effectively.</p>
                              <hr className=' h-0.5 bg-[#FF8900]  mt-4 ' />
                              <div className='flex md:flex-row flex-col justify-between'>
                                  <div>
                                      <p className='text-center'>MARK</p>
                                      <p className=' text-center text-[#FF8900]'>CEO</p>
                                  </div>
                                  <div className='justify-center items-center pl-[10%] md:pl-0 md:w-[30%]'>
                                      <Image src={star} alt='' className=' md:mt-5' />
                                  </div>
                              </div>
                          </div>
                         
                      </div> */}
                      
      </div>
      
      </div>
      </div>
   
   </div>
   
    </div>
  )
}

export default slider
'use client';
import React, { Component } from 'react';
import Image from "next/image";
import style2 from '../asset/style2.png';
import profile1 from '../asset/profile1.png';
import style3 from '../asset/style3.png';
import star from '../asset/stars.png';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';


function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Set slidesToShow to the number of slides you want to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        responsive: [
            {
                breakpoint: 1164,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <>
       
            {/* <Head>
                <link rel='' href='react-responsive-carousel/lib/styles/carousel.min.css' />
                <link rel='' href='slick-carousel/slick/slick-theme.css' />

            </Head> */}
            <main className=' bg-bg drop-shadow-xl min-h-screen object-cover bg-cover flex md:flex-row flex-col'>
                {/* <h3>OUR CLIENT’S REVIEW</h3>
                <h1 className='text-[#FF8900] '>CLIENT’S TESTIMONIES ABOUT US</h1> */}

                <Slider {...settings} className="">


                    {/* slider1 */}
                    <div className='flex xl:space-x-5 lg:space-x-14 md:space-x-14 sm:space-x-14  pt-5'>
                        <div>
                            <Image src={style2} alt="style2" className=" ml-[30px] md:mt-[100px] lg:ml-[100px] w-[207px]" />
                            <Image src={profile1} alt="Profile1" className="-mt-[210px] ml-[50px] md:-mt-[210px] w-[181px] lg:ml-[120px]" />
                            <Image src={style3} alt="style2" className="ml-[30px] -mt-[180px] md:-mt-[200px] lg:ml-[100px] w-[57px] drop-shadow-md p-1" />
                        </div>
                        <div className='w-[50%] md:pt-24 '>
                            <p className="text-left font-normal text-[#5D5D5D]">Virtual reality environments offer a way to ingrain knowledge more deeply and quickly compared to traditional methods. By prioritizing spatial information, VR helps learners map their understanding effectively.</p>
                            <hr className=' h-0.5 bg-[#FF8900]  mt-4 ' />
                            <div className='flex flex-row justify-between'>
                                <div>
                                    <p className=' mt-4'>MARK</p>
                                    <p className=' mt-4 text-[#FF8900]'>CEO</p>
                                </div>
                                <div>
                                    <Image src={star} alt='' className='' />
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* slider2 */}
                    <div className='flex space-x-5 pt-5'>
                        <div>
                            <Image src={style2} alt="style2" className=" ml-[30px] md:mt-[100px] lg:ml-[100px] w-[207px]" />
                            <Image src={profile1} alt="Profile1" className="-mt-[210px] ml-[50px] md:-mt-[210px] w-[181px] lg:ml-[120px]" />
                            <Image src={style3} alt="style2" className="ml-[30px] -mt-[180px] md:-mt-[200px] lg:ml-[100px] w-[57px] drop-shadow-md p-1" />
                        </div>
                        <div className='w-[50%] md:pt-24'>
                            <p className="text-left font-normal text-[#5D5D5D]">Virtual reality environments offer a way to ingrain knowledge more deeply and quickly compared to traditional methods. By prioritizing spatial information, VR helps learners map their understanding effectively.</p>
                            <hr className=' h-0.5 bg-[#FF8900]  mt-4 ' />
                            <div className='flex flex-row justify-between'>
                                <div>
                                    <p className=' mt-4'>MARK</p>
                                    <p className=' mt-4 text-[#FF8900]'>CEO</p>
                                </div>
                                <div>
                                    <Image src={star} alt='' className=' ' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>

                    {/* slider3 */}
                    {/* <div className='flex space-x-5'>
                        <div>
                            <Image src={style2} alt="style2" className=" ml-[30px] md:mt-[100px] md:ml-[100px] w-[207px]" />
                            <Image src={profile1} alt="Profile1" className="-mt-[210px] ml-[50px] md:-mt-[210px] w-[181px] md:ml-[120px]" />
                            <Image src={style3} alt="style2" className="ml-[30px] -mt-[180px] md:-mt-[200px] md:ml-[100px] w-[57px] drop-shadow-md p-1" />
                        </div>
                        <div className='w-[25%] pt-24'>
                            <p className="text-left   font-normal text-[#5D5D5D]">Virtual reality environments offer a way to ingrain knowledge more deeply and quickly compared to traditional methods. By prioritizing spatial information, VR helps learners map their understanding effectively.</p>
                            <hr className=' h-0.5 bg-[#FF8900]  mt-4 ' />
                            <div className='flex flex-row justify-between'>
                                <div>
                                    <p className=' mt-4'>MARK</p>
                                    <p className=' mt-4 text-[#FF8900]'>CEO</p>
                                </div>
                                <div>
                                    <Image src={star} alt='' className=' mt-4 pr-12 mr-10' />
                                </div>
                            </div>
                        </div>

                    </div> */}
                </Slider>
            </main >
        </>
    )
}

export default Testimonial
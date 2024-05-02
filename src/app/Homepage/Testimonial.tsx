'use client';
import React, { useEffect } from 'react';
import Image from "next/image";
import style2 from '../../../public/style2.png';
import profile1 from '../../../public/profile1.png';
import style3 from '../../../public/style3.png';
import star from '../../../public/stars.png';
import Slider from 'react-slick';
import SanityClient from '../SanityClient';


function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
            <main className=' bg-bg drop-shadow-xl min-h-screen object-cover bg-cover flex md:flex-row flex-col'>
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
                </Slider>
            </main >
        </>
    )
}

export default Testimonial
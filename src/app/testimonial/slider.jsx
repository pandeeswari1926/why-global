'use client';
import React from 'react'
import Image from 'next/image';
import test from '../../../public/Rectangle 6.png';
import test1 from '../../../public/Rectangle 6 (1).png';
import test2 from '../../../public/Rectangle 6 (2).png';
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaSmileBeam } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderPage = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <>
            <div className='w-full h-full md:pt-32 pt-44'>
                <Slider {...settings}>
                    <div className=''>
                        <div className='flex flex-row bg-gray-200 lg:pl-20 '>
                            <div className='lg:w-[900px] md:w-full sm:w-[1000px] w-full h-full sm:block hidden'>
                                <Image src={test} alt='' className='object-contain w-full h-full' />
                            </div>
                            <div className='bg-[#FF9315] xl:my-10 lg:my-5 my-5'>
                                <BiSolidQuoteAltLeft className='lg:size-28 md:size-24 size-5 text-white opacity-20 xl:mx-44 md:mx-20 mx-10 lg:pt-5 pt-0 -mb-14' />
                                <div className='bg-white p-10 rounded-md xl:mx-44 md:mx-10 mt-14 mx-5 md:pt-7 pt-0 -mb-14'>
                                    <h1 className='lg:text-lg text-base font-semibold text-gray-600'>Chandar</h1>
                                    <h3 className='lg:text-base text-base'>District Directives Representative, khoj Technologies</h3><br />
                                    <p className="lg:text-sm text-xs text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex flex-row bg-gray-200 lg:pl-20'>
                            <div className='lg:w-[900px] md:w-full sm:w-[1000px] w-full h-full sm:block hidden'>
                                <Image src={test1} alt='' className='object-contain w-full h-full' />
                            </div>
                            <div className='bg-[#FF9315] xl:my-10 lg:my-5 my-5'>
                                <BiSolidQuoteAltLeft className='lg:size-28 md:size-24 size-5 text-white opacity-20 xl:mx-44 md:mx-20 mx-10 lg:pt-5 pt-0 -mb-14' />
                                <div className='bg-white p-10 rounded-md xl:mx-44 md:mx-10 mt-14 mx-5 md:pt-7 pt-0 -mb-14'>
                                    <h1 className='lg:text-lg text-base font-semibold text-gray-600'>Chandar</h1>
                                    <h3 className='lg:text-base text-base'>District Directives Representative, khoj Technologies</h3><br />
                                    <p className="lg:text-sm text-xs text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex flex-row bg-gray-200 lg:pl-20'>
                            <div className='lg:w-[900px] md:w-full sm:w-[1000px] w-full h-full sm:block hidden'>
                                <Image src={test2} alt='' className='object-contain w-full h-full' />
                            </div>
                            <div className='bg-[#FF9315] xl:my-10 lg:my-5 my-5'>
                                <BiSolidQuoteAltLeft className='lg:size-28 md:size-24 size-5 text-white opacity-20 xl:mx-44 md:mx-20 mx-10 lg:pt-5 pt-0 -mb-14' />
                                <div className='bg-white p-10 rounded-md xl:mx-44 md:mx-10 mt-14 mx-5 md:pt-7 pt-0 -mb-14'>
                                    <h1 className='lg:text-lg text-base font-semibold text-gray-600'>Chandar</h1>
                                    <h3 className='lg:text-base text-base'>District Directives Representative, khoj Technologies</h3><br />
                                    <p className="lg:text-sm text-xs text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
            
        </>
    )
}

export default SliderPage
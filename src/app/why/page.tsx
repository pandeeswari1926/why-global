'use client';
import React from 'react'
import Image from "next/image";
import life from '../../public/life1.png';
import process from '../../../public/project.png';
import festival from '../../public/project1.png';
import trip from '../../public/project2.png';
import celebration from '../../public/pro.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle'; 
import 'swiper/css/pagination';
import sqaud from '../../../public/Rectangle 59.png';
import sqaud1 from '../../../public/Rectangle 60.png';
import sqaud2 from '../../../public/Rectangle 61.png';
import sqaud3 from '../../../public/Rectangle 62.png';
import sqaud4 from '../../../public/Rectangle 63.png';
import sqaud5 from '../../../public/Rectangle 64.png';
import sqaud6 from '../../../public/Rectangle 65.png';
import sqaud7 from '../../../public/Rectangle 66.png';
import sqaud8 from '../../../public/Rectangle 67.png';
import sqaud9 from '../../../public/Rectangle 68.png';
import sqaud10 from '../../../public/Rectangle 69.png';
import sqaud11 from '../../../public/Rectangle 70.png';
import sqaud12 from '../../../public/Rectangle 71.png';
import sqaud13 from '../../../public/Rectangle 72.png';
import sqaud14 from '../../../public/Rectangle 73.png';
import sqaud15 from '../../../public/Rectangle 74.png';
import sqaud16 from '../../../public/Rectangle 75.png';
import sqaud17 from '../../../public/Rectangle 76.png';
import sqaud18 from '../../../public/Rectangle 77.png';
import sqaud19 from '../../../public/Rectangle 78.png';
import sqaud20 from '../../../public/Rectangle 79.png';
import sqaud21 from '../../../public/Rectangle 80.png';
import sqaud22 from '../../../public/Rectangle 81.png';
import sqaud23 from '../../../public/Rectangle 82.png';
import sqaud24 from '../../../public/Rectangle 83.png';
import sqaud25 from '../../../public/Rectangle 84.png';
import sqaud26 from '../../../public/Rectangle 85.png';
import sqaud27 from '../../../public/Rectangle 86.png';
import sqaud28 from '../../../public/Rectangle 87.png';
import sqaud29 from '../../../public/Rectangle 88.png';
import sqaud30 from '../../../public/Rectangle 88.png';
import sqaud31 from '../../../public/Rectangle 89.png';
import sqaud32 from '../../../public/Rectangle 90.png';
import sqaud33 from '../../../public/Rectangle 91.png';
import sqaud34 from '../../../public/Rectangle 92.png';
import sqaud35 from '../../../public/Rectangle 93.png';
import sqaud36 from '../../../public/Rectangle 94.png';
import SliderImage from './slider';

function Why() {


    return (
        <div>
            <main className="">
                <div className='bg-bg w-full h-96'></div>
                <div className='grid lg:grid-cols-2 grid-cols-1 h-[700px] bg-gray-200 px-10 pt-10 relative '>
                    <div className='w-full xl:pl-20 mx-auto flex flex-col gap-7'>
                        <h3 className='text-lg text-[#FF9315] font-bold md:text-left text-center'>
                            OUR WORK PROCESS
                        </h3>
                        <h1 className='text-3xl text-gray-500 leading-relaxed font-semibold md:text-left text-center'>
                            We understand that a healthy employee is a productive and engaged one
                        </h1>
                        <p className='text-sm xl:w-[85%] w-full font-light md:text-left text-center'>
                            We strive to create an environment that nurtures and supports these pillars, ensuring our employees’ overall well-being and satisfaction.<br /><br />

                            In terms of a healthy life, we place great importance on promoting physical and mental well-being. Our comprehensive wellness programs encompass fitness activities, mindfulness sessions, and access to resources that encourage a balanced lifestyle. We understand that a healthy employee is a productive and engaged one, and we provide the necessary tools and support to help our team members prioritize their health.<br /><br />

                            We also recognize the significance of a fulfilling social life. At WHY Global Services, we foster a vibrant and inclusive community where colleagues can connect, collaborate, and build meaningful relationships
                        </p>
                    </div>
                    <div className='w-full h-full relative'>
                        <Image src={process} alt='our work process' className='' />
                    </div>
                    <div className='polygon absolute'>
                    </div>
                </div>
                {/* second section */}
                <div>
                    <SliderImage/>
                </div>
                {/* Third section */}
                <div>
                    <div className='grid lg:grid-cols-9 md:grid-cols-6 grid-cols-3 mt-5 p-10'>
                        <Image src={sqaud} alt='' />
                        <Image src={sqaud1} alt='' />
                        <Image src={sqaud2} alt='' />
                        <Image src={sqaud3} alt='' />
                        <Image src={sqaud4} alt='' />
                        <Image src={sqaud5} alt='' />
                        <Image src={sqaud6} alt='' />
                        <Image src={sqaud7} alt='' />
                        <Image src={sqaud8} alt='' />
                        <Image src={sqaud9} alt='' />
                        <Image src={sqaud10} alt='' />
                        <Image src={sqaud11} alt='' />
                        <Image src={sqaud12} alt='' />
                        <Image src={sqaud13} alt='' />
                        <Image src={sqaud14} alt='' />
                        <Image src={sqaud15} alt='' />
                        <Image src={sqaud16} alt='' />
                        <Image src={sqaud17} alt='' />
                        <Image src={sqaud18} alt='' />
                        <Image src={sqaud19} alt='' />
                        <Image src={sqaud20} alt='' />
                        <Image src={sqaud21} alt='' />
                        <Image src={sqaud22} alt='' />
                        <Image src={sqaud23} alt='' />
                        <Image src={sqaud24} alt='' />
                        <Image src={sqaud25} alt='' />
                        <Image src={sqaud26} alt='' />
                        <Image src={sqaud27} alt='' />
                        <Image src={sqaud28} alt='' />
                        <Image src={sqaud29} alt='' />
                        <Image src={sqaud30} alt='' />
                        <Image src={sqaud31} alt='' />
                        <Image src={sqaud32} alt='' />
                        <Image src={sqaud33} alt='' />
                        <Image src={sqaud34} alt='' />
                        <Image src={sqaud35} alt='' />
                    </div>
                    <h1 className='text-center text-[#FF9315] text-2xl font-font'>#WHYsquad</h1>
                </div>
                <div className='bg-gradient-to-t from-[#FF9315] to-[#dcb145] p-10 mx-32 my-20'>
                    <h1 className='text-center text-4xl text-white font-bold'>Do you have any project to working with?</h1>
                    <div className='flex justify-center items-center pt-10'>
                        <button className='text-[#FF9315] bg-white rounded-full p-3 px-16 drop-shadow-xl'>Get Started</button>
                    </div>
                </div>
            </main >
        </div >
    )
}

export default Why
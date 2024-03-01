"use client";
import React from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import "../css/home.css"
// import video1 from "../asset/WGS VIDEO (1).gif"
import person from '../asset/ceosir.png'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Globe from './Globe';
import Helicopter from './Helicopter';
// import Wgs from './wgs'
// import TopBar from './TopBar';
import NavBar from './NavBar';
import Footer from './Footer';
// import World from './World';
import Home from './page1';
function Page() {


    return (
        <>
            <div className=''>
                {/* <TopBar /> */}
                <NavBar />

                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet='UTF-8'
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />

                <div className='lg:h-[600px] h-[800px] w-full relative'>
                    <div className='w-full h-full'>
                        {/* <Image src={video1} alt="Background Image" className='w-full h-[95%] items-center md:object-cover object-cover' /> */}
                    </div>
                    <div className='absolute bottom-0 left-0 els w-full h-full'>
                    </div>
                    <div className='absolute right-0 bottom-0 w-full h-full wh'></div>
                    <h1 className=' md:text-5xl text-3xl absolute md:top-48 top-48 text-white md:right-20 right-3 text-right font-bold'>Powerful Digital Solutions</h1>
                    <p className='md:text-5xl text-3xl md:top-36 top-32 md:right-20 right-3 absolute text-white text-right font-bold'>For <span className='text-[#FF9315]' >Millions</span> of Users</p>

                </div>
                <div className='lg:absolute  relative lg:top-[550px] h-fit'>
                    <div className="flex md:flex-row flex-col items-center gap-6 ">
                        <div className="bg-white outline outline-[#FF9315] relative w-[60%] h-52 lg:w-44 lg:h-36 md:w-[40%]  rounded-3xl drop-shadow-2xl flex justify-center items-center">
                            <FontAwesomeIcon icon={faComputer} className="sm:size-12 size-28 absolute top-5 text-[#FF9315]" />
                            <p className="absolute text-xl md:text-lg text-center bottom-9 lg:bottom-5">Product Engineering</p>
                        </div>
                        <div className="bg-white outline outline-[#FF9315] relative w-[60%] h-52 lg:w-44 lg:h-36 md:w-[40%] rounded-3xl drop-shadow-2xl flex justify-center items-center">
                            <FontAwesomeIcon icon={faComputer} className="sm:size-12 size-28 absolute top-5 text-[#FF9315]" />
                            <p className="absolute text-xl md:text-lg  text-center bottom-9 lg:bottom-5">Business Security</p>
                        </div>
                        <div className="bg-white outline outline-[#FF9315] relative w-[60%] h-52 lg:w-44 lg:h-36 md:w-[40%]  rounded-3xl drop-shadow-2xl flex justify-center items-center">
                            <FontAwesomeIcon icon={faComputer} className="sm:size-12 size-28 absolute top-5 text-[#FF9315]" />
                            <p className="absolute text-xl md:text-lg  text-center bottom-9 lg:bottom-5">Managed IT
                                Services</p>
                        </div>
                        <div className='mt-10 md:w-[70%] w-full lg:text-right md:text-left text-center p-3'>
                            <p className='text-justify'>
                                Join our team We are looking for talented & driven people to come work with us Available Positions
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='relative w-full h-full bg-cover lg:bg-bgslide md:bg-bgslide bg-no-repeat  md:pt-36'>

                <div className='lg:grid grid grid-cols-1 lg:grid-cols-2 '>
                    <div className='md:w-[400px] w-[95%] md:h-[500px] mx-auto'>
                        <Image src={person} alt="Background Image" className='w-full h-[95%] md:object-cover object-cover' />
                    </div>
                    <div className='flex flex-col gap-8 w-[100%] p-10 text-center md:h-[60%]'>
                        <p className='md:text-lg text-3xl text-[#FF9315] font-semibold'>30 Years of experience</p>
                        <h1 className='md:text-2xl text-xl text-pretty text-gray-600 font-semibold w-full'>WE EXECUTE OUR IDEAS FROM THE START TO FINISH</h1>
                        <p className='text-md text-gray-500 w-full text-center'>On the other hand we denounce with righteous indignation hill and dislike men who are so beguiled and demoralized.</p>

                        <div className='grid lg:grid-cols-2 text-sm md:text-lg lg:gap-8 text-gray-500 mx-auto'>
                            <div>
                                <div className='flex leading-loose'><FontAwesomeIcon icon={faCheck} className='size-5 text-[#FF9315]' /> <p className='text-xs'> Cost of supplies and equipment</p></div>
                                <div className='flex leading-loose'><FontAwesomeIcon icon={faCheck} className='size-5 text-[#FF9315]' /> <p className='text-xs'> Cost of supplies and equipment</p></div>
                                <div className='flex leading-loose'><FontAwesomeIcon icon={faCheck} className='size-5 text-[#FF9315]' /> <p className='text-xs'> Cost of supplies and equipment</p></div>

                            </div>
                            <div>
                                <div className='flex leading-loose'><FontAwesomeIcon icon={faCheck} className='size-5 text-[#FF9315]' /> <p className='text-xs'> Cost of supplies and equipment</p></div>
                                <div className='flex leading-loose'><FontAwesomeIcon icon={faCheck} className='size-5 text-[#FF9315]' /> <p className='text-xs'> Cost of supplies and equipment</p></div>
                                <div className='flex leading-loose'><FontAwesomeIcon icon={faCheck} className='size-5 text-[#FF9315]' /> <p className='text-xs'> Cost of supplies and equipment</p></div>

                            </div>
                        </div>
                        <p className='md:text-md text-sm text-justify lg:text-center'>Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis bibend um auctor nisi elit consequat ipsum.On the other hand we denounce with righteous indignation hill and dislike men who are so beguiled</p>
                    </div>

                </div>



            </div>
            <Home />
            <Helicopter />
            {/* <Testimonial /> */}

            {/* <Wgs /> */}
            {/* <Testimonial /> */}
            <Globe />
            {/* <World /> */}
            <Footer />
        </>
    );
}

export default Page;
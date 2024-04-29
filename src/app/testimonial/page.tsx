"use client";
import React from "react";
import Image from "next/image";
import line from "../../../public/Line 1.png";
import ceo from "../../../public/WGS LIVE PICS (6) 1.png";
import gif from "../asset/wgs gifs (22).gif";
import message from "../../../public/Vector 86.png";
import SliderPage from "./slider";
import Test from "./test";
import bg from "../asset/testmonialbg.png";
import warn from '../asset/warn.png'
import small from '../asset/small2.png'
const Page = () => {
  return (
    <>
      {/* first section */}
      <div className="">
        {/* <div className='flex md:flex-row flex-col w-full h-screen relative pt-10'>
                    <div className='space-y-10 flex flex-row '>
                        
                        <div className='w-60 h-60 z-10 absolute top-1/2 left-0'>
                            <Image src={gif} alt='' className='w-full h-full' />
                        </div>
                    </div>
                    <div className=''>

                        <div className='trian absolute right-0 top-0 bg-gradient-to-b from-[#FF9315] via-[#f9b465] to-transparent xl:w-[85%] lg:w-[80%] md:w-[70%] w-[500px] lg:h-[500px] md:h-[300px] sm:h-[350px] h-[300px]'></div>
                        <div>
                            <Image src={line} alt='' className='absolute xl:right-56 lg:right-32 md:right-16 right-0 top-0 lg:w-fit md:w-[30%] w-fit ' />
                        </div>
                        <div>
                            <Image src={ceo} alt='' className='absolute xl:right-44 right-0 top-0 xl:w-[30%] lg:w-[40%] md:w-[30%] sm:w-[40%] w-fit ' />
                        </div>
                        <div className='absolute xl:top-[400px] lg:top-96 md:top-48 sm:top-48 top-64 xl:right-64 right-0 rounded-t-lg bg-white opacity-50 sm:w-96 w-80 p-2 '>
                            <h1>Sathishkumar kannan</h1>
                            <p>CEO</p>
                        </div>
                        <div className='mr-20 lg:w-full lg:h-full w-[50%] absolute md:block hidden'>
                            <Image src={message} alt='' className='' />
                            <div className='absolute lg:top-16 top-8 left-20'>
                                <h1 className='lg:text-xl text-base text-[#FF9315] font-semibold'>At the heart of everything we do,</h1><br />
                                <h1 className='lg:text-4xl text-xl text-gray-400 font-semibold leading-relaxed'>See how we&apos;ve made a<br className='lg:block hidden' /> difference..</h1>
                            </div>
                        </div>
                    </div>
                </div > */}
        <div className="relative h-[530px] lastwidth:h-[650px] xs:h-[750px] xs2:h-[900px] sm:h-screen">
        
          <div className="absolute md:-top-7 right-0 lg:w-[80%] w-full xs:h-screen leawidth:h-[650px] h-[500px]">
            <Image src={bg} alt="" className="w-full h-full  object-fill" />
          </div>
          <div className="absolute lg:w-[50%] md:w-[70%] w-full md:right-5 right-0 xs:bottom-0 bottom-10 ">
            <div className="lg:w-[80%] w-full relative">
        
            <div className="w-[80%] lg:hidden block absolute -top-1/3 sm:-top-52  md:-top-1/3 left-1/2 -translate-x-1/2 ">
            <Image src={small} alt="" className="w-full" />
            <div className="absolute lg:top-12 lg:left-16 top-5 left-5 space-y-5">
              <p className="sm:text-lg xs:text-base text-xs text-primarycolor font-semibold">At the heart of everything we do,</p>
              <h1 className=" xs:text-2xl text-xs text-gray-500 font-semibold">See how we&apos;ve made a difference..</h1>
            </div>
          </div>
            <Image src={warn} alt="ceo" className=" -left-32 md:flex hidden bottom-5 absolute" /> 
              <Image src={ceo} alt="ceo" className="w-full" />
              
              </div>
            <div className="text-white bg-white bg-opacity-25 absolute bottom-0 md:right-28 w-[80%] p-3 pl-8 rounded-t-xl">
              <h1 className="md:text-2xl text-lg  font-semibold">Sathishkumar Kannan</h1>
              <p className="text-sm font-semibold">CEO</p>
            </div>
          </div>
          <div className="lg:w-[550px] xs:w-[450px] lg:block hidden absolute bottom-1/2  left-28">
            <Image src={message} alt="" className="" />
            <div className="absolute lg:top-12 lg:left-16 top-5 left-5 space-y-5">
              <p className="sm:text-lg xs:text-base text-xs text-primarycolor font-semibold">At the heart of everything we do,</p>
              <h1 className="sm:text-3xl xs:text-lg text-xs text-gray-500 font-semibold">See how we&apos;ve made a difference..</h1>
            </div>
          </div>
        
          <div className="absolute w-80 bottom-0 md:left-14 lg:block hidden">
            <Image src={gif} alt="gif" className=""/>
          </div>
        </div>
        {/* second section */}
      </div>
      <div className="">
        <SliderPage />
      </div>
      {/* third section */}
      <div>
        <Test />
      </div>
    </>
  );
};

export default Page;
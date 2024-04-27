"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from '@fortawesome/free-solid-svg-icons'
import tick from "../asset/tick.png"
import "../css/home.css"
import video1 from "../asset/WGS VIDEO (1).gif"
import person from '../asset/ceosir.png'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Globe from './Globe';
import Helicopter from './Helicopter';
import Wgs from './wgs'
import World from './World';
import Home from './page1';
import Client from './client';
import ce from '../asset/ce.png'
import SanityClient from "../SanityClient"
import comp from "../asset/computer.png"

function Page() {
const [data,setdata]=useState([])
useEffect(()=>{
  console.log("test");
const getdata= async()=>{
 
  
await SanityClient.fetch(`*[_type=="Home"]{
  SecondSection[]{
    Photo{
      asset->{
        url
      }
    }
  },
  Banner[]{
    Gif,
    title1,
    title2,
    card[]{
      siteIcon{
        asset->{
          url
        }
      },
      cardTitle
    }
  }
}`).then((res:any)=>{
  console.log(res ,"jj")
  setdata(res[0].Banner[0])
  
}).catch((err:any)=>{
  console.log(err);
  
})
}
getdata()
},[])
console.log("ss");


  return (
    <>
      <div className=''>
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
        <div className='h-screen  w-full relative'>
          <div className='w-full h-full'>
            <Image src={video1} alt="Background Image" className='w-full h-[95%] items-center md:object-cover object-cover' />
          </div>
          <div className='absolute bottom-0 left-0 els w-full h-full'>
          </div>
          <div className='absolute right-0 bottom-0 w-full h-full wh'></div>
          <h1 className=' md:text-5xl text-3xl absolute md:top-48 top-48 text-white md:right-20 right-3 text-right font-bold'>Powerful Digital Solutions</h1>
          <p className='md:text-5xl text-3xl md:top-36 top-32 md:right-20 right-3 absolute text-white text-right font-bold'>For <span className='text-[#FF9315]' >Millions</span> of Users</p>
        </div>
        <div className='lg:-mt-20 w-full flex lg:flex-row lg:mb-20 mb-5 flex-col justify-center items-center h-fit'>

          <div className="flex lg:flex-row flex-col w-full lg:w-[50%] justify-center items-center gap-6 ">
          <div className="bg-white  outline outline-[#FF9315] relative w-[60%] h-52 lg:w-40  lg:h-44 md:w-[40%]  rounded-3xl drop-shadow-lg flex flex-col justify-center gap-3 items-center">
              <FontAwesomeIcon icon={faComputer} className="sm:size-16 size-24  text-[#FF9315]" />
              <p className=" text-xl md:text-lg text-center ">Product <br /> Engineering</p>
            </div>
            <div className="bg-white  outline outline-[#FF9315] relative w-[60%] h-52 lg:w-40  lg:h-44 md:w-[40%]  rounded-3xl drop-shadow-lg flex flex-col justify-center gap-3 items-center">
              <FontAwesomeIcon icon={faComputer} className="sm:size-16 size-24  text-[#FF9315]" />
              <p className=" text-xl md:text-lg text-center ">Product <br /> Engineering</p>
            </div>
            <div className="bg-white  outline outline-[#FF9315] relative w-[60%] h-52 lg:w-40  lg:h-44 md:w-[40%]  rounded-3xl drop-shadow-lg flex flex-col justify-center gap-3 items-center">
              <FontAwesomeIcon icon={faComputer} className="sm:size-16 size-24  text-[#FF9315]" />
              <p className=" text-xl md:text-lg text-center ">Product <br /> Engineering</p>
            </div>

           
            {/* <div className="bg-white  outline outline-[#FF9315] relative w-[60%] h-52 lg:w-40  lg:h-44 md:w-[40%]  rounded-3xl drop-shadow-lg flex flex-col justify-center gap-3 items-center">
              <FontAwesomeIcon icon={faComputer} className="sm:size-16 size-24  text-[#FF9315]" />
              <p className=" text-xl md:text-lg text-center ">Product <br /> Engineering</p>
            </div>
            <div className="bg-white  outline outline-[#FF9315] relative w-[60%] h-52 lg:w-40  lg:h-44 md:w-[40%]  rounded-3xl drop-shadow-lg flex flex-col justify-center gap-3 items-center">
              <FontAwesomeIcon icon={faComputer} className="sm:size-16 size-24  text-[#FF9315]" />
              <p className=" text-xl md:text-lg text-center ">Product <br /> Engineering</p>
            </div> */}
           
            
          </div>
          <div className='mt-10 lg:w-[50%] w-full text-center p-3'>
              <p className=''>
                Join our team We are looking for talented & driven people to come work with us Available Positions
              </p>
            </div>
        </div>
      </div>
      <div className='relative w-full h-full bg-cover lg:bg-bgslide md:bg-bgslide bg-no-repeat  '>
        <div className='absolute w-full h-full -z-10'><Image src={ce} alt='' ></Image></div>
        <div className='lg:grid grid grid-cols-1 lg:grid-cols-2 '>
          <div className='md:w-[400px] relative w-[95%] md:h-[500px] mx-auto'>
            <div className=' absolute lg:top-1/2 lg:-right-20 bottom-0 left-1/2 lg:left-3/4 lg:-translate-x-0  -translate-x-1/2'> <div className='flex flex-col gap-2 bg-white rounded-2xl  drop-shadow-2xl justify-center items-center p-5'>
              <p className='text-primarycolor font-bold text-2xl sm:text-4xl'>3.5K</p>
              <p className='sm:text-base text-xs'>Satisfied Client</p>
            </div>
            </div>
           
            <Image src={person} alt="Background Image" className='sm:w-full w-[90%] h-[90%] mx-auto sm:h-full md:object-cover object-cover' />
          </div>
          <div className='flex flex-col gap-8 w-[100%] lg:p-10 p-5 text-center md:h-[60%]'>
            <p className='md:text-lg text-xl text-[#FF9315] font-semibold'>30 Years of experience</p>
            <h1 className='md:text-2xl text-xl text-center lg:text-start text-gray-600 font-semibold w-full'>WE EXECUTE OUR IDEAS FROM THE START TO FINISH</h1>
            <p className='text-md text-gray-500 w-full text-center lg:text-start'>On the other hand we denounce with righteous indignation hill and dislike men who are so beguiled and demoralized.</p>
            <div className='flex lg:flex-row flex-col justify-around items-center px-5 text-gray-500 '>
              <div>
                <div className='flex justify-center items-center leading-loose'><div className=''><Image alt='' src={tick}></Image></div> <p className='text-xs'> Cost of supplies and equipment</p></div>
                <div className='flex justify-center items-center leading-loose'><div className=''><Image alt='' src={tick}></Image></div> <p className='text-xs'> Cost of supplies and equipment</p></div>
                <div className='flex justify-center items-center leading-loose'><div className=''><Image alt='' src={tick}></Image></div> <p className='text-xs'> Cost of supplies and equipment</p></div>
               
              </div>
              <div>
              <div className='flex justify-center items-center leading-loose'><div className=''><Image alt='' src={tick}></Image></div> <p className='text-xs'> Cost of supplies and equipment</p></div>
                <div className='flex justify-center items-center leading-loose'><div className=''><Image alt='' src={tick}></Image></div> <p className='text-xs'> Cost of supplies and equipment</p></div>
                <div className='flex justify-center items-center leading-loose'><div className=''><Image alt='' src={tick}></Image></div> <p className='text-xs'> Cost of supplies and equipment</p></div>
              </div>
            </div>
            <p className='md:text-md text-sm text-justify lg:text-start'>Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis bibend um auctor nisi elit consequat ipsum.On the other hand we denounce with righteous indignation hill and dislike men who are so beguiled</p>
          </div>
        </div>
      </div>
      <Home />
      <Globe />
      <World />
      <Client/>
      <Helicopter />
      <Wgs />
    </>
  );
}

export default Page;
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Web from "./web";
import WebDesign from "./webDesign";
import DigitalMarketing from "./DigitalMarketing";
import Iot from "./iot";
import Appdevelopment from "./Appdevelopment";
import SanityClient from "../SanityClient";
import { Banner } from "./Banner";
import Link from "next/link";


const Page = () => {
  useEffect(()=>{
    SanityClient.fetch(`*[_type=='portfolio']{
      metaTitle,
      MetaDescription,
      MetaData,
      FocusKeyword,
      MetaURL,
      Banner[]{
        heading,
        content,
      }
    }`).then((res)=>{
      console.log(res)
      
    })
  },[])
  return (
    <>
      {/* first section */}
      <div><Banner/></div>
      {/* second section */}
      <div className="overflow-hidden"><Web /></div>
      {/* third section */}
      <div className="pb-10 overflow-hidden"><Appdevelopment /></div>
      {/* fourth section */}
      <div className="py-5 -mt-14 overflow-hidden"><WebDesign/></div>
      {/* fifth section */}
      <div className=""><DigitalMarketing /></div>
      {/* sixth section */}
      <div className="overflow-hidden"><Iot /></div>
      <div className="flex flex-col justify-center items-center overflow-hidden py-5">
        <div className="relative w-full lg:h-[236px] h-[250px]  px-10">
          <img
            src='./bgorange1.png'
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center space-y-10">
            <h2 className="font-semibold sm:text-5xl text-3xl mb-4 text-white">
              Connect with Us!
            </h2>
            <Link href={'/contactus'}>
            <button className="bg-white drop-shadow-xl text-[#FF8900] rounded-full sm:px-32 px-20 py-4 font-semibold sm:text-xl text-lg">
              Get Started
            </button></Link>
            
          </div>
        </div>
      </div>

    </>
  );
};

export default Page;

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
    </>
  );
};

export default Page;

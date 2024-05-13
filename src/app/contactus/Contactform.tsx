'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import contactgettin from "../../../public/getin.png";
import { MdEmail, MdLocationOn, MdLocalPhone } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Select } from "antd";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import SanityClient from "../SanityClient";
interface Alldata{
  Categoryname:string
}
const Contactform = () => {
  const[alldata,setalldata]=useState<Alldata[]|[]>([])
  useEffect(()=>{
  const getdata=async()=>{
    await SanityClient.fetch(`*[_type=="servicecategory"]{
      Categoryname
      
    }`).then((res:any)=>{
     setalldata(res)
     console.log(res);
     
    })
  }
  getdata();

},[])
  return (
    <section className="lg:h-[550px] xs:h-[800px] h-[830px]">
      <div className=" w-full p-5 md:p-10 h-full">
        <div className="relative max-w-5xl w-full h-80  mx-auto rounded-3xl drop-shadow-sm">
          <img
            src="./getin.png"
            alt="Background"
            className="rounded-lg w-full h-full "
          />
          <div className="flex absolute inset-0 sm:p-10 xs:p-5 p-2 pt-5 justify-between w-full ">
            <div className="flex lg:flex-row flex-col lg:gap-5  gap-10 justify-between w-full">
              <div className="flex  flex-col justify-between item-center p-5 lg:p-0">
                <h3 className=" text-white xs:text-5xl text-3xl font-bold sm:-mt-2  ml-1">
                  Get in Touch
                </h3>

                <ul className="flex flex-col px-2 gap-5 pt-8 py-5 text-white text-xs sm:text-sm">
                  <Link
                    href="mailto:contact@whyglobalservices.com"
                    className="flex items-center gap-2"
                    target="_blank"
                  >
                    <MdEmail className="text-white" />
                    <p className="  text-white">
                      contact@whyglobalservices.com
                    </p>
                  </Link>
                  <Link
                    href="https://www.google.com/maps/place/WHY+Global+Services/@13.0712223,80.2405669,15z/data=!3m2!4b1!5s0x3a526672ac53d709:0xc472fff95bbccecd!4m6!3m5!1s0x3a5265be7d4e0655:0x1ecaf35cce10324c!8m2!3d13.071223!4d80.259021!16s%2Fg%2F1hdzfksp0?entry=ttu, Chennai"
                    className="flex  gap-2"
                    target="_blank"
                  >
                    <MdLocationOn className="text-white size-4 mt-1" />
                    <p className=" text-white lg:w-[60%]">3<sup>rd</sup> Floor, New No. 75,77 & 79, Lohmanradhri Towers, Egmore, Chennai, Tamil Nadu 600008.</p>
                  </Link>
                  {/* <li className="flex items-center gap-2">
                    {" "}
                    <MdLocalPhone /> +91-7299119900
                  </li> */}
                  <Link
                    href="tel:+918270099990"
                    className="flex items-center gap-2"
                    target="_blank"
                  >
                    <MdLocalPhone className="text-white" />
                    <p className="text-white">
                      +91-82700 99990
                    </p>
                  </Link>
                </ul>
                <div className="flex flex-row text-white text-lg px-2 gap-1 items-center drop-shadow-sm">
                  <a href="https://www.facebook.com/whyglobal/" target="_blank">
                    <FaFacebookSquare />
                  </a>
                  <a href="https://twitter.com/wehelpyou19" target="_blank">
                    <FaXTwitter />
                  </a>
                  <a href="https://www.instagram.com/whyglobalservices/" target="_blank">
                    <AiFillInstagram className="size-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/why-global-services/?originalSubdomain=in" target="_blank">
                    <FaLinkedin />
                  </a>
                  <a href="https://www.youtube.com/@WhyGlobalServices" target="_blank">
                    <FaYoutube className="size-6" />
                  </a>
                </div>
              </div>

              <div className="drop-shadow-xl bg-white h-[480px] md:h-[450px] rounded-xl  lg:w-[70%] w-full p-5 ">
                <form
                  action=""
                  className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-7 gap-2 md:gap-5 text-sm"
                >
                  <input
                    type="text"
                    className="border border-gray-400 p-2 rounded-md"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    className="border border-gray-400 p-2 rounded-md"
                    placeholder="Email ID"
                  />
                  <input
                    type="text"
                    className="border border-gray-400 p-2 rounded-md"
                    placeholder="Mobile Number"
                  />
                  <Select
                  
                    className="h-10 rounded-md"
                    placeholder='Service'
                  >
                   {alldata?.map((item,index)=>(
                    <option value={item.Categoryname}>{item.Categoryname}</option>
                   ))}
                  </Select>
                </form>
                <div className="md:px-7 px-2">
                  <textarea
                    name="message"
                    id="message"
                    cols={1}
                    rows={8}
                    className="border-gray-400 border rounded-md w-full p-2"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="flex justify-end items-center pt-2 px-2 md:px-6">
                  <button className="w-28 rounded-md px-2 py-1.5 hover:bg-primarycolor duration-200 hover:text-white bg-white drop-shadow-lg">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;

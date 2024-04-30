"use client";
import React, { useState } from "react";
import Image from "next/image";
import heli from "../../../public/helicopter.gif";
import style2 from "../../../public/style2.png";
import profile1 from "../../../public/profile1.png";
import style3 from "../../../public/style3.png";
import star from "../../../public/stars.png";
import Slider from "react-slick";
import tick from "../../../public/tick.png";

function Helicopter() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1500,
        },
      },
    ],
  };
  const [clickindex, setclickindex] = useState(0);
  function handleclick(value: any, e: any) {
    setContent(e.target.textContent);
    setclickindex(value);
    console.log(clickindex);
  }
  const [Content, setContent] = useState("Frontend");
  const listItems = ["Frontend", "Backend", "Database", "Mobile", "CMS"];
  return (
    <div className="">
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      ></link>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      ></link>
      <div className="bg-custom w-full h-full bg-no-repeat relative lg:p-10">
        <div className="relative z-10">
          <div className="w-full h-full lg:h-[400px] relative mx-auto bg-white right-0 ">
            <div className="pt-6 lg:text-start text-center lg:pl-10">
              <h1 className="lg:text-2xl text-xl text-primarycolor font-semibold text-center">
                Our Clients Review
              </h1>
              <h1 className="lg:text-2xl text-lg text-gray-600 font-semibold text-center">
                Our Clients Testimonials About
              </h1>
            </div>
            <div className="flex lg:flex-row flex-col gap-10 p-5">
              <Slider {...settings} className="overflow-hidden">
                <div>
                  <div className="flex gap-2 justify-center lg:flex-row flex-col w-[90%] relative mx-auto  pt-8">
                    <div className="lg:w-[80%] w-full relative">
                      <Image
                        src={style2}
                        alt="style2"
                        className="lg:w-[80%] w-full"
                      />
                      <Image
                        src={profile1}
                        alt="Profile1"
                        className="lg:w-[70%] w-full top-2 absolute"
                      />
                      <Image
                        src={style3}
                        alt="style2"
                        className="absolute sm:w-[20%] w-[30%] top-0 right-[80%]"
                      />
                    </div>
                    <div className="w-full lg:pt-2">
                      <p className="lg:text-left lg:text-md font-normal text-[#5D5D5D] text-justify">
                        Virtual reality environments offer a way to ingrain
                        knowledge more deeply and quickly compared to
                        traditional methods. By prioritizing spatial
                        information, VR helps learners map their understanding
                        effectively.
                      </p>
                      <hr className=" h-0.5 bg-[#FF8900] mt-4 " />
                      <div className="flex md:flex-row flex-col justify-between">
                        <div>
                          <p className="text-center">MARK</p>
                          <p className=" text-center text-[#FF8900]">CEO</p>
                        </div>
                        <div className="justify-center items-center  md:pl-0 md:w-[30%] mx-auto">
                          <Image src={star} alt="" className=" md:mt-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 justify-center lg:flex-row flex-col w-[90%] relative mx-auto  pt-8">
                    <div className="lg:w-[80%] w-full relative">
                      <Image
                        src={style2}
                        alt="style2"
                        className="lg:w-[80%] w-full"
                      />
                      <Image
                        src={profile1}
                        alt="Profile1"
                        className="lg:w-[70%] w-full top-2 absolute"
                      />
                      <Image
                        src={style3}
                        alt="style2"
                        className="absolute sm:w-[20%] w-[30%] top-0 right-[80%]"
                      />
                    </div>
                    <div className="w-full lg:pt-2">
                      <p className="lg:text-left lg:text-md font-normal text-[#5D5D5D] text-justify">
                        Virtual reality environments offer a way to ingrain
                        knowledge more deeply and quickly compared to
                        traditional methods. By prioritizing spatial
                        information, VR helps learners map their understanding
                        effectively.
                      </p>
                      <hr className=" h-0.5 bg-[#FF8900]  mt-4 " />
                      <div className="flex md:flex-row flex-col justify-between">
                        <div>
                          <p className="text-center">MARK</p>
                          <p className=" text-center text-[#FF8900]">CEO</p>
                        </div>
                        <div className="justify-center items-center  md:pl-0 md:w-[30%] mx-auto">
                          <Image src={star} alt="" className=" md:mt-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 justify-center lg:flex-row flex-col w-[90%] relative mx-auto  pt-8">
                    <div className="lg:w-[80%] w-full relative">
                      <Image
                        src={style2}
                        alt="style2"
                        className="lg:w-[80%] w-full"
                      />
                      <Image
                        src={profile1}
                        alt="Profile1"
                        className="lg:w-[70%] w-full top-2 absolute"
                      />
                      <Image
                        src={style3}
                        alt="style2"
                        className="absolute sm:w-[20%] w-[30%] top-0 right-[80%]"
                      />
                    </div>
                    <div className="w-full lg:pt-2">
                      <p className="lg:text-left lg:text-md font-normal text-[#5D5D5D] text-justify">
                        Virtual reality environments offer a way to ingrain
                        knowledge more deeply and quickly compared to
                        traditional methods. By prioritizing spatial
                        information, VR helps learners map their understanding
                        effectively.
                      </p>
                      <hr className=" h-0.5 bg-[#FF8900]  mt-4 " />
                      <div className="flex md:flex-row flex-col justify-between">
                        <div>
                          <p className="text-center">MARK</p>
                          <p className=" text-center text-[#FF8900]">CEO</p>
                        </div>
                        <div className="justify-center items-center  md:pl-0 md:w-[30%] mx-auto">
                          <Image src={star} alt="" className=" md:mt-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className="w-full lg:h-fit relative  mx-auto right-0  mt-[15%] ">
          <div className="lg:block hidden oran bg-primarycolor -left-10 -top-[85%] absolute w-[60%]  h-[500px]"></div>
          <div className="absolute lg:-top-[30%] lg:left-10 xs:-top-[11%] -top-[9%] z-10 left-1/2 -translate-x-1/2 lg:-translate-x-0 ">
            <p className="lg:text-2xl md:text-2xl xs:text-2xl text-sm pt-5 lg:text-white lg:text-start text-center text-black">
              Technology
            </p>
            <p className="lg:text-3xl md:text-4xl xs:text-3xl text-base font-semibold lg:text-start text-center lg:text-white text-primarycolor">
              We Work With
            </p>
          </div>
          <div className="w-full h-full bg-white flex lg:flex-row flex-col gap-5 justify-center rounded-md drop-shadow-lg  relative">
            <div className="lg:w-[50%] flex justify-center pt-5 lg:pt-0 items-center">
              <Image
                src={heli}
                alt="Helicopter"
                className="lg:w-[80%] w-[90%] h-[90%] lg:h-[80%] mx-auto rounded-lg drop-shadow-lg  border-2 border-primarycolor"
              ></Image>
            </div>
            <div className="lg:w-[50%] relative flex flex-col ">
              <ul className="flex flex-row justify-around items-center relative w-full h-14  px-2 md:px-0 bg-gray-200  md:justify-evenly md:text-lg text-sm">
                <div
                  style={{
                    clipPath: `polygon(0 63%, 0 100%, 41% 100%)`,
                  }}
                  className="w-20 h-full lg:flex hidden absolute top-0 left-0 bottom-0 bg-white  z-10"
                ></div>
                {listItems.map((item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-gray-500 text-xs md:text-lg"
                    style={
                      clickindex === index
                        ? { color: "#FF9315" }
                        : { color: "rgb(107 114 128 /1)" }
                    }
                    onClick={(e) => handleclick(index, e)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="lg:p-5">
                {Content === "Frontend" && (
                  <div className="p-5 space-y-5">
                    <h1 className="text-xl text-gray-600 font-semibold leading-10">
                      WE EXECUTE OUR IDEAS FROMTHE START TO FINISH
                    </h1>
                    <p className="text-gray-400 font-light text-sm leading-8 w-[98%]">
                      On the other hand we denounce with righteous indignation
                      hill and dislike men who are so beguiled and demoralized.
                    </p>
                    <div className="flex flex-wrap gap-5 justify-center items-center font-light text-sm">
                      <p className="flex flex-row items-center">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                      <p className="flex flex-row items-center">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                      <p className="flex flex-row items-center ">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                      <p className="flex flex-row items-center">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                    </div>
                  </div>
                )}
                {Content === "Backend" && (
                  <div className="p-5 space-y-5">
                    <h1 className="text-xl text-gray-600 font-semibold leading-10">
                      WE EXECUTE OUR IDEAS FROMTHE START TO FINISH
                    </h1>
                    <p className="text-gray-400 font-light text-sm leading-8 w-[98%]">
                      On the other hand we denounce with righteous indignation
                      hill and dislike men who are so beguiled and demoralized.
                    </p>
                    <div className="flex flex-wrap gap-5 justify-center items-center font-light text-sm">
                      <p className="flex flex-row items-center">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                      <p className="flex flex-row items-center">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                      <p className="flex flex-row items-center ">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                      <p className="flex flex-row items-center">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                    </div>
                  </div>
                )}
                {Content === "Mobile" && (
                  <div className="p-5 space-y-5">
                    <h1 className="text-xl text-gray-600 font-semibold leading-10">
                      WE EXECUTE OUR IDEAS FROMTHE START TO FINISH
                    </h1>
                    <p className="text-gray-400 font-light text-sm leading-8 w-[98%]">
                      On the other hand we denounce with righteous indignation
                      hill and dislike men who are so beguiled and demoralized.
                    </p>
                    <div className="flex flex-wrap gap-5 justify-center items-center font-light text-sm">
                      <p className="flex flex-row items-center">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                      <p className="flex flex-row items-center">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                      <p className="flex flex-row items-center ">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                      <p className="flex flex-row items-center">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                    </div>
                  </div>
                )}
                {Content === "Database" && (
                  <div className="p-5 space-y-5">
                    <h1 className="text-xl text-gray-600 font-semibold leading-10">
                      WE EXECUTE OUR IDEAS FROMTHE START TO FINISH
                    </h1>
                    <p className="text-gray-400 font-light text-sm leading-8 w-[98%]">
                      On the other hand we denounce with righteous indignation
                      hill and dislike men who are so beguiled and demoralized.
                    </p>
                    <div className="flex flex-wrap gap-5 justify-center items-center font-light text-sm">
                      <p className="flex flex-row items-center">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                      <p className="flex flex-row items-center">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                      <p className="flex flex-row items-center ">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                      <p className="flex flex-row items-center">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                    </div>
                  </div>
                )}
                {Content === "CMS" && (
                  <div className="p-5 space-y-5">
                    <h1 className="text-xl text-gray-600 font-semibold leading-10">
                      WE EXECUTE OUR IDEAS FROMTHE START TO FINISH
                    </h1>
                    <p className="text-gray-400 font-light text-sm leading-8 w-[98%]">
                      On the other hand we denounce with righteous indignation
                      hill and dislike men who are so beguiled and demoralized.
                    </p>
                    <div className="flex flex-wrap gap-5 justify-center items-center font-light text-sm">
                      <p className="flex flex-row items-center">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                      <p className="flex flex-row items-center">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                      <p className="flex flex-row items-center ">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                      <p className="flex flex-row items-center">
                        <Image src={tick} alt="" />
                        Cost of supplies and equipment
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Helicopter;

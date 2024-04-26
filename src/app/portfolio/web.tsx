"use client";
import React, { useState } from "react";
import Image from "next/image";
import ecommerce from "../../../public/36.png";
import wordpress from "../../../public/37.png";
import html from "../../../public/38.png";

const Web = () => {
  const [showActiveContent, setShowActiveContent] =
    useState<string>("E-Commerce");
  const toggleContent = (content: string) => {
    setShowActiveContent(content);
  };
  return (
    <>
      <div className="relative  w-full lg:grid lg:grid-cols-2 lg:pr-[20%] py-5">
        <div className=" lg:w-[80%] flex flex-col justify-center items-center ml-3">
        <h1 className="text-[#FF9315]  font-bold sm:hidden">
              WEB DEVELOPMENT
            </h1>
          <div className="flex flex-row relative  w-fit">
            
            <div className="p-5 shadow-lg shadow-gray-300 rounded-full">
              <div className="border-2 sm:border-[#FF9315] w-48 h-48 drop-shadow-xl rounded-full flex justify-center items-center">
                <div className="flex justify-center items-center">
                  <h1 className="text-[#FF9315]  font-semibold sm:block hidden">
                    WEB DEVELOPMENT
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col absolute -translate-x-1/2 -translate-y-1/2 sm:right-0 left-1/2 sm:left-auto top-1/2 sm:-mr-60 gap-5">
              <button
                onClick={() => toggleContent("E-Commerce")}
                className={`w-40 rounded-lg py-2 drop-shadow-lg ${
                  showActiveContent === "E-Commerce"
                    ? "text-white bg-[#FF9315] "
                    : "bg-white  hover:text-white hover:bg-[#FF9315]"
                }`}
              >
                E-Commerce
              </button>
              <button
                onClick={() => toggleContent("WordPress")}
                className={`sm:ml-10 w-40 rounded-lg py-2 drop-shadow-lg ${
                  showActiveContent === "WordPress"
                    ? "text-white bg-[#FF9315] "
                    : "bg-white  hover:text-white hover:bg-[#FF9315]"
                }`}
              >
                WordPress
              </button>
              <button
                onClick={() => toggleContent("HTML")}
                className={`w-40 rounded-lg py-2 drop-shadow-lg ${
                  showActiveContent === "HTML"
                    ? "text-white bg-[#FF9315] p-1"
                    : "bg-white hover:text-white hover:bg-[#FF9315]"
                }`}
              >
                HTML
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[140%] flex flex-col justify-center items-center">
          {showActiveContent === "E-Commerce" && (
            <div className="xs:w-[80%]  w-full flex pt-6 p-3 xs:ml-0">
              <div className="flex flex-col w-full">
                <h1 className="text-xl sm:text-5xl text-gray-500 font-semibold">
                  E-COMMERCE
                </h1>
                <br />
                <hr className="h-2 bg-gradient-to-r from-[#D1A25E] ml-20 to-transparent " />
                <br />
                <p className="text-start">
                  Your gateway to e-commerce success. Expert solutions from
                  design to marketing. Partner with us for seamless growth and
                  profitability. Explore our portfolio for proof of our
                  expertise.
                </p>
                <br />
                <div className="">
                  <button className="bg-white text-[#D1A25E] border-2 border-[#D1A25E] w-fit px-3 py-1 rounded-md hover:text-white hover:bg-[#D1A25E]">
                    Enquire Now
                  </button>
                  <div className="flex lg:justify-evenly justify-center">
                    <div className="lg:block hidden"></div>
                    <Image src={ecommerce} alt="" className="w-96" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {showActiveContent === "WordPress" && (
            <div className="xs:w-[80%] w-full flex pt-6 ml-[10%] xs:ml-0">
              <div className="flex flex-col w-full">
                <h1 className="text-xl sm:text-5xl text-gray-500 font-semibold">
                  WORDPRESS
                </h1>
                <br />
                <hr className="h-2 bg-gradient-to-r from-[#99C6FF] ml-20 to-transparent " />
                <br />
                <p className="text-start">
                  Empowering your WordPress journey. Elevate your online
                  presence with our expert WordPress solutions. Let's build your
                  digital success story together.
                </p>
                <br />
                <div className="">
                  <button className="bg-white text-[#99C6FF] border-2 border-[#99C6FF] w-fit px-3 py-1 rounded-md hover:text-white hover:bg-[#99C6FF]">
                    Enquire Now
                  </button>
                  <div className="flex lg:justify-evenly justify-center">
                    <div className="lg:block hidden"></div>
                    <Image src={ecommerce} alt="" className="w-96" />
                  </div>
                </div>
              </div>
            </div>
          )}
          {showActiveContent === "HTML" && (
            <div className="xs:w-[80%] w-full flex pt-6 ml-[10%] xs:ml-0">
              <div className="flex flex-col w-full">
                <h1 className="text-xl sm:text-5xl text-gray-500 font-semibold">
                  HTML
                </h1>
                <br />
                <hr className="h-2 bg-gradient-to-r from-[#FF9315] ml-20 to-transparent " />
                <br />
                <p className="text-start">
                  Crafting HTML excellence for your online presence. Elevate
                  your website with our expert HTML solutions. Explore our
                  portfolio for proof of our mastery.
                </p>
                <br />
                <div className="">
                  <button className="bg-white text-[#FF9315] border-2 border-[#FF9315] w-fit px-3 py-1 rounded-md hover:text-white hover:bg-[#FF9315]">
                    Enquire Now
                  </button>
                  <div className="flex lg:justify-evenly justify-center">
                    <div className="lg:block hidden"></div>
                    <Image src={ecommerce} alt="" className="w-96" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Web;

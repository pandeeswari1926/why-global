"use client";
import React, { useEffect, useState } from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaFaceSmileBeam } from "react-icons/fa6";
function TestimonalsClient() {
  const [loops, setLoops] = useState(0);
  const arr = [
    {
      image: "./7.png",
      name: "Chandra",
      content:
        "I recently sold my warehouse in India to Riofin, and I couldn't be happier with the experience. From the initial contact to the final closing, everything was handled smoothly and efficiently. They truly made the process hassle-free, and there were no hidden charges or surprises along the way",
      role: "Warehouse Owner",
    },
    {
      image: "./8.png",
      name: "Maxwell",
      content:
        "I sold my warehouse in India to Riofin, and I couldn't be happier with the experience. From the initial contact to the final closing, everything was handled smoothly and efficiently. They truly made the process hassle-free, and there were no hidden charges or surprises along the way",
      role: "Warehouse Owner",
    },
    {
      image: "./9.png",
      name: "Maxwell",
      content:
        "I sold my warehouse in India to Riofin, and I couldn't be happier with the experience. From the initial contact to the final closing, everything was handled smoothly and efficiently. They truly made the process hassle-free, and there were no hidden charges or surprises along the way",
      role: "Warehouse Owner",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoops((prev) => (prev + 1) % arr.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [arr.length]);

  return (
    <div className="bg-gray-100">
      <div className="relative w-full pt-5 h-[70px]">
        <p className="w-[60%] h-[2px] absolute left-0 bottom-0 bg-mygreen"></p>
      </div>
      <div className="w-full flex justify-center items-center  lg:justify-end lg:items-end py-5">
        <div className="flex lg:flex-row flex-col justify-center items-center w-full  lg:w-[95%]">
          <div className="z-10 rounded-xl drop-shadow-xl relative">
            <img
              src={arr[loops].image}
              alt=""
              className="lg:w-[500px] rounded-xl lg:h-[450px] z-40 w-[250px]  sm:w-[300px]   bg-no-repeat bg-cover bg-center"
            />
            <div className="absolute top-1/2 bg-white p-3 sm:-right-8 -right-0 border border-primarycolor rounded-lg">
              <FaFaceSmileBeam className="sm:size-10 size-5 text-primarycolor" />
            </div>
          </div>
          <div className="lg:bg-primarycolor lg:-mt-0 -mt-4 relative lg:pl-28 pl-0 w-full h-fit lg:h-[300px]">
            <div className="flex w-full flex-col p-5 gap-3">
              <BiSolidQuoteAltLeft
                size={80}
                className="text-white lg:flex hidden opacity-60"
              />
              <div className="lg:w-[550px] w-full relative lg:mx-0 mx-auto flex -mt-5 flex-col justify-around gap-3 rounded-lg bg-white drop-shadow-2xl lg:p-10 p-6">
                <BiSolidQuoteAltLeft
                  size={30}
                  className=" text-primarycolor lg:hidden hidden xs:flex -top-4 left-0 absolute"
                />
                <div className="w-[2px] absolute bottom-0 lg:hidden flex right-0 h-10 bg-primarycolor"></div>
                <div className="h-[2px] absolute bottom-0 lg:hidden flex right-0 w-10 bg-primarycolor"></div>
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">{arr[loops].name}</p>
                  <p className="text-xs text-gray-400">{arr[loops].role}</p>
                </div>
                <p className="text-sm text-justify ">{arr[loops].content}</p>
                <div className="flex gap-2 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonalsClient;

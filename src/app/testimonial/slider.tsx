"use client";
import React, { useEffect, useState } from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaFaceSmileBeam } from "react-icons/fa6";
import SanityClient from "../SanityClient";

interface Image {
  asset: {
    url: string;
  };
}

interface Review {
  image: Image;
  name: string;
  role: string;
  content: string;
}


function TestimonalsClient() {
  const [loops, setLoops] = useState(0);
  const [sliderdata, setsliderdata] = useState<Review[]>([]);
  React.useEffect(() => {
    SanityClient.fetch(
      `*[_type=='testimonial']{
        review[]{
                image{
                    asset->{
                        url
                    }
                },
                name,
                role,
                content
                }
            }`
    ).then((res) => {
      console.log(res[0]?.review, "sliderdata");
      setsliderdata(res[0]?.review);
    });
  }, []);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setLoops((prev) => (prev + 1) % sliderdata?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [sliderdata.length]);


  return (
    <div className="bg-gray-100 py-5">
      {/* <div className="relative w-full pt-5 h-[70px]">
        <p className="w-[60%] h-[2px] absolute left-0 bottom-0 bg-mygreen"></p>
      </div> */}
      <div className="w-full flex justify-center items-center  lg:justify-end lg:items-end py-5">
        <div className="flex lg:flex-row flex-col justify-center items-center w-full  lg:w-[95%]">
          <div className="z-10 rounded-xl drop-shadow-xl relative">
            <img
              src={sliderdata[loops]?.image?.asset?.url}
              alt=""
              className="lg:w-[500px] rounded-xl lg:h-[400px] z-40 w-[250px]  sm:w-[300px]   bg-no-repeat bg-cover bg-center"
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
              <div className="lg:w-[550px] min-h-60 w-full relative lg:mx-0 mx-auto flex -mt-5 flex-col justify-around gap-3 rounded-lg bg-white drop-shadow-2xl lg:p-10 p-6">
                <BiSolidQuoteAltLeft
                  size={30}
                  className=" text-primarycolor lg:hidden hidden xs:flex -top-4 left-0 absolute"
                />
                <div className="w-[2px] absolute bottom-0 lg:hidden flex right-0 h-10 bg-primarycolor"></div>
                <div className="h-[2px] absolute bottom-0 lg:hidden flex right-0 w-10 bg-primarycolor"></div>
                <div className="flex flex-col">
                  <p className="font-semibold text-lg">{sliderdata[loops]?.name}</p>
                  <p className="text-xs text-gray-400">{sliderdata[loops]?.role}</p>
                </div>
                <p className="text-sm text-justify ">{sliderdata[loops]?.content}</p>
                <div className="flex gap-2 ">
                  <FaStar className="text-primarycolor"/>
                  <FaStar className="text-primarycolor"/>
                  <FaStar className="text-primarycolor"/>
                  <FaStar className="text-primarycolor"/>
                  <FaStar className="text-primarycolor"/>
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

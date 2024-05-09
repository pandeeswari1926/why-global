import React from "react";
import Map from "../contactus/Map";
import Contactform from "./Contactform";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="">
        <Contactform />
        <Map />
      </div>
      {/* <div className="flex flex-col justify-center items-center overflow-hidden py-5">
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
            <button className="bg-white drop-shadow-xl text-[#FF8900] rounded-full sm:px-32 px-16 w-full py-4 font-semibold sm:text-xl text-lg">
              Get Started
            </button></Link>
            
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default page;

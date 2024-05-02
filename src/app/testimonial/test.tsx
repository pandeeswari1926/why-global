import React from "react";
import Image from "next/image";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import wgs from "../../../public/WGS LIVE PICS (8) 1.png";

const Test = () => {
  return (
    <>
      <div className="pt-10 md:pl-20 pl-5">
        <div className="bg-test text-center bg-cover w-full h-full  lg:mt-14  mt-28">
          <div className="w-full h-full flex md:flex-row flex-col md:p-0 p-10">
            <div className="md:w-[50%] w-full space-y-10 flex flex-col justify-center items-center">
              <div className="flex flex-col justify-end md:w-[50%] w-full items-end ">
                <BiSolidQuoteAltLeft className="text-primarycolor size-10 " />
              </div>
              <p className="md:w-[50%] w-full text-start">
                Our commitment to client satisfaction sets us apart, delivering
                results that speak volumes. With a relentless focus on your
                happiness, we strive to make every interaction remarkable.
              </p>
              <div className="flex flex-col justify-items-start md:w-[50%] w-full">
                <BiSolidQuoteAltLeft className="text-primarycolor size-10" />
              </div>
            </div>
            <div className="md:w-[50%] w-full flex md:flex-col flex-col-reverse justify-center md:items-start items-center">
              <div className="flex flex-col justify-end w-full">
                <h1 className="font-semibold text-xl md:mt-0 mt-5">Ramya Annamalai</h1>
                <p>Web Developer</p>
              </div>
              <div>
                <img src="./WGS LIVE PICS (8) 1.png" alt="Our Employee" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;

"use client";
import React from "react";
import logo from "../../../public/logo.png";
import riofin from "../../../public/riofin.png";
import whytap from "../../../public/whytap.png";
import hrc from "../../../public/hrc.png";
import sennata from "../../../public/sennata.png";
import ehs from "../../../public/ehs.png";
import Image from "next/image";
import five from "../../../public/five.png";
import w8loss from "../../../public/w8loss.png";
import antimalaries from "../../../public/antimalaries.png";
import abhis from "../../../public/abhis.png";
import map from "../../../public/map.png";

function Client() {
  return (
    <div className="flex flex-col md:items-start items-center justify-center gap-5 relative py-5 md:py-10">
      <section className="lg:pl-16 lg:space-y-7">
        <h1 className="font-bold text-xl md:ml-3 text-[#FF8900] md:px-10 pt-10 text-center md:text-start py-5 md:py-0">
          OUR CLIENTS
        </h1>
        <main className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1  lg:gap-10 gap-5 sm:px-10 px-5 ">
          <div className="flex flex-col gap-2">
            <div className="p-2 grid md:grid-cols-2 grid-cols-2 gap-10 md:justify-items-start  justify-items-center  items-center">
              <div className="w-32 bg-white shadow-xl rounded-md">
                <img src="./kushlogo.png" alt="" className=" w-full  p-2 " />
              </div>
              <div className="w-32 h-16 md:hidden block bg-white shadow-xl rounded-md">
                <img
                  src="./riofin.png"
                  alt=""
                  className=" w-full h-full   p-2"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-20 gap-10 p-2  md:justify-items-start  justify-items-center  items-center ">
              <div className="w-32 h-16 bg-white shadow-xl md:block hidden rounded-md">
                <img src="./riofin.png" alt="" className="w-full h-full  p-2" />
              </div>
              <div className="w-32 bg-white shadow-xl rounded-md">
                <img src="./whytap.png" alt="" className="w-full p-2" />
              </div>
              <div className="lg:block hidden"></div>
              <div className="w-32 bg-white shadow-xl md:hidden block rounded-md">
                <img src="./hrc.png" alt="" className="w-full  p-2" />
              </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:justify-items-start justify-items-center  items-center md:gap-20 gap-10 p-2 ">
              <div className="w-32 bg-white shadow-xl  md:block hidden rounded-md">
                <img src="./hrc.png" alt="" className="w-full   py-2" />
              </div>
              <div className="w-32 h-16 bg-white shadow-xl rounded-md">
                <img
                  src="./sennata.png"
                  alt=""
                  className="w-full h-full p-2 "
                />
              </div>
              <div className="w-32 bg-white shadow-xl rounded-md">
                <img src="./ehs.png" alt="" className="w-full p-2" />
              </div>
              <div className="lg:block hidden"></div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 md:justify-items-start justify-items-center  items-center lg:gap-20 md:gap-36 gap-10 p-2">
              <div className="w-32 h-16 bg-white shadow-xl rounded-md">
                <img
                  src="./5indrops.png"
                  alt=""
                  className="w-full p-2 h-full px-5"
                />
              </div>
              <div className="w-32 h-16 bg-white shadow-xl rounded-md">
                <img src="./w8loss.png" alt="" className="w-full h-full p-2 " />
              </div>
              <div className="w-32 h-16 bg-white shadow-xl rounded-md">
                <img
                  src="./antiMalarial.png"
                  alt=""
                  className="w-full h-full p-2  "
                />
              </div>
              <div className="w-32 h-16 bg-white shadow-xl rounded-md">
                <img src="./abhis.png" alt="" className="w-full h-full px-5" />
              </div>
            </div>
          </div>
        </main>
      </section>
      <div className="md:absolute top-0 right-0 lg:w-[700px] md:w-[500px]">
        <img src="./map.png" alt="" className="w-full" />
        <hr className="w-[50%] h-1 bg-[#FF8900] mb-10 ml-[50%] mt-[10%] md:block hidden" />
      </div>
    </div>
  );
}

export default Client;

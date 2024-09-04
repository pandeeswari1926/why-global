"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import riofin from "../../../public/riofin.png";
import whytap from "../../../public/whytap.png";
import hrc from "../../../public/hrc.png";
import sennata from "../../../public/sennata.png";
import ehs from "../../../public/ehs.png";
import five from "../../../public/five.png";
import w8loss from "../../../public/w8loss.png";
import antimalaries from "../../../public/antimalaries.png";
import abhis from "../../../public/abhis.png";
import map from "../../../public/map.png";
import client_img_1 from "../../../public/client_img_1.png"
import client_img_2 from "../../../public/client_img_2.png"
import client_img_3 from "../../../public/client_img_3.png"
import client_img_4 from "../../../public/client_img_4.png"
import client_img_5 from "../../../public/client_img_5.png"
import client_img_6 from "../../../public/client_img_6.png"
import client_img_7 from "../../../public/client_img_7.png"
import client_img_8 from "../../../public/client_img_8.png"
import client_img_9 from "../../../public/client_img_9.png"
import client_img_10 from "../../../public/client_img_10.png"
import client_img_11 from "../../../public/client_img_11.png"
import client_img_12 from "../../../public/client_img_12.png"



import clientImage from "../../../public/client_img.jpg";

function Client() {
  const logos = [
    ehs,
    five,
    w8loss,
    antimalaries,
    abhis,
    riofin,
    whytap,
    hrc,
    sennata,
    client_img_1,
    client_img_2,
    client_img_3,
    client_img_4,client_img_5,client_img_6,client_img_7,
    client_img_8,client_img_9,client_img_10,client_img_11,/* Add your logos here */,
    ,
  ];

  return (
    <div
      className="relative flex flex-col md:items-start items-center w-full h-full bg-cover object-fill bg-no-repeat justify-center gap-5 py-2 md:py-10"
      style={{ backgroundImage: "url('./map.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
      <section className="relative z-20  lg:space-y-7">
        <div className="md:py-8 md:pl-10 mt-[-2rem] ">
          <p className="sixHundred:text-5xl xs:text-4xl text-2xl lg:justify-start justify-center flex items-center font-bold text-black">
            Our Clients
          </p>
        </div>
        {/* <main className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:gap-10 gap-5 sm:px-10 px-5">
          <div className="flex flex-col gap-2">
            <div className="p-2 grid md:grid-cols-2 grid-cols-2 gap-10 md:justify-items-start justify-items-center items-center">
              <div className="w-32 bg-white shadow-xl rounded-md">
                <img src="./kushlogo.png" alt="" className="w-full p-2" />
              </div>
              <div className="w-32 h-16 md:hidden block bg-white shadow-xl rounded-md">
                <img src="./riofin.png" alt="" className="w-full h-full p-2" />
              </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-20 gap-10 p-2 md:justify-items-start justify-items-center items-center">
              <div className="w-32 h-16 bg-white shadow-xl md:block hidden rounded-md">
                <img src="./riofin.png" alt="" className="w-full h-full p-2" />
              </div>
              <div className="w-32 bg-white shadow-xl rounded-md">
                <img src="./whytap.png" alt="" className="w-full p-2" />
              </div>
              <div className="lg:block hidden"></div>
              <div className="w-32 bg-white shadow-xl md:hidden block rounded-md">
                <img src="./hrc.png" alt="" className="w-full p-2" />
              </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:justify-items-start justify-items-center items-center md:gap-20 gap-10 p-2">
              <div className="w-32 bg-white shadow-xl md:block hidden rounded-md">
                <img src="./hrc.png" alt="" className="w-full py-2" />
              </div>
              <div className="w-32 h-16 bg-white shadow-xl rounded-md">
                <img src="./sennata.png" alt="" className="w-full h-full p-2" />
              </div>
              <div className="w-32 bg-white shadow-xl rounded-md">
                <img src="./ehs.png" alt="" className="w-full p-2" />
              </div>
              <div className="lg:block hidden"></div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 md:justify-items-start justify-items-center items-center lg:gap-20 md:gap-36 gap-10 p-2">
              <div className="w-32 h-16 bg-white shadow-xl rounded-md">
                <img src="./5indrops.png" alt="" className="w-full p-2 h-full px-5" />
              </div>
              <div className="w-32 h-16 bg-white shadow-xl rounded-md">
                <img src="./w8loss.png" alt="" className="w-full h-full p-2" />
              </div>
              <div className="w-32 h-16 bg-white shadow-xl rounded-md">
                <img src="./antiMalarial.png" alt="" className="w-full h-full p-2" />
              </div>
              <div className="w-32 h-16 bg-white shadow-xl rounded-md">
                <img src="./abhis.png" alt="" className="w-full h-full px-5" />
              </div>
            </div>
          </div>
        </main> */}
        <div className="flex flex-col md:flex-row w-full h-full px-10  items-center justify-center">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center items-center">
            <div className="relative">
              <div className=" absolute top-2  left-3 w-80 h-[60vh] rounded-full shadow-lg bg-primarycolor overflow-hidden"></div>
              <div className=" w-80 pr-5 h-[60vh] z-50 rounded-full shadow-lg overflow-hidden">
                <Image
                  src={clientImage}
                  alt="Client"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Logos Section */}
          <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-16 gap-y-4 mt-10 md:mt-0 px-5 md:px-10">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center p-2 items-center shadow-xl bg-white  rounded-md overflow-hidden"
                style={{ width: "140px", height: "80px" }} // Set a fixed width and height for all logos
              >
                <Image
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  width={140} // Maintain this width as the container width
                  height={80} // Adjust this height to match the container height
                  className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" // Add zoom effect on hover
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Client;

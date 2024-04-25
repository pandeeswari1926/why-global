import React from "react";
import Image from "next/image";
import Web from "./web";
import WebDesign from "./webDesign";
import DigitalMarketing from "./DigitalMarketing";
import Iot from "./iot";
import Appdevelopment from "./Appdevelopment";
import portfolio1 from "../../../public/wgs gifs (12).gif";
import portfolio2 from "../../../public/wgs gifs (13).gif";
import portfolio3 from "../../../public/wgs gifs (14).gif";
import portfolio4 from "../../../public/wgs gifs (15).gif";
import portfolio5 from "../../../public/wgs gifs (16).gif";
import message from "../../../public/message3.png";
import message1 from "../../../public/message2.png";
import message2 from "../../../public/Rectangle 129.png";
import message3 from "../../../public/message5.png";
import message4 from "../../../public/message4.png";

const Page = () => {
  return (
    <>
      {/* first section */}

      {/* <div className="bg-portfolio bg-cover bg-no-repeat bg-center pb-32">
        <div className="flex flex-col justify-center items-center text-center py-5 lg:py-0 lg:h-[86vh] gap-10">
          <div className="space-y-2">
            <h1 className="text-white text-xl sm:text-4xl lg:text-7xl font-semibold">
              TAKE YOUR IDEAS TO THE
            </h1>
            <h1 className="text-white text-xl sm:text-4xl lg:text-7xl  font-semibold">
              NEXT LEVEL
            </h1>
          </div>
          <p className="text-white sm:text-base text-sm p-2 sm:p-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pharetra <br /> arcu at mi maximus, id placerat turpis
            fringilla. scelerisque auctor interdum.{" "}
          </p>
          <button className="bg-[#FF9315] text-white border-2 border-white font-semibold p-4 px-10 lg:px-16 rounded-full hover:text-[#FF9315] hover:bg-white drop-shadow-2xl text-xl lg:text-2xl ">
            Get started
          </button>
        </div>

        <div className="h-full">
          <div className="relative flex flex-col lg:gap-20 gap-10">

            <div className="flex justify-center items-center lg:absolute lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 lg:left-1/2">
              <div className="relative w-fit flex justify-center flex-col">
                <div className="lg:w-96 sm:w-52 w-36 bg-white rounded-full border-[20px] border-gray-300 drop-shadow-2xl border-opacity-25">
                  <Image src={portfolio3} alt="" className="rounded-full lg:p-10 p-5" />
                </div>
                <Image
                  src={message4}
                  alt=""
                  className="absolute w-40 -mb-8 right-0 bottom-0 -mr-16 lg:-mr-0"
                />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col items-center justify-center lg:justify-around gap-5 md:gap-20 lg:gap-0">
              <div className="relative">
                <div className="w-36 rounded-full bg-white border-8 border-gray-300 drop-shadow-2xl border-opacity-25">
                <Image
                  src={portfolio5}
                  alt=""
                  className="w-36 rounded-full p-3"
                />
                </div>
                <Image
                  src={message2}
                  alt=""
                  className="absolute w-36 -mt-10 sm:-ml-28 -ml-14"
                />
              </div>
              <div className="relative">
                <div className="bg-white w-36 rounded-full border-8 border-gray-300 drop-shadow-2xl border-opacity-25 p-3">
                <Image
                  src={portfolio4}
                  alt=""
                  className="w-36 rounded-full  p-1"
                />
                </div>
                <Image
                  src={message1}
                  alt=""
                  className="absolute w-36 -mt-10 sm:ml-28 ml-14"
                />
              </div>
            </div>

            <div className="flex sm:flex-row flex-col items-center justify-center lg:justify-between gap-5 md:gap-20 lg:gap-0 lg:px-40">
              <div className="">
                <div className="w-36 rounded-full border-8 border-gray-300 drop-shadow-2xl border-opacity-25 bg-white">
                <Image
                  src={portfolio2}
                  alt=""
                  className="w-36 rounded-full p-3"
                />
                </div>
                <Image
                  src={message}
                  alt=""
                  className="absolute w-36 -mt-10 sm:-ml-28 -ml-14"
                />
              </div>

              <div className="">
                <div className="w-36 rounded-full border-8 border-gray-300 drop-shadow-2xl border-opacity-25 bg-white">
                <Image
                  src={portfolio1}
                  alt=""
                  className="w-36 rounded-full p-3"
                />
                </div>
                <Image
                  src={message3}
                  alt=""
                  className="absolute w-36 -mt-10 sm:ml-28 ml-14"
                />
              </div>
            </div>

            
          </div>
        </div>
      </div> */}

      {/* second section */}
      {/* <div className=""><Web /></div> */}
      {/* third section */}
      {/* <div className="pb-10"><Appdevelopment /></div> */}
      {/* fourth section */}
      {/* <div className="py-5"><WebDesign/></div> */}
      {/* fifth section */}
      <div><DigitalMarketing /></div>
      {/* sixth section */}
      {/* <div><Iot /></div> */}
    </>
  );
};

export default Page;

"use client";
import React, { useEffect, useRef, useState } from "react";
import { GoTriangleLeft } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SanityClient from "../SanityClient";
import Link from "next/link";
export default function Page() {
  interface banner {
    title1: string;
    title2: string;
    content: string;
    card: [
      {
        siteIcon: { asset: { url: string } };
        cardTitle: string;
        link: string;
      }
    ];
  }
  interface AllData {
    Banner: banner[];
  }
  const [loader, setLoader] = useState(true);
  const [data, setdata] = useState<AllData | null>(null);

  useEffect(() => {
    const getdata = async () => {
      await SanityClient.fetch(
        `*[_type=="Home"]{
                Banner[]{
                  title1,
                  title2,
                  content,
                  card[]{
                    siteIcon{
                      asset->{
                        url
                      }
                    },
                    cardTitle,
                    link
                  }
                }
              }`
      )
        .then((res: any) => {
          console.log(res, "wasi");
          setdata(res[0]);
          setLoader(false);
        })
        .catch((err: any) => {
          console.log(err);
        });
    };
    getdata();
  }, []);
  const elemesnts = useRef<HTMLDivElement>(null);
  const [prev, setprev] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setprev((prev) => (prev + 3 + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    console.log(prev);
  });
  return (
    <div className=" lg:h-[95vh] lg:-mt-12  md:h-[600px] h-[500px] w-full relative overflow-hidden">
      <img
        src="/aigen.jpg"
        className="w-full h-full -z-10 absolute top-0 left-0 object-cover"
      ></img>
      
      <div className="w-10 h-10  absolute big bg-transparent border-2 border-primarycolor "></div>
      {/* <div className="w-5 h-5 jump top-3/4 left-1/4 absolute  bg-transparent border-2 border-primary "></div> */}
      <div className="w-5 h-5 absolute small   bg-primarycolor"></div>
      <div className="w-3 h-3 absolute small2 top-12 right-5  bg-transparent border-2 border-white"></div>
      <div className="w-3 h-3 jump absolute rounded-full  bottom-0 right-5  bg-primarycolor"></div>
      <div className="bg-black bg-opacity-85 -z-10 absolute top-0 left-0 w-full h-full"></div>
      {prev == 1 && (
        <div className="w-full h-full flex gap-5 justify-center lg:justify-between items-center px-5 md:px-10 2xl:px-16">
          <div className="lg:w-[60%] h-full">
            <div className="w-full flex  items-center  h-full">
              <div className=" keys flex flex-col  md:justify-center justify-center lg:items-start items-center space-y-7">
                <h1 className="text-white  md:text-4xl sm:text-2xl text-lg font-bold">
                  {/* <p className="text-primarycolor font-bold md:text-start text-center text-sm py-3 ">
                    Boost your brand with
                  </p> */}
                  <div className="flex flex-col justify-center  md:items-start items-center gap-2">
                    <span className="sha2 text-center lg:text-left lg:text-5xl font-extrabold 2xl:text-7xl md:text-4xl sm:text-5xl lastwidth:text-3xl text-2xl h-fit w-fit relative">
                    10x Your Business Growth with Our 360° Digital Marketing Strategy
                    </span>
                    {/* <span>Magic Today</span> */}
                  </div>
                </h1>
                <p className="bg-primarycolor cursor-pointer text-white font-semibold  px-6 py-3 rounded-md w-fit hover:bg-white duration-500 hover:text-black">
                Let’s get started
                </p>
              </div>
            </div>
          </div>
          <div
            ref={elemesnts}
            className="md:w-[40%] lg:w-[50%] lg:block hidden images relative"
          >
            <div className="flex arrowed  absolute -bottom-10">
              <GoTriangleLeft className="text-primarycolor size-7" />
              <GoTriangleLeft className="text-primarycolor size-7" />
              <GoTriangleLeft className="text-primarycolor size-7" />
              <GoTriangleLeft className="text-primarycolor size-7" />
            </div>
            <div className="bg-primarycolor w-48 h-48 absolute moved -z-10 -left-3 -top-3"></div>
            <div className="bg-primarycolor w-28 h-28 absolute revmoved -z-10 -right-3 -bottom-3"></div>
            <img
              src="/ramyabox.jpg"
              className="shadow-2xl object-cover  w-full md:h-[300px] h-[200px] lg:h-[350px] xl:h-[380px] 2xl:h-[550px]"
            ></img>
          </div>
        </div>
      )}
      {prev == 0 && (
        <div className="w-full h-full flex gap-5 justify-center md:justify-between items-center px-5 md:px-10 2xl:px-16">
          <div className="lg:w-[60%] h-full">
            <div className="w-full flex  items-center  h-full">
              <div className=" keys flex flex-col  lg:justify-center justify-center lg:items-start items-center space-y-7">
                <h1 className="text-white  md:text-4xl sm:text-2xl text-lg font-bold">
                  {/* <p className="text-primarycolor font-bold md:text-start text-center text-sm py-3">
                   Empowering Businesses Through Technology 
                  </p> */}
                  <div className="flex flex-col justify-center  lg:items-start items-center lg:gap-2 gap-5">
                    <span className="sha2 lg:text-5xl lg:text-left text-center  font-extrabold 2xl:text-6xl md:text-4xl sm:text-5xl lastwidth:text-3xl text-2xl">
                    Empowering Businesses Through Technology 
                    </span>{" "}
                    <span className="">Your Trusted IT Partner</span>
                  </div>
                </h1>
                <p className="bg-primarycolor cursor-pointer  text-white  px-6 py-3 rounded-md w-fit hover:bg-white duration-500 hover:text-black">
                  Let’s build your business
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[40%] lg:w-[50%] lg:block hidden images relative">
            <div className="flex arrowed  absolute -bottom-10">
              <GoTriangleLeft className="text-primarycolor size-7" />
              <GoTriangleLeft className="text-primarycolor size-7" />
              <GoTriangleLeft className="text-primarycolor size-7" />
              <GoTriangleLeft className="text-primarycolor size-7" />
            </div>
            <div className="bg-primarycolor w-48 h-48 absolute moved -z-10 -left-3 -top-3"></div>
            <div className="bg-primarycolor w-28 h-28 absolute revmoved -z-10 -right-3 -bottom-3"></div>
            <div className="w-full md:h-[300px] h-[200px] bg-white lg:h-[350px] xl:h-[380px] 2xl:h-[550px]">
            <img
              src="/ceo2.png"
              className="drop-shadow-xl object-contain mix-blend-normal  w-full h-full"
            ></img>
            </div>
            
          </div>
        </div>
      )}
      {prev == 2 && (
        <div className="w-full h-full flex gap-5 justify-center lg:justify-between items-center px-5 md:px-10 2xl:px-16">
          <div className="lg:w-[60%] h-full">
            <div className="w-full flex  items-center  h-full">
              <div className=" keys flex flex-col  lg:justify-center justify-center lg:items-start items-center space-y-7">
                <h1 className="text-white  md:text-4xl sm:text-2xl text-lg font-bold">
                  {/* <p className="text-primarycolor font-bold md:text-start text-center text-sm py-3">
                    Transforming Ideas into Visual Masterpieces
                  </p> */}
                  <div className="flex flex-col justify-center  lg:items-start items-center lg:gap-2 gap-5">
                    <span className="sha2 text-center lg:text-left lg:text-5xl font-extrabold 2xl:text-7xl md:text-4xl sm:text-5xl lastwidth:text-3xl text-2xl">
                    Scale your business with custom applications
                    </span>{" "}
                    <span>Your Vision, Our Mission</span>
                  </div>
                </h1>
                <p className="bg-primarycolor cursor-pointer  text-white px-6 py-3 rounded-md w-fit hover:bg-white duration-500 hover:text-black">
                Partner with us
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[40%] lg:w-[50%] lg:block hidden images relative">
            <div className="flex arrowed  absolute -bottom-10">
              <GoTriangleLeft className="text-primarycolor size-7" />
              <GoTriangleLeft className="text-primarycolor size-7" />
              <GoTriangleLeft className="text-primarycolor size-7" />
              <GoTriangleLeft className="text-primarycolor size-7" />
            </div>
            <div className="bg-primarycolor w-48 h-48 absolute moved -z-10 -left-3 -top-3"></div>
            <div className="bg-primarycolor w-28 h-28 absolute revmoved -z-10 -right-3 -bottom-3"></div>
            <img
              src="/sudalaibox.jpg"
              className="drop-shadow-xl object-cover  w-full md:h-[300px] h-[200px] lg:h-[350px] xl:h-[380px] 2xl:h-[550px]"
            ></img>
          </div>
        </div>
      )}
      {/* {prev==1&&<div className="w-full h-full flex  items-center px-10">
        <div className="lg:w-[60%] h-full">
            <div className="w-full flex justify-center items-center  h-full">
            <div className=" keys space-y-7">
              <h1 className="text-white  md:text-5xl text-xl font-bold">
              <p className="text-white font-bold text-sm py-1">For Millions of Users</p>
                <span className="sha text-7xl ">Web Development</span> Empowering Business
              </h1>
              <button className="bg-primary buttons p-3 px-8 rounded-md w-fit hover:bg-white duration-500 hover:text-black">Get a Quote</button>
            </div>
            </div>
        </div>
        <div className="lg:w-[40%] images relative">
            <div className="bg-primary w-48 h-48 absolute -z-10 -left-3 -top-3"></div>
            <div className="bg-primary w-28 h-28 absolute -z-10 -right-3 -bottom-3"></div>
            <img src="/banner.webp" className="drop-shadow-xl h-[350px]  w-full"></img>
        </div>
    </div>}
{prev==2&&<div className="w-full h-full flex lg:flex-row flex-col justify-center items-center px-10">
        <div className="lg:w-[60%] h-full">
            <div className="w-full flex  items-center  h-full">
            <div className="keys space-y-7">
              <h1 className="text-white  md:text-5xl text-xl font-bold">
              <p className="text-white font-bold text-sm py-1">For Millions of Users</p>
                <div className="flex flex-col">
                <span className="sha text-7xl ">Digital Marketing</span> <span>Empowering Business</span>
                </div>
              </h1>
              <button className="bg-primary buttons p-3 px-8 rounded-md w-fit hover:bg-white duration-500 hover:text-black">Get a Quote</button>
            </div>
            </div>
        </div>
        <div className="lg:w-[40%] relative images">
            <div className="bg-primary w-48 h-48 absolute -z-10 -left-3 -top-3"></div>
            <div className="bg-primary w-28 h-28 absolute -z-10 -right-3 -bottom-3"></div>
            <img src="/banner.webp" className="drop-shadow-xl h-[350px]  w-full"></img>
        </div>
    </div>} */}
    <div className="absolute  md:bottom-8 w-fit lg:w-full md:block hidden px-5 md:px-10 2xl:px-16 md:left-1/2 md:-translate-x-1/2 lg:-translate-x-0   lg:left-0">
    {data &&
              data.Banner.map((item, index) => (
                <div
                  key={index}
                  className=" mx-auto flex md:flex-row   flex-col justify-start items-start h-fit"
                >
                  <div className="flex md:flex-row flex-col w-full justify-start items-start gap-6 ">
                    {item &&
                      item.card.map((items, index) => (
                        <Link className="w-[70%] md:h-24 md:w-24 h-48 " key={index}
                          target={index != 2 ? "_blank" : "_parent"}
                          href={`${items?.link}`}
                        >
                            
                          <div
                            key={index}
                            className="bg-transparent border group  border-primarycolor relative w-full h-full  py-1 rounded-xl drop-shadow-lg flex flex-col justify-center overflow-hidden gap-3 items-center  transition-all duration-200"
                          >
                            <div className='absolute group-hover:w-[100%] group-hover:h-full group-hover:top-0 group-hover:right-0 -z-10 duration-200 transition-all group-hover:rounded-none w-10 h-10 -top-5  -right-5  bg-transparent group-hover:bg-white'></div>
                            <img
                              src={items?.siteIcon?.asset?.url}
                              alt=""
                              className={`size-16 md:w-7 w-16 object-contain ${index == 1 ? 'w-[2.9rem]' : ''}`}
                            />
                            <p className=" text-xl md:text-sm text-center font-semibold w-[80%] group-hover:text-black  text-white">
                              {items?.cardTitle}
                            </p>
                          </div>
                        </Link>
                      ))}
                  </div>
                  {/* <div className="mt-10 z-10 lg:w-[50%] w-full text-center lg:text-start p-3">
                    <p className="text-gray-600">
                      Join our team - We are looking for talented & driven
                      people to come work with us 
                      <Link
                        href="/contactus"
                        className=" cursor-pointer text-black"
                      >
                        <span> &nbsp;<span className="underline">Available Positions</span></span>
                      </Link>
                    </p>
                  </div> */}
                </div>
              ))}
    </div>
    </div>
  );
}

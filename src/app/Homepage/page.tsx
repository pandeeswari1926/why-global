"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import tick from "../../../public/tick.png";
import "../css/home.css";
// import video1 from "../asset/WGS VIDEO (1).gif"
import person from "../../../public/ceosir.png";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Globe from "./Globe";
import Helicopter from "./Helicopter";
import Wgs from "./wgs";
import World from "./World";
import Home from "./page1";
import Client from "./client";
import ce from "../../../public/ce.png";
import SanityClient from "../SanityClient";
import { FcEngineering } from "react-icons/fc";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaLaptop } from "react-icons/fa";
import Loader from "../home/Loader";

function Page() {
  interface banner {
    title1: string;
    title2: string;
    content: string;
    card: [
      {
        siteIcon: { asset: { url: string } };
        cardTitle: string;
      }
    ];
  }
  interface second {
    Photo: { asset: { url: string } };
    client: string;
    title: string;
    SubTitle: string;
    content1: string;
    list: [
      {
        ListContent: string;
      }
    ];
    content2: string;
  }

  interface AllData {
    SecondSection: second[];
    Banner: banner[];
  }
  const[loader,setLoader]=useState(true)
  const [data, setdata] = useState<AllData | null>(null);
  useEffect(() => {
    console.log("test");
    const getdata = async () => {
      await SanityClient.fetch(
        `*[_type=="Home"]{
            SecondSection[]{
              Photo{
                asset->{
                  url
                }
              },
              client,
              title,
              SubTitle,
              content1,
              list[]{
                ListContent
              },
              content2
            },
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
                cardTitle
              }
            }
          }`
      )
        .then((res) => {
          console.log(res, "wasi");
          setdata(res[0]);
          setLoader(false)
        })
        .catch((err: any) => {
          console.log(err);
        });
    };
    getdata();
  }, []);
  console.log("ss");

  return (
    <div>
    {loader==true?<Loader />:  <>
      <div className="">
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <div className="h-screen  w-full relative">
          <div className="w-full h-full">
            <img
              src="./WGS VIDEO (1).gif"
              alt="Background Image"
              className="w-full h-[95%] items-center md:object-cover object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-0 els w-full h-full"></div>
          <div className="absolute right-0 bottom-0 w-full h-full wh"></div>
          {data &&
            data.Banner.map((item, index) => (
              <div>
                <h1 className=" md:text-5xl text-3xl absolute md:top-48 top-48 text-black md:right-20 right-3 text-right font-bold">
                  {item?.title1}
                </h1>
                <p className="md:text-5xl text-3xl md:top-36 top-32 md:right-20 right-3 absolute text-black text-right font-bold">
                  {item?.title2}
                </p>
              </div>
            ))}
        </div>
        {data &&
          data.Banner.map((item, index) => (
            <div className="lg:-mt-20 w-full flex lg:flex-row lg:mb-20 mb-5 flex-col justify-center items-center h-fit">
              <div className="flex lg:flex-row flex-col w-full lg:w-[50%] justify-center items-center gap-6 ">
                {item &&
                  item.card.map((items, index) => (
                    <div className="bg-white outline outline-[#FF9315] relative w-[60%] h-52 lg:w-40 lg:h-44 md:w-[40%]  rounded-3xl drop-shadow-lg flex flex-col justify-center gap-3 items-center">
                      <img src={items?.siteIcon?.asset?.url} alt="" />
                      <p className=" text-xl md:text-lg text-center w-[80%] ">
                        {items.cardTitle}
                      </p>
                    </div>
                  ))}
              </div>
              <div className="mt-10 lg:w-[50%] w-full text-center p-3">
                <p className="">
                  Join our team We are looking for talented & driven people to
                  come work with us Available Positions
                </p>
              </div>
            </div>
          ))}
      </div>
      <div className="relative w-full h-full bg-cover lg:bg-bgslide md:bg-bgslide bg-no-repeat  ">
        <div className="absolute w-full h-full -z-10">
          <img src="./ce.png" alt="" />
        </div>
        <div>
          {data &&
            data.SecondSection.map((item, index) => (
              <div className="lg:grid grid grid-cols-1 lg:grid-cols-2 ">
                <div className="md:w-[400px] relative w-[95%] md:h-[500px] mx-auto">
                  <div className=" absolute lg:top-1/2 lg:-right-20 bottom-0 left-1/2 lg:left-3/4 lg:-translate-x-0  -translate-x-1/2">
                    {" "}
                    <div className="flex flex-col gap-2 bg-white rounded-2xl  drop-shadow-2xl justify-center items-center p-5">
                      <p className="text-primarycolor font-bold text-2xl sm:text-4xl">
                        {item.client}
                      </p>
                      <p className="sm:text-base text-xs">Satisfied Client</p>
                    </div>
                  </div>
                  <img
                    src={item?.Photo?.asset?.url}
                    alt="Background Image"
                    className="sm:w-full w-[90%] h-[90%] mx-auto sm:h-full md:object-cover object-cover"
                  />
                </div>
                <div className="flex flex-col gap-8 w-[100%] lg:p-10 p-5 text-center md:h-[60%]">
                  <p className="md:text-lg text-xl text-[#FF9315] font-semibold">
                    {item.title}
                  </p>
                  <h1 className="md:text-2xl text-xl text-center lg:text-start text-gray-600 font-semibold w-full">
                    {item.SubTitle}
                  </h1>
                  <p className="text-md text-gray-500 w-full text-center lg:text-start">
                    {item.content1}
                  </p>
                  <div className="grid lg:grid-cols-2 grid-cols-1 justify-around items-center px-5 text-gray-500 ">
                    {item.list.map((items, indexs) => (
                      <div>
                        <div className="flex justify-center items-center leading-loose">
                          <div className="">
                            <img alt="" src="./tick.png" />
                          </div>{" "}
                          <p className="text-xs"> {items.ListContent}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="md:text-md text-sm text-justify lg:text-start">
                    {item.content2}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Home />
      <Globe />
      <World />
      <Client />
      <Helicopter />
      <Wgs />
    </>}
  
    </div>
  );
}

export default Page;

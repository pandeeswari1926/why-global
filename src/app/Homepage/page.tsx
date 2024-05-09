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
import { Helmet } from "react-helmet";
import Link from "next/link";

function Page() {
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
    metaTitle: string;
    MetaDescription: string;
    MetaData: string;
    FocusKeyword: string;
    MetaURL: string;
    SecondSection: second[];
    Banner: banner[];
  }
  const [loader, setLoader] = useState(true);
  const [data, setdata] = useState<AllData | null>(null);
  useEffect(() => {
    const getdata = async () => {
      await SanityClient.fetch(
        `*[_type=="Home"]{
            metaTitle,
            MetaDescription,
            MetaData,
            FocusKeyword,
            MetaURL,
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


  return (
    <div>
      {loader == true ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            {/* <title property="og:title">{data ? data.metaTitle : ""}</title> */}
            <meta
              property="og:description"
              content={data ? data.MetaDescription : ""}
            />
            <meta property="og:url" content={data ? data.MetaData : ""} />
            <meta
              name="keywords"
              content={data ? data.FocusKeyword : ""}
            ></meta>
            <meta name="alldata" content={data ? data.MetaURL : ""}></meta>
          </Helmet>
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
              <div className="w-full h-full bg-gray-500">
                <img
                  src="./banner.gif"
                  alt="Background Image"
                  className="w-full h-[95%] items-center md:object-cover object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 els sm:w-full w-[90%] h-[50%]   sm:h-full"></div>
              <div className="absolute right-0 bottom-0 w-full  h-[50%]   sm:h-full wh"></div>
              {data &&
                data.Banner.map((item, index) => (
                  <div key={index}>
                    <h1 className=" md:text-4xl text-3xl absolute md:top-48 top-48 text-primarycolor md:right-20 right-3 text-right font-semibold">
                      {item?.title2}
                    </h1>
                    <p className="md:text-4xl text-3xl md:top-36 top-32 md:right-20 right-3 absolute text-white text-right font-bold">
                      {item?.title1}
                    </p>
                  </div>
                ))}
            </div>
            {data &&
              data.Banner.map((item, index) => (
                <div
                  key={index}
                  className="lg:-mt-20 w-[90%] mx-auto flex lg:flex-row lg:mb-20 mb-5 flex-col justify-center items-center h-fit"
                >
                  <div className="flex lg:flex-row flex-col w-full lg:w-[50%] justify-center items-center gap-6 ">
                    {item &&
                      item.card.map((items, index) => (
                        <Link className="w-[70%] lg:h-36 lg:w-36 h-48 md:w-[40%]" key={index}
                          target={index != 2 ? "_blank" : "_parent"}
                          href={`${items?.link}`}
                        >
                          <div
                            key={index}
                            className="bg-white border border-primarycolor relative w-full h-full  rounded-3xl drop-shadow-lg flex flex-col justify-center gap-3 items-center"
                          >
                            <img
                              src={items?.siteIcon?.asset?.url}
                              alt=""
                              className={`size-16 lg:w-10 w-16 object-contain ${index == 1 ? 'w-[2.9rem]' : ''}`}
                            />
                            <p className=" text-xl md:text-[15px] text-center w-[80%]">
                              {items.cardTitle}
                            </p>
                          </div>
                        </Link>
                      ))}
                  </div>
                  <div className="mt-10 z-10 lg:w-[50%] w-full text-center lg:text-start p-3">
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
                  </div>
                </div>
              ))}
          </div>
          <div className="relative w-full h-full bg-cover  bg-no-repeat  ">
            <div className="absolute w-full -top-16 h-full -z-10">
              <img src="./ce.png" alt="" className="w-full h-full" />
            </div>
            <div>
              {data &&
                data.SecondSection.map((item, index) => (
                  <div
                    key={index}
                    className="lg:grid grid grid-cols-1 lg:grid-cols-2 "
                  >
                    <div className="md:w-[400px] relative w-[95%] md:h-[500px] mx-auto">
                      <div className=" absolute lg:top-1/2 lg:-right-20 bottom-0 left-1/2 lg:left-3/4 lg:-translate-x-0  -translate-x-1/2">
                        {" "}
                        <div className="flex flex-col gap-2 bg-white rounded-2xl  drop-shadow-2xl justify-center items-center p-5">
                          <p className="text-primarycolor font-bold text-2xl sm:text-4xl">
                            {item.client}
                          </p>
                          <p className="sm:text-base text-xs">
                            Satisfied Clients
                          </p>
                        </div>
                      </div>
                      <img
                        src={item?.Photo?.asset?.url}
                        alt="Background Image"
                        className="sm:w-full w-[90%] h-[90%] mx-auto sm:h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-8 w-[100%] lg:p-10 p-5 lg:text-start text-center md:h-[60%]">
                      <p className="md:text-xl text-xl text-[#FF9315] font-semibold uppercase">
                        {item.title}
                      </p>
                      <h1 className="md:text-3xl text-xl text-center lg:text-start text-gray-500 font-semibold w-full ">
                        {item.SubTitle}
                      </h1>
                      <p className="text-sm text-gray-500 w-full text-justify lg:text-start">
                        {item.content1}
                      </p>
                      <div className="grid  xs:grid-cols-2 grid-cols-1 lg:gap-3 gap-2  xs:mx-auto gap-x-10 sm:gap-x-60 justify-between  text-gray-500 ">
                        {item.list.map((items, indexs) => (
                          <div key={indexs}>
                            <div className="flex  items-center justify-start leading-tight gap-1">
                              <div className="">
                                <img alt="" src="./tick.png" />
                              </div>{" "}
                              <p className="text-[13px] font-medium"> {items.ListContent}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 w-full text-justify lg:text-start">
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
        </>
      )}
    </div>
  );
}

export default Page;

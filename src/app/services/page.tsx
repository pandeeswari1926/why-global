"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import service from "../../../public/Rectangle 14.png";
import gif from "../../../public/wgs gifs (6) 1 (1).png";
import services from "../../../public/sevice.png";
import { FaHandshake } from "react-icons/fa6";
import qualified from "../../../public/11.png";
import ui from "../../../public/10.png";
import mobile from "../../../public/12.png";
import person from "../../../public/14.png";
import setting from "../../../public/13.png";
import custom from "../../../public/15.png";
import ux from "../../../public/16.png";
import cms from "../../../public/17.png";
import ecommerce from "../../../public/18.png";
import landing from "../../../public/19.png";
import redesign from "../../../public/20.png";
import ourService from "../../../public/cat-image.png";
import serve from "../../../public/wgs slider services (3) 1.png";
import robo from "../../../public/robo.gif";
import side from "../../../public/sides.png";
import bgorange1 from "../../../public/bgorange1.png";
import { ImGit } from "react-icons/im";
import SanityClient from "../SanityClient";
import Item from "antd/es/list/Item";
import { log } from "console";
import Loader from "../home/Loader";
import { Helmet } from "react-helmet";
import Link from "next/link";

function Services() {
  interface webDesign {
    array1: [
      { content: string; icon: { asset: { url: string } }; title: string }
    ];
    array2: [
      { content: string; icon: { asset: { url: string } }; title: string }
    ];
    array3: [
      { content: string; icon: { asset: { url: string } }; title: string }
    ];
  }
  interface About {
    content: string;
    title: string;
    image: object;
  }
  interface services {
    content: string;
    title: string;
    image: { asset: { url: string } };
    services: [{ serviceName: string; icon: { asset: { url: string } } }];
  }
  interface BannerItem {
    BannerImage: [{ url: string }];
    clients: string;
    title: string;
  }
  interface AllData {
    metaTitle:string,
    MetaDescription:string;
    MetaData:string;
    FocusKeyword:string;
    MetaURL:string;
    webDesign: webDesign[];
    Banner: BannerItem[];
    about: About[];
    service: services[];
    WeServe: [
      {
        image: { asset: { url: string } };
      }
    ];
  }
  const bgimages = ["/bgimage1.png", "/bgimage2.png", "/bgimage3.png"];

  const [bgimage, Setbgimage] = React.useState(bgimages);
  const [index, SetIndex] = React.useState(0);
  const [loader,setLoader] = React.useState(true)

  const changeBgimages = () => {
    SetIndex((prev) => (prev + 1) % bgimage.length);
  };
  React.useEffect(() => {
    const interval = setInterval(changeBgimages, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [alldata, setalldata] = useState<AllData | null>(null);
  useEffect(() => {
    const getdata = async () => {
      await SanityClient.fetch(
        `*[_type=='service']{
      metaTitle,
      MetaDescription,
      MetaData,
      FocusKeyword,
      MetaURL,
      Banner[]{
        BannerImage[]{
          image{
            asset->{
              url
            }
          }
        },
        title,
        clients,
      },
      about[]{
        title,
        content[]{
          content
        },
        image{
          asset->{
            url
          }
        }
      },
      service[]{
        title,
        services[]{
          icon{
            asset->{
              url
            }
          },
          serviceName
        },
        image{
          asset->{
            url
          }
        },
        content,
      },
      WeServe[]{
        image{
          asset->{
            url
          }
        }
      },
      webDesign[]{
        array1[]{
          icon{
            asset->{
              url
            }
          },
          title,
          content
        },
        array2[]{
          icon{
            asset->{
              url
            }
          },
          title,
          content
        },
        array3[]{
          icon{
            asset->{
              url
            }
          },
          title,
          content
        },
      }
    }`
      ).then((res) => {
        console.log(res);
        setalldata(res[0]);
        setLoader(false)
      });
    };
    getdata();
  }, []);

  return (
    (loader === true ? <Loader/> : 
    <div className="">
      <Helmet>
        <title property="og:title">{alldata&&alldata?.metaTitle}</title>
        <meta property="og:description" content={alldata ? alldata.MetaDescription : ""}/>
        <meta property="og:url" content={alldata ? alldata.MetaData : ""} />
        <meta name="keywords" content={alldata ? alldata.FocusKeyword : ""}></meta>
        <meta name="alldata" content={alldata ? alldata.MetaURL : ""}></meta>
      </Helmet>
      <div className="relative h-fit w-full">
        <div className=" absolute bottom-0 w-16 lg:flex hidden  z-10">
          <img className="w-full h-full" src="./sides.png" alt=""></img>
        </div>
        <div className=" absolute top-10 right-0 rotate-180 w-16 lg:flex hidden  z-10">
          <img className="w-full h-full" src="./sides.png" alt=""></img>
        </div>

        <div className="lg:px-28 px-5 z-10 relative py-10 bg-gradient-to-b from-[#f9d5ad] to-transparent">
          {alldata &&
            alldata.Banner &&
            alldata.Banner[0] &&
            alldata.Banner &&
            alldata.Banner.map((item: any, ind: any) => (
              <div key={ind}>
                <div
                  className="bg-cover lg:h-[500px] w-full h-full lg:relative"
                  style={{
                    backgroundImage: `url(${item?.BannerImage[index]?.image?.asset?.url})`,
                    backgroundPosition: "center",
                    transition: "background-image 2s ease",
                  }}
                >
                  <div className="bg-gradient-to-b from-gray-900 w-full h-[500px] lg:absolute ">
                    <h1 className="text-2xl sm:text-4xl text-white font-semibold flex justify-start items-end md:w-72 h-[400px] ml-16 lg:ml-14 -mb-24   lg:mt-5  leading-[50px]">
                      {item?.title}
                    </h1>
                    <img
                      src="./Rectangle 14.png"
                      alt=""
                      className="lg:absolute  bottom-20 -left-14 lg:-ml-0 -ml-10"
                    />
                    <div style={{clipPath:'polygon(13% 0, 100% 0, 100% 20%, 100% 80%, 100% 100%, 0 100%, 0% 80%, 0 10%)'}} className="flex flex-col lg:absolute right-10 lg:top-6 lg:mt-0 mt-44 gap-5 rounded-ss-3xl bg-gradient-to-b from-slate-50 p-10 drop-shadow-2xl lg:border-0 border-2 ">
                      <input
                        type="text"
                        placeholder="Name *"
                        className="p-2 border-[1.3px] border-[#FF9315] placeholder:text-black placeholder:text-sm rounded-md"
                      />
                      <input
                        type="text"
                        placeholder="Email *"
                        className="p-2 border-[1.3px] border-[#FF9315] placeholder:text-black placeholder:text-sm rounded-md"
                      />
                      <input
                        type="text"
                        placeholder="Mobile Number *"
                        className="p-2 border-[1.3px] border-[#FF9315] placeholder:text-black placeholder:text-sm rounded-md"
                      />
                      <input
                        type="text"
                        placeholder="Services *"
                        className="p-2 border-[1.3px] border-[#FF9315] placeholder:text-black placeholder:text-sm rounded-md"
                      />
                      <textarea
                        placeholder="Message*"
                        className="p-2 border-[1.3px] border-[#FF9315] placeholder:text-black placeholder:text-sm rounded-md"
                      ></textarea>
                      <button className="bg-white text-[#FF9315] w-fit  px-5 mx-auto py-3 rounded-lg font-semibold hover:bg-[#FF9315] hover:text-white">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-end">
                  <div className="w-[80%] bg-[#FF9315] p-4">
                    <h1 className="text-white ">
                      <span className="text-lg sm:text-2xl font-semibold">
                        {" "}
                        {item?.clients}
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* second section */}
      {alldata &&
        alldata.about &&
        alldata.about.map((items: any, ind: any) => (
          <div key={ind} className="grid lg:grid-cols-2 grid-cols-1 items-center justify-items-center lg:gap-20 p-8 lg:px-28 lg:pt-0 pt-[500px] ">
            <div className="flex flex-col gap-3">
              <h1 className="sm:text-xl font-semibold text-[#FF9315]">ABOUT</h1>

              <div>
                <h1 className="sm:text-3xl text-xl font-semibold mb-5 text-gray-500">
                  {items?.title}
                </h1>
                {items &&
                  items.content &&
                  items.content.map((list: any, listindex: any) => (
                    <p key={listindex} className="text-sm lg:text-start text-justify mb-5 text-gray-500">
                      {list?.content}
                    </p>
                  ))}
              </div>
            </div>
            <div className="lg:w-full lg:h-full w-[90%] h-[90%]">
              <img src="./robo.gif" alt="" className="w-full h-full" />
            </div>
          </div>
        ))}

      {/* third section */}
      
      <div className="bg-gray-50  lg:pb-20 py-10 px-5">
        <div className=" px-5 ">
        <div className=" space-y-3 xs:block largelast:hidden p-5">
            <h1 className="sm:text-lg text-[#FF9315] font-semibold">
            WHY YOU NEED
            </h1>
            <h1 className="sm:text-3xl text-xl  text-gray-500 font-semibold">
            WEB DESIGNING?
            </h1>
        </div>
          {alldata &&
            alldata.webDesign &&
            alldata.webDesign.map((item: any, index: any) => (
              <div
                key={index}
                className=" flex 2xl:justify-around w-full largelast:justify-between"
              >
                <div className="2xl:w-[50%] largelast:w-[60%] w-full flex gap-5 largelast:py-5 md:flex-row flex-col largelast:justify-between">
                  {item &&
                  item.array1 &&
                  item.array1.map((list: any, indexlist: any) => (
                    <div
                      key={indexlist}
                      className={`largelast:w-48 2xl:w-52 h-fit  md:w-[80%] largelast:my-5 largelast:h-[250px] md:h-[180px] relative ${
                        indexlist == 1 ? "" : ""
                      } `}
                    >
                      <div className=" bg-white p-5 pt-10 w-full h-full mx-auto rounded-md shadow-xl">
                        <h1 className="2xl:text-lg text-base font-medium">{list?.title}</h1>
                        <br />
                        <p className="text-xs font-light text-gray-500">
                          {list?.content}
                        </p>
                      </div>
                      <div className="rounded-full w-16 drop-shadow-2xl p-5 bg-white  absolute md:-top-5 -top-3 md:-right-4 -right-2  ">
                        <img src={list?.icon?.asset?.url} alt="" />
                      </div>
                    </div>
                  ))}</div>
                

                <div className="justify-center largelast:block hidden ml-16 mt-5">
                  <h1 className="text-lg text-[#FF9315] font-semibold space-y-3">
                  WHY YOU NEED
                  </h1>
                  
                  <h1 className="text-3xl text-gray-500 font-semibold mt-2">
                  WEB DESIGNING?
                  </h1>
                </div>
              </div>
            ))}
            {alldata &&
            alldata.webDesign &&
            alldata.webDesign.map((item: any, index: any) => (
              <div
                key={index}
                className="w-full flex  largelast:-mt-20"
              >
                <div className="w-full flex largelast:justify-end largelast:items-end">
               <div className="largelast:w-[92%] w-full flex md:flex-row flex-col gap-5 largelast:py-5 py-8  largelast:justify-around justify-between items-center largelast:-mt-10">{item &&
                  item.array2 &&
                  item.array2.map((list: any, indexlist: any) => (
                    <div
                      key={indexlist}
                      className={`largelast:w-48 2xl:w-52 md:w-[80%] largelast:h-[250px] md:h-[180px] h-full relative ${
                        indexlist == 0 ? "2xl:-ml-0 largelast:-ml-5" : "largelast:-ml-10 2xl:-ml-0"
                      }`}
                    >
                      <div className="bg-white p-3 2xl:p-5 pt-10 w-full h-full mx-auto rounded-md shadow-xl">
                        <h1 className="text-lg font-medium">{list?.title}</h1>
                        <br />
                        <p className="text-xs font-light text-gray-500">
                          {list?.content}
                        </p>
                      </div>
                      <div className="rounded-full w-16 drop-shadow-2xl p-5 bg-white  absolute md:-top-5 -top-3 md:-right-4 -right-2 ">
                        <img src={list?.icon?.asset?.url} alt="" />
                      </div>
                    </div>
                  ))}</div></div>
                
              </div>
            ))}
         
         {alldata &&
            alldata.webDesign &&
            alldata.webDesign.map((item: any, index: any) => (
              <div
                key={index}
                className=" flex 2xl:justify-around w-full largelast:justify-between largelast:-mt-20"
              >
                <div className="2xl:w-[50%] largelast:w-[60%] flex gap-5 largelast:py-5 md:flex-row flex-col justify-between"> {item &&
                  item.array3 &&
                  item.array3.map((list: any, indexlist: any) => (
                    <div
                      key={indexlist}
                      className={`largelast:w-48 2xl:w-52 h-fit  md:w-[80%] largelast:my-5 largelast:h-[250px] md:h-[180px] relative ${
                        indexlist == 1 ? "" : ""
                      } `}
                    >
                      <div className=" bg-white p-5 w-full h-full pt-10 mx-auto rounded-md shadow-xl">
                        <h1 className="text-lg font-medium">{list?.title}</h1>
                        <br />
                        <p className="text-xs font-light text-gray-500">
                          {list?.content}
                        </p>
                      </div>
                      <div className="rounded-full w-16 drop-shadow-2xl p-5 bg-white  absolute md:-top-5 -top-3 md:-right-4 -right-2  ">
                        <img src={list?.icon?.asset?.url} alt="" className="" />
                      </div>
                    </div>
                  ))}</div>
                {/* card5 */}
                <div className="justify-center opacity-0 largelast:block hidden ml-16 mt-5">
                  <h1 className="text-lg text-[#FF9315] font-semibold space-y-3">
                  WHY YOU NEED
                  </h1>
                  
                  <h1 className="text-3xl text-gray-500 font-semibold mt-2">
                  WEB DESIGNING?
                  </h1>
                </div>
              </div>
            ))}
          <img
            src="./sevice.png"
            alt=""
            className="lg:-mt-32 lg:block hidden"
          />
        </div>
      </div>

      {/* fourth section */}
      {alldata &&
        alldata.service &&
        alldata.service.map((item, index) => (
          <div key={index} className="flex lg:flex-row flex-col sm:gap-20 gap-5 lg:px-20 mx-auto sm:pt-20">
            <div className=" p-5 lg:p-10 flex flex-col gap-3 justify-center ">
              <h1 className="sm:text-xl  text-[#FF9315] font-semibold">
                OUR
              </h1>
              <h1 className="sm:text-3xl text-xl text-gray-500 font-semibold">
                SERVICES
              </h1>
              <hr className="h-[3px] bg-[#FF9315]" />
              <p className="text-gray-500 text-sm">Here are some of the key services we offer:</p>
              <div className="flex flex-col mx-auto lg:mx-0 gap-5 text-gray-500 mt-5">
                {item.services.map((list, listindex) => (
                  <div
                    key={listindex}
                    className="flex items-center gap-2 bg-gradient-to-r from-gray-200 to-transparent rounded-l-full"
                  >
                    <div className="bg-white sm:p-2 shadow-lg rounded-full">
                      <img src={list?.icon?.asset?.url} alt="" className=" " />
                    </div>
                    <h1 className="text-sm">
                      {list?.serviceName}
                    </h1>
                  </div>
                ))}

               
              </div>
            </div>
            <div className="md:relative mx-auto p-5">
              <img src={item?.image?.asset?.url} alt="" className="mx-auto" />
              <div>
                <h1 className="text-gray-500 text-justify text-sm md:absolute right-5 md:w-[45%] lg:bottom-14 -bottom-5 mx-auto lg:p-5 mt-5 lg:mt-0">
                  {item?.content}
                </h1>
              </div>
            </div>
          </div>
        ))}

      {/* sixth section */}
      {alldata &&
        alldata.WeServe &&
        alldata.WeServe.map((item: any, index: any) => (
          <div key={index} className="p-5 lg:px-32 mx-auto">
            <img src={item?.image?.asset?.url} alt="" />
          </div>
        ))}
      {/* seventh section */}
      <div className="flex flex-col justify-center items-center overflow-hidden py-5">
        <div className="relative w-full lg:h-[236px] h-[250px]  sm:px-10 px-5">
          <img
            src='./bgorange1.png'
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center space-y-10">
            <h2 className="font-semibold lg:text-4xl md:text-2xl sm:text-lg text-sm mb-4 text-white ">
              Ready to Wow Your Audience?
            </h2>
            <Link href={'/contactus'}>
            <button className="bg-white drop-shadow-xl text-[#FF8900] rounded-full mt-4 sm:px-20 px-5 py-2 sm:py-4 font-semibold sm:text-xl text-sm">
              Get Started
            </button></Link>
            
          </div>
        </div>
      </div>
    </div> )
  );
}

export default Services;

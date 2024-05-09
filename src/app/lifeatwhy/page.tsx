"use client";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
// import banner from "../../../public/lifeAtWhy.gif";
import Slides from "./Slides";
import SanityClient from "../SanityClient";
import Loader from "../home/Loader";
import { Helmet } from "react-helmet";
import Link from "next/link";

interface Banner {
  content: string;
  titleImage: {
    asset: {
      url: string;
    };
  };
}

interface WorkProcessContent {
  content: string;
}

interface WorkProcess {
  heading: string;
  subHeading: string;
  contents: WorkProcessContent[];
  image: {
    asset: {
      url: string;
    };
  };
}
interface WhySquadItem {
  image: {
    asset: {
      url: string;
    };
  };
}
interface AllData {
  metaTitle: string;
  MetaDescription: string;
  MetaData: string;
  FocusKeyword: string;
  MetaURL: string;
}

function Why() {
  const [bannerdata, setbannerdata] = useState<Banner | null>(null);
  const [workprocess, setworkprocess] = useState<WorkProcess | null>(null);
  const [whySquad, setWhySquad] = useState<WhySquadItem[]>([]);
  const [loader, setLoader] = useState(true);
  const [allData, setAllData] = useState<AllData | null>(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type=='lifeAtWhy']{
        metaTitle,
        MetaDescription,
        MetaData,
        FocusKeyword,
        MetaURL,
      banner[]{
        content,
        titleImage{
        asset->{
            url
        }
          },
          },
          ourWorkProcess[]{
            heading,
            subHeading,
            contents[]{
              content
            },
            image{
              asset->{
                url
              },
              
            },
            
            
          },
          whySquad[]{
            image{
              asset->{
                url
              }
            }
          },

          
          
          
          
      }`
    ).then((res) => {
      console.log(res[0], "LifeAtWhyData");
      setbannerdata(res[0]?.banner[0]);
      setworkprocess(res[0]?.ourWorkProcess[0]);
      setWhySquad(res[0]?.whySquad);
      setLoader(false);
      setAllData(res[0]);
    });
  }, []);

  return loader === true ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title property="og:title">{allData ? allData.metaTitle : ""}</title>
        <meta
          property="og:description"
          content={allData ? allData.MetaDescription : ""}
        />
        <meta property="og:url" content={allData ? allData.MetaData : ""} />
        <meta
          name="keywords"
          content={allData ? allData.FocusKeyword : ""}
        ></meta>
        <meta name="alldata" content={allData ? allData.MetaURL : ""}></meta>
      </Helmet>
      <div className="w-full md:h-screen h-[500px]">
        <div className=" relative w-full h-full ">
          <div
            style={{
              clipPath: "polygon(0 83%, 0% 100%, 100% 100%)",
              backgroundColor: "#FF9315",
            }}
            className=" absolute bottom-0 left-0  z-10  w-full h-full"
          ></div>
          <div className="absolute h-full bg-black bg-opacity-70 w-full"></div>
          <div className="w-full h-full ">
            <img src="./arut.gif" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="absolute top-7 sm:left-20 left-10">
            <img src={bannerdata?.titleImage?.asset?.url} alt="" />
            <p className="text-white w-[60%]  xs:-mt-14 lg:leading-6 text-sm">
              {bannerdata?.content}
            </p>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className=" lg:h-[500px] h-full bg-gray-100 lg:p-10 p-5   overflow-hidden relative">
        <div
          style={{
            clipPath: "polygon(76% 84%, 100% 50%, 100% 100%, 0% 100%)",
            backgroundColor: "#FF9315",
          }}
          className=" absolute bottom-0 right-0 lg:w-[80%] w-[30%] h-[25%] lg:h-full"
        ></div>
        <div className="  lg:w-1/2 w-full h-full lg:pl-10   flex flex-col justify-center gap-5">
          <h3 className="text-lg text-[#FF9315] font-bold lg:text-left text-center">
            {workprocess?.heading}
          </h3>
          <h1 className="md:text-3xl sm:text-lg text-sm text-[#686868]  md:leading-10 font-semibold md:text-left text-center ">
            {workprocess?.subHeading}
          </h1>
          <div className="space-y-4 text-gray-500">
            {workprocess?.contents?.map((item, ind) => (
              <p
                key={ind}
                className="text-xs xl:w-[85%] w-full font-light lg:text-left text-justify md:px-0 xs:px-5 z-10"
              >
                {item.content}
              </p>
            ))}
          </div>
        </div>
        <div className=" w-[650px] h-full lg:flex hidden    absolute  -right-20 bottom-0">
          <img
            src={workprocess?.image?.asset?.url}
            alt="our work process"
            className="w-full h-full"
          />
        </div>
        <div className="polygon"></div>
      </div>
      {/* Third section */}
      <div className=" h-[500px] md:h-[450px] bg-custom bg-cover bg-no-repeat flex justify-center items-center">
        <Slides />
      </div>
      {/* Fourth section */}
      <div className="bg-white shadow-xl">
        <div className="grid lg:grid-cols-9 md:grid-cols-6 sm:grid-cols-5 xs:grid-cols-4 grid-cols-3 ">
          {whySquad.map((item, ind) => (
            <img key={ind} src={item?.image?.asset?.url} alt="whysquad" />
          ))}
        </div>
        <h1  className="text-center text-[#FF9315] xs:text-4xl text-2xl  p-5">
          <em>#WHYsquad</em>
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center overflow-hidden py-5">
        <div className="relative w-full lg:h-[236px] h-[250px]  px-10">
          <img
            src='./bgorange1.png'
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  text-center space-y-10">
            <h2 className="font-semibold sm:text-3xl w-full px-10  text-lg mb-4  text-white">
            Do you have any project to working with?</h2>
            <Link href={'/contactus'}>
            <button className="bg-white drop-shadow-xl text-[#FF8900] rounded-full w-fit sm:px-24 px-8  py-4 font-semibold sm:text-xl text-sm">
              Get Started
            </button></Link>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Why;

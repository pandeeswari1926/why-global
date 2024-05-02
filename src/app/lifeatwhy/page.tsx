"use client";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
// import banner from "../../../public/lifeAtWhy.gif";
import Slides from "./Slides";
import SanityClient from "../SanityClient";

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



function Why() {
  

  const [bannerdata, setbannerdata] = useState<Banner | null>(null);
  const [workprocess, setworkprocess] = useState<WorkProcess | null>(null);
  const [whySquad, setWhySquad] = useState<WhySquadItem[]>([]);


  useEffect(() => {
    SanityClient.fetch(
      `*[_type=='lifeAtWhy']{
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
      setWhySquad(res[0]?.whySquad)
    });
  }, []);


  

  return (
    <>
      <div className="w-full md:h-screen h-[500px]">
        <div className=" relative w-full h-full ">
          <div
            style={{
              clipPath: "polygon(0 83%, 0% 100%, 100% 100%)",
              backgroundColor: "#FF9315",
            }}
            className=" absolute bottom-0 left-0  z-10  w-full h-full"
          ></div>
          <div className="absolute h-full bg-black bg-opacity-50 w-full"></div>
          <div className="w-full h-full "></div>
          <div className="absolute top-5 sm:left-20 left-10">
            <img src={bannerdata?.titleImage?.asset?.url} alt="" />
            <p className="text-white w-[60%] xs:-mt-10 text-sm">
              {bannerdata?.content}
            </p>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-[500px] h-full bg-gray-200 px-10 p-10 relative">
        <div
          style={{
            clipPath: "polygon(76% 84%, 100% 50%, 100% 100%, 0% 100%)",
            backgroundColor: "#FF9315",
          }}
          className=" absolute bottom-0 right-0 w-[80%] h-full"
        ></div>
        <div className="w-full xl:pl-20 mx-auto flex flex-col gap-7">
          <h3 className="text-lg text-[#FF9315] font-bold md:text-left text-center">
            {workprocess?.heading}
          </h3>
          <h1 className="text-3xl text-gray-500 leading-10 font-semibold md:text-left text-center ">
            {workprocess?.subHeading}
          </h1>
          <div className="space-y-4 text-gray-500">
            {workprocess?.contents?.map((item,ind) => (
              <p key={ind} className="text-xs xl:w-[85%] w-full font-light md:text-left text-justify md:px-0 xs:px-5 z-10">
                {item.content}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full h-full z-10 lg:mt-4">
          <img src={workprocess?.image?.asset?.url} alt="our work process" className="" />
        </div>
        <div className="polygon"></div>
      </div>
      {/* Third section */}
      <div className="md:h-[90vh] h-full bg-custom bg-cover bg-no-repeat flex justify-center items-center">
        <Slides />
      </div>
      {/* Fourth section */}
      <div className="bg-white shadow-xl">
        <div className="grid lg:grid-cols-9 md:grid-cols-6 sm:grid-cols-5 xs:grid-cols-4 grid-cols-3 mt-5">
          {
            whySquad.map((item,ind)=>(
              <img key={ind} src={item?.image?.asset?.url} alt="whysquad" />
            ))
          }
        </div>
        <h1 className="text-center text-[#FF9315] text-2xl font-font p-5">
          #WHYsquad
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center overflow-hidden py-5">
        <div className="relative w-full sm:h-[236px] h-[170px]  px-10">
          <img
            src="./bgorange1.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center space-y-10">
            <h2 className="font-semibold sm:text-3xl lg:text-5xl text-lg text-white">
              Connect with Us!
            </h2>
            <button className="bg-white drop-shadow-xl text-[#FF8900] rounded-full md:px-32 sm:px-20 px-5 sm:py-4 py-2 font-semibold sm:text-xl text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>

    </>
  );
}

export default Why;

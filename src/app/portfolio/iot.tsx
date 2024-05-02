"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import IOTpic from "../../../public/IOTpic.png";
import SanityClient from "../SanityClient";

interface IotItem {
    heading: string;
    subHeading: string;
    image: {
      asset: {
        url: string;
      };
    };
    content: {
      Content: string;
    }[];
  }

  const Iot = () => {
    const [Iot, SetIot] = useState<IotItem[]>([]);
  
    useEffect(() => {
      SanityClient.fetch(
        `*[_type=='portfolio']{
              iot[]{
                  heading,
                  subHeading,
                  image{
                      asset->{
                          url
                      }
                  },
                  content[]{
                      Content
                  },
              }
          }`
      ).then((res: { iot: IotItem[] }[]) => {
        console.log(res[0].iot, "iot");
        SetIot(res[0].iot);
      });
    }, []);
  
    return (
      <>
        {Iot.map((item, ind) => (
          <div
            key={ind}
            className="sm:m-10 m-5 py-5 sm:py-0 justify-items-center grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-8"
          >
            <div className="space-y-5 font-sans xl:w-[87%]">
              <h1 className="text-[#FF9315] sm:text-xl font-semibold">
                {item.heading}
              </h1>
              <h1 className="sm:text-3xl text-lg text-gray-500 font-bold">
                {item.subHeading}
              </h1>
              {item.content.map((items, index) => (
                <p key={index} className="text-sm text-gray-500 text-justify">
                  {items.Content}
                </p>
              ))}
            </div>
            <div className="w-full h-full">
              <img src={item?.image?.asset?.url} alt="" className="w-full" />
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default Iot;
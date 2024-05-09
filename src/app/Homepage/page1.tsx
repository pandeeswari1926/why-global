"use client";
import { useEffect, useState } from "react";
import SanityClient from "../SanityClient";

export default function Home() {
  interface workProcess {
    title: string;
    subTitle: string;
    card: [
      {
        icon: { asset: { url: string } };
        cardTitle: string;
        cardContent: string;
      }
    ];
  }
  interface AllData {
    OurWorkProcess: workProcess[];
  }

  const [data, setData] = useState<AllData | null>(null);
  useEffect(() => {
    const getData = async () => {
      await SanityClient.fetch(
        `*[_type=='Home']{
        OurWorkProcess[]{
          title,
          subTitle,
          card[]{
            icon{
              asset->{
                url,
              }
            },
            cardTitle,
            cardContent,
          }
        }
      }`
      )
        .then((res) => {
          console.log(res);
          setData(res[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);
  return (
    <div className="">
      <main className=" relative lg:h-[600px] xl:h-screen md:object-cover md:flex md:flex-col">
        <div className="absolute w-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]"><img src="./lines.png" className="w-full h-fit"></img></div>
        {data &&
          data.OurWorkProcess.map((item, index) => (
            <div key={index}>
              <h3 className="text-[#FF8900] text-xl lg:pt-10 pt-5 lg:pl-24 lg:text-start text-center font-semibold">
                {item.title}
              </h3>
              <h2 className="lg:pl-24 lg:text-start text-center font-semibold pt-3 text-lg lg:text-[30px] text-gray-500 p-5 md:leading-[50px] w-full lg:w-[55%]">
                {item.subTitle}
              </h2>
              <div className=""><div className="grid lg:grid-cols-4  sm:grid-cols-2 grid-cols-1 lg:gap-5 gap-10 w-[85%] mx-auto justify-items-center items-center py-10 sm:px-10 lg:px-0 lg:ml-28  ">
                {item.card.map((items, indexs) => (
                  <div   className=" w-full h-full relative flex justify-center items-center " key={indexs}>
                    <div className={` lg:w-[200px]  px-5 py-3 bg-white w-full h-full relative drop-shadow-2xl flex flex-col justify-center gap-5 items-start rounded-xl rounded-ss-none  ${indexs%2!=0 ? "" : "lg:mt-16"}`}>
                      <div className="gap-2 flex lg:justify-start lg:items-start justify-center items-center w-full flex-col">
                      <img src={items?.icon?.asset?.url} className="w-[70px] lg:mx-0 mx-auto" alt="project" />
                      <h1 className="xl:font-semibold lg:text-start text-center w-full  text-sm">
                        {items.cardTitle}
                      </h1>
                      </div>
                     
                      <p className=" text-gray-500 leading-[18px] w-[90%] lg:mx-0 mx-auto  lg:text-start text-center text-xs">{items.cardContent}</p>
                      <div className="bg-white drop-shadow-xl md:w-12 flex justify-center items-center h-10 w-10 md:h-12 text-primarycolor text-lg rounded-full absolute top-4 -right-5 md:-right-5">
                      <span>{indexs+1}</span>
                    </div>
                    </div>
                    
                  </div>
                ))}
              </div></div>
              
            </div>
          ))}
      </main>
      <div></div>
    </div>
  );
}

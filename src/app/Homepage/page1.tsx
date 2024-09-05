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
      {/* <main className=" relative lg:h-[600px]  md:object-cover md:flex md:flex-col">
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
      </main> */}
      {/* <div className="relative  lg:block hidden shadow-2xl w-full overflow-hidden">
        <div className="w-64 absolute -top-28 -left-40 ">
          <img src="/width_200.png" className="w-full rotate-12 " alt="" />
        </div>
        <img
          src="/news.jpg"
          alt=""
          className="h-[75vh] lg:block hidden w-full object-cover"
        />
      </div>
      <div className="w-full  bg-primarycolor ">
        <div className="flex lg:flex-row flex-col justify-center py-16 lg:px-0 px-5 gap-20 w-full h-full items-center">
          <div className=" lg:w-[40%] md:w-[70%] mt-10 z-20 relative h-[250px] md:h-[280px]">
            <div className="text-justify  border-[3px] lg:text-[26px] sm:text-3xl text-2xl xs:leading-10 font-semibold h-full flex justify-center items-center p-5 md:leading-[45px] border-orange-500 bg-white rounded-3xl">
              To provide clever and innovative business solutions to fullfill
              the business needs of the customer all over the world.
            </div>
            <div className="py-5 px-16 text-4xl  text-white font-semibold rounded-t-[40px] -z-10    absolute bg-gradient-to-b from-orange-600 via-orange-500 to-orange-400 -top-16 left-0">
              Mission
            </div>
          </div>
          <div className="mt-10 lg:w-[40%]  md:w-[70%]  z-20 relative h-[250px]  md:h-[280px]">
            <div className="text-justify flex justify-center items-center  p-5 border-[3px] h-full lg:text-[26px] sm:text-3xl text-2xl xs:leading-10 font-semibold md:leading-[45px] border-orange-500 bg-white rounded-3xl">
              We aim to be the preferred partner for client seeking innovative
              solutions to boost sales and efficiency.
            </div>
            <div className="py-5 px-16 text-4xl  text-white font-semibold rounded-t-[40px] -z-10    absolute bg-gradient-to-b from-orange-600 via-orange-500 to-orange-400 -top-16 left-0">
              Vision
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
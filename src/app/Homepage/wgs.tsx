"use client";
import React, { useEffect, useState } from "react";
import SanityClient from "../SanityClient";
import Link from "next/link";

const Wgs = () => {
  interface NewsItem {
    image: {
      asset: {
        url: string;
      };
    };
    heading: string;
    date: string; // You might want to use a Date type if you're dealing with dates
    content: string;
    slug: { current: string };
  }

  // const [data, setData] = useState<AllData | null>(null);
  // useEffect(() => {
  //   const getData = () => {
  //     SanityClient.fetch(
  //       `*[_type=='Home']{
  //       blog[]{
  //         Photo{
  //           asset->{
  //             url
  //           }
  //         },
  //         icon{
  //           asset->{
  //             url
  //           }
  //         },
  //         date,
  //         title,
  //         content,
  //       }
  //     }`
  //     )
  //       .then((res) => {
  //         console.log(res);
  //         setData(res[0]);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getData();
  // },[]);

  const [dataItems, setDataItems] = useState<NewsItem[]>([]);
  useEffect(() => {
    const getdata = () => {
      SanityClient.fetch(
        `*[_type=='news']{
        image{
          asset->{
            url
          }
        },
        heading,
        date,
        content,
        slug,
      }`
      )
        .then((res) => {
          console.log(res[0], "pandi");
          setDataItems(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getdata();
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="flex justify-between sm:flex-row flex-col sm:px-24 py-10">
        <div className="flex flex-col space-y-3 sm:text-start text-center">
          <h2 className="text-[#FF8900] font-semibold md:text-xl text-xl uppercase">
            Recent News
          </h2>
          <h2 className="font-semibold md:text-3xl text-xl text-gray-500">
            CATCH UP ON THE LATEST NEWS!
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center pt-5 sm:pt-0">
          <Link
            href="/news"
            className="bg-white shadow-md shadow-gray-300 mx-auto w-fit lg:flex hidden p-2 text-[#FF8900]"
          >
            View all
          </Link>
        </div>
      </div>

      <section className="flex h-fit lg:flex-row flex-col justify-around px-5 gap-5 items-center pt-10">
        {dataItems &&
          dataItems.slice(0, 3).map((item, index) => (
            <div>
              <Link
                href={{
                  pathname: "/IndiviNews",
                  query: { name: item.slug.current },
                }}
              >
                <div
                  key={index}
                  className="relative  h-[550px] md:px-10 lg:px-5"
                >
                  <div className="sm:w-72 w-80 sm:mx-0 mx-auto h-80 relative">
                    <div className="absolute w-full via-slate-300 h-10 bottom-0  bg-gradient-to-b from-transparent to-white"></div>
                    <img
                      src={item?.image?.asset?.url}
                      alt=""
                      className="xs:w-full w-[90%] mx-auto h-full object-cover"
                    />
                  </div>
                  <div className=" sm:w-72 sm:h-44 w-[80%] absolute top-64 sm:-ml-8">
                    <div className="w-full flex flex-col justify-end items-end">
                      <p className="flex items-center gap-2 bg-[#FF8900] w-fit text-white px-1 py-2 rounded-t-xl text-sm">
                        {/* <img src={item?.icon.asset.url} alt="" className="w-5 h-5"/> */}
                        {item.date}
                      </p>
                    </div>
                    <div className="bg-white drop-shadow-xl p-4 min-h-56">
                      <h2 className="font-semibold">{item.heading}</h2>
                      <p className="pt-2">{item.content}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </section>
      <Link
        href="/news"
        className="bg-white shadow-md shadow-gray-300 mx-auto w-fit lg:hidden flex p-2 text-[#FF8900]"
      >
        View all
      </Link>
      <div className="flex flex-col justify-center items-center overflow-hidden py-5">
        <div className="relative w-full lg:h-[236px] h-[250px]  px-10">
          <img
            src="./bgorange1.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center ">
            <h2 className="font-semibold sm:text-4xl text-xl mb-7 text-white">
              Connect with Us!
            </h2>
            <Link href={"/contactus"}>
              <button className="bg-white drop-shadow-xl text-[#FF8900] rounded-full sm:px-20 px-5 py-4 font-semibold sm:text-xl text-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wgs;

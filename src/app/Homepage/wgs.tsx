"use client";
import React, { useEffect, useState } from "react";
import SanityClient from "../SanityClient";
import Link from "next/link";

const Wgs = () => {
  interface NewsItem {
    icon: any;
    image: {
      asset: {
        url: string;
      };
    };
    heading: string;
    date: string;
    content: string;
    slug: { current: string };
  }

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
    <div className="overflow-hidden md:mt-8">
      <div className="flex justify-between sm:flex-row flex-col md:px-14 px-5 py-10">
        <div className="flex flex-col md:space-y-3 sm:text-start text-center">
          <h1 className='md:text-xl text-primarycolor font-semibold md:text-left '>
            <span className='text-primarycolor text-[40px]'>.</span> Recent News 
            <span className='text-primarycolor text-[40px]'>.</span>
          </h1>
          <h2 className="font-bold md:text-4xl   text-2xl text-font text-gray-00">
            Catch Up On The Latest News!
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center md:pt-5 sm:pt-0">
          <Link href="/news" className="bg-primarycolor shadow-md shadow-gray-300 mx-auto w-fit rounded-md lg:flex hidden px-4 py-2 text-white">
            View all
          </Link>
        </div>
      </div>

      {/* Responsive Flex and Grid for News Section */}
      <section className="flex flex-col md:flex-row md:justify-around md:px-5 md:items-center md:mt-4 space-y-16 md:space-y-0">
        {dataItems &&
          dataItems.slice(0, 3).map((item, index) => (
            <div key={index}>
              <Link href={{ pathname: "/IndiviNews", query: { name: item.slug.current } }}>
                <div key={index} className="relative md:h-[550px]">
                  <div className="md:w-[450px] w-full md:h-80 relative md:px-10">
                    <img
                      src={item?.image?.asset?.url}
                      alt=""
                      className="w-full shadow-xl md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-80 w-full md:absolute md:top-64">
                    <div className="bg-white drop-shadow-xl p-4 min-h-20">
                      <p className="flex items-center gap-2 w-fit text-primarycolor text-font px-1 py-2 rounded-t-xl text-sm">
                        {item.date}
                      </p>
                      <h2 className="font-semibold">{item.heading}</h2>
                      <p className="pt-2">{item.content}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </section>

      {/* Mobile "View All" Button */}
      <Link href="/news" className="bg-white shadow-md shadow-gray-300 mx-auto mt-2 w-fit lg:hidden flex px-4 py-2 text-[#FF8900]">
        View all
      </Link>

      {/* Connect with Us Section */}
      <div className="flex flex-col justify-center items-center overflow-hidden py-5">
        <div className="relative w-full lg:h-[236px] h-[250px] px-10">
          <img
            src="./bgorange1.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
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

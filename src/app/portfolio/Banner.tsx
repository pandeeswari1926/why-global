"use client";
import React, { useState } from "react";
import SanityClient from "../SanityClient";
import Loader from "../home/Loader";
import { Helmet } from "react-helmet";
import Link from "next/link";

interface BannerItem {
  heading: string;
  content: string;
}
interface AllData {
  metaTitle: string;
  MetaDescription: string;
  MetaData: string;
  FocusKeyword: string;
  MetaURL: string;
}

export const Banner: React.FC = () => {
  const [loader, setLoader] = useState(true);
  const [bannerData, setBannerData] = useState<BannerItem[]>([]);
  const [allData, setAllData] = useState<AllData | null>(null);

  React.useEffect(() => {
    SanityClient.fetch(
      `*[_type=='portfolio']{
          metaTitle,
          MetaDescription,
          MetaData,
          FocusKeyword,
          MetaURL,
          Banner[]{
            heading,
            content,
          }
        }`
    ).then((res: any) => {
      setBannerData(res[0].Banner);
      console.log(res, "banner data");
      setLoader(false);
      setAllData(res[0]);
    });
  }, []);

  return (
    <div>
      
      {loader == true ? (
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
          <div className="bg-portfolio bg-cover bg-no-repeat bg-center lg:pb-32 pb-14">
            {bannerData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center text-center py-5 lg:py-0 lg:h-[90vh] gap-5 sm:gap-10 px-2 sm:px-10 lg:px-0"
              >
                <div className="space-y-2 pt-5 lg:pt-0">
                  <h1 className="text-white text-xl sm:text-4xl lg:text-7xl font-semibold lg:w-[90%] lg:mx-auto">
                    {item.heading}
                  </h1>
                </div>
                <p className="text-white sm:text-base text-sm p-2 sm:p-0 lg:w-1/2 lg:mx-auto">
                  {item.content}
                </p>
                <Link href={'/contactus'}><button className="bg-[#FF9315] text-white border-2 border-white font-semibold xs2:p-4 p-2 px-5 xs2:px-10 lg:px-16 rounded-full hover:text-[#FF9315] hover:bg-white drop-shadow-2xl text-xl lg:text-2xl ">
                  Get Started
                </button></Link>
              </div>
            ))}
            <div className="h-full">
              <div className="relative flex flex-col lg:gap-20 gap-10">
                <div className="flex justify-center items-center lg:absolute lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 lg:left-1/2">
                  <div className="relative w-fit flex justify-center flex-col">
                    <div className="lg:w-96 sm:w-52 w-36 bg-white rounded-full border-[20px] border-gray-300 drop-shadow-2xl border-opacity-25">
                      <img
                        src="./wgs gifs (14).gif"
                        alt=""
                        className="rounded-full lg:p-10 p-5"
                      />
                    </div>
                    <img
                      src="./message4.png"
                      alt=""
                      className="absolute w-40 -mb-8 right-0 bottom-0 -mr-16 lg:-mr-0"
                    />
                  </div>
                </div>

                <div className="flex sm:flex-row flex-col items-center justify-center lg:justify-around gap-5 md:gap-20 lg:gap-0">
                  <div className="relative">
                    <div className="w-36 rounded-full bg-white border-8 border-gray-300 drop-shadow-2xl border-opacity-25">
                      <img
                        src="./wgs gifs (16).gif"
                        alt=""
                        className="w-36 rounded-full p-3"
                      />
                    </div>
                    <img
                      src="./Rectangle 129.png"
                      alt=""
                      className="absolute w-36 -mt-10 sm:-ml-28 -ml-14"
                    />
                  </div>
                  <div className="relative">
                    <div className="bg-white w-36 rounded-full border-8 border-gray-300 drop-shadow-2xl border-opacity-25 p-3">
                      <img
                        src="./wgs gifs (15).gif"
                        alt=""
                        className="w-36 rounded-full  p-1"
                      />
                    </div>
                    <img
                      src="/message2.png"
                      alt=""
                      className="absolute w-36 -mt-10 sm:ml-28 ml-14"
                    />
                  </div>
                </div>

                <div className="flex sm:flex-row flex-col items-center justify-center lg:justify-between gap-5 md:gap-20 lg:gap-0 lg:px-40">
                  <div className="">
                    <div className="w-36 rounded-full border-8 border-gray-300 drop-shadow-2xl border-opacity-25 bg-white">
                      <img
                        src="./wgs gifs (13).gif"
                        alt=""
                        className="w-36 rounded-full p-3"
                      />
                    </div>
                    <img
                      src="./message3.png"
                      alt=""
                      className="absolute w-36 -mt-10 sm:-ml-28 -ml-14"
                    />
                  </div>

                  <div className="">
                    <div className="w-36 rounded-full border-8 border-gray-300 drop-shadow-2xl border-opacity-25 bg-white">
                      <img
                        src="./wgs gifs (12).gif"
                        alt=""
                        className="w-36 rounded-full p-3"
                      />
                    </div>
                    <img
                      src="./message5.png"
                      alt=""
                      className="absolute w-36 -mt-10 sm:ml-28 ml-14"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

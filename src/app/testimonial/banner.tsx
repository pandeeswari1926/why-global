"use client";
import React, { useState } from "react";
import SanityClient from "../SanityClient";
import Loader from "../home/Loader";
import { Helmet } from "react-helmet";

interface BannerItem {
  messageTitle: string;
  messageContent: string;
  gif?: {
    asset: {
      url: string;
    };
  };
  image?: {
    asset: {
      url: string;
    };
  };
  name: string;
  role: string;
}
interface AllData {
  metaTitle: string;
  MetaDescription: string;
  MetaData: string;
  FocusKeyword: string;
  MetaURL: string;
}

const Banner = () => {
  const [loader, setLoader] = useState(true);
  const [bannerData, setBannerData] = useState([]);
  const [allData, setAllData] = useState<AllData | null>(null);
  React.useEffect(() => {
    SanityClient.fetch(
      `*[_type=='testimonial']{
        metaTitle,
        MetaDescription,
        MetaData,
        FocusKeyword,
        MetaURL,
            banner[]{
                messageTitle,
                messageContent,
                gif{
                    asset->{
                            url
                        }
                    },
                image{
                    asset->{
                        url
                    }
                },
                name,
                role,
                }
            }`
    ).then((res) => {
      console.log(res[0]?.banner, "Bannerdata");
      setBannerData(res[0]?.banner);
      setLoader(false);
      setAllData(res[0]);
    });
  }, []);
  return loader === true ? (
    <Loader />
  ) : (
    <section>
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
      {bannerData.map((item: BannerItem, ind: number) => (
        <div
          key={ind}
          className="relative h-[530px] lastwidth:h-[650px] xs:h-[750px] xs2:h-[900px] sm:h-screen"
        >
          <div className="absolute md:-top-7 right-0 lg:w-[80%] w-full xs:h-screen leawidth:h-[650px] h-[500px]">
            <img
              src="./testmonialbg.png"
              alt=""
              className="w-full h-full  object-fill"
            />
          </div>
          <div className="absolute lg:w-[50%] md:w-[70%] w-full md:right-5 right-0 xs:bottom-0 bottom-10 ">
            <div className="lg:w-[80%] w-full relative">
              <div className="w-[80%] lg:hidden block absolute -top-1/3 sm:-top-52  md:-top-1/3 left-1/2 -translate-x-1/2 ">
                <img src="./small2.png" alt="" className="w-full" />
                <div className="absolute lg:top-12 lg:left-16 top-5 left-5 space-y-5">
                  <p className="sm:text-lg xs:text-base text-xs text-primarycolor font-semibold">
                    {item?.messageTitle}
                  </p>
                  <h1 className=" xs:text-2xl text-xs text-gray-500 font-semibold">
                    {item?.messageContent}
                  </h1>
                </div>
              </div>
              <div className="">
                <img
                  src="./warn.png"
                  alt="ceo"
                  className=" -left-6 md:flex hidden bottom-10 absolute w-[50%]"
                />
              </div>
              <img
                src={item?.image?.asset?.url}
                alt="ceo"
                className="w-full lg:ml-28"
              />
            </div>
            <div
              className="text-white bg-white bg-opacity-20 absolute bottom-0 md:right-24 w-[70%] p-3 pl-10 rounded-t-xl"
              style={{ backdropFilter: "blur(8px)" }}
            >
              <h1 className="md:text-2xl text-lg font-semibold">
                {item?.name}
              </h1>
              <p className="text-sm font-semibold">{item?.role}</p>
            </div>
          </div>
          <div className="lg:w-[550px] xs:w-[450px] lg:block hidden absolute bottom-1/2  left-28">
            <img src="./Vector 86.png" alt="" className="" />
            <div className="absolute lg:top-12 lg:left-16 top-5 left-5 space-y-5">
              <p className="sm:text-lg xs:text-base text-xs text-primarycolor font-semibold">
                {item?.messageTitle}
              </p>
              <h1 className="sm:text-3xl xs:text-lg text-xs text-gray-500 font-semibold">
                {item?.messageContent}
              </h1>
            </div>
          </div>

          <div className="absolute w-80 bottom-0 md:left-14 lg:block hidden">
            <img src={item?.gif?.asset?.url} alt="gif" className="" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Banner;

"use client";
import React, { useState, useEffect } from "react";
import SanityClient from "../SanityClient";
import Loader from "../home/Loader";
import { Helmet } from "react-helmet";

interface EventData {
  title: string;
  SubTitle: string;
}
interface AllData {
  metaTitle: string;
  MetaDescription: string;
  MetaData: string;
  FocusKeyword: string;
  MetaURL: string;
}

const Headingsection = () => {
  const [data, setData] = useState<EventData | null>(null);
  const [loader, setLoader] = useState(true);
  const [allData, setAllData] = useState<AllData | null>(null);

  useEffect(() => {
    SanityClient.fetch<EventData[]>(
      `*[_type == "events"]{
        metaTitle,
          MetaDescription,
          MetaData,
          FocusKeyword,
          MetaURL,
        title, 
        SubTitle,
      }`
    ).then((events: any) => {
      console.log(events, "eventTitle");
      setAllData(events[0]);
      if (events.length > 0) {
        setData(events[0]);
        setLoader(false);
      }
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
      <div className="w-full md:h-60 h-32 relative">
        <div className="w-full h-full absolute top-0 left-0">
        <img src="./bgs.png" alt="" className="w-full h-full" />
        </div>
        <div className="absolute w-full flex flex-col items-center justify-center top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="xl:text-8xl md:text-6xl xs:text-3xl text-[1.4rem]  bg-gradient-to-b from-white to-transparent text-transparent font-bold bg-clip-text text-center">
            {data && data.title}
          </p>
          <p className="text-white xl:text-4xl md:text-2xl xs:text-lg text-sm font-medium">
            {data && data.SubTitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default Headingsection;

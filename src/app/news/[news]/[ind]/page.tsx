"use client";
import SanityClient from "@/app/SanityClient";

import React, { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";

interface newsDetails {
  title: string;
  subTitle: string;

  postDate: string;
  contentAndImage: [
    {
      image: { asset: { url: string } };
      contents: [{ content: string }];
    }
  ];
}
interface news {
  image: { asset: { url: string } };
  heading: string;
  date: string;
  postStatus:string;
}

function Page({ params }: any) {
  const [showActiveContent, setShowActiveContent] = React.useState("Recent");
  const toggleContent = (content: string) => {
    setShowActiveContent(content);
  };
  console.log(params.ind);
  const [alldata, setalldata] = useState<newsDetails | null>(null);
  const [filterData, setFilterData] = useState<news | null>(null);
  const [newsArray, setnewarray] = useState<news[] | null>(null);
  const [newsArray2, setnewarray2] = useState<news[] | null>(null);
  const [dataItems, setDataItems] = useState<news[] | []>([]);
  const data = params.ind;
  const decodedUrl = decodeURIComponent(data.replace(/\+/g, " "));
  useEffect(() => {
    const getdata = async () => {
      await SanityClient.fetch(
        `*[_type=="newsDetails" && title==${JSON.stringify(decodedUrl)}]{
            title,
            subTitle,
            postDate,
            contentAndImage[]{
                image{asset->{url}},
                contents[]{content}
            }
         }`
      ).then((res: any) => {
        console.log(res);
        setalldata(res[0]);
      });
    };
    getdata();
  }, []);
  useEffect(() => {
    SanityClient.fetch(
      `*[_type=='news']{
            image{
                asset->{
                  url
                }
              },
              heading,
              date,
              postStatus,
        }`
    ).then((res) => {
      console.log(res);
      setDataItems(res);
      setFilterData(res);
      setnewarray(res);
      setnewarray2(res);
    });
  }, []);
  useEffect(() => {
    if (showActiveContent == "Recent") {
      setnewarray(newsArray2);
    } else {
      const filterDatas =
        dataItems &&
        dataItems?.filter(
          (items: any) =>
            items.postStatus.toLowerCase() === showActiveContent.toLowerCase()
        );
      setnewarray(filterDatas);
    }
  }, [showActiveContent]);
  return (
    <div className="w-full p-5">
      <div className="flex lg:flex-row flex-col-reverse gap-10 w-full relative">
        <div className="lg:w-[60%] w-full">
          <div className="w-full flex flex-col gap-5 h-full">
            <p className="md:text-3xl text-xl font-semibold">
              {alldata && alldata.title}
            </p>
            <div className="lg:flex-row flex flex-col w-full justify-between items-center">
              <p className="text-sm">{alldata && alldata.subTitle}</p>
              <p className="text-sm date flex gap-2 justify-center  items-start">
                <span>{alldata && alldata.postDate}</span>{" "}
                <FaCalendar className="size-4" />
              </p>
            </div>
            {alldata &&
              alldata.contentAndImage &&
              alldata.contentAndImage.map((item: any, index: any) => (
                <div className="flex flex-col gap-5">
                  <div className="w-full h-[400px]">
                    <img
                      src={item?.image?.asset?.url}
                      className="w-full h-full"
                    ></img>
                  </div>
                  <div className="flex flex-col gap-5">
                    {item &&
                      item.contents.map((list: any, indess: any) => (
                        <p className="text-justify">{list.content}</p>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="lg:w-[30%] w-full sticky">
          <div className="lg:w-full sm:w-[50%] w-full space-y-5">
            <div className="flex flex-row gap-5">
              <button
                onClick={() => toggleContent("Recent")}
                className={`text-black ${
                  showActiveContent === "Recent"
                    ? " border-[#FF9315] border-b-2"
                    : ""
                }`}
              >
                Recent
              </button>
              <button
                onClick={() => toggleContent("Popular")}
                className={`text-black ${
                  showActiveContent === "Popular"
                    ? " border-[#FF9315] border-b-2"
                    : ""
                }`}
              >
                Popular
              </button>
            </div>
            <div className="space-y-3">
              {newsArray &&
                newsArray.map((items: any, indexs: any) => (
                  <div key={indexs} className="flex flex-row gap-3">
                    <div className="w-[20%] h-12">
                      <img
                        src={items?.image?.asset?.url}
                        alt=""
                        className="w-full h-full"
                      />
                    </div>
                    <div className="w-[70%]">
                      <h1 className="font-bold text-xs">{items.heading}</h1>
                      <p className="text-xs">{items.date}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page;

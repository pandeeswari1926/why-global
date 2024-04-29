"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import image1 from "../asset/images (5).jpg";
import image2 from "../asset/image10.jpg";
import { BsDot } from "react-icons/bs";
const page = () => {
  const [showActiveContent, setShowActiveContent] = useState<string>("Popular");
  const toggleContent = (content: string) => {
    setShowActiveContent(content);
  };
  const data = [
    {
      image: image1,
      heading: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      date: "By Admin April 20th 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore at doloremque, quam, facere dolore tempora eius odit hic nulla quos voluptatem fuga dicta quasi consequatur accusamus maxime velit. Itaque.",
      status: "Popular",
    },
    {
      image: image1,
      heading: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      date: "By Admin April 20th 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore at doloremque, quam, facere dolore tempora eius odit hic nulla quos voluptatem fuga dicta quasi consequatur accusamus maxime velit. Itaque.",
      status: "Popular",
    },
    {
      image: image1,
      heading: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      date: "By Admin April 20th 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore at doloremque, quam, facere dolore tempora eius odit hic nulla quos voluptatem fuga dicta quasi consequatur accusamus maxime velit. Itaque.",
      status: "Recent",
    },
    {
      image: image1,
      heading: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      date: "By Admin April 20th 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore at doloremque, quam, facere dolore tempora eius odit hic nulla quos voluptatem fuga dicta quasi consequatur accusamus maxime velit. Itaque.",
      status: "Recent",
    },
    {
      image: image1,
      heading: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      date: "By Admin April 20th 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore at doloremque, quam, facere dolore tempora eius odit hic nulla quos voluptatem fuga dicta quasi consequatur accusamus maxime velit. Itaque.",
      status: "Popular",
    },
  ];
  const data2 = [
    {
      image: image1,
      heading: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      date: "By Admin April 20th 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore at doloremque, quam, facere dolore tempora eius odit hic nulla quos voluptatem fuga dicta quasi consequatur accusamus maxime velit. Itaque.",
      status: "Popular",
      category: "Partnerships and Collaborations",
    },
    {
      image: image1,
      heading: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      date: "By Admin April 20th 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore at doloremque, quam, facere dolore tempora eius odit hic nulla quos voluptatem fuga dicta quasi consequatur accusamus maxime velit. Itaque.",
      status: "Popular",
      category: "Company Achievements",
    },
    {
      image: image2,
      heading: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      date: "By Admin April 20th 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore at doloremque, quam, facere dolore tempora eius odit hic nulla quos voluptatem fuga dicta quasi consequatur accusamus maxime velit. Itaque.",
      status: "Recent",
      category: "CSR Initiatives",
    },
    {
      image: image2,
      heading: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      date: "By Admin April 20th 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore at doloremque, quam, facere dolore tempora eius odit hic nulla quos voluptatem fuga dicta quasi consequatur accusamus maxime velit. Itaque.",
      status: "Recent",
      category: "Tech Updates",
    },
    {
      image: image2,
      heading: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      date: "By Admin April 20th 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore at doloremque, quam, facere dolore tempora eius odit hic nulla quos voluptatem fuga dicta quasi consequatur accusamus maxime velit. Itaque.",
      status: "Popular",
      category: "Tech Updates",
    },
  ];
  const [filterData, setFilterData] = useState<any>(data2);
  useEffect(() => {
    const filterDatas = data2.filter(
      (item) => item.status.toLowerCase() === showActiveContent.toLowerCase()
    );
    setFilterData(filterDatas);
  }, [showActiveContent]);
  return (
    <>
      <div className="p-10">
        <h1 className="py-7 font-bold text-xl">NEWS</h1>
        <div className="flex lg:flex-row flex-col-reverse gap-10 w-full ">
          <div className="flex flex-col gap-5 lg:w-[70%] w-full h-full">
            {data.map((item, index) => (
              <div className="flex flex-col gap-5">
                <div className=" flex lg:flex-row flex-col gap-5 justify-between items-center">
                  <div className="sm:w-[50%]  w-full h-full">
                    <Image
                      src={item.image}
                      alt="duplicate"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="space-y-3 lg:w-[50%] w-full  h-full">
                    <h1 className="font-bold text-xl">{item.heading}</h1>
                    <p className="text-sm">{item.date}</p>
                    <p className="text-justify text-sm">{item.content}</p>
                    <p className="text-base cursor-pointer text-primarycolor">
                      READ MORE
                    </p>
                  </div>
                </div>
                <div>
                  <hr className="w-full h-0.5 bg-gray-300" />
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-[30%] w-full flex lg:flex-col sm:flex-row flex-col  h-full space-y-4">
            <div className="lg:w-full sm:w-[50%] w-full space-y-5">
              <div className="flex flex-row gap-5">
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
              </div>
              <div className="space-y-3">
                {filterData.map((item: any, index: any) => (
                  <div className="flex flex-row gap-3">
                    <div className="w-[30%]">
                      <Image src={item.image} alt="" />
                    </div>
                    <div>
                      <h1 className="font-bold text-xs">{item.heading}</h1>
                      <p className="text-xs">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-full sm:w-[50%] w-full h-full">
              <h1 className="font-bold text-lg">Categories</h1>
              <div>
                {data2.map((item: any, index: any) => (
                  <div>
                    <div className="flex flex-row items-center text-sm">
                      <BsDot className="text-primarycolor size-8" />
                      <p>{item.category}</p>
                    </div>
                    <div>
                      <hr className="w-full h-0.5 bg-gray-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

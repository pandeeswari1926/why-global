"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import image1 from "../asset/social media.jpeg";
import image2 from "../asset/social media.jpeg";
import image3 from "../asset/e-commerce.jpg";
import image4 from "../asset/crm.jpg";
import image5 from "../asset/collaborator.jpg";
import { BsDot } from "react-icons/bs";
const page = () => {
  const [showActiveContent, setShowActiveContent] = useState<string>("Popular");
  const toggleContent = (content: string) => {
    setShowActiveContent(content);
  };
  const data = [
    {
      image: image1,
      heading: "Chennai’s Social Media Companies Redefining Strategies",
      date: "By Admin April 20th 2024",
      content:
        "In the bustling city of Chennai, where innovation meets tradition, the digital landscape is thriving…",
      status: "Popular",
    },
    {
      image: image2,
      heading: "Digital Marketing Comparison: SEO vs PPC",
      date: "By Admin April 20th 2024",
      content:
        "Introduction: Understanding the Dynamics of SEO vs PPC In today’s competitive digital landscape, businesses in…",
      status: "Popular",
    },
    {
      image: image3,
      heading: "Exploring Career Foundry’s Dynamic UX Design Curriculum",
      date: "By Admin April 20th 2024",
      content:
        "Introduction of UX Design Curriculum Are you ready to delve into the exciting world of…",
      status: "Recent",
    },
    {
      image: image4,
      heading: "E-commerce Development: Building Your Online Retail Empire",
      date: "By Admin April 20th 2024",
      content:
        "In the fast-paced and ever-evolving landscape of commerce, e-commerce development has become the cornerstone of…",
      status: "Recent",
    },
    {
      image: image5,
      heading: "Unlocking Success: The Art of Email Campaign Management",
      date: "By Admin April 20th 2024",
      content:
        "In the digital marketing landscape, email campaigns remain a potent tool for reaching and engaging…",
      status: "Popular",
    },
  ];
  const data2 = [
    {
      image: image1,
      heading: "Chennai’s Social Media Companies Redefining Strategies",
      date: "By Admin April 20th 2024",
      content:
        "In the bustling city of Chennai, where innovation meets tradition, the digital landscape is thriving…",
      status: "Popular",
      category: "Partnerships and Collaborations",
    },
    {
      image: image2,
      heading: "Digital Marketing Comparison: SEO vs PPC",
      date: "By Admin April 20th 2024",
      content:
        "Introduction: Understanding the Dynamics of SEO vs PPC In today’s competitive digital landscape, businesses in…",
      status: "Popular",
      category: "Company Achievements",
    },
    {
      image: image3,
      heading: "Exploring Career Foundry’s Dynamic UX Design Curriculum",
      date: "By Admin April 20th 2024",
      content:
        "Introduction of UX Design Curriculum Are you ready to delve into the exciting world of…",
      status: "Recent",
      category: "CSR Initiatives",
    },
    {
      image: image4,
      heading: "E-commerce Development: Building Your Online Retail Empire",
      date: "By Admin April 20th 2024",
      content:
        "In the fast-paced and ever-evolving landscape of commerce, e-commerce development has become the cornerstone of…",
      status: "Recent",
      category: "Tech Updates",
    },
    {
      image: image5,
      heading: "Unlocking Success: The Art of Email Campaign Management",
      date: "By Admin April 20th 2024",
      content:
        "In the digital marketing landscape, email campaigns remain a potent tool for reaching and engaging…",
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
                  <div className="sm:w-[50%] sm:h-[250px] w-full h-full">
                    <Image
                      src={item.image}
                      alt="duplicate"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4 lg:w-[50%] w-full  h-full">
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
                    <div className="w-[20%] h-12">
                      <Image src={item.image} alt="" className="w-full h-full" />
                    </div>
                    <div className="w-[70%]">
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

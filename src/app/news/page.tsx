"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import image1 from "../../../public/social media.jpeg";
import image2 from "../../../public/social media.jpeg";
import image3 from "../../../public/e-commerce.jpg";
import image4 from "../../../public/crm.jpg";
import image5 from "../../../public/collaborator.jpg";
import { BsDot } from "react-icons/bs";
import SanityClient from "../SanityClient";
import Loader from "../home/Loader";
import { Helmet } from "react-helmet";

function Page() {
  const [showActiveContent, setShowActiveContent] = React.useState("Recent");
  const toggleContent = (content: string) => {
    setShowActiveContent(content);
  };
  const data = [
    {
      image: "./social media.jpeg",
      heading: "Chennai's Social Media Companies Redefining Strategies",
      date: "By Admin April 20th 2024",
      content:
        "In the bustling city of Chennai, where innovation meets tradition, the digital landscape is thriving…",
      status: "Popular",
    },
    {
      image: "./social media.jpeg",
      heading: "Digital Marketing Comparison: SEO vs PPC",
      date: "By Admin April 20th 2024",
      content:
        "Introduction: Understanding the Dynamics of SEO vs PPC In today's competitive digital landscape, businesses in…",
      status: "Popular",
    },
    {
      image: "./e-commerce.jpg",
      heading: "Exploring Career Foundry's Dynamic UX Design Curriculum",
      date: "By Admin April 20th 2024",
      content:
        "Introduction of UX Design Curriculum Are you ready to delve into the exciting world of…",
      status: "Recent",
    },
    {
      image: "./crm.jpg",
      heading: "E-commerce Development: Building Your Online Retail Empire",
      date: "By Admin April 20th 2024",
      content:
        "In the fast-paced and ever-evolving landscape of commerce, e-commerce development has become the cornerstone of…",
      status: "Recent",
    },
    {
      image: "./collaborator.jpg",
      heading: "Unlocking Success: The Art of Email Campaign Management",
      date: "By Admin April 20th 2024",
      content:
        "In the digital marketing landscape, email campaigns remain a potent tool for reaching and engaging…",
      status: "Popular",
    },
  ];
  const data2 = [
    {
      image: "./social media.jpeg",
      heading: "Chennai's Social Media Companies Redefining Strategies",
      date: "By Admin April 20th 2024",
      content:
        "In the bustling city of Chennai, where innovation meets tradition, the digital landscape is thriving…",
      status: "Popular",
      category: "Partnerships and Collaborations",
    },
    {
      image: "./social media.jpeg",
      heading: "Digital Marketing Comparison: SEO vs PPC",
      date: "By Admin April 20th 2024",
      content:
        "Introduction: Understanding the Dynamics of SEO vs PPC In today's competitive digital landscape, businesses in…",
      status: "Popular",
      category: "Company Achievements",
    },
    {
      image: "./e-commerce.jpg",
      heading: "Exploring Career Foundry's Dynamic UX Design Curriculum",
      date: "By Admin April 20th 2024",
      content:
        "Introduction of UX Design Curriculum Are you ready to delve into the exciting world of…",
      status: "Recent",
      category: "CSR Initiatives",
    },
    {
      image: "./crm.jpg",
      heading: "E-commerce Development: Building Your Online Retail Empire",
      date: "By Admin April 20th 2024",
      content:
        "In the fast-paced and ever-evolving landscape of commerce, e-commerce development has become the cornerstone of…",
      status: "Recent",
      category: "Tech Updates",
    },
    {
      image: "./collaborator.jpg",
      heading: "Unlocking Success: The Art of Email Campaign Management",
      date: "By Admin April 20th 2024",
      content:
        "In the digital marketing landscape, email campaigns remain a potent tool for reaching and engaging…",
      status: "Popular",
      category: "Tech Updates",
    },
  ];

  interface NewsArray {
    image: { asset: { url: string } };
    heading: string;
    date: string;
    content: string;
    postStatus: string;
    category: [];
  }

  interface AllData {
    metaTitle: string;
    MetaDescription: string;
    MetaData: string;
    FocusKeyword: string;
    MetaURL: string;
    
    image: {asset: {url:string}};
    heading:string;
    date:string;
    content:string;
    postStatus:string;
  }
  const [newsArray, setnewarray] = useState<AllData[] | null>(null);
  const [newsArray2, setnewarray2] = useState<AllData[] | null>(null);
  const [filterData, setFilterData] = useState<AllData | null>(null);
  const [dataItems, setDataItems] = useState<AllData[] | []>([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getdata = () => {
      SanityClient.fetch(
        `*[_type=='news']{
        metaTitle,
        MetaDescription,
        MetaData,
        FocusKeyword,
        MetaURL,
        image{
          asset->{
            url
          }
        },
        heading,
        date,
        content,
        postStatus,
      }`
      )
        .then((res) => {
          console.log(res);
          setDataItems(res);
          setFilterData(res);
          setnewarray(res);
          setnewarray2(res);
          setLoader(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getdata();
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
    <>
      {loader === true ? (
        <Loader />
      ) : (
        <>
          {/* <Helmet>
            <title property="og:title">
              {dataItems && dataItems?.metaTitle}
            </title>
            <meta
              property="og:description"
              content={dataItems ? dataItems.MetaDescription : ""}
            />
            <meta
              property="og:url"
              content={dataItems ? dataItems.MetaData : ""}
            />
            <meta
              name="keywords"
              content={dataItems ? dataItems.FocusKeyword : ""}
            ></meta>
            <meta
              name="alldata"
              content={dataItems ? dataItems.MetaURL : ""}
            ></meta>
          </Helmet> */}
          <div className="xs:p-10 p-7">
            <h1 className="py-5 font-bold text-4xl xs:mx-0 mx-auto relative flex flex-col w-fit">
              <span>NEWS</span>
              <span className="w-full bg-primarycolor  h-[2px]"></span>
            </h1>
            <div className="flex lg:flex-row flex-col-reverse gap-10 w-full ">
              <div className="flex flex-col gap-5 lg:w-[70%] w-full h-full">
                {dataItems && dataItems.map((item: any, index: any) => (
                    <div key={index} className="flex flex-col gap-5">
                      <div className=" flex lg:flex-row flex-col gap-5 justify-between items-center">
                        <div className="sm:w-[50%] sm:h-[250px] w-full h-full">
                          <img
                            src={item?.image?.asset?.url}
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
                            <h1 className="font-bold text-xs">
                              {items.heading}
                            </h1>
                            <p className="text-xs">{items.date}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="lg:w-full sm:w-[50%] w-full h-full">
                  <h1 className="font-bold text-lg">Categories</h1>
                  {/* <div>
                  {newsArray &&
                    newsArray.map((item: any, index: any) => (
                      <div key={index}>
                        <div className="flex flex-row items-center text-sm">
                          <BsDot className="text-primarycolor size-8" />
                          <p>{item.category}</p>
                        </div>
                        <div>
                          <hr className="w-full h-0.5 bg-gray-300" />
                        </div>
                      </div>
                    ))}
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Page;

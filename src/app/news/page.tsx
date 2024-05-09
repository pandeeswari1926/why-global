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
import Link from "next/link";

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
    slug:{current:string}

    image: { asset: { url: string } };
    heading: string;
    date: string;
    content: string;
    postStatus: string;
  }
  interface cate {
    category: string;
  }
  interface list {
    category: string;
    result: [
      {
        contentAndImage: [{ image: { asset: { url: string } } }];
      }
    ];
  }
  interface ListObject {
    category: string;
    result: list[];
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
        slug,
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
          console.log(res[0],"pandi");
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
  const [arrays, setarrays] = useState<cate[] | []>([]);
  const [allvalues, setallvalues] = useState<list[] | []>([]);
  useEffect(() => {
    const productscategory = async () => {
      try {
        const categories = await SanityClient.fetch(`*[_type=="newsCategory"]{
          category
        }`);
        console.log(categories);
        setarrays(categories);

        const list = [];

        for (let i = 0; i < categories.length; i++) {
          const category = categories[i].category;
          console.log("ss");

          const result =
            await SanityClient.fetch(`*[_type=="news" && category->category==${JSON.stringify(
              category
            )}]{
            contentAndImage[]{
              image{
                asset->{
                  url
                }
              }
            }
          }`);
          if (result.length > 0) {
            list.push({ category, result });
            console.log(list);
          }
        }
        setallvalues(list);
      } catch (error) {
        console.error(error);
      }
    };

    productscategory();
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
          <Helmet>
            <title property="og:title">
              {dataItems && dataItems[0]?.metaTitle}
            </title>
            <meta
              property="og:description"
              content={dataItems ? dataItems[0].MetaDescription : ""}
            />
            <meta
              property="og:url"
              content={dataItems ? dataItems[0].MetaData : ""}
            />
            <meta
              name="keywords"
              content={dataItems ? dataItems[0].FocusKeyword : ""}
            ></meta>
            <meta
              name="alldata"
              content={dataItems ? dataItems[0].MetaURL : ""}
            ></meta>
          </Helmet>
          {/* <div className="xs:p-10 p-7">
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
                          <Link href={`/news/[page]`} as={`/news/${item.heading}`}><p className="text-base cursor-pointer text-primarycolor">
                            READ MORE
                          </p></Link>
                          
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
                  <div>
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
                </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex relative lg:flex-row gap-5 flex-col p-5 lg:p-0 lg:py-10">
            <div className="lg:w-[70%] w-full grid md:grid-cols-2 grid-cols-1  mx-auto justify-center  justify-items-center gap-5 lg:gap-10 px-10">
              {allvalues &&
                allvalues.map((item, index) => (
                  <Link
                    key={index}
                    href={{pathname:'/Newsbrief',query:{name:item.category}}}
                    className="w-full 2xl:w-[80%]"
                  >
                    <div className="bg-primarycolor shadow-xl  mx-auto  w-full cursor-pointer">
                      <div className="md:h-[250px]   w-full h-full">
                        <img
                          src={
                            item?.result[0]?.contentAndImage[0]?.image?.asset
                              ?.url
                          }
                          alt="duplicate"
                          className="w-full h-full "
                        />
                      </div>
                      <h1 className="text-center text-lg text-white py-3 font-semibold">
                        {item.category}
                      </h1>
                    </div>
                  </Link>
                ))}

              {/* <div className="bg-white shadow-xl w-[80%] cursor-pointer">
                <div className="sm:h-[250px] w-full h-full">
                  <img
                    src="./social media.jpeg"
                    alt="duplicate"
                    className="w-full h-full object-cover p-5"
                  />
                </div>
                <h1 className="px-5 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
                  quae.
                </h1>
              </div>
              <div className="bg-white shadow-xl w-[80%] cursor-pointer">
                <div className="sm:h-[250px] w-full h-full">
                  <img
                    src="./social media.jpeg"
                    alt="duplicate"
                    className="w-full h-full object-cover p-5"
                  />
                </div>
                <h1 className="px-5 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
                  quae.
                </h1>
              </div>
              <div className="bg-white shadow-xl w-[80%] cursor-pointer">
                <div className="sm:h-[250px] w-full h-full">
                  <img
                    src="./social media.jpeg"
                    alt="duplicate"
                    className="w-full h-full object-cover p-5"
                  />
                </div>
                <h1 className="px-5 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
                  quae.
                </h1>
              </div> */}
            </div>
            <div className="lg:w-[30%] top-28 lg:sticky w-full order-first lg:order-none flex lg:flex-col sm:flex-row flex-col  h-full space-y-4">
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
                <div className="flex flex-col gap-3">
                  {newsArray &&
                    newsArray.map((items: any, indexs: any) => (
                      <Link key={indexs}  href={{pathname:'/IndiviNews',query:{name:items.slug.current}}}>
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
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>

        </>
      )}
        <div className="flex flex-col justify-center items-center overflow-hidden py-5">
        <div className="relative w-full lg:h-[236px] h-[250px]  px-10">
          <img
            src='./bgorange1.png'
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center space-y-10">
            <h2 className="font-semibold sm:text-5xl text-3xl mb-4 text-white">
              Connect with Us!
            </h2>
            <Link href={'/contactus'}>
            <button className="bg-white drop-shadow-xl text-[#FF8900] rounded-full sm:px-32 px-16 w-full py-4 font-semibold sm:text-xl text-lg">
              Get Started
            </button></Link>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;

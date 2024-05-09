"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import image1 from "../../../public/social media.jpeg";
import image2 from "../../../public/social media.jpeg";
import image3 from "../../../public/e-commerce.jpg";
import image4 from "../../../public/crm.jpg";
import image5 from "../../../public/collaborator.jpg";
import { BsDot } from "react-icons/bs";
import { GetStaticPaths, GetStaticProps } from 'next';
import { Helmet } from "react-helmet";
import Link from "next/link";
import SanityClient from "@/app/SanityClient";
import Loader from "@/app/home/Loader";
import { useSearchParams } from "next/navigation";

const Page=()=> {
  const para=useSearchParams()
  const search=para.get('name')
    // const datas = params.news;
    // const decodedUrl = decodeURIComponent(datas.replace(/\+/g, " "));
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
    slug:{current:string};
    category:{category:string}
    
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
        `*[_type=='news'&& category->category==${JSON.stringify(search)}]{
        metaTitle,
        MetaDescription,
        category->{
          category
        },
        MetaData,
        FocusKeyword,
        slug,
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
        .then((res:any) => {
          console.log(res);
          setDataItems(res);
          setFilterData(res);
          setnewarray(res);
          setnewarray2(res);
          setLoader(false);
        })
        .catch((err:any) => {
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
          <div className="xs:p-5 p-7 ">
            <h1 className="py-5 font-bold text-4xl xs:mx-10 mx-auto relative flex flex-col w-fit">
              <span>{dataItems&&dataItems[0]?.category?.category}</span>
              <span className="w-full bg-primarycolor  h-[2px]"></span>
            </h1>
            <div className="flex lg:flex-row flex-col-reverse lg:p-5 gap-10 w-full ">
              <div className="flex flex-col gap-5 lg:w-[70%] w-full h-full">
                {dataItems && dataItems.map((item: any, index: any) => (
                    <div key={index} className="flex flex-col gap-5">
                      <div className=" flex lg:flex-row flex-col gap-5 justify-between items-center px-5">
                        <div className="lg:w-[50%] md:h-[400px] h-full lg:h-[250px] w-full ">
                          <img
                            src={item?.image?.asset?.url}
                            alt="duplicate"
                            className="w-full h-full "
                          />
                        </div>
                        <div className="space-y-2 lg:w-[50%] flex flex-col gap-3 w-full  h-full">
                          <h1 className="font-bold text-xl line-clamp-2">{item.heading}</h1>
                          <p className="text-sm">{item.date}</p>
                          <p className="text-justify text-sm line-clamp-5">{item.content}</p>
                          <Link href={{pathname:'/IndiviNews',query:{name:item.slug.current}}} ><p className="text-xs cursor-pointer hover:text-orange-600 duration-100 text-primarycolor ">
                            READ MORE
                          </p></Link>
                          
                        </div>
                      </div>
                      <div className="px-5">
                        <hr className="w-full h-0.5 bg-gray-300 " />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="lg:w-[30%] lg:sticky top-28 w-full flex lg:flex-col sm:flex-row flex-col  h-full space-y-4">
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
                        
                        <Link href={{pathname:'/IndiviNews',query:{name:items.slug.current}}} key={indexs} className="flex flex-row gap-3">
                        
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
                        </Link>
                      ))}
                  </div>
                </div>
                <div className="lg:w-full sm:w-[50%] w-full h-full">
          
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


// //  const getStaticPaths: GetStaticPaths = async () => {
// //   // Fetch dynamic news data from your source (e.g., an API or file system)
// //   const data12 = [
// //     // Your news data here
// //   ];

// //   // Generate paths based on the news data
// //   // const paths = data12.map((news) => ({
// //   //   params: {
// //   //     page: encodeURIComponent(news.heading),
// //   //   },
// //   // }));

// //   return {
 
// //     fallback: false, // or 'blocking' if you want to use incremental static regeneration
// //   };
// // };

// //  const getStaticProps: GetStaticProps = async ({ params }:string) => {
// //   // Fetch data for the specific news page based on the params
// //   const nope = [
// //     // Your data fetching logic here
// //   ];

// //   return {
// //     props: {
    
// //     },
// //   };
// // };
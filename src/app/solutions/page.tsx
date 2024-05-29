"use client";
import React, { useEffect, useState } from "react";
import SanityClient from "../SanityClient";
import { Helmet } from "react-helmet";
import Loader from "../home/Loader";
import Link from "next/link";

function Solutions() {
  const [showActiveContent, setShowActiveContent] = useState("Sign In");
  const [loader, setLoader] = useState(true);
  const toggleContent = (content: React.SetStateAction<string>) => {
    setShowActiveContent(content);
  };
  interface features {
    features: [
      {
        card1: [
          { content: string; title: string; icon: { asset: { url: string } } }
        ];
      },
      {
        card2: [
          { content: string; title: string; icon: { asset: { url: string } } }
        ];
      },
      {
        card3: [
          { content: string; title: string; icon: { asset: { url: string } } }
        ];
      }
    ];
  }

  interface Banner {
    BannerImage: [{ image: { asset: { url: string } } }];
    title: string;
    subTitle: string;
    content: string;
  }
  interface Alldata {
    metaTitle: string;
    MetaDescription: string;
    MetaData: string;
    FocusKeyword: string;
    MetaURL: string;
    Banner: Banner[];
    learning: [
      {
        heading: string;
        title: string;
        gif: { asset: { url: string } };
        content: [{ content: string }];
      }
    ];
    features: features[];

    weProvidesolution: [
      {
        Heading: string;
        image: { asset: { url: string } };
      }
    ];
    customerServices: [
      {
        dashboard: [{ image: { asset: { url: string } }; title: string }];
        faculty: [{ image: { asset: { url: string } }; title: string }];
        signin: [{ image: { asset: { url: string } }; title: string }];
      }
    ];
  }
  const [alldata, setalldata] = useState<Alldata | null>(null);
  useEffect(() => {
    const getdata = async () => {
      await SanityClient.fetch(
        `*[_type=='solution']{
      metaTitle,
      MetaDescription,
      MetaData,
      FocusKeyword,
      MetaURL,
      Banner[]{
        title,
        subTitle,
        content,
        BannerImage[]{
          image{
            asset->{
              url,
            }
          }
        },

      },
      learning[]{
        heading,
        title,
        content[]{
          content,
        },
        gif{
          asset->{
            url
          }
        }
      },
      weProvidesolution[]{
        Heading,
        image{
          asset->{
            url
          }
        }
      },
      customerServices[]{
        signin[]{
          title,
          image{
            asset->{
              url
            }
          }
        },
        dashboard[]{
          title,
          image{
            asset->{
              url
            }
          }
        },
        faculty[]{
          title,
          image{
            asset->{
              url
            }
          }
        }
      },
      features[]{
        card1[]{
          icon{
            asset->{
              url,
            }
          },
          title,
          content,
        },
        card2[]{
          icon{
            asset->{
              url
            }
          },
          title,
          content,
        },
        card3[]{
          icon{
            asset->{
              url
            }
          },
          title,
          content,
        }
      }
    }`
      ).then((res: any) => {
        console.log(res[0]);
        setalldata(res[0]);
        setLoader(false);
      });
    };
    getdata();
  }, []);
  return loader === true ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title property="og:title">{alldata && alldata.metaTitle}</title>
        <meta
          property="og:description"
          content={alldata ? alldata.MetaDescription : ""}
        />
        <meta property="og:url" content={alldata ? alldata.MetaData : ""} />
        <meta
          name="keywords"
          content={alldata ? alldata.FocusKeyword : ""}
        ></meta>
        <meta name="alldata" content={alldata ? alldata.MetaURL : ""}></meta>
      </Helmet>

      {/* first section */}
      {alldata &&
        alldata.Banner.map((item, index) => (
          <div
            key={index}
            className="grid w-full h-full  relative 2xl:place-items-center  overflow-hidden grid-cols-1 lg:grid-cols-2 mt-7 lg:mt-0"
          >
            <div className="flex flex-col gap-5 p-5 lg:px-20 lg:pt-16">
              <p className="uppercase lg:px-0 px-5 text-sm sm:text-base text-orange-500 font-semibold md:text-left text-center">
                {item?.title}
              </p>

              <div className="uppercase lg:text-2xl xl:text-[30px] sm:text-xl xs:text-lg text-base md:text-left text-center font-semibold space-y-3 text-gray-500">
                <p className="space-y-2 md:leading-10 lg:px-0 px-5">
                  {item?.subTitle}
                </p>
              </div>

              <p className="font-light md:text-[16px] text-[14px]  text-justify lg:px-0 px-5  md:leading-[30px] text-gray-500">
                {item.content}
              </p>
            </div>
            <div className="h-full w-full flex flex-col justify-center items-center">
              <img
                src={item?.BannerImage[0]?.image?.asset?.url}
                alt="ruben"
                className="lg:w-full lg:h-full lg:block hidden rubanbro xs:w-96 object-contain xs:h-80 w-64 h-52"
              />
              <img
                src={item?.BannerImage[0]?.image?.asset?.url}
                alt="ruben"
                className="lg:w-full lg:h-full lg:hidden  xs:w-96 object-contain xs:h-80 w-64 h-52"
              />
            </div>
            {/* <div className="h-full w-full lg:hidden flex flex-col justify-center items-center">
              <img
                src={item?.BannerImage[0]?.image?.asset?.url}
                alt="ruben"
                className="md:w-full md:h-full   xs:w-96 object-cover xs:h-80 w-64 h-52 "
              />
            </div> */}
            <div className="absolute bottom-7 left-0 w-[60%] lg:block hidden">
              <img src="./lineNew.png" alt="line" className="w-full " />
            </div>
          </div>
        ))}
      {alldata &&
        alldata.learning.map((item: any, index: any) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 lg:px-14 mt-10 lg:mt-0"
          >
            <div className="flex flex-col justify-center gap-5 p-5  md:p-10 ">
              <h1 className="uppercase text-sm sm:text-base text-orange-500 font-semibold md:text-left text-center">
                {item?.heading}
              </h1>

              <h1 className="uppercase lg:text-2xl text-gray-500 sm:text-[20px] xs:text-lg text-base md:text-left text-center font-bold leading-[30px]">
                {item?.title}
              </h1>
              {item &&
                item.content &&
                item.content.map((list: any, listindex: any) => (
                  <p
                    key={listindex}
                    className="font-light text-sm  md:text-left text-justify md:px-0 px-5 text-gray-500"
                  >
                    {list.content}
                  </p>
                ))}
            </div>
            <div className="w-full h-full mx-auto flex justify-center items-center">
              <img
                src={item?.gif?.asset?.url}
                alt=""
                className="mx-auto lg:w-full lg:h-full xs:w-96 object-contain xs:h-80 w-64 h-52"
              />
            </div>
          </div>
        ))}
      {/* second section */}

      {/* third section */}

      <div className="bg-gray-50 my-16 px-5">
        <div className=" px-5 ">
          <div className=" space-y-3 text-center xs:block largelast:hidden py-5">
            <h1 className="sm:text-lg text-center text-[#FF9315] font-semibold">
              YOU MUST KNOW THE
            </h1>
            <h1 className="sm:text-2xl text-center text-xl  text-gray-500 font-semibold">
              KEY FEATURES & BENEFITS
            </h1>
          </div>
          {alldata &&
            alldata.features &&
            alldata.features.map((item: any, index: any) => (
              <div
                key={index}
                className=" flex 2xl:justify-around w-full largelast:justify-between"
              >
                <div className="2xl:w-[50%] largelast:w-[60%] w-full flex gap-5 largelast:py-5 md:flex-row flex-col largelast:justify-between">
                  {item &&
                    item.card1 &&
                    item.card1.map((list: any, indexlist: any) => (
                      <div
                        key={indexlist}
                        className={`largelast:w-48 2xl:w-52 h-fit  md:w-[80%] largelast:my-5 largelast:h-[250px] md:h-[180px] relative ${
                          indexlist == 1 ? "" : ""
                        } `}
                      >
                        <div className=" bg-white p-5 pt-10 w-full h-full mx-auto rounded-md shadow-xl">
                          <h1 className="2xl:text-lg text-base font-medium">
                            {list?.title}
                          </h1>
                          <br />
                          <p className="text-xs font-light text-gray-500">
                            {list?.content}
                          </p>
                        </div>
                        <div className="rounded-full w-16 drop-shadow-2xl p-5 bg-white  absolute md:-top-5 -top-3 md:-right-4 -right-2  ">
                          <img src={list?.icon?.asset?.url} alt="" />
                        </div>
                      </div>
                    ))}
                </div>

                <div className="justify-center largelast:block hidden ml-16 mt-5">
                  <h1 className="text-lg text-[#FF9315] font-semibold space-y-3">
                    YOU MUST KNOW THE
                  </h1>

                  <h1 className="text-xl text-gray-500 font-semibold mt-2">
                    KEY FEATURES & BENEFITS
                  </h1>
                </div>
              </div>
            ))}
          {alldata &&
            alldata.features &&
            alldata.features.map((item: any, index: any) => (
              <div key={index} className="w-full flex  largelast:-mt-20">
                <div className="w-full flex largelast:justify-end largelast:items-end">
                  <div className="largelast:w-[92%] w-full flex md:flex-row flex-col gap-5 largelast:py-5 py-8  largelast:justify-around justify-between items-center largelast:-mt-10">
                    {item &&
                      item.card2 &&
                      item.card2.map((list: any, indexlist: any) => (
                        <div
                          key={indexlist}
                          className={`largelast:w-48 2xl:w-52 md:w-[80%] largelast:h-[250px] md:h-[180px] h-full relative ${
                            indexlist == 0
                              ? "2xl:-ml-0 largelast:-ml-5"
                              : "largelast:-ml-10 2xl:-ml-0"
                          }`}
                        >
                          <div className="bg-white p-3 2xl:p-5 pt-10 w-full h-full mx-auto rounded-md shadow-xl">
                            <h1 className="text-lg font-medium">
                              {list?.title}
                            </h1>
                            <br />
                            <p className="text-xs font-light text-gray-500">
                              {list?.content}
                            </p>
                          </div>
                          <div className="rounded-full w-16 drop-shadow-2xl p-5 bg-white  absolute md:-top-5 -top-3 md:-right-4 -right-2 ">
                            <img src={list?.icon?.asset?.url} alt="" />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}

          {alldata &&
            alldata.features &&
            alldata.features.map((item: any, index: any) => (
              <div
                key={index}
                className=" flex 2xl:justify-around w-full largelast:justify-between largelast:-mt-20"
              >
                <div className="2xl:w-[50%] largelast:w-[60%] flex gap-5 largelast:py-5 md:flex-row flex-col justify-between">
                  {" "}
                  {item &&
                    item.card3 &&
                    item.card3.map((list: any, indexlist: any) => (
                      <div
                        key={indexlist}
                        className={`largelast:w-48 2xl:w-52 h-fit  md:w-[80%] largelast:my-5 largelast:h-[250px] md:h-[180px] relative ${
                          indexlist == 1 ? "" : ""
                        } `}
                      >
                        <div className=" bg-white p-5 w-full h-full pt-10 mx-auto rounded-md shadow-xl">
                          <h1 className="text-lg font-medium">{list?.title}</h1>
                          <br />
                          <p className="text-xs font-light text-gray-500">
                            {list?.content}
                          </p>
                        </div>
                        <div className="rounded-full w-16 drop-shadow-2xl p-5 bg-white  absolute md:-top-5 -top-3 md:-right-4 -right-2  ">
                          <img
                            src={list?.icon?.asset?.url}
                            alt=""
                            className=""
                          />
                        </div>
                      </div>
                    ))}
                </div>
                {/* card5 */}
                <div className="justify-center opacity-0 largelast:block hidden ml-16 mt-5">
                  <h1 className="text-lg text-[#FF9315] font-semibold space-y-3">
                    YOU MUST KNOW THE
                  </h1>

                  <h1 className="text-xl text-gray-500 font-semibold mt-2">
                    KEY FEATURES & BENEFITS
                  </h1>
                </div>
              </div>
            ))}
          <img
            src="./sevice.png"
            alt=""
            className="lg:-mt-32 lg:block hidden"
          />
        </div>
      </div>
      {/* fourth section */}

      {alldata &&
        alldata.weProvidesolution.map((item: any, index: any) => (
          <div
            key={index}
            className="text-center relative  w-full overflow-hidden 2xl:h-screen  lg:h-[500px] md:h-[400px] sm:h-72 h-56 "
          >
            <div className="w-full h-full absolute top-0 ">
              <img
                src={item?.image?.asset?.url}
                className="w-full h-full xs:object-fill object-cover"
                alt=""
              />
            </div>
            <div className="bg-black opacity-30 absolute w-full h-full top-0"></div>
            <h1 className="lg:text-6xl text-xl text-white font-bold drop-shadow-xl 2xl:pt-48 xl:pt-32 lg:pt-32 md:pt-20 sm:pt-10 pt-10">
              {item?.Heading}
            </h1>
          </div>
        ))}

      {/* fifth section */}
      <div className="relative bg-customer  h-fit  w-full">
        <div className="bg-gray-100 absolute top-0 w-full h-[70%]"></div>
        <div className="lg:w-[600px] md:w-[350px]  w-[200px] h-[200px] bg-[#FF9315] top-0 absolute right-0 text-center text-white  lg:text-3xl md:text-base text-xs font-bold sm:pt-7 p-5">
          CUSTOMER SERVICES
        </div>
        {alldata &&
          alldata.customerServices &&
          alldata.customerServices.map((item, index) => (
            <div
              key={index}
              className="xl:ml-20 lg:ml-10 md:ml-5 ml-0 pt-10 mx-auto  drop-shadow-2xl"
            >
              <div className="flex relative flex-row xl:gap-10 gap-1 p-4 bg-white w-fit rounded-t-md">
                <button
                  onClick={() => toggleContent(item?.signin[0].title)}
                  className={`focus:outline-none  sm:text-base text-xs ${
                    showActiveContent === item?.signin[0].title
                      ? " border text-primarycolor shadow-xl border-[#FF9315] p-1 md:px-5 px-2 rounded-md"
                      : " p-1 px-5 rounded-md"
                  }`}
                >
                  {item?.signin[0].title}
                </button>
                <button
                  onClick={() => toggleContent(item?.dashboard[0].title)}
                  className={`focus: outline-none font-medium sm:text-base text-xs ${
                    showActiveContent === "Dashboard"
                      ? " border text-primarycolor shadow-xl border-[#FF9315] p-1 md:px-5 px-2 rounded-md"
                      : " p-1 px-5 rounded-md"
                  }`}
                >
                  {item?.dashboard[0].title}
                </button>
                <button
                  onClick={() => toggleContent(item?.faculty[0].title)}
                  className={`focus: outline-none font-medium sm:text-base text-xs ${
                    showActiveContent === "Faculty"
                      ? " border text-primarycolor shadow-xl border-[#FF9315] p-1 md:px-5 px-2 rounded-md"
                      : " p-1 px-5 rounded-md"
                  }`}
                >
                  {item?.faculty[0].title}
                </button>
              </div>
              <div className="bg-white overflow-hidden z-20 relative md:w-[80%] w-full xl:w-[90%]  p-10 xl:px-32 rounded-md">
                <img
                  src="./sides.png"
                  className="absolute  md:flex hidden -z-10 w-16 top-20 rotate-180  -right-0"
                ></img>
                <img
                  src="./sides.png"
                  className="absolute -z-10 w-16 md:flex hidden bottom-0  left-0"
                ></img>
                <div className="z-30 w-full h-full">
                  <div className="-z-20  w-full">
                    {" "}
                    {showActiveContent === "Sign In" && (
                      <img
                        src={
                          alldata &&
                          alldata.customerServices[0]?.signin[0]?.image?.asset
                            ?.url
                        }
                        alt=""
                        className="w-full md:h-[450px] border border-black rounded-md"
                      />
                    )}
                  </div>
                  <div>
                    {showActiveContent === "Dashboard" && (
                      <img
                        src={
                          alldata &&
                          alldata.customerServices[0]?.dashboard[0]?.image
                            ?.asset?.url
                        }
                        alt=""
                        className="w-full border border-black rounded-md"
                      />
                    )}
                  </div>
                  <div>
                    {showActiveContent === "Faculty" && (
                      <img
                        src={
                          alldata &&
                          alldata.customerServices[0]?.faculty[0]?.image?.asset
                            ?.url
                        }
                        alt=""
                        className="w-full border border-black rounded-md"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* <div className="bg-white md:w-[80%] w-full xl:w-[90%] p-10 xl:px-32 rounded-md ">
                  
                </div> */}

              {/* <div className="bg-white md:w-[80%] w-full xl:w-[90%]  p-10 xl:px-32 rounded-md ">
              
                </div> */}
            </div>
          ))}
      </div>
      {/* sixth section */}
      <div className="flex flex-col justify-center items-center overflow-hidden py-5">
        <div className="relative w-full lg:h-[236px] h-[250px]  sm:px-10 px-5">
          <img
            src="./bgorange1.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center space-y-10">
            <h2 className="font-semibold lg:text-4xl md:text-2xl sm:text-lg text-sm mb-4 text-white ">
              Contact us today to explore the possibilities!
            </h2>
            <Link href={"/contactus"}>
              <button className="bg-white drop-shadow-xl text-[#FF8900] rounded-full mt-4 sm:px-20 px-5 py-2 sm:py-4 font-semibold sm:text-xl text-sm">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Solutions;

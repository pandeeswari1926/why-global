"use client";
import React, { useEffect, useState } from "react";
import SanityClient from "../SanityClient";
import { Helmet } from "react-helmet";
import Loader from "../home/Loader";

function Solutions() {
  const [showActiveContent, setShowActiveContent] = useState("SignIn");
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
            className="grid w-full lg:h-screen  relative  overflow-hidden grid-cols-1 lg:grid-cols-2 "
          >
            <div className="flex flex-col gap-5 p-5 md:p-20">
              <p className="uppercase text-sm sm:text-base text-orange-500 font-semibold md:text-left text-center">
                {item?.title}
              </p>

              <div className="uppercase lg:text-3xl sm:text-xl xs:text-lg text-base md:text-left text-center font-semibold space-y-3 text-gray-500">
                <p className="space-y-2">{item?.subTitle}</p>
              </div>

              <p className="font-light md:text-base text-sm md:text-left text-center leading-loose text-gray-500">
                {item.content}
              </p>
            </div>

            <div className="h-full w-full hidden lg:flex flex-col justify-center items-center">
              <img
                src={item?.BannerImage[0]?.image?.asset?.url}
                alt="ruben"
                className="md:w-full md:h-full rubanbro  xs:w-96 object-cover xs:h-80 w-64 h-52 "
              />
            </div>
            <div className="h-full w-full lg:hidden flex flex-col justify-center items-center">
              <img
                src={item?.BannerImage[0]?.image?.asset?.url}
                alt="ruben"
                className="md:w-full md:h-full   xs:w-96 object-cover xs:h-80 w-64 h-52 "
              />
            </div>
          </div>
        ))}
      {alldata &&
        alldata.learning.map((item: any, index: any) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center gap-5 p-5 md:p-10">
              <h1 className="uppercase text-sm sm:text-base text-orange-500 font-semibold md:text-left text-center">
                {item?.heading}
              </h1>

              <h1 className="uppercase lg:text-3xl text-gray-500 sm:text-xl xs:text-lg text-base md:text-left text-center font-bold">
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
              <img src={item?.gif?.asset?.url} alt="" className="mx-auto" />
            </div>
          </div>
        ))}
      {/* second section */}

      {/* third section */}

      <div className="bg-gray-100  lg:py-20 ">
        <div className="mt-10 px-5 ">
          <div className="flex flex-col justify-center items-center  xs:block lg:hidden p-5">
            <h1 className="text-lg text-[#FF9315] font-semibold">
              YOU MUST KNOW THE
            </h1>
            <br />
            <h1 className="text-2xl text-gray-500 font-semibold">
              KEY FEATURES & BENEFITS
            </h1>
          </div>
          {alldata &&
            alldata.features &&
            alldata.features.map((item: any, index: any) => (
              <div key={index} className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-evenly  lg:-mt-24 lg:gap-5 gap-10 p-5">
                {item &&
                  item.card1 &&
                  item.card1.map((list: any, indexlist: any) => (
                    <div key={indexlist}
                      className={`lg:w-56 h-fit relative ${
                        indexlist == 1 ? "lg:ml-40" : "lg:ml-0"
                      } `}
                    >
                      <div className=" bg-white p-5 pt-10 mx-auto rounded-md shadow-xl">
                        <h1 className="text-lg font-medium">{list?.title}</h1>
                        <br />
                        <p className="text-xs font-light text-gray-500">
                          {list?.content}
                        </p>
                      </div>
                      <div className="rounded-full drop-shadow-2xl p-5 bg-white w-fit absolute -top-8 -right-8 ">
                        <img src={list?.icon?.asset?.url} alt="" />
                      </div>
                    </div>
                  ))}

                <div className="flex flex-col justify-center lg:block hidden ml-24 mt-5">
                  <h1 className="text-lg text-[#FF9315] font-semibold">
                    YOU MUST KNOW THE
                  </h1>
                  <br />
                  <h1 className="text-xl text-gray-500 font-semibold">
                    KEY FEATURES & BENEFITS
                  </h1>
                </div>
              </div>
            ))}
          {alldata &&
            alldata.features &&
            alldata.features.map((item: any, index: any) => (
              <div key={index} className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-evenly lg:gap-3 gap-10  p-5 lg:-mt-24">
                <div className="lg:block hidden"></div>
                {item &&
                  item.card1 &&
                  item.card1.map((list: any, indexlist: any) => (
                    <div key={indexlist}
                      className={`lg:w-56 h-full relative ${
                        indexlist == 1 ? "lg:ml-60" : "lg:ml-0 lg:pl-0"
                      }`}
                    >
                      <div className="bg-white p-5 pt-10 mx-auto rounded-md shadow-xl">
                        <h1 className="text-lg font-medium">{list?.title}</h1>
                        <br />
                        <p className="text-xs font-light text-gray-500">
                          {list?.content}
                        </p>
                      </div>
                      <div className="rounded-full drop-shadow-2xl p-5 bg-white w-fit absolute -top-8 -right-8 ">
                        <img src={list?.icon?.asset?.url} alt="" />
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          {alldata &&
            alldata.features &&
            alldata.features.map((item: any, index: any) => (
              <div key={index} className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   justify-evenly lg:-mt-24 lg:gap-5 gap-10 p-5">
                {/* card5 */}
                {item &&
                  item.card1 &&
                  item.card1.map((list: any, indexlist: any) => (
                    <div key={indexlist}
                      className={`lg:w-56 h-fit relative ${
                        indexlist == 1 ? "lg:ml-36 " : "lg:pl-0"
                      } `}
                    >
                      <div className=" bg-white p-5 pt-10 mx-auto rounded-md shadow-xl">
                        <h1 className="text-lg font-medium">{list?.title}</h1>
                        <br />
                        <p className="text-xs font-light text-gray-500">
                          {list?.content}
                        </p>
                      </div>
                      <div className="rounded-full drop-shadow-2xl p-5 bg-white w-fit absolute -top-8 -right-8 ">
                        <img src={list?.icon?.asset?.url} alt="" className="" />
                      </div>
                    </div>
                  ))}
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
          <div key={index} className="text-center relative  w-full overflow-hidden  lg:h-[500px] md:h-[400px] sm:h-72 h-56 ">
            <div className="w-full h-full absolute top-0 ">
              <img
                src={item?.image?.asset?.url}
                className="w-full object-fill h-full"
                alt=""
              />
            </div>
            <div className="bg-black opacity-30 absolute w-full h-full top-0"></div>
            <h1 className="lg:text-6xl text-xl text-white font-bold drop-shadow-2xl  xl:pt-32 lg:pt-32 md:pt-20 sm:pt-10 pt-10">
              {item?.Heading}
            </h1>
          </div>
        ))}

      {/* fifth section */}
      <div className="relative bg-customer  h-fit  w-full">
        <div className="bg-gray-100 absolute top-0 w-full h-[70%]"></div>
        <div className="lg:w-[600px] md:w-[350px]  w-[200px] h-[200px] bg-[#FF9315] top-0 absolute right-0 text-center text-white  lg:text-3xl md:text-base text-xs font-bold sm:p-4 p-3">
          Customer Services
        </div>
        {alldata &&
          alldata.customerServices &&
          alldata.customerServices.map((item, index) => (
            <div
              key={index}
              className="xl:ml-20 lg:ml-10 md:ml-5 ml-0 pt-10 mx-auto  drop-shadow-2xl"
            >
              <div className="flex flex-row xl:gap-10 gap-1 p-4 bg-white w-fit rounded-t-md">
                <button
                  onClick={() => toggleContent(item?.signin[0].title)}
                  className={`focus:outline-none font-medium sm:text-base text-xs ${
                    showActiveContent === item?.signin[0].title
                      ? "text-white border-2 bg-[#FF9315] p-1 md:px-5 px-2 rounded-md"
                      : "bg-gray-400 text-white p-1 px-5 rounded-md"
                  }`}
                >
                  {item?.signin[0].title}
                </button>
                <button
                  onClick={() => toggleContent(item?.dashboard[0].title)}
                  className={`focus: outline-none font-medium sm:text-base text-xs ${
                    showActiveContent === "DashBoard"
                      ? "text-white border-2 bg-[#FF9315] p-1 md:px-5 px-2 rounded-md"
                      : "bg-gray-400 text-white p-1 px-5 rounded-md"
                  }`}
                >
                  {item?.dashboard[0].title}
                </button>
                <button
                  onClick={() => toggleContent(item?.faculty[0].title)}
                  className={`focus: outline-none font-medium sm:text-base text-xs ${
                    showActiveContent === "Faculty"
                      ? "text-white border-2 bg-[#FF9315] p-1 md:px-5 px-2 rounded-md"
                      : "bg-gray-400 text-white p-1 px-5 rounded-md"
                  }`}
                >
                  {item?.faculty[0].title}
                </button>
              </div>
              {showActiveContent === "SignIn" && (
                <div className="bg-white md:w-[80%] w-full xl:w-[90%]  p-10 xl:px-32 rounded-md">
                  <img
                    src={
                      alldata &&
                      alldata.customerServices[0]?.signin[0]?.image?.asset?.url
                    }
                    alt=""
                    className="w-full"
                  />
                </div>
              )}
              {showActiveContent === "DashBoard" && (
                <div className="bg-white md:w-[80%] w-full xl:w-[90%] p-10 xl:px-32 rounded-md ">
                  <img
                    src={
                      alldata &&
                      alldata.customerServices[0]?.dashboard[0]?.image?.asset
                        ?.url
                    }
                    alt=""
                    className="w-full"
                  />
                </div>
              )}
              {showActiveContent === "Faculty" && (
                <div className="bg-white md:w-[80%] w-full xl:w-[90%]  p-10 xl:px-32 rounded-md ">
                  <img
                    src={
                      alldata &&
                      alldata.customerServices[0]?.faculty[0]?.image?.asset?.url
                    }
                    alt=""
                    className="w-full"
                  />
                </div>
              )}
            </div>
          ))}
      </div>
      {/* sixth section */}
      <div className="flex flex-col justify-center items-center overflow-hidden py-5">
        <div className="relative w-full sm:h-[236px] h-[170px]  px-10">
          <img
            src="./bgorange1.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center space-y-10">
            <h2 className="font-semibold sm:text-3xl lg:text-5xl text-lg text-white">
              Connect with Us!
            </h2>
            <button className="bg-white drop-shadow-xl text-[#FF8900] rounded-full md:px-32 sm:px-20 px-5 sm:py-4 py-2 font-semibold sm:text-xl text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Solutions;

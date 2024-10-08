"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import hr from "../../../public/hr.png";
import wgsperson from "../asset/wgsperson.gif";
import line from "../../../public/line.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import Certificate from "../../../public/certificate.png";
import "react-html5video/dist/styles.css";
import arrow from "../../../public/arrow.gif";
import timer from "../../../public/timer.gif";
import rocket from "../../../public/rocket.gif";
import style2 from "../../../public/style2.png";
import profile1 from "../../../public/profile1.png";
import style3 from "../../../public/style3.png";
import star from "../../../public/stars.png";
import Slider from "react-slick";
import "next-cloudinary/dist/cld-video-player.css";
import bgorange1 from "../../../public/bgorange1.png";
import icon1 from "../../../public/wgs gifs (19).gif";
import icon2 from "../../../public/wgs gifs (17).gif";
import icon3 from "../../../public/wgs gifs (20).gif";
import icon4 from "../../../public/wgs-gifs-18--unscreen.gif";
import bg from "../../../public/background.png";
// import Culture from "./Culture";
import slidegray from "../../../public/slidergray.png";
import ruban from "../../../public/rubanbox.jpg";
import dha from "../../../public/dhanushbox.jpg";
import ram from "../../../public/ramyabox.jpg";
import ajin from "../../../public/sudalaibox.jpg";
import niv from "../../../public/veenabox.jpg";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { GiPieChart } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import sides from "../../../public/round.png";
import sides2 from "../../../public/round2.png";

import Video from "./Video";
import SanityClient from "../SanityClient";
import Loader from "../home/Loader";
import { Helmet } from "react-helmet";
import Link from "next/link";
import CountUp from "react-countup";

function About() {
  interface Alldata {
    metaTitle: string;
    MetaDescription: string;
    MetaData: string;
    FocusKeyword: string;
    MetaURL: string;
    Banner: [
      {
        title1: string;
        title2: string;
        bannercontent: string;
        gif: [
          {
            gif: { asset: { url: string } };
            percentage: string;
            content: string;
          }
        ];
        BannerImage: { asset?: { url: string } };
      }
    ];

    SecondSection: [
      {
        content: string;
        percentage: string;
        icon: { asset: { url: string } };
        number: string;
      }
    ];
    WhyGlobl: [
      {
        title: string;
        subTitle: string;
        content: [{ content: string }];
        image: { asset: { url: string } };
      }
    ];

    WorkProcess: [
      {
        title: string;
        subTitle: string;
        card: [
          {
            gif: { asset: { url: string } };
            cardTitle: string;
            content: string;
          }
        ];
      }
    ];
    teamMember: [
      {
        title: string;
        subTitle: string;
        card: [
          {
            image: { asset: { url: string } };
            content: string;
            name: string;
            role: string;
          }
        ];
      }
    ];
    ourCulture: [
      {
        title: string;
        Fourimage: [{ image: { asset: { url: string } } }];
        sideimage: string;
        content: string;
        heading: string;
      }
    ];
  }
  const [alldata, setalldata] = useState<Alldata | null>(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getdata = async () => {
      await SanityClient.fetch(
        `*[_type=="About"]{
          metaTitle,
        MetaDescription,
        MetaData,
        FocusKeyword,
        MetaURL,
        Banner[]{
          title1,
          title2,
          bannercontent,
          gif[]{
            gif{
              asset->{
                url
              }
            },
            percentage,
            content
          },
          
          BannerImage{
            asset->{
              url
            }
          },

        },
        SecondSection[]{
          icon{
           asset->{
            url
           }
          },
          percentage,
          content,
          number
        },
        WhyGlobl[]{
          image{
asset->{
  url
}
          },
          title,
          subTitle,content[]{
            content,

          },
        },
        WorkProcess[]{
          title,
          subTitle,
          card[]{
            gif{
              asset->{
                url
              }
            },
            cardTitle,
            content            
          },

        },
        teamMember[]{
          title,
          subTitle,
          card[]{
            image{asset->{url}},
            content,
            name,
            role
          }
        },
        ourCulture[]{
          title,
          Fourimage[]{
            image{asset->{url}},heading,content
          },
          sideimage{asset->{url}},
          content,
          heading
        },
        infrastructure[]{
          title,
          subtitle,
          content,
          link
        }

      }`
      ).then((res) => {
        console.log(res[0]);
        setalldata(res[0]);
        setLoader(false);
      });
    };
    getdata();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return loader === true ? (
    <Loader />
  ) : (
    <div>
      <Helmet>
        <title property="og:title">{alldata ? alldata?.metaTitle : ""}</title>
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
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      ></link>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      ></link>
      {/* <NavBar /> */}
      {alldata &&
        alldata.Banner &&
        alldata.Banner.map((item: any, index: any) => (
          <div
            key={index}
            className="w-full h-full  lg:h-[550px] xl:h-[650px] lg:bg-contain cover  relative bg-no-repeat pb-5"
          >
            <div>
              <div>
                <div className="lg:absolute top-10 lg:pl-16 left-4">
                  <div className="flex flex-col gap-3 w-full  pt-10   lg:pt-0 lg:w-[90%] justify-center md:justify-start md:items-start items-center text-justify md:text-start lg:px-0 md:px-10 px-7">
                    <p className="text-primarycolor font-semibold md:text-xl text-3xl lg:pt-6 ">
                      {item?.title1}
                    </p>
                    <p className="font-semibold sm:text-base text-sm md:text-3xl text-grayColor ">
                      {item?.title2}
                    </p>
                    <p className=" text-sm  text-gray-500">
                      {item?.bannercontent}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="lg:absolute relative lg:w-[70%] w-full md:top-[65%] lg:top-[43%] xl:top-[40%]  md:left-0 pl-10 z-10">
                    <div className="grid lg:grid-cols-4 grid-cols-2 p-2 justify-evenly">
                      {item &&
                        item.gif &&
                        item.gif.map((list: any, listindex: any) => (
                          <div key={listindex} className="lg:w-[60%] w-[70%]">
                            <img alt="" src={list?.gif?.asset?.url} />
                            <p className="text-center flex flex-row justify-center gap-1 md:text-3xl text-xl font-semibold pt-4 text-gray-500">
                              <CountUp
                                start={0}
                                end={list?.percentage}
                                duration={3}
                                delay={0}
                              />
                              {listindex == 0 ? <p>%</p> : <p>+</p>}
                            </p>
                            <p className="text-xs text-center text-gray-500">
                              {list?.content}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-full lg:block hidden bottom-0 tri absolute"></div>
              <div className="w-full h-full bottom-0 left-0 shadow-lg whitetri absolute"></div>
              <div className="absolute bottom-0 right-0  w-[45%] md:w-[40%] lg:w-[42%] z-10 lg:block hidden">
                <img alt="" src={item?.BannerImage?.asset?.url} />
              </div>
              <div className="absolute lg:block hidden lg:top-[30%] md:top-[50%] bottom-[25%] right-0  w-[50%] md:w-[40%] lg:w-[40%]">
                <img alt="" src="./line.png" />
              </div>
            </div>
          </div>
        ))}
      <div className="w-full flex flex-col justify-center items-center py-10">
        <div className="relative w-full">
          <div className="flex md:flex-row flex-wrap w-full  justify-center items-center lg:gap-16 gap-10">
            {alldata &&
              alldata.SecondSection.map((item: any, index: any) => (
                <div
                  key={index}
                  className="bg-white  outline outline-[#FF9315] relative w-[60%] h-52 lg:w-40  lg:h-44 md:w-[40%]  rounded-3xl drop-shadow-lg flex flex-col justify-center gap-3 items-center"
                >
                  <img
                    src={item?.icon?.asset?.url}
                    className="lg:size-12 size-20   text-[#FF9315]"
                  />
                  <p className=" text-xl md:text-lg flex flex-col justify-center items-center text-center ">
                    <span className="text-3xl text-gray-400 font-semibold flex gap-1 text-center justify-center">
                      <CountUp
                        start={0}
                        end={item.percentage}
                        duration={3}
                        delay={0}
                      />
                      <p>+</p>
                    </span>
                    <span className="text-sm lg:w-[80%] text-gray-400">
                      {item.content}
                    </span>
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="w-full h-fit relative bg-no-repeat ">
        <div className="w-full h-full absolute lg:-top-16 -top-7 left-0 -z-10">
          <img src="./slidergray.png" className="w-full h-full" alt="" />
        </div>
        {alldata &&
          alldata.WhyGlobl.map((item: any, index: any) => (
            <div
              key={index}
              className="flex lg:flex-row flex-col items-center justify-around"
            >
              <div
                className=" lg:w-[50%] w-full
        md:p-10"
              >
                <img
                  src={item?.image?.asset?.url}
                  className="w-full h-full"
                  alt=""
                />
              </div>
              <div className="lg:w-[50%] w-full lg:text-left text-justify p-5 md:p-8 lg:p-2 space-y-2 md:space-y-4">
                <p className="text-xl uppercase font-semibold text-primarycolor text-center lg:text-left">
                  {item?.title}
                </p>
                <p className="md:text-3xl  font-semibold text-gray-500 text-center lg:text-left">
                  {item?.subTitle}
                </p>
                {item &&
                  item.content.map((list: any, index: any) => (
                    <p key={index} className="text-gray-400 mb-5">
                      {list?.content}
                    </p>
                  ))}
              </div>
            </div>
          ))}
      </div>
      {alldata &&
        alldata.WorkProcess &&
        alldata.WorkProcess.map((item: any, index: any) => (
          <main
            key={index}
            className="  relative md:object-cover p-5 lg:p-10 md:bg-cover md:flex md:flex-col gap-5"
          >
            <img
              src="./background1.png"
              className="w-full h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            ></img>
            <div className="lg:pl-5">
              <h3 className="text-[#FF8900] lg:text-start text-center text-xl  font-bold">
                {item?.title}
              </h3>
              <h2 className=" font-semibold pt-3 lg:text-start text-center text-grayColor lg:w-[50%]  md:text-3xl md:leading-[50px]">
                {item?.subTitle}
              </h2>
            </div>

            <div className="grid md:grid-cols-3  p-5  grid-cols-1 lg:gap-16 gap-5 h-full w-full items-center  justify-items-center lg:px-16 ">
              {item &&
                item.card &&
                item.card.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="largewidth:w-[80%]  sm:w-[90%] h-full relative drop-shadow-2xl"
                  >
                    <div className="relative">
                      {" "}
                      <div className="bg-white border-2 w-fit h-fit p-1 px-3 rounded-full absolute text-primarycolor -right-4 top-14 md:top-12 z-20">
                        {index + 1}
                      </div>
                      <div
                        style={{
                          clipPath:
                            "polygon(87% 0, 100% 14%, 100% 100%, 0 100%, 0 0)",
                        }}
                        className={`${
                          index % 2 != 0 ? "lg:mt-8" : "lg:-mt-5"
                        } text-center  lg:h-full bg-white relative rounded-tr-3xl`}
                      >
                        <img
                          src={item?.gif?.asset?.url}
                          alt="project"
                          className="w-[50%] mx-auto"
                        />
                        <div className="flex flex-col  p-5">
                          <h1 className="font-semibold text-grayColor ">
                            {item?.cardTitle}
                          </h1>
                          <p className=" text-xs text-gray-400 p-3">
                            {item?.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </main>
        ))}

      <Video />
      {alldata &&
        alldata.ourCulture &&
        alldata.ourCulture.map((item: any, index: any) => (
          <div key={index} className=" relative ">
            <img src="./round.png" className="absolute top-0  left-0" alt="" />
            <img
              src="./round2.png"
              className="absolute -z-10 -top-10  lg:left-1/2 left-3/4 xs:block hidden"
              alt=""
            />
            <div className="flex lg:flex-row flex-col justify-center items-center">
              <div className="lg:w-56 w-52 lg:h-56 h-52  bg-white flex drop-shadow-2xl justify-center items-center rounded-full">
                <div className="w-[70%] h-[70%] drop-shadow-lg text-center border-2 border-orange-400 font-semibold content-center text-lg text-orange-500 bg-white rounded-full">
                  {item?.title}
                </div>
              </div>
              <div className="lg:w-[75%] p-5 lg:p-0 w-full -z-10 -mt-10 lg:mt-0 -ml-0 lg:-ml-8">
                <div className="w-full flex lg:flex-row flex-col gap-2">
                  <div className="lg:w-[70%] w-full flex flex-col gap-2">
                    <div className="w-full gap-2 grid grid-cols-1 lg:grid-cols-2">
                      {item &&
                        item.Fourimage.map((list: any, listItems: any) => (
                          <div key={listItems} className=" w-full  relative">
                            <img
                              alt=""
                              src={list?.image?.asset?.url}
                              className="w-full h-full"
                            />
                            <div className="bg-black absolute top-0 left-0 w-full h-full opacity-50"></div>
                            <p className="flex flex-col absolute w-full bottom-2 left-1/2 -translate-x-1/2 text-white px-2">
                              <span className="text-center text-primarycolor md:text-lg sm:text-xl text-lg font-semibold">
                                {list?.heading}
                              </span>
                              <span className="text-center text-sm lg:w-[80%] w-full mx-auto ">
                                {list?.content}
                              </span>
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="lg:w-[30%]  w-full relative">
                    <div className="bg-black absolute top-0 left-0 w-full h-full opacity-50"></div>
                    <img
                      src={item?.sideimage?.asset?.url}
                      className="w-full h-full"
                      alt=""
                    />
                    <p className="flex flex-col absolute w-full bottom-2 left-1/2 -translate-x-1/2 text-white px-2">
                      <span className="text-center text-primarycolor md:text-lg sm:text-xl text-lg font-semibold">
                        {item?.heading}
                      </span>
                      <span className="text-center text-sm lg:w-[90%] w-full mx-auto">
                        {item?.content}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      {alldata &&
        alldata.teamMember &&
        alldata.teamMember.map((item: any, index: any) => (
          <div
            key={index}
            style={{ backgroundImage: `url(./b1.png)` }}
            className="py-10 flex justify-end"
          >
            <div
              key={index}
              className="bg-white px-5 flex flex-col drop-shadow-2xl rounded-l-lg   h-full py-10 w-full lg:w-[95%]"
            >
              <p className="text-primarycolor lg:text-start text-center font-semibold pl-5 text-lg">
                {item?.title}
              </p>
              <h1 className="md:text-2xl xs:text-xl text-xs lg:text-start text-center font-semibold pl-5 text-gray-500">
                {item?.subTitle}
              </h1>
              <div className="pt-5">
                <div className="">
                  <Slider {...settings} className="overflow-hidden py-8 flex ">
                    {item &&
                      item.card.map((profile: any, index: any) => (
                        <div key={index} className="md:px-5 w-full">
                          <div className="w-full h-full flex lg:flex-row flex-col justify-center items-center gap-3">
                            <div className="lg:w-[300px] w-full flex  justify-center items-center h-52 relative">
                              <img
                                src="./fine.png"
                                alt="style2"
                                className=" absolute -z-10 right-0 w-full object-contain h-full"
                              />
                              <div className="relative lg:w-full ">
                                <div className="w-[170px] relative mx-auto h-48 ">
                                  <img
                                    style={{
                                      clipPath:
                                        "polygon(18% 0, 100% 1%, 100% 100%, 14% 100%, 5% 33%)",
                                    }}
                                    src={profile?.image?.asset?.url}
                                    alt="Profile1"
                                    className=" w-full h-full   rounded-lg -ml-2 -mt-6 "
                                  />
                                  <img
                                    src="./minus.png"
                                    alt="style2"
                                    className="absolute top-3 shadow-2xl w-6 left-1"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className=" xs:w-[380px] w-full ">
                              <div className="w-full lg:pt-2">
                                <p className="lg:text-left px-2 text-xs lg:text-md font-normal text-[#5D5D5D] text-justify">
                                  {profile?.content}
                                </p>
                                <div></div>
                                <hr className=" h-0.5 bg-[#FF8900] mt-4 " />
                                <div className="flex lg:flex-row flex-col mt-3 justify-center gap-2 lg:items-start items-center lg:justify-between">
                                  <div className="flex flex-col justify-center lg:items-start items-center lg:justify-start ">
                                    <p className="">{profile?.role}</p>
                                    <p className="  text-[#FF8900]">
                                      {profile?.name}
                                    </p>
                                  </div>
                                  <div className="  md:pl-0 md:w-[30%]">
                                    <img
                                      src="./stars.png"
                                      alt=""
                                      className=" pt-2"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        ))}
      <div className="flex flex-col justify-center items-center overflow-hidden py-5">
        <div className="relative w-full lg:h-[236px] h-[250px] px-5  md:px-10">
          <img
            src="./bgorange1.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  text-center space-y-10">
            <h2 className="font-semibold sm:text-3xl w-full px-10  text-lg mb-4  text-white">
              Elevate your online presence with us. Let&apos;s build success
              together!
            </h2>
            <Link href={"/contactus"}>
              <button className="bg-white drop-shadow-xl text-[#FF8900] rounded-full w-fit sm:px-24 px-8  py-4 font-semibold sm:text-xl text-sm">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

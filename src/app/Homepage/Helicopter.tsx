"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SanityClient from "../SanityClient";


function Helicopter() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1500,
        },
      },
    ],
  };
  interface Review {
    title: string;
    subtitle: string;
    client: [
      {
        Photo: { asset: { url: string } };
        Content: string;
        name: string;
        role: string;
      }
    ];
  }

  interface Technology {
    Photo: { asset: { url: string } };
    programming: [
      {
        technology: string;
        heading: string;
        content: string;
        list: [
          {
            list: string;
          }
        ];
      }
    ];
  }
  interface AllData {
    review: Review[];
    technology: Technology[];
  }
  const [data, setData] = useState<AllData | null>(null);
  useEffect(() => {
    const getData = () => {
      SanityClient.fetch(
        `*[_type=='Home']{
        review[]{
            title,
            subtitle,
            client[]{
                Photo{
                    asset->{
                        url
                    }
                },
                Content,
                name,
                role,
            }
        },
        technology[]{
          Photo{
            asset->{
              url
            }
          },
          programming[]{
            technology,
            heading,
            content,
            list[]{
              list
            }
          },
        },
    }`
      ).then((res) => {
        console.log(res);
        setData(res[0]);
      });
    };
    getData();
  }, []);
  const [clickindex, setclickindex] = useState(0);
  function handleclick(value: any, e: any) {
    setContent(e.target.textContent);
    setclickindex(value);
    console.log(clickindex);
  }
  const [Content, setContent] = useState("Frontend");
  const listItems = ["Frontend", "Backend", "Database", "Mobile", "CMS"];
  return (
    <div className="">
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
      <div className="bg-custom w-full h-full bg-no-repeat relative lg:p-10">
        {data &&
          data.review.map((item: any, index: any) => (
            <div key={index} className="relative z-10">
              <div className="w-full h-full lg:h-[470px] relative mx-auto lg:rounded-tl-[3rem] py-10 bg-white shadow-md shadow-gray-400 right-0 ">
                <div className="pt-6 lg:text-start text-center lg:pl-10">
                  <h1 className="lg:text-2xl text-xl text-primarycolor font-semibold pb-5">
                    {item.title}
                  </h1>
                  <h1 className="lg:text-3xl text-lg text-gray-500 font-semibold ">
                    {item.subtitle}
                  </h1>
                </div>
                <div className="flex lg:flex-row flex-col gap-10 p-5">
                  <Slider {...settings} className="overflow-hidden">
                    {item.client.map((items: any, indexs: any) => (
                      <div key={indexs}>
                        <div className="flex gap-2 justify-center lg:flex-row flex-col w-[90%] relative mx-auto  pt-8">
                          <div className="lg:w-[80%] w-full relative">
                            <img
                              src="./style2.png"
                              alt="style2"
                              className="lg:w-[80%] w-full"
                            />
                            <img
                              src={items?.Photo?.asset?.url}
                              alt="Profile1"
                              className="lg:w-[70%] w-full top-2 absolute"
                            />
                            <img
                              src="./style3.png"
                              alt="style2"
                              className="absolute sm:w-[20%] w-[30%] top-0 right-[80%]"
                            />
                          </div>
                          <div className="w-full lg:pt-2">
                            <p className="lg:text-left lg:text-md font-normal text-[#5D5D5D] text-justify">
                              {items.Content}
                            </p>
                            <hr className=" h-0.5 bg-[#FF8900]  mt-4 " />
                            <div className="flex md:flex-row flex-col justify-between mt-3 items-center">
                              <div>
                                <p className="text-center">{items.name}</p>
                                <p className=" text-center text-[#FF8900]">
                                  {items.role}
                                </p>
                              </div>
                              <div className="justify-center items-center  md:pl-0 md:w-[30%] mx-auto">
                                <img
                                  src="./stars.png"
                                  alt=""
                                  className=" "
                                />
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
          ))}
        {data &&
          data.technology.map((item, index) => (
            <div
              key={index}
              className="w-full lg:h-fit relative  mx-auto right-0  mt-[15%] pt-10 lg:pt-0"
            >
              <div className="lg:block hidden oran bg-primarycolor -left-10 -top-[85%] absolute w-[60%]  h-[500px]"></div>
              <div className="absolute pt-5 lg:pt-0 lg:-top-[30%] lg:left-10 xs:-top-[11%] -top-[9%] z-10 left-1/2 -translate-x-1/2 lg:-translate-x-0 ">
                <p className="xs:text-xl text-sm pt-10 lg:text-white lg:text-start text-center text-black uppercase">
                  Technologies
                </p>
                <p className="lg:text-3xl md:text-4xl xs:text-3xl text-base font-semibold lg:text-start text-center lg:text-white text-primarycolor">
                  We Work With
                </p>
              </div>
              <div className="w-full h-full bg-white flex lg:flex-row flex-col gap-5 justify-center rounded-md drop-shadow-lg  relative">
                <div className="lg:w-[50%] flex justify-center pt-5 lg:pt-0 items-center">
                  <img
                    src={item?.Photo?.asset?.url}
                    alt="Helicopter"
                    className="lg:w-[80%] w-[90%] h-[90%] lg:h-[80%] mx-auto rounded-lg drop-shadow-lg  border-2 border-primarycolor"
                  />
                </div>
                <div className="lg:w-[50%] relative flex h-full flex-col mx-5 lg:mx-0">
                  <ul>
                    {data &&
                      data.technology.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-row justify-around items-center relative w-full h-14  px-2 md:px-0 bg-gray-200  md:justify-evenly md:text-lg text-sm"
                        >
                          <div
                            style={{
                              clipPath: `polygon(0 63%, 0 100%, 41% 100%)`,
                            }}
                            className="w-20 h-full lg:flex hidden absolute top-0 left-0 bottom-0 bg-white  z-10"
                          ></div>
                          {item &&
                            item.programming.map((list, indexes) => (
                              <li
                                key={indexes}
                                className="cursor-pointer text-gray-500 text-xs md:text-lg"
                                style={
                                  clickindex === indexes
                                    ? { color: "#FF9315" }
                                    : { color: "rgb(107 114 128 /1)" }
                                }
                                onClick={(e) => handleclick(indexes, e)}
                              >
                                {list?.technology}
                              </li>
                            ))}
                        </div>
                      ))}
                  </ul>
                  <div className="lg:p-5">
                    <div className="p-5 lg:text-start text-center space-y-5">
                      <h1 className="text-xl text-gray-600 font-semibold leading-10">
                        {item &&
                          item.programming &&
                          item.programming[clickindex] &&
                          item?.programming[clickindex].heading}
                      </h1>
                      <p className="text-gray-400 font-light text-sm leading-8 w-[98%]">
                        {item &&
                          item.programming &&
                          item.programming[clickindex] &&
                          item?.programming[clickindex].content}
                      </p>
                      <div className="grid grid-cols-2 gap-5 justify-center items-center font-light text-sm">
                        {item &&
                          item.programming &&
                          item.programming[clickindex] &&
                          item?.programming[clickindex].list &&
                          item?.programming[clickindex].list.map(
                            (lists: any, indexlist: any) => (
                              <p
                                key={indexlist}
                                className="flex flex-row items-center gap-2"
                              >
                                <img src="./tick.png" alt="" />
                                {lists.list}
                              </p>
                            )
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Helicopter;

"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SanityClient from "../SanityClient";
import img_1 from "../../../public/wgs gifs (12).gif"
import img_2 from "../../../public/wgs gifs (13).gif"
import img_3 from "../../../public/wgs gifs (14).gif"
import img_4 from "../../../public/wgs gifs (15).gif"
import img_5 from "../../../public/wgs gifs (16).gif"


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
  // let img = [ img_1 ,img_2, img_3, img_4 , img_5]
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
      <div className="bg-custom w-full h-full bg-no-repeat relative ">
  
        {data &&
          data.technology.map((item, index) => (
            <div
              key={index}
              className="w-full lg:h-fit relative  mx-auto right-0  "
            >
              {" "}
              <div
                style={{
                  backgroundImage: `url(./homeOrange.png)`,
                }}
                className="lg:block hidden  absolute w-[350px] bg-contain  -top-36 left-0  h-[200px]"
              >
                <div className="w-full h-full relative flex justify-center items-center">
                  <div className="flex flex-col pl-5 absolute w-full top-1/4 left-1/2 -translate-x-[120px] ">
                    <p className="text-lg text-white font-semibold">
                      TECHNOLOGIES
                    </p>
                    <p className="text-2xl w-full text-white font-semibold">
                      WE WORK WITH
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full relative lg:px-14 px-5">
                <div className="w-full h-full bg-white  flex lg:mt-28 z-20 lg:flex-row flex-col gap-5 justify-center rounded-md drop-shadow-lg  relative">
                  
                  <div className="lg:w-[50%] flex justify-center pt-5 lg:pt-0 items-center">
                    <img
                      src={item?.Photo?.asset?.url}
                      alt="Helicopter"
                      className="lg:w-[80%] w-[90%] h-[90%] lg:h-[80%] mx-auto rounded-lg drop-shadow-lg  border-2 border-primarycolor"
                    />
                  </div>
                  <div className="lg:w-[50%] relative flex h-full flex-col  lg:mx-0">
                    <ul>
                      {data &&
                        data.technology.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-row justify-around items-center relative w-full h-14  px-2 md:px-0 md:justify-evenly md:text-lg text-sm"
                          >
                            {/* <div
                              style={{
                                clipPath: `polygon(0 63%, 0 100%, 41% 100%)`,
                              }}
                              className="w-20 h-full lg:flex hidden absolute top-0 left-0 bottom-0 bg-white  z-10"
                            ></div> */}
                            {item &&
                              item.programming.map((list, indexes) => (
                                <li
                                  key={indexes}
                                  className="cursor-pointer text-gray-500 text-xs md:text-lg"
                                  style={
                                    clickindex === indexes
                                      ? { color: "#FF9315" ,borderBottom: "2px solid  #FF9315" }
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
                    <div className="lg:p-5 h-full w-full flex  justify-center items-center p-3">
                      <div className="lg:p-5 p-2 lg:text-start  h-full text-center space-y-5">
                        <h1 className="xl:text-2xl text-xl text-gray-600 font-semibold leading-10">
                          {item &&
                            item.programming &&
                            item.programming[clickindex] &&
                            item?.programming[clickindex].heading}
                        </h1>
                        <p className="text-gray-400 font-light text-justify text-sm leading-8 w-[98%]">
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
                                  className="flex flex-row text-[10px] xs:text-sm items-center gap-2"
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
            </div>
          ))}
      </div>
      {/* <div className="">
        {tech.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-sm py-10 w-full mt-6 relative shadow-xl lg:w-[80%] mx-auto"
          >
          
            <div className="bg-primarycolor font-semibold text-lg md:text-xl rounded-r-2xl shadow-xl text-white absolute -top-3 -left-3 p-4 w-[30%] md:w-[40%]">
              <p className="text-center">{item.title}</p>
            </div>

        
            <div className="absolute lg:right-14 right-3 lg:top-1.5 top-4 flex flex-wrap gap-4 justify-center pr-4">
              {[...Array(5)].map((_, idx) => (
                <Image
                  key={idx}
                  className="h-12 w-12 sm:h-16 sm:w-16 md:h-[10vh] md:w-[5.5vw]"
                  src={item.img}
                  alt={item.title}
                />
              ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Helicopter;
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import service from "../../../public/Rectangle 14.png";
import gif from "../../../public/wgs gifs (6) 1 (1).png";
import services from "../../../public/sevice.png";
import { FaHandshake } from "react-icons/fa6";
import qualified from "../../../public/11.png";
import ui from "../../../public/10.png";
import mobile from "../../../public/12.png";
import person from "../../../public/14.png";
import setting from "../../../public/13.png";
import custom from "../../../public/15.png";
import ux from "../../../public/16.png";
import cms from "../../../public/17.png";
import ecommerce from "../../../public/18.png";
import landing from "../../../public/19.png";
import redesign from "../../../public/20.png";
import ourService from "../../../public/cat-image.png";
import serve from "../../../public/wgs slider services (3) 1.png";
import robo from "../../../public/robo.gif";
import side from "../../../public/sides.png";
import bgorange1 from "../../../public/bgorange1.png";
import { ImGit } from "react-icons/im";
import SanityClient from "../SanityClient";

function Services() {
  const bgimages = ["/bgimage1.png", "/bgimage2.png", "/bgimage3.png"];

  const [bgimage, Setbgimage] = React.useState(bgimages);
  const [index, SetIndex] = React.useState(0);

  const changeBgimages = () => {
    SetIndex((prev) => (prev + 1) % bgimage.length);
  };
  React.useEffect(() => {
    const interval = setInterval(changeBgimages, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(()=>{
        SanityClient.fetch(`*[_type=='service']{
          metaTitle,
          MetaDescription,
          MetaData,
          FocusKeyword,
          MetaURL,
          Banner[]{
            BannerImage[]{
              image{
                asset->{
                  url
                }
              }
            },
            title,
            clients,
          },
          about[]{
            title,
            content[]{
              content
            },
            image{
              asset->{
                url
              }
            }
          },
          service[]{
            title,
            services[]{
              icon,
              serviceName
            },
            image{
              asset->{
                url
              }
            },
            content,
          },
          WeServe[]{
            image{
              asset->{
                url
              }
            }
          }
        }`).then((res)=>{
          console.log(res)
        })
  },[])

  return (
    <div className="">
      <div className="relative h-fit w-full">
        <div className=" absolute bottom-0 w-16 lg:flex hidden  z-10">
          <img className="w-full h-full" src="./sides.png" alt=""></img>
        </div>
        <div className=" absolute top-10 right-0 rotate-180 w-16 lg:flex hidden  z-10">
          <img className="w-full h-full" src="./sides.png" alt=""></img>
        </div>

        <div className="lg:px-32 px-5 z-10 relative py-10 bg-gradient-to-b from-[#f9d5ad] to-transparent">
          <div
            className="bg-cover xl:h-[500px] lg:h-[400px]  w-full h-full lg:relative"
            style={{
              backgroundImage: `url(${bgimage[index]})`,
              backgroundPosition: "center",
              transition: "background-image 2s ease",
            }}
          >
            <div className="bg-gradient-to-b from-gray-900 w-full h-[500px] lg:absolute ">
              <h1 className="text-3xl text-white font-semibold flex justify-start items-end h-[400px] ml-20 -mb-20 ">
                We provide you
                <br />
                what you love.
              </h1>
              <img
                src="./Rectangle 14.png"
                alt=""
                className="lg:absolute bottom-20 -left-14 lg:-ml-0 -ml-10"
              />
              <div className="flex flex-col lg:absolute right-10 lg:top-6 lg:mt-0 mt-44 gap-5 rounded-ss-3xl bg-gradient-to-b from-slate-50 p-10 drop-shadow-2xl lg:border-0 border-2 ">
                <input
                  type="text"
                  placeholder="Name *"
                  className="p-2 border-2 border-[#FF9315] placeholder:text-black"
                />
                <input
                  type="text"
                  placeholder="Email *"
                  className="p-2 border-2 border-[#FF9315] placeholder:text-black"
                />
                <input
                  type="text"
                  placeholder="Mobile Number *"
                  className="p-2 border-2 border-[#FF9315] placeholder:text-black"
                />
                <input
                  type="text"
                  placeholder="Services *"
                  className="p-2 border-2 border-[#FF9315] placeholder:text-black"
                />
                <textarea
                  placeholder="Message*"
                  className="p-2 border-2 border-[#FF9315] placeholder:text-black"
                ></textarea>
                <button className="bg-white text-[#FF9315] w-fit  px-5 mx-auto py-3 rounded-lg font-semibold hover:bg-[#FF9315] hover:text-white">
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-end">
            <div className="w-[80%] bg-[#FF9315] p-4">
              <h1 className="text-white ">
                <span className="text-2xl font-semibold">400+</span> happy
                clients
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-items-center gap-20 p-8 lg:px-28 lg:pt-0 pt-[500px] ">
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-medium text-[#FF9315]">About</h1>
          <h1 className="text-3xl font-semibold text-gray-500">
            WEB DESIGNING
          </h1>
          <p className="text-sm lg:text-start text-justify text-gray-500">
            Web designing is the process of creating visually appealing and
            functional websites. It involves a combination of artistic design
            principles and technical skills to create a website that effectively
            communicates the intended message and engages visitors.
            <br />
            <br />
            We strive to create an environment that nurtures and supports these
            pillars, ensuring our employees’ overall well-being and satisfaction
            <br />
            <br />
            In terms of a healthy life, we place great importance on promoting
            physical and mental well-being. Our comprehensive wellness programs
            encompass fitness activities, mindfulness sessions, and access to
            resources that encourage a balanced lifestyle.
          </p>
        </div>
        <div className="lg:w-full lg:h-full w-[90%] h-[90%]">
          <img src="./robo.gif" alt="" className="w-full h-full" />
        </div>
      </div>

      {/* third section */}
      <div className="bg-gray-100">
        <div className="pt-10">
          <div className="flex flex-col justify-center xs:block lg:hidden p-5">
            <h1 className="text-xl text-[#FF9315] font-semibold">
              WHY YOU NEED
            </h1>
            <br />
            <h1 className="text-2xl text-gray-500 font-semibold">
              WEB DESIGNING?
            </h1>
          </div>
          <img src="./sevice.png" alt="" />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:ml-20 justify-evenly md:-mt-24 lg:gap-5 gap-10 p-5">
            {/* card1 */}
            <div className="lg:w-[52%] h-fit relative ">
              <div className="pt-10 bg-white p-5 mx-auto rounded-md shadow-xl">
                <h1 className="text-xl font-medium">First Impression</h1>
                <br />
                <p className="text-xs font-light text-gray-400">
                  Making a strong first impression is essential for gaining
                  trust and credibility.
                </p>
              </div>
              <div className="rounded-full drop-shadow-2xl p-5 bg-white w-fit absolute -top-8 md:-right-8 -right-5 ">
                <FaHandshake className="size-12 text-[#FF9315]" />
              </div>
            </div>

            {/* card2 */}
            <div className="lg:w-[52%] relative lg:ml-[70px] ">
              <div className="bg-white p-5 pt-10 rounded-md shadow-xl mx-auto">
                <h1 className="text-xl font-medium">
                  Qualified <br className="lg:block hidden" /> traffic
                </h1>
                <br />
                <p className="text-xs font-light text-gray-500">
                  Web design allows you to create a unique brand identity, stand
                  out from competitors.
                </p>
              </div>
              <div className="rounded-full drop-shadow-2xl p-5 bg-white w-fit absolute -top-8 lg:-right-8 md:-right-5 -right-5">
                <img src="./11.png" alt="" />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-evenly  lg:-mt-32 lg:gap-5 gap-10  p-5">
            <div className="lg:block hidden"></div>
            {/* card3 */}
            <div className="lg:w-[60%] h-fit relative">
              <div className=" bg-white p-5 pt-14 rounded-md shadow-xl mx-auto">
                <h1 className="text-xl font-medium">UI & UX</h1>
                <br />
                <p className="text-xs font-light text-gray-500">
                  A well-designed website provides an intuitive and seamless
                  user experience.
                </p>
              </div>
              <div className="rounded-full drop-shadow-2xl p-5 bg-white w-fit absolute -top-8 md:-right-8 -right-5 ">
                <img src="./10.png" alt="" />
              </div>
            </div>

            {/* card4 */}
            <div className="lg:w-[68%] h-full relative lg:ml-36">
              <div className="bg-white p-5 pt-10 mx-auto rounded-md shadow-xl">
                <h1 className="text-xl font-medium">
                  Lead <br className="lg:block hidden" /> Generation{" "}
                </h1>
                <br />
                <p className="text-xs font-light text-gray-500">
                  Thoughtfully crafted web designs incorporate persuasive
                  elements, compelling visitors to take action
                </p>
              </div>
              <div className="rounded-full drop-shadow-2xl p-5 bg-white w-fit absolute -top-8 lg:-right-8 md:-right-5 -right-5">
                <img src="./14.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-center lg:block hidden lg:mt-20 ml-20">
              <h1 className="text-xl text-[#FF9315] font-semibold">
                WHY YOU NEED
              </h1>
              <br />
              <h1 className="text-2xl text-gray-500 font-semibold">
                WEB DESIGNING?
              </h1>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:ml-20 justify-evenly lg:-mt-24 lg:gap-5 gap-10  p-5">
            {/* card5 */}
            <div className="lg:w-[50%] h-fit relative ">
              <div className="bg-white p-5 pt-10 mx-auto rounded-md shadow-xl">
                <h1 className="text-xl font-medium">Mobile Optimization</h1>
                <br />
                <p className="text-xs font-light text-gray-500">
                  With the increasing use of mobile devices, responsive web
                  design ensures your website looks and functions.
                </p>
              </div>
              <div className="rounded-full drop-shadow-2xl p-5 bg-white w-fit absolute -top-8 md:-right-8 -right-5">
                <img src="./12.png" alt="" className="" />
              </div>
            </div>

            {/* card6 */}
            <div className="lg:w-[50%] h-full relative  lg:ml-[70px] ">
              <div className="bg-white p-5 pt-10 mx-auto rounded-md shadow-xl">
                <h1 className="text-xl font-medium">SEO</h1>
                <br />
                <p className="text-xs font-light text-gray-500 lg:w-32">
                  A well-optimized website design improves visibility on search
                  engines.
                </p>
              </div>
              <div className="rounded-full drop-shadow-2xl p-5 bg-white w-fit absolute -top-8 lg:-right-8 md:-right-5 -right-5">
                <img src="./13.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fourth section */}
      <div className="flex lg:flex-row flex-col sm:gap-20 gap-5 lg:px-20 mx-auto sm:pt-20">
        <div className="p-10 flex flex-col gap-3 justify-center ">
          <h1 className="lg:text-lg text-3xl text-[#FF9315] font-semibold">
            OUR
          </h1>
          <h1 className="lg:text-2xl text-4xl text-gray-500 font-semibold">
            SERVICES
          </h1>
          <hr className="h-[3px] bg-[#FF9315]" />
          <p>Here are some of the key services we offer:</p>
          <div className="flex flex-col mx-auto lg:mx-0 gap-3">
            <div className="flex items-center gap-2 bg-gradient-to-r from-gray-200 to-transparent rounded-l-full">
              <div className="bg-white p-2 shadow-lg rounded-full">
                <img src="./15.png" alt="" className=" " />
              </div>
              <h1 className="xs:text-base text-sm">Custom Web Design</h1>
            </div>
            <div className="flex  items-center gap-2 bg-gradient-to-r from-gray-200 to-transparent rounded-l-full">
              <div className="bg-white p-2 shadow-lg rounded-full ">
                <img src="./16.png" alt="" className=" " />
              </div>
              <h1 className="xs:text-base text-sm">UI & UX</h1>
            </div>
            <div className="flex  items-center gap-2 bg-gradient-to-r from-gray-200 to-transparent rounded-l-full">
              <div className="bg-white p-2 shadow-lg rounded-full ">
                <img src="./17.png" alt="" className=" " />
              </div>
              <h1 className="xs:text-base text-sm">CMS Website Design</h1>
            </div>
            <div className="flex  items-center gap-2 bg-gradient-to-r from-gray-200 to-transparent rounded-l-full">
              <div className="bg-white p-2 shadow-lg rounded-full ">
                <img src="./18.png" alt="" className=" " />
              </div>
              <h1 className="xs:text-base text-sm">E-commerce Web Design</h1>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-gray-200 to-transparent rounded-l-full">
              <div className="bg-white p-2 shadow-lg rounded-full ">
                <img src="./19.png" alt="" className=" " />
              </div>
              <h1 className="xs:text-base text-sm">Landing Page Design</h1>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-gray-200 to-transparent rounded-l-full">
              <div className="bg-white p-2 shadow-lg rounded-full ">
                <img src="./20.png" alt="" className=" " />
              </div>
              <h1 className="xs:text-base text-sm">Website Redesign</h1>
            </div>
          </div>
        </div>
        <div className="md:relative mx-auto p-5">
          <img src="./cat-image.png" alt="" className="mx-auto" />
          <div>
            <h1 className="text-gray-500 md:absolute right-5 md:w-[45%] lg:bottom-4 -bottom-5 mx-auto p-5">
              Our comprehensive web designing services are tailored to meet your
              specific needs, ensuring a visually stunning and high-performing
              website. We combine innovative design and strategic thinking to
              help businesses thrive in the digital landscape.
            </h1>
          </div>
        </div>
      </div>
      {/* sixth section */}
      <div className="p-5 lg:px-32 mx-auto">
        <img src="./wgs slider services (3) 1.png" alt="" />
      </div>
      {/* seventh section */}
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
    </div>
  );
}

export default Services;

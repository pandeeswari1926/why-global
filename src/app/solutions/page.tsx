"use client";
import React, { useEffect, useState } from "react";
import SanityClient from "../SanityClient";

function Solutions() {
  const [showActiveContent, setShowActiveContent] = useState("SignIn");
  const toggleContent = (content: React.SetStateAction<string>) => {
    setShowActiveContent(content);
  };
  useEffect(()=>{
   const getdata=async()=>{ await SanityClient.fetch(`*[_type=='solution']{
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
    }`).then((res)=>{
      console.log(res)
    })}
    getdata()
  },[])
  return (
    <>
      {/* first section */}
      <div className="grid w-full h-screen relative  overflow-hidden grid-cols-1 md:grid-cols-2 ">
        <div className="flex flex-col gap-5 p-5 md:p-20">
          <p className="uppercase text-sm sm:text-base text-orange-500 font-semibold md:text-left text-center">
            Learning management system
          </p>

          <div className="uppercase lg:text-3xl sm:text-xl xs:text-lg text-base md:text-left text-center font-semibold space-y-3 text-gray-500">
            <p className="space-y-2">
              Unlocking KNOWLEDGE, Empowering learning
            </p>
          </div>

          <p className="font-light md:text-base text-sm md:text-left text-center leading-loose text-gray-500">
            Welcome to our Learning Management System (LMS) page, where we offer
            a comprehensive solution designed to transform the way you deliver
            and manage online learning.
          </p>
        </div>

        <div className="h-full w-full  flex flex-col justify-center items-center">
          <img
            src="./upruban.png"
            alt="ruben"
            className="md:w-full md:h-full rubanbro  xs:w-96 object-cover xs:h-80 w-64 h-52 "
          />
        </div>
      </div>
      {/* second section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-5 p-5 md:p-10">
          <h1 className="uppercase text-sm sm:text-base text-orange-500 font-semibold md:text-left text-center">
            LEARNING MANAGEMENT SYSTEM
          </h1>

          <h1 className="uppercase lg:text-3xl text-gray-500 sm:text-xl xs:text-lg text-base md:text-left text-center font-bold">
            ELEVATE YOUR LEARNING JOURNEY WITH OUR CUTTING-EDGE LMS SOLUTION!
          </h1>

          <p className="font-light text-sm  md:text-left text-justify md:px-0 px-5 text-gray-500">
            An LMS, or Learning Management System, is a comprehensive software
            platform designed to facilitate online learning and training
            programs. LMSs offer a wide range of features that support the
            management, delivery, and tracking of educational content.
          </p>
          <p className="font-light  text-sm md:text-left text-justify md:px-0 px-5 text-gray-500">
            One of the key features of an LMS is course management, which allows
            administrators to create and organize courses, modules, and lessons.
            Users can easily access these courses, track their progress, and
            engage with interactive learning materials.
          </p>
        </div>
        <div className="w-full h-full mx-auto flex justify-center items-center">
          <img src="./wgs gifs (10).gif" alt="" className="mx-auto" />
        </div>
      </div>
      {/* third section */}
      <div className="bg-gray-100  lg:py-20 ">
        <div className="mt-10">
          <div className="flex flex-col justify-center xs:block lg:hidden p-5">
            <h1 className="text-xl text-[#FF9315] font-semibold">
              YOU MUST KNOW THE
            </h1>
            <br />
            <h1 className="text-2xl text-gray-500 font-semibold">
              KEY FEATURES & BENEFITS
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-20 px-10 justify-evenly lg:-mt-24 lg:gap-5 gap-10 p-5">
            {/* card1 */}
            <div className="lg:w-[65%] h-fit relative ">
              <div className=" bg-white p-5 pt-10 mx-auto rounded-md shadow-xl">
                <h1 className="text-lg font-medium">
                  Engaging <br className="lg:block hidden" />
                  Learning Experiences
                </h1>
                <br />
                <p className="text-xs font-light text-gray-500">
                  We understand the importance of learner engagement. Our LMS
                  offers a range of interactive features, including multimedia
                  integration.
                </p>
              </div>
              <div className="rounded-full drop-shadow-2xl p-5 bg-white w-fit absolute -top-8 -right-8 ">
                <img src="./25.png" alt="" />
              </div>
            </div>

            {/* card2 */}
            <div className="lg:w-[65%] h-fit relative lg:ml-36 ">
              <div className="bg-white p-5 pt-10 mx-auto rounded-md shadow-xl">
                <h1 className="text-lg font-medium">
                  Seamless <br className="lg:block hidden" /> Integration
                </h1>
                <br />
                <p className="text-xs font-light text-gray-500">
                  Our LMS seamlessly integrates with existing systems, allowing
                  for easy deployment and integration into your organization’s
                  infrastructure.{" "}
                </p>
              </div>
              <div className="rounded-full drop-shadow-2xl p-5 bg-white w-fit absolute -top-8 -right-8">
                <img src="./28.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-center lg:block hidden ml-10 mt-5">
              <h1 className="text-xl text-[#FF9315] font-semibold">
                YOU MUST KNOW THE
              </h1>
              <br />
              <h1 className="text-xl text-gray-500 font-semibold">
                KEY FEATURES & BENEFITS
              </h1>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-evenly lg:px-20 px-10 lg:gap-5 gap-10 p-5 lg:-mt-24">
            <div className="lg:block hidden"></div>
            {/* card3 */}
            <div className="lg:w-[75%] h-full relative">
              <div className="bg-white p-5 pt-10 mx-auto rounded-md shadow-xl">
                <h1 className="text-lg font-medium">
                  Robust Analytics & Reporting
                </h1>
                <br />
                <p className="text-xs font-light text-gray-500">
                  Track the effectiveness of your online learning initiatives
                  with our robust analytics and reporting capabilities
                </p>
              </div>
              <div className="rounded-full drop-shadow-2xl p-5 bg-white w-fit absolute -top-8 -right-8 ">
                <img src="./27.png" alt="" />
              </div>
            </div>
            {/* card4 */}
            <div className="lg:w-[95%] h-full relative lg:ml-52 lg:pl-5 mx-auto">
              <div className=" bg-white p-5 pt-10 rounded-md mx-auto shadow-xl">
                <h1 className="text-lg font-medium">
                  Engaging <br className="lg:block hidden" />
                  Learning Experiences{" "}
                </h1>
                <br />
                <p className="text-xs font-light text-gray-500">
                  We understand the importance of learner engagement. Our LMS
                  offers a range of interactive features, including multimedia
                  integration, discussion forums.
                </p>
              </div>
              <div className="rounded-full drop-shadow-2xl p-5 bg-white w-fit absolute -top-8 -right-8">
                <img src="./29.png" alt="" />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-20 px-10 justify-evenly lg:-mt-24 lg:gap-5 gap-10 p-5">
            {/* card5 */}
            <div className="lg:w-[60%] h-fit relative ">
              <div className=" bg-white p-5 pt-10 mx-auto rounded-md shadow-xl">
                <h1 className="text-lg font-medium">
                  Personalized Learning Paths
                </h1>
                <br />
                <p className="text-xs font-light text-gray-500">
                  Tailor the learning experience with our LMS’s personalized
                  learning paths. By providing learners with customized content,
                  assessments.
                </p>
              </div>
              <div className="rounded-full drop-shadow-2xl p-5 bg-white w-fit absolute -top-8 -right-8 ">
                <img src="./26.png" alt="" className="" />
              </div>
            </div>
            {/* card6 */}
            <div className="lg:w-[98%] h-full relative lg:pl-32">
              <div className="bg-white p-5 pt-10 mx-auto rounded-md shadow-xl">
                <h1 className="text-lg font-medium">
                  Efficient Course Creation
                </h1>
                <br />
                <p className="text-xs font-light text-gray-500">
                  Our LMS seamlessly integrates with existing systems, allowing
                  for easy deployment and integration into your organization’s
                  infrastructure.
                </p>
              </div>
              <div className="rounded-full drop-shadow-2xl p-5 bg-white w-fit absolute -top-8 -right-8">
                <img src="./24.png" alt="" />
              </div>
            </div>
          </div>
          <img
            src="./sevice.png"
            alt=""
            className="lg:-mt-32 lg:block hidden"
          />
        </div>
      </div>
      {/* fourth section */}
      <div className="text-center relative  w-full overflow-hidden  lg:h-[500px] md:h-[400px] sm:h-72 h-56 ">
        <div className="w-full h-full absolute top-0 ">
          <img src="./why.png" className="w-full object-fill h-full" alt="" />
        </div>
        <div className="bg-black opacity-30 absolute w-full h-full top-0"></div>
        <h1 className="lg:text-6xl text-xl text-white font-bold drop-shadow-2xl  xl:pt-32 lg:pt-32 md:pt-20 sm:pt-10 pt-10">
          “WE PROVIDE SOLUTIONS”
        </h1>
      </div>

      {/* fifth section */}
      <div className="relative bg-customer  h-fit  w-full">
        <div className="bg-gray-100 absolute top-0 w-full h-[70%]"></div>
        <div className="lg:w-[600px] md:w-[350px]  w-[200px] h-[200px] bg-[#FF9315] top-0 absolute right-0 text-center text-white  lg:text-3xl md:text-base text-xs font-bold sm:p-4 p-3">
          Customer Services
        </div>

        <div className="xl:ml-20 lg:ml-10 md:ml-5 ml-0 pt-10 mx-auto  drop-shadow-2xl">
          <div className="flex flex-row xl:gap-10 gap-1 p-4 bg-white w-fit rounded-t-md">
            <button
              onClick={() => toggleContent("SignIn")}
              className={`focus:outline-none font-medium sm:text-base text-xs ${
                showActiveContent === "SignIn"
                  ? "text-white border-2 bg-[#FF9315] p-1 md:px-5 px-2 rounded-md"
                  : "bg-gray-400 text-white p-1 px-5 rounded-md"
              }`}
            >
              SigIn
            </button>
            <button
              onClick={() => toggleContent("DashBoard")}
              className={`focus: outline-none font-medium sm:text-base text-xs ${
                showActiveContent === "DashBoard"
                  ? "text-white border-2 bg-[#FF9315] p-1 md:px-5 px-2 rounded-md"
                  : "bg-gray-400 text-white p-1 px-5 rounded-md"
              }`}
            >
              DashBoard
            </button>
            <button
              onClick={() => toggleContent("Faculty")}
              className={`focus: outline-none font-medium sm:text-base text-xs ${
                showActiveContent === "Faculty"
                  ? "text-white border-2 bg-[#FF9315] p-1 md:px-5 px-2 rounded-md"
                  : "bg-gray-400 text-white p-1 px-5 rounded-md"
              }`}
            >
              Faculty
            </button>
          </div>
          {showActiveContent === "SignIn" && (
            <div className="bg-white md:w-[80%] w-full xl:w-[90%]  p-10 xl:px-32 rounded-md">
              <img src="./log.png" alt="" className="w-full" />
            </div>
          )}
          {showActiveContent === "DashBoard" && (
            <div className="bg-white md:w-[80%] w-full xl:w-[90%] p-10 xl:px-32 rounded-md ">
              <img src="./Instituteadmin.png" alt="" className="w-full" />
            </div>
          )}
          {showActiveContent === "Faculty" && (
            <div className="bg-white md:w-[80%] w-full xl:w-[90%]  p-10 xl:px-32 rounded-md ">
              <img src="./Faculty.png" alt="" className="w-full" />
            </div>
          )}
        </div>
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

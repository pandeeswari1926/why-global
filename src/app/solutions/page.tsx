"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import solution from "../../../public/solution page.png";
import sol from "../../../public/istockphoto-180723571-612x612-removebg-preview 1.png";
import img from "../../../public/unsplash_dBaz0xhCkPY-removebg 1.png";
import gif from "../../../public/wgs gifs (10) 1.png";
import feature from "../../../public/25.png";
import feature1 from "../../../public/28.png";
import feature2 from "../../../public/27.png";
import feature3 from "../../../public/29.png";
import feature4 from "../../../public/26.png";
import feature5 from "../../../public/24.png";
import benifits from "../../../public/sevice.png";
import signin from "../../../public/Rectangle 113.png";
import DashBoard from "../../../public/Rectangle 113 (1).png";
import Faculty from "../../../public/Rectangle 113 (2).png";
import rubenvro from "../../../public/rubanbro.jpg";

function Solutions() {
  const [showActiveContent, setShowActiveContent] = useState("SignIn");
  const toggleContent = (content: React.SetStateAction<string>) => {
    // Toggle between "Active Projects" and "Completed Projects"
    setShowActiveContent(content);
  };
  return (
    <>
      {/* first section */}
      {/* <div className="flex md:flex-row flex-col w-full relative p-10 pt-20">
        <div className="space-y-10">
          <h1 className="xl:text-xl md:text-base text-xl text-[#FF9315] font-semibold pt-20 lg:pl-10">
            LEARNING MANAGEMENT SYSTEM
          </h1>
          <h1 className="xl:text-4xl md:text-xl text-4xl font-bold text-gray-600 lg:pl-10">
            UNLOCKING KNOWLEDGE,
            <br className="md:block hidden" />
            <br className="md:block hidden" /> EMPOWERING LEARNING
          </h1>
          <p className="lg:pl-10 lg:text-base md:text-xs text-gray-500 leading-8 ">
            Welcome to our Learning Management System (LMS) page, where we offer
            a comprehensive solution designed to transform the way you deliver
            and manage online learning.
          </p>
          <div className="mr-20 w-full h-full">
            <Image src={solution} alt="" className="md:block hidden" />
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div>
            <Image
              src={sol}
              alt=""
              className="absolute lg:right-96 md:right-72 right lg:w-fit md:w-[20%] w-[30%] "
            />
          </div>
          <div className="solution absolute bg-gradient-to-b from-[#f9d5ad] via-[#f9d5ad] to-transparent xl:w-[900px] lg:w-[700px] md:w-[500px] w-[900px] lg:h-[500px] md:h-[300px] sm:h-[700px] h-[500px]"></div>
          <div>
            <Image
              src={img}
              alt=""
              className="absolute right-0 lg:w-[30%] md:w-[30%] w-[70%] "
            />
          </div>
        </div>
      </div> */}
      {/* second section */}
      {/* <div className="flex lg:flex-row flex-col p-10 lg:px-20 mx-auto w-full md:pt-0 pt-[650px] ">
        <div className="w-full h-full flex flex-col gap-8">
          <h1 className="lg:text-xl text-lg text-[#FF9315] font-semibold leading-8">
            LEARNING MANAGEMENT SYSTEM
          </h1>
          <h1 className="lg:text-3xl text-xl text-gray-500 font-semibold lg:leading-loose leading-10">
            ELEVATE YOUR LEARNING JOURNEY WITH OUR CUTTING-EDGE LMS SOLUTION!
          </h1>
          <p className="text-gray-500 font-light lg:w-[85%] lg:text-start text-justify">
            An LMS, or Learning Management System, is a comprehensive software
            platform designed to facilitate online learning and training
            programs. LMSs offer a wide range of features that support the
            management, delivery, and tracking of educational content.
            <br />
            <br />
            One of the key features of an LMS is course management, which allows
            administrators to create and organize courses, modules, and lessons.
            Users can easily access these courses, track their progress, and
            engage with interactive learning materials.
          </p>
        </div>
        <div className="w-full h-full mx-auto ">
          <Image src={gif} alt="" className="mx-auto" />
        </div>
      </div> */}


<div className='grid grid-cols-1 md:grid-cols-2 '>
                <div className='flex flex-col gap-5 p-5 md:p-20'>
                    <p className='uppercase text-sm sm:text-base text-orange-500 font-semibold md:text-left text-center'>Learning management system</p>
                    
                    <div className='uppercase lg:text-3xl sm:text-xl xs:text-lg text-base md:text-left text-center font-semibold space-y-3 text-gray-500'>
                        <p className="space-y-2">Unlocking KNOWLEDGE,
                        Empowering learning</p>
                    </div>

                    <p className='font-light md:text-sm text-sm md:text-left text-center leading-loose text-gray-500'>Welcome to our Learning Management System (LMS) page, where we offer a comprehensive solution designed to transform the way you deliver and manage online learning.</p>
                </div>

                <div className='h-full w-full flex flex-col justify-center items-center'>
                    <Image src={rubenvro} alt='ruben vro' className='md:w-full md:h-full xs:w-96 xs:h-80 w-64 h-52 ' />
                </div>
            </div >
            {/* second section */}
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex flex-col justify-center gap-5 p-5 md:p-10'>

                    <h1 className='uppercase text-sm sm:text-base text-orange-500 font-semibold md:text-left text-center'>LEARNING MANAGEMENT SYSTEM</h1>

                    <h1 className='uppercase lg:text-3xl text-gray-500 sm:text-xl xs:text-lg text-base md:text-left text-center font-bold'>ELEVATE YOUR LEARNING JOURNEY WITH OUR CUTTING-EDGE LMS SOLUTION!</h1>

                    <p className='font-light text-sm  md:text-left text-center text-gray-500'>An LMS, or Learning Management System, is a comprehensive software platform designed to facilitate online learning and training programs. LMSs offer a wide range of features that support the management, delivery, and tracking of educational content.</p>
                    <p className='font-light  text-sm md:text-left text-center text-gray-500'>One of the key features of an LMS is course management, which allows administrators to create and organize courses, modules, and lessons. Users can easily access these courses, track their progress, and engage with interactive learning materials.</p>
                </div>
                <div className='w-full h-full mx-auto flex justify-center items-center'>
                    <Image src={gif} alt='' className='mx-auto' />
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
                <Image src={feature} alt="" />
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
                <Image src={feature1} alt="" />
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
                <Image src={feature2} alt="" />
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
                <Image src={feature3} alt="" />
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
                <Image src={feature4} alt="" className="" />
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
                <Image src={feature5} alt="" />
              </div>
            </div>
          </div>
          <Image src={benifits} alt="" className="lg:-mt-32 lg:block hidden" />
        </div>
      </div>
      {/* fourth section */}
      <div className="bg-why text-center bg-contain bg-no-repeat w-full xl:h-[100vh] lg:h-[600px] md:h-[400px] sm:h-72 h-56 ">
        <h1 className="lg:text-6xl text-xl text-white font-bold drop-shadow-2xl  xl:pt-32 lg:pt-32 md:pt-20 sm:pt-10 pt-10">
          “WE PROVIDE SOLUTIONS”
        </h1>
      </div>

      {/* fifth section */}
      <div className="relative bg-customer h-[600px] w-full">
        <div className="lg:w-[600px] md:w-[350px] sm:w-[300px] w-[300px] h-[200px] bg-[#FF9315] top-0 absolute right-0 text-center text-white lg:pt-8 pt-4 lg:text-3xl md:text-base text-xs font-bold sm:p-4 p-1">
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
            <div className="bg-white absolute p-10 xl:px-32 rounded-md">
              <Image src={signin} alt="" className="" />
            </div>
          )}
          {showActiveContent === "DashBoard" && (
            <div className="bg-white absolute  p-10 xl:px-32 rounded-md ">
              <Image src={DashBoard} alt="" className="" />
            </div>
          )}
          {showActiveContent === "Faculty" && (
            <div className="bg-white absolute  p-10 xl:px-32 rounded-md ">
              <Image src={Faculty} alt="" className="" />
            </div>
          )}
        </div>
      </div>
      {/* sixth section */}
      <div className="p-10 md:px-28 ">
        <div className="text-white bg-gradient-to-t from-[#FF9315] to-[#dcb145] p-10 text-center rounded-md">
          <h1 className="md:text-4xl text-lg font-medium drop-shadow-2xl">
            Contact us today to explore the possibilities!
          </h1>
          <button className="text-[#FF9315] bg-white rounded-full md:px-16 px-7 p-2 text-lg mt-10 drop-shadow-2xl">
            Get started
          </button>
        </div>
      </div>
    </>
  );
}

export default Solutions;

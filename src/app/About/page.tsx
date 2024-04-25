"use client";
import React from "react";
import Image from "next/image";
import hr from "../asset/hr.png";
import wgsperson from "../asset/wgsperson.gif";
import line from "../asset/line.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import Certificate from "../asset/certificate.png";
import "react-html5video/dist/styles.css";
import arrow from "../asset/arrow.gif";
import timer from "../asset/timer.gif";
import rocket from "../asset/rocket.gif";
import style2 from "../asset/style2.png";
import profile1 from "../asset/profile1.png";
import style3 from "../asset/style3.png";
import star from "../asset/stars.png";
import Slider from "react-slick";
import "next-cloudinary/dist/cld-video-player.css";
import bgorange1 from "../asset/bgorange1.png";
import icon1 from "../asset/wgs gifs (19).gif";
import icon2 from "../asset/wgs gifs (17).gif";
import icon3 from "../asset/wgs gifs (20).gif";
import icon4 from "../asset/wgs gifs (18).gif";
import ourculture from "../asset/Vector 48.png";
import ourculture2 from "../asset/Vector 49.png";
import ourculture3 from "../asset/Vector 50.png";
import ourculture4 from "../asset/Vector 51.png";
import ourculture5 from "../asset/Vector 52.png";
import Culture from "./Culture";
import slidegray from "../asset/slidergray.png";
import ruban from "../asset/ruban (2).png";
import dha from "../asset/dhanush.png";
import ram from "../asset/ramya.png";
import ajin from "../asset/ajin.png"
import niv from "../asset/nivetha.png";


function About() {
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
        breakpoint: 820,
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
  return (
    <div>
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
      <div className="w-full h-[900px] md:h-[1200px] lg:h-[550px] xl:h-[650px] lg:bg-contain cover  relative bg-no-repeat">
        <div>
          <div className="lg:absolute top-10 md:pl-16 left-4">
            <div className="flex flex-col gap-5 w-full md:w-[60%] md:p-0 p-4 pt-20 md:pt-[15%] lg:pt-0 lg:w-[80%] justify-center md:justify-start md:items-start items-center text-justify md:text-start">
              <p className="text-primarycolor font-semibold md:text-xl text-3xl lg:pt-6">
                Who We Are
              </p>
              <p className="font-semibold md:text-3xl text-gray-500">
                Empowering Your Digital Success - WHY Global Services
              </p>
              <p className="font-semibold text-xs w-[75%]">
                We are an innovative IT company dedicated to transforming
                businesses through cutting-edge technology solutions. With a
                team of skilled professionals and a passion for excellence.
              </p>
            </div>
          </div>
          <div>
            <div className="lg:absolute relative lg:w-[70%] w-full md:top-[65%] lg:top-[43%] xl:top-[35%]  md:left-0 pl-10 z-10">
              <div className="grid lg:grid-cols-4 grid-cols-2 p-2 justify-evenly">
                <div className="lg:w-[60%] w-[70%]">
                  <Image alt="" src={icon1}></Image>
                  <p className="text-center md:text-3xl text-xl font-semibold pt-4 text-gray-500">
                    500%
                  </p>
                  <p className="text-xs text-center text-gray-500">
                    Reduction in IT costs for many of our clients
                  </p>
                </div>
                <div className="lg:w-[60%] w-[70%]">
                  <Image alt="" src={icon2}></Image>
                  <p className="text-center md:text-3xl text-xl font-semibold pt-4 text-gray-500">
                    500%
                  </p>
                  <p className="text-xs text-center text-gray-500">
                    Experience in the IT field
                  </p>
                </div>
                <div className="lg:w-[60%] w-[70%]">
                  <Image alt="" src={icon3}></Image>
                  <p className="text-center md:text-3xl text-xl font-semibold pt-4 text-gray-500">
                    500%
                  </p>
                  <p className="text-xs text-center text-gray-500 ">
                    Projects Delivered
                  </p>
                </div>
                <div className="lg:w-[60%] w-[70%]">
                  <Image alt="" src={icon4}></Image>
                  <p className="text-center md:text-3xl text-xl font-semibold pt-4 text-gray-500">
                    500%
                  </p>
                  <p className="text-xs text-center text-gray-500">
                    Happy Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full bottom-0 tri absolute"></div>
        <div className="w-full h-full bottom-0 left-0 shadow-lg whitetri absolute"></div>
        <div className="absolute bottom-0 right-0  w-[45%] md:w-[40%] lg:w-[42%] z-10 md:block hidden">
          <Image alt="" src={hr}></Image>
        </div>
        <div className="absolute md:block hidden lg:top-[30%] md:top-[50%] bottom-[25%] right-0  w-[50%] md:w-[40%] lg:w-[40%]">
          <Image alt="" src={line}></Image>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-7 ">
        <div className="relative w-full">
          <div className="flex lg:flex-row flex-col w-full  justify-center items-center gap-6 ">
            <div className="bg-white  outline outline-[#FF9315] relative w-[60%] h-52 lg:w-40  lg:h-44 md:w-[40%]  rounded-3xl drop-shadow-lg flex flex-col justify-center gap-3 items-center">
              <FontAwesomeIcon
                icon={faComputer}
                className="sm:size-16 size-24  text-[#FF9315]"
              />
              <p className=" text-xl md:text-lg text-center ">
                Product <br /> Engineering
              </p>
            </div>
            <div className="bg-white  outline outline-[#FF9315] relative w-[60%] h-52 lg:w-40  lg:h-44 md:w-[40%]  rounded-3xl drop-shadow-lg flex flex-col justify-center gap-3 items-center">
              <FontAwesomeIcon
                icon={faComputer}
                className="sm:size-16 size-24  text-[#FF9315]"
              />
              <p className=" text-xl md:text-lg text-center ">
                Product <br /> Engineering
              </p>
            </div>
            <div className="bg-white  outline outline-[#FF9315] relative w-[60%] h-52 lg:w-40  lg:h-44 md:w-[40%]  rounded-3xl drop-shadow-lg flex flex-col justify-center gap-3 items-center">
              <FontAwesomeIcon
                icon={faComputer}
                className="sm:size-16 size-24  text-[#FF9315]"
              />
              <p className=" text-xl md:text-lg text-center ">
                Product <br /> Engineering
              </p>
            </div>
            <div className="bg-white  outline outline-[#FF9315] relative w-[60%] h-52 lg:w-40  lg:h-44 md:w-[40%]  rounded-3xl drop-shadow-lg flex flex-col justify-center gap-3 items-center">
              <FontAwesomeIcon
                icon={faComputer}
                className="sm:size-16 size-24  text-[#FF9315]"
              />
              <p className=" text-xl md:text-lg text-center ">
                Product <br /> Engineering
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit relative bg-no-repeat ">
        <div className="w-full h-full absolute lg:-top-16 -top-7 left-0 -z-10">
          <Image src={slidegray} alt=""></Image>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-around">
          <div
            className=" md:w-[50%] w-full
       md:p-10"
          >
            <Image src={Certificate} alt=""></Image>
          </div>
          <div className="md:w-[50%] w-full md:text-left text-justify p-5 ">
            <p className="md:text-xl text-2xl font-semibold text-primarycolor text-center md:text-left">
              INTRODUCING WHY GLOBAL SERVICES
            </p>
            <br></br>
            <p className="text-3xl font-semibold text-gray-500 text-center md:text-left">
              Unlocking Excellence with ISO Certification!
            </p>
            <br></br>
            <p className="text-gray-400">
              ISO certification is a significant milestone for us, signifying
              that we have implemented robust quality management systems and
              processes in line with international standards. It demonstrates
              our focus on delivering reliable and high-quality IT solutions
              that meet and exceed client expectations.
            </p>
            <br></br>
            <p className="text-gray-400">
              ISO certification is a significant milestone for us, signifying
              that we have implemented robust quality management systems and
              processes in line with international standards. It demonstrates
              our focus on delivering reliable and high-quality IT solutions
              that meet and exceed client expectations.
            </p>
            <br></br>
            <p className="text-gray-400">
              ISO certification is a significant milestone for us, signifying
              that we have implemented robust quality management systems and
              processes in line with international standards. It demonstrates
              our focus on delivering reliable and high-quality IT solutions
              that meet and exceed client expectations.
            </p>
          </div>
        </div>
      </div>
      <main className="md:bg-summa md:min-h-96 md:object-cover md:bg-cover md:flex md:flex-col">
        <h3 className="text-[#FF8900] pt-10 pl-10 font-bold">
          OUR WORK PROCESS
        </h3>
        <h2 className="pl-10 font-medium pt-3 lg:text-2xl">
          HOW ITINC HELP OF YOUR BUSINESS GROW AND SUCCESSFUL
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-16 gap-5 lg:pl-48 sm:px-10  px-10 md:pt-28">
          <div className="lg:w-[90%] h-full relative drop-shadow-2xl">
            <div className="border-2 mt-10 text-center bg-white rounded-tr-3xl">
              <Image src={arrow} alt="project" className="w-[80%]" />
              <h1 className="xl:font-bold font-medium xl:p-3 lg:p-1 p-3 ">
                IT DESIGN PROJECT
              </h1>
              <p className="p-3 text-xs">
                Design and propose products improvements through periodical and
                accurate testing.
              </p>
            </div>
            <div className="bg-white border-2 w-fit h-fit p-1 px-3 rounded-full absolute -right-4 lg:bottom-48 md:bottom-40 bottom-36">
              1
            </div>
          </div>
          <div className="h-full lg:w-[90%] relative drop-shadow-2xl">
            <div className=" border-2 bg-white text-center rounded-tr-3xl">
              <Image src={rocket} alt="" className="w-[80%]" />
              <h1 className="xl:font-bold font-medium  xl:p-3 lg:p-1 p-3">
                PRODUCT ENGINEER
              </h1>
              <p className="p-3 text-xs">
                Design and propose products improvements through periodical and
                accurate testing.
              </p>
            </div>
            <div className="bg-white border-2 w-fit h-fit p-1 px-3 rounded-full  absolute -right-4 lg:bottom-56 sm:bottom-44 bottom-36">
              2
            </div>
          </div>
          <div className="lg:w-[90%] h-full relative drop-shadow-2xl">
            <div className="border-2 sm:mt-10 text-center bg-white rounded-tr-3xl">
              <Image src={timer} alt="" className="w-[80%]" />
              <h1 className="xl:font-bold font-medium xl:p-3 lg:p-1 p-3">
                CLOUD INTEGRATION
              </h1>
              <p className="p-3 text-xs">
                Design and propose products improvements through periodical and
                accurate testing.
              </p>
            </div>
            <div className="bg-white border-2 w-fit h-fit p-1 px-3 rounded-full  absolute -right-4 lg:bottom-48 md:bottom-40 bottom-36 ">
              3
            </div>
          </div>
        </div>
      </main>

      <div className="mt-28">
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="lg:w-[20%] w-[90%] sm:w-52 lg:h-64 sm:h-52  bg-gray-400 flex drop-shadow-lg justify-center items-center rounded-full">
            <div className="w-[70%] h-[70%] drop-shadow-lg text-center border-2 border-orange-400 font-semibold content-center text-lg text-orange-500 bg-white rounded-full">
              OUR CULTURE
            </div>
          </div>
          <div className="lg:w-[80%] w-full flex justify-center items-center">
            <div className="w-[70%] flex flex-col gap-2">
              <div className="w-full flex justify-center items-center">
                <div>
                  <Image src={ruban} alt="" />
                </div>
                <div>
                 <Image src={dha} alt="" />
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <div>
                  <Image src={ram} alt="" />
                </div>
                <div>
                  <Image src={ajin} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[30%]">
             <Image src={niv} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <Slider {...settings} className='overflow-hidden'>
        <div>
          <div className='flex justify-center lg:flex-row flex-col w-[90%] relative mx-auto  pt-8'>
            <div className='lg:w-[80%] w-full relative'>
              <Image src={style2} alt="style2" className="lg:w-[80%] w-full" />
              <Image src={profile1} alt="Profile1" className="lg:w-[70%] w-full top-2 absolute" />
              <Image src={style3} alt="style2" className="absolute sm:w-[20%] w-[30%] top-0 right-[80%]" />
            </div>
            <div className='w-full lg:pt-2'>
              <p className="lg:text-left lg:text-md font-normal text-[#5D5D5D] text-justify">Virtual reality environments offer a way to ingrain knowledge more deeply and quickly compared to traditional methods. By prioritizing spatial information, VR helps learners map their understanding effectively.</p>
              <hr className=' h-0.5 bg-[#FF8900] mt-4 ' />
              <div className='flex md:flex-row flex-col justify-between'>
                <div>
                  <p className='text-center'>MARK</p>
                  <p className=' text-center text-[#FF8900]'>CEO</p>
                </div>
                <div className='justify-center items-center pl-[10%] md:pl-0 md:w-[30%] mx-auto'>
                  <Image src={star} alt='' className=' md:mt-5' />
                </div>
              </div>
            </div>

          </div>
        </div>
        <div>
          <div className='flex justify-center lg:flex-row flex-col w-[90%] relative mx-auto  pt-8'>
            <div className='lg:w-[80%] w-full relative'>
              <Image src={style2} alt="style2" className="lg:w-[80%] w-full" />
              <Image src={profile1} alt="Profile1" className="lg:w-[70%] w-full top-2 absolute" />
              <Image src={style3} alt="style2" className="absolute sm:w-[20%] w-[30%] top-0 right-[80%]" />
            </div>
            <div className='w-full lg:pt-2'>
              <p className="lg:text-left lg:text-md font-normal text-[#5D5D5D] text-justify">Virtual reality environments offer a way to ingrain knowledge more deeply and quickly compared to traditional methods. By prioritizing spatial information, VR helps learners map their understanding effectively.</p>
              <hr className=' h-0.5 bg-[#FF8900]  mt-4 ' />
              <div className='flex md:flex-row flex-col justify-between'>
                <div>
                  <p className='text-center'>MARK</p>
                  <p className=' text-center text-[#FF8900]'>CEO</p>
                </div>
                <div className='justify-center items-center pl-[10%] md:pl-0 md:w-[30%] mx-auto'>
                  <Image src={star} alt='' className=' md:mt-5' />
                </div>
              </div>
            </div>

          </div>
        </div>
        <div>
          <div className='flex justify-center lg:flex-row flex-col w-[90%] relative mx-auto  pt-8'>
            <div className='lg:w-[80%] w-full relative'>
              <Image src={style2} alt="style2" className="lg:w-[80%] w-full" />
              <Image src={profile1} alt="Profile1" className="lg:w-[70%] w-full top-2 absolute" />
              <Image src={style3} alt="style2" className="absolute sm:w-[20%] w-[30%] top-0 right-[80%]" />
            </div>
            <div className='w-full lg:pt-2'>
              <p className="lg:text-left lg:text-md font-normal text-[#5D5D5D] text-justify">Virtual reality environments offer a way to ingrain knowledge more deeply and quickly compared to traditional methods. By prioritizing spatial information, VR helps learners map their understanding effectively.</p>
              <hr className=' h-0.5 bg-[#FF8900]  mt-4 ' />
              <div className='flex md:flex-row flex-col justify-between'>
                <div>
                  <p className='text-center'>MARK</p>
                  <p className=' text-center text-[#FF8900]'>CEO</p>
                </div>
                <div className='justify-center items-center pl-[10%] md:pl-0 md:w-[30%] mx-auto'>
                  <Image src={star} alt='' className=' md:mt-5' />
                </div>
              </div>
            </div>

          </div>
        </div>
      </Slider>
      <div className="flex flex-col justify-center items-center overflow-hidden  py-5">
        <div className="relative w-[1248px] h-[236px] px-10">
          <Image src={bgorange1} alt="" className="w-full" />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center space-y-10">
            <h2 className="font-semibold sm:text-5xl text-3xl text-white">Connect with Us!</h2>
            <button className="bg-white drop-shadow-xl text-[#FF8900] rounded-full sm:px-32 px-20 py-4 font-semibold sm:text-xl text-lg">Get Started</button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;

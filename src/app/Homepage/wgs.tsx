import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import img1 from "../asset/img1.jpeg";
import img2 from "../asset/img2.jpeg";
import img3 from "../asset/img3.jpg";
import bgorange1 from "../asset/bgorange1.png";
import Image from "next/image";

const Wgs = () => {
  return (
    <div className="">
      <div className="flex justify-between sm:flex-row flex-col sm:px-24 py-10">
        <div className="flex flex-col space-y-3 sm:text-start text-center">
          <h2 className="text-[#FF8900] font-semibold md:text-xl text-lg">
            Recent News
          </h2>
          <h2 className="font-semibold md:text-3xl text-xl text-[#686868]">
            WHAT&apos;S GOING ON IN OUR BLOG ?
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center pt-5 sm:pt-0">
          <button className="bg-white drop-shadow-xl p-2 text-[#FF8900]">
            View all
          </button>
        </div>
      </div>
      <section className="flex lg:flex-row flex-col justify-around px-5  items-center pt-10">
        <div className="relative pb-56 sm:pb-40 md:px-10 lg:px-5">
          <Image src={img1} alt="" className="w-80 h-96" />
          <div className=" sm:w-80 sm:h-44 w-60 absolute top-72 sm:-ml-8">
            <div className="w-full flex flex-col justify-end items-end">
              <p className="bg-[#FF8900] w-fit text-white px-1 py-2 rounded-t-xl text-sm">
                <FontAwesomeIcon icon={faCalendar} />
                &nbsp; jun 04,2023
              </p>
            </div>
            <div className="bg-white drop-shadow-xl p-4">
              <h2 className="text-xl">
                How to become a successfull businessman
              </h2>
              <p className="pt-2">
                We&apos;ve designed a culture that allows our stewards to
                assimilate with our clients and bring the best.
              </p>
            </div>
          </div>
        </div>
        <div className="relative pb-56 sm:pb-40 md:px-10 lg:px-5">
          <Image src={img2} alt="" className="w-80 h-96" />
          <div className=" sm:w-80 w-60 h-44 absolute top-72 sm:-ml-8">
            <div className="w-full flex flex-col justify-end items-end">
              <p className="bg-[#FF8900] w-fit text-white px-1 py-2 rounded-t-xl text-sm">
                <FontAwesomeIcon icon={faCalendar} />
                &nbsp; jun 04,2023
              </p>
            </div>
            <div className="bg-white drop-shadow-xl p-4">
              <h2 className="text-xl">
                How to become a successfull businessman
              </h2>
              <p className="pt-2">
                We&apos;ve designed a culture that allows our stewards to
                assimilate with our clients and bring the best.
              </p>
            </div>
          </div>
        </div>
        <div className="relative pb-56 sm:pb-40 md:px-10 lg:px-5">
          <Image src={img3} alt="" className="w-80 h-96" />
          <div className=" sm:w-80 h-44 w-60 absolute top-72 sm:-ml-8">
            <div className="w-full flex flex-col justify-end items-end">
              <p className="bg-[#FF8900] w-fit text-white px-1 py-2 rounded-t-xl text-sm">
                <FontAwesomeIcon icon={faCalendar} />
                &nbsp; jun 04,2023
              </p>
            </div>
            <div className="bg-white drop-shadow-xl p-4">
              <h2 className="text-xl">
                How to become a successfull businessman
              </h2>
              <p className="pt-2">
                We&apos;ve designed a culture that allows our stewards to
                assimilate with our clients and bring the best.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center overflow-hidden py-5">
        <div className="relative w-full lg:h-[236px] h-[250px]  px-10">
          <Image
            src={bgorange1}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  text-center space-y-10">
            <h2 className="font-semibold sm:text-5xl text-3xl text-white">
              Connect with Us!
            </h2>
            <button className="bg-white drop-shadow-xl text-[#FF8900] rounded-full sm:px-32 px-20 py-4 font-semibold sm:text-xl text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wgs;
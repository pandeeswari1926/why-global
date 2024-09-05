import React from "react";
import { BsCloudUpload, BsCloudUploadFill } from "react-icons/bs";
import { CiBullhorn } from "react-icons/ci";
import Image from 'next/image';
import {
  FaReact,
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaLaptopHouse,
  FaBullhorn,
} from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { MdCloudSync, MdOutlineMobileFriendly, MdOutlineScreenSearchDesktop, MdPhonelinkSetup } from "react-icons/md";
import { SiAltiumdesigner, SiTaichigraphics, SiWesterndigital } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";

const OurServices = () => {
  return (
    <>
      <div className="bg-gray-100 py-10">
        <h1 className="md:text-5xl text-left px-10 font-bold">Our Services</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 px-16 py-8">
          {/* First Section */}
          <div className="col-span-2 border-none shadow-lg p-8 bg-white">
            <img
              src="/life1.png"
              alt="Placeholder"
              className="w-full h-[240px] bg-center"
            />
            <p className="text-2xl font-bold md:mt-4">IT Management</p>
            <p className="md:mt-3 text-gray-800">
              This is a 4-line paragraph. It might contain some introductory
              text about the content, providing useful information to the user.
            </p>
            <button className="bg-primarycolor text-md md:mt-4 text-white py-2 px-6 rounded-lg">
              Start A Project
            </button>
          </div>

          {/* Second Section */}
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Box */}
            <div className="relative group border-none p-4 flex flex-col items-center justify-center bg-white shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <LiaLaptopCodeSolid className="text-primarycolor mb-2 text-6xl" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-center text-gray-800">
                Building robust, scalable websites with cutting-edge
                technologies
              </p>
            </div>

            {/* Second Box */}
            <div className="relative group border-none p-4 flex flex-col items-center justify-center bg-white shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <MdOutlineScreenSearchDesktop className="text-primarycolor mb-2 text-6xl" />
              <h3 className="text-xl font-semibold mb-2">Web Designing</h3>
              <p className="text-center text-gray-800">
                Crafting visually compelling and responsive websites that
                enhance user experience
              </p>
            </div>

            {/* Third Box */}
            <div className="relative group border-none p-4 flex flex-col items-center justify-center bg-white shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <TbDeviceMobileCode className="text-primarycolor mb-2 text-6xl" />
              <h3 className="text-xl font-semibold mb-2">App Development</h3>
              <p className="text-center text-gray-800">
                Developing intuitive and user-friendly mobile apps tailored to
                meet your business needs
              </p>
            </div>

            {/* Fourth Box */}
            <div className="relative group border-none p-4 flex flex-col items-center justify-center bg-white shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <CiBullhorn className="text-primarycolor mb-2 text-6xl" />
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-center text-gray-800">
                Boosting your online presence with data-driven strategies, SEO,
                and social media marketing
              </p>
            </div>

            {/* Fifth Box */}
            <div className="relative group border-none p-4 flex flex-col items-center justify-center bg-white shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <BsCloudUpload className="text-primarycolor mb-2 text-6xl" />
              <h3 className="text-xl font-semibold mb-2">Internet of Things</h3>
              <p className="text-center text-gray-800">
                Boosting your online presence with data-driven strategies, SEO,
                and social media
              </p>
            </div>

            {/* Sixth Box */}
            <div className="relative group border-none p-4 flex flex-col items-center justify-center bg-white shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <SiAltiumdesigner className="text-primarycolor mb-2 text-6xl" />
              <h3 className="text-xl font-semibold mb-2">Graphic Designing</h3>
              <p className="text-center text-gray-800">
                Manage and optimize database schemas, queries, and performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;

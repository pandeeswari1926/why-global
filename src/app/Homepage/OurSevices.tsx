import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CiBullhorn } from "react-icons/ci";
import { FaLaptopCode, FaLaptopHouse } from "react-icons/fa";
import { MdPhonelinkSetup, MdCloudSync } from "react-icons/md";
import { SiTaichigraphics } from "react-icons/si";

const OurServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const serviceClasses = (index) =>
    `absolute inset-0 bg-orange-400 text-white flex items-center justify-center p-4 transform ${
      activeIndex === index ? "translate-y-0" : "translate-y-full"
    } transition-transform duration-1000 ease-in-out rounded-lg`;

  return (
    <div className="bg-gray-100 py-10">
      <h1 className="md:text-5xl text-3xl text-left px-10 font-bold" data-aos="fade-up">
        Our Services
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 px-8 lg:px-16 py-8">
        {/* First Section */}
        <div className="col-span-2 border-none shadow-xl rounded-lg p-8 bg-white" data-aos="fade-right">
          <img
            src="./life1.png"
            alt="Placeholder"
            className="w-full h-[240px] object-cover rounded-lg"
          />
          <p className="text-2xl font-bold md:mt-4 mt-4">IT Management</p>
          <p className="md:mt-3 mt-2 text-gray-800">
            This is a 4-line paragraph. It might contain some introductory
            text about the content, providing useful information to the user.
          </p>
          <button className="bg-primarycolor text-md md:mt-4 mt-4 text-white py-2 px-6 rounded-lg transition-transform transform hover:scale-105">
            Start A Project
          </button>
        </div>

        {/* Second Section */}
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Service Box */}
          <div
            className="relative border-none p-4 flex flex-col items-center justify-center rounded-lg bg-white shadow-lg cursor-pointer overflow-hidden"
            data-aos="zoom-in"
            onClick={() => handleClick(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col items-center justify-center">
              <FaLaptopCode className="text-primarycolor mb-2 text-6xl" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            </div>
            <div className={serviceClasses(1)}>
              <p className="text-center text-white">
                Building robust, scalable websites with cutting-edge technologies
              </p>
            </div>
          </div>

          <div
            className="relative border-none p-4 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden"
            data-aos="flip-left"
            onClick={() => handleClick(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col items-center justify-center">
              <FaLaptopHouse className="text-primarycolor mb-2 text-6xl" />
              <h3 className="text-xl font-semibold mb-2">Web Designing</h3>
            </div>
            <div className={serviceClasses(2)}>
              <p className="text-center text-white">
                Crafting visually compelling and responsive websites that enhance user experience
              </p>
            </div>
          </div>

          <div
            className="relative border-none p-4 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden"
            data-aos="fade-up"
            onClick={() => handleClick(3)}
            onMouseLeave={handleMouseLeave}
          >
            <MdPhonelinkSetup className="text-primarycolor mb-2 text-6xl" />
            <h3 className="text-xl font-semibold mb-2">App Development</h3>
            <div className={serviceClasses(3)}>
              <p className="text-center text-white">
                Developing intuitive and user-friendly mobile apps tailored to meet your business needs
              </p>
            </div>
          </div>

          <div
            className="relative border-none p-4 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden"
            data-aos="slide-up"
            onClick={() => handleClick(4)}
            onMouseLeave={handleMouseLeave}
          >
            <CiBullhorn className="text-primarycolor mb-2 text-6xl" />
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <div className={serviceClasses(4)}>
              <p className="text-center text-white">
                Boosting your online presence with data-driven strategies, SEO, and social media marketing
              </p>
            </div>
          </div>

          <div
            className="relative border-none p-4 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden"
            data-aos="zoom-in"
            onClick={() => handleClick(5)}
            onMouseLeave={handleMouseLeave}
          >
            <MdCloudSync className="text-primarycolor mb-2 text-6xl" />
            <h3 className="text-xl font-semibold mb-2">Internet of Things</h3>
            <div className={serviceClasses(5)}>
              <p className="text-center text-white">
                Enhancing connectivity and functionality through IoT solutions
              </p>
            </div>
          </div>

          <div
            className="relative border-none p-4 flex flex-col items-center justify-center bg-white rounded-lg shadow-lg cursor-pointer overflow-hidden"
            data-aos="flip-right"
            onClick={() => handleClick(6)}
            onMouseLeave={handleMouseLeave}
          >
            <SiTaichigraphics className="text-primarycolor mb-2 text-6xl" />
            <h3 className="text-xl font-semibold mb-2">Graphic Designing</h3>
            <div className={serviceClasses(6)}>
              <p className="text-center text-white">
                Creating visually appealing graphics and designs for various media
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

import React from "react";
import Image from "next/image";
import contactgettin from "../../../public/getin.png";
import { MdEmail, MdLocationOn, MdLocalPhone } from "react-icons/md";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contactform = () => {
  return (
    <section className="pb-96 md:pb-36">
      <div className=" w-full p-5 md:p-10 h-full">
        <div className="relative max-w-5xl w-full h-80 mx-auto rounded-3xl drop-shadow-sm">
          <img
            src='./getin.png'
            alt="Background"
            
           
            className="rounded-lg"
          />
          <div className="flex absolute inset-0 md:p-10 justify-between w-full">
            <div className="flex md:flex-row flex-col md:gap-5 lg:gap-0 gap-10 justify-between w-full">
              <div className="flex flex-col justify-between item-center p-5 md:p-0">
                <h3 className=" text-white text-3xl lg:text-5xl font-bold -mt-2 ml-1">
                  Get in Touch
                </h3>

                <ul className="flex flex-col px-2 py-5 text-white text-xs sm:text-sm">
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdEmail /> contact@whyglobalservices.com
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdLocationOn /> Egmore, Chennai
                  </li>
                  <li className="flex items-center gap-2">
                    {" "}
                    <MdLocalPhone /> +91-7299119900
                  </li>
                </ul>
                <div className="flex flex-row text-white text-lg px-2 gap-1 items-center drop-shadow-sm">
                  <a href="https://www.facebook.com/whyglobal/">
                    <FaFacebookSquare />
                  </a>
                  <a href="https://twitter.com/wehelpyou19">
                    <FaXTwitter />
                  </a>
                  <a href="https://www.instagram.com/whyglobalservices/">
                    <FaInstagramSquare />
                  </a>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                  <a href="https://www.youtube.com/@WhyGlobalServices">
                    <FaYoutubeSquare />
                  </a>
                </div>
              </div>

              <div className="drop-shadow-xl bg-white h-[480px] md:h-[450px] rounded-xl md:w-[70%] lg:w-[60%] w-full p-5 ">
                <form
                  action=""
                  className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-7 gap-2 md:gap-4 text-sm"
                >
                  <input
                    type="text"
                    className="border border-gray-400 p-2 rounded-md"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    className="border border-gray-400 p-2 rounded-md"
                    placeholder="Email ID"
                  />
                  <input
                    type="text"
                    className="border border-gray-400 p-2 rounded-md"
                    placeholder="Mobile no."
                  />
                  <input
                    type="text"
                    className="border border-gray-400 p-2 rounded-md"
                    placeholder="Services*"
                  />
                </form>
                <div className="md:px-7 px-2">
                  <textarea
                    name="message"
                    id="message"
                    cols={1}
                    rows={8}
                    className="border-gray-400 border rounded-md w-full p-2"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="flex justify-end px-2 md:px-6">
                  <button className="w-fit rounded-md px-2 py-1.5 bg-white drop-shadow-lg">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;

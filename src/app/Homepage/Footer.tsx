import React from "react";
import msgicon from "../../../public/mailiconb.png";
import Link from "next/link";
import locationicon from "../../../public/locationiconb.png";
import Image from "next/image";
import facebookicon from "../../../public/facebookiconb.png";
import twittericon from "../../../public/twittericonb.png";
import instagramicon from "../../../public/twittericonb.png";
import linkedinicon from "../../../public/linkediniconb.png";
import youtubeicon from "../../../public/youtubeiconb.png";
import callicon from "../../../public/calliconb.png";
import latest from "../../../public/Rectangle 83.png";
import buss from '../../../public/buss.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendar,
  faLocation,
  faMailBulk,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookSquare, FaPhone } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <article className="mt-5 lg:mt-20">
        <section className=" bg-black flex justify-end relative">
          <section className="top-0 lg:w-[94%] lg:-mt-12 grid sm:grid-cols-2 md:flex justify-evenly place-items-center gap-3 bg-white lg:h-24 py-5 rounded-b-lg lg:rounded-br-none  lg:rounded-l-lg shadow-lg shadow-black px-5 w-full">
            <Link
              href="mailto:contact@whyglobalservices.com"
              className="flex items-center gap-1"
              target="_blank"
            >
              <CiMail className="size-4 bg-primarycolor text-white rounded" />
              <p className="text-md text-primarycolor">
                contact@whyglobalservices.com
              </p>
            </Link>
            <Link
              href="https://www.google.com/maps/place/WHY+Global+Services/@13.0712223,80.2405669,15z/data=!3m2!4b1!5s0x3a526672ac53d709:0xc472fff95bbccecd!4m6!3m5!1s0x3a5265be7d4e0655:0x1ecaf35cce10324c!8m2!3d13.071223!4d80.259021!16s%2Fg%2F1hdzfksp0?entry=ttu, Chennai"
              className="flex items-center gap-1"
              target="_blank"
            >
              <IoLocationOutline className="size-4 bg-primarycolor text-white rounded" />
              <p className="text-md text-primarycolor">Egmore, Chennai.</p>
            </Link>
            <Link
              href="tel:+918270099990"
              className="flex items-center gap-1"
              target="_blank"
            >
              <FaPhone className="size-4 text-primarycolor rounded" />
              <p className="text-md text-primarycolor">+91-82700 99990</p>
            </Link>

            <section className="flex space-x-5 pt-1">
              <Link
                href="https://www.facebook.com/whyglobalservices/"
                target="_blank"
              >
                <FaFacebookSquare className=" cursor-pointer text-primarycolor size-4" />
              </Link>
              <FaSquareXTwitter
                className=" cursor-pointer text-primarycolor size-4"
                target="_blank"
              />
              <Link
                href="https://www.instagram.com/whyglobalservices/"
                target="_blank"
              >
                <FaSquareInstagram className=" cursor-pointer text-primarycolor size-4" />
              </Link>

              <Link
                href="https://www.linkedin.com/company/why-global-services/?originalSubdomain=in"
                target="_blank"
              >
                <FaLinkedin className=" cursor-pointer text-primarycolor size-4" />
              </Link>
              <Link
                href="https://www.youtube.com/results?search_query=why+global+services"
                target="_blank"
              >
                <FaYoutube className=" cursor-pointer text-primarycolor size-4" />
              </Link>
            </section>
          </section>
        </section>
        <section className="bg-black text-white p-10 grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-0 gap-10 sm:justify-items-center">
          <section className="space-y-5 sm:w-72">
            <h1 className="font-bold text-xl">About Us</h1>
            <p className="text-xs leading-loose text-gray-200">
              We designed a culture that allows our stewards to assimilate with
              our clients and bring our best
            </p>
          </section>
          <section className="space-y-5 sm:w-72 lg:flex lg:flex-col lg:items-center">
            <h1 className="font-bold text-xl">Information</h1>
            <ul className="list-disc text-xs leading-loose text-gray-200">
              <li className="">Managed IT Services</li>
              <li className="">IT Consultancy</li>
              <li className="">Business Solutions</li>
              <li className="">Digital Services</li>
              <li className="">Best Seller</li>
            </ul>
          </section>
          <section className="space-y-5 sm:w-72">
            <h1 className="font-bold text-xl ">Latest News</h1>
            <section className="text-xs space-y-2">
              <div className="flex gap-2 items-center">
                <img src="./buss.png" alt="suhail" className="w-16 h-16" />
                <div className="leading-loose">
                  <h2>How to become successful bussinessman</h2>
                  <div className="flex items-center gap-1">
                    <FaCalendar />
                    <p>jun 04,2024</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <img src="./buss.png" alt="suhail" className="w-16 h-16" />
                <div className="leading-loose">
                  <h2>How to become successful bussinessman</h2>
                  <div className="flex items-center gap-1">
                    <FaCalendar />
                    <p>jun 04,2024</p>
                  </div>
                </div>
              </div>
            </section>
          </section>
          <section className="space-y-5 sm:w-72">
            <h1 className="font-bold text-xl">Contact Info</h1>
            <article className="text-xs leading-loose">
              <section className="flex items-center  gap-2">
                <FontAwesomeIcon icon={faLocation} className="-mt-6" />
                <p className="">
                  3rd Floor, New No. 75,77 & 79, Lohmanradhri Towers, Egmore,
                  Chennai, Tamil Nadu 60008
                </p>
              </section>
              <section className="flex items-center gap-2">
                <FontAwesomeIcon icon={faMailBulk} />
                <p className="">contact@whyglobalservices.com</p>
              </section>
              <section className="flex items-center gap-2">
                <FontAwesomeIcon icon={faMobile} />
                <p className="">+91-82700 99990</p>
              </section>
            </article>
          </section>
        </section>
      </article>
    </>
  );
};

export default Footer;

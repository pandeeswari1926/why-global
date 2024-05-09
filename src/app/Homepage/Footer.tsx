import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faMailBulk,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookSquare, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <article className="mt-5 lg:mt-20">
        <section className=" bg-black flex justify-end relative">
          <section className="top-0 lg:w-[95%] lg:-mt-12 grid sm:grid-cols-2 md:flex justify-evenly place-items-center gap-3 bg-white lg:h-24 py-5  lg:rounded-lg mx-auto  shadow-lg shadow-black px-5 w-full">
            <Link
              href="mailto:contact@whyglobalservices.com"
              className="flex items-center gap-2"
              target="_blank"
            >
              <CiMail className="size-4 lg:size-6 bg-primarycolor text-white rounded" />
              <p className="lg:text-lg text-sm font-semibold text-primarycolor">
                contact@whyglobalservices.com
              </p>
            </Link>
            <Link
              href="https://www.google.com/maps/place/WHY+Global+Services/@13.0712223,80.2405669,15z/data=!3m2!4b1!5s0x3a526672ac53d709:0xc472fff95bbccecd!4m6!3m5!1s0x3a5265be7d4e0655:0x1ecaf35cce10324c!8m2!3d13.071223!4d80.259021!16s%2Fg%2F1hdzfksp0?entry=ttu, Chennai"
              className="flex items-center gap-2"
              target="_blank"
            >
              <IoLocationOutline className= "size-4 lg:size-6 bg-primarycolor text-white rounded" />
              <p className="lg:text-lg text-sm font-semibold text-primarycolor">Egmore, Chennai.</p>
            </Link>
            <Link
              href="tel:+918270099990"
              className="flex items-center gap-2"
              target="_blank"
            >
              <FaPhoneAlt className= "size-4 lg:size-6 text-primarycolor rounded" />
              <p className="lg:text-lg text-sm font-semibold text-primarycolor">+91-82700 99990</p>
            </Link>

            <section className="flex space-x-5">
              <Link
                href="https://www.facebook.com/whyglobalservices/"
                target="_blank"
              >
                <FaFacebookSquare className=" cursor-pointer text-primarycolor size-4 lg:size-6" />
              </Link>
              <Link href='https://twitter.com/wehelpyou19'>
              <FaSquareXTwitter
                className=" cursor-pointer text-primarycolor size-4 lg:size-6"
                target="_blank"
              />
              </Link>
              
              <Link
                href="https://www.instagram.com/whyglobalservices/"
                target="_blank"
              >
                <FaSquareInstagram className=" cursor-pointer text-primarycolor size-4 lg:size-6" />
              </Link>

              <Link
                href="https://www.linkedin.com/company/why-global-services/?originalSubdomain=in"
                target="_blank"
              >
                <FaLinkedin className=" cursor-pointer text-primarycolor size-4 lg:size-6" />
              </Link>
              <Link
                href="https://www.youtube.com/results?search_query=why+global+services"
                target="_blank"
              >
                <FaYoutube className=" cursor-pointer text-primarycolor size-4 lg:size-6" />
              </Link>
            </section>
          </section>
        </section>
        <section className="bg-black text-white p-10 grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-0 gap-10 sm:justify-items-start lg:justify-items-center">
          <section className="space-y-5 sm:w-72">
            <h1 className="font-bold text-xl">About Us</h1>
            <p className="text-xs leading-loose text-gray-200">
            We are an innovative IT company dedicated to transforming businesses through cutting-edge technology solutions. With a team of skilled professionals and a passion for excellence, we provide a comprehensive range of IT services tailored to meet the unique needs of our clients.
            
            </p>
          </section>
          <section className="space-y-4   lg:flex lg:flex-col lg:justify-center">
            <h1 className="font-bold text-xl">Links</h1>
            <ul className=" text-sm leading-loose text-gray-200">
            <Link href="/about">
              <li className="hover:text-primarycolor">About</li>
            </Link>
            <Link href="/services">
              <li className="hover:text-primarycolor">Services</li>
            </Link>
            <Link href="solutions">
              <li className="hover:text-primarycolor">Solutions</li>
            </Link>
            <Link href="/portfolio">
              <li className="hover:text-primarycolor">Portfolio</li>
            </Link>
            <Link href="/testimonial">
              <li className="hover:text-primarycolor">Testimonials</li>
            </Link>
            <Link href="/events">
              <li className="hover:text-primarycolor">Events</li>
            </Link>
            <Link href="/news">
              <li className="hover:text-primarycolor">News</li>
            </Link>
              
            </ul>
          </section>
          <section className="space-y-5 sm:w-72">
            <h1 className="font-bold text-xl ">Latest News</h1>
            <section className="text-xs space-y-2">
              <Link href="/news" className="flex gap-2 items-center">
                <img src="./buss.png" alt="suhail" className="w-16 h-16 object-cover" />
                <div className="leading-loose">
                  <h2>How to become successful bussinessman</h2>
                  <div className="flex items-center gap-1">
                    <FaCalendar />
                    <p>jun 04,2024</p>
                  </div>
                </div>
              </Link>
              <Link href="/news" className="flex gap-2 items-center">
                <img src="./buss.png" alt="suhail" className="w-16 h-16 object-cover" />
                <div className="leading-loose">
                  <h2>How to become successful bussinessman</h2>
                  <div className="flex items-center gap-1">
                    <FaCalendar />
                    <p>jun 04,2024</p>
                  </div>
                </div>
              </Link>
            </section>
          </section>
          <section className="space-y-5 sm:w-72">
            <h1 className="font-bold text-xl">Contact Info</h1>
            <article className="text-xs leading-loose space-y-3">
              <Link href="https://www.google.com/maps/place/WHY+Global+Services/@13.0712223,80.2405669,15z/data=!3m2!4b1!5s0x3a526672ac53d709:0xc472fff95bbccecd!4m6!3m5!1s0x3a5265be7d4e0655:0x1ecaf35cce10324c!8m2!3d13.071223!4d80.259021!16s%2Fg%2F1hdzfksp0?entry=ttu, Chennai" target="_blank" className="flex items-center  gap-2">
                <FontAwesomeIcon icon={faLocation} className="-mt-6" />
                <p className="">
                  3<sup>rd</sup> Floor, New No. 75,77 & 79, Lohmanradhri Towers, Egmore,
                  Chennai, Tamil Nadu 600008.
                </p>
              </Link>
              <Link href="mailto:contact@whyglobalservices.com" className="flex items-center gap-2">
                <FontAwesomeIcon icon={faMailBulk} />
                <p className="">contact@whyglobalservices.com</p>
              </Link>
              <Link  href="tel:+918270099990" className="flex items-center gap-2">
                <FontAwesomeIcon icon={faMobileAlt} />
                <p className="">+91-82700 99990</p>
              </Link>
            </article>
          </section>
        </section>
      </article>
      <article>
        <div className="h-14 text-[10px] xs:text-sm text-white flex justify-center items-center bg-primarycolor"><p>Copyright &copy; {currentYear} <Link className="underline" href="/">WHY Global Services</Link>. All rights reserved.</p></div>
      </article>
    </>
  );
};

export default Footer;

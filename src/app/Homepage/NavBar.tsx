"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logoicon from "../asset/logo.png";
import logoicon2 from "../../../public/logo-300x70.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <>
      <div className="z-20 fixed w-full md:top-7 top-0 ">
        <section className="bg-white flex justify-between px-5 items-center p-2   drop-shadow-xl z-10  w-full top-0">
          <Link href="/Homepage">
            <Image src={logoicon2} alt="logo" className="w-48" />
          </Link>
          <ul className="space-x-5  lg:flex flex-row hidden justify-center items-center cursor-pointer font-medium xl:text-base text-sm">
            <Link href="/about">
              <li className="hover:text-primarycolor">Company</li>
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
            <Link href="/contactus">
              <li className="hover:text-primarycolor">Contact us</li>
            </Link>
          </ul>
          <button className=" w-fit px-3 py-2 cursor-pointer bg-white text-primarycolor  shadow-2xl rounded-md hover:bg-primarycolor hover:text-white border text-sm font-medium border-b-4 lg:block hidden">
            Get a Quote
          </button>
          <FontAwesomeIcon
            icon={faBars}
            className="size-5 my-auto lg:hidden"
            onClick={handleClick}
          />
        </section>
        {open && (
          <div className="w-[65%] float-right todown lg:hidden">
            <ul className="flex  flex-col justify-center pl-10 text-left  pr-4 bg-primarycolor pb-5 pt-5">
              <Link href="/about">
                <li className="bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor">
                  Company
                </li>
              </Link>
              <Link href="/services">
                <li className="bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor">
                  Services
                </li>
              </Link>
              <Link href="solutions">
                <li className="bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor">
                  Solutions
                </li>
              </Link>
              <Link href="/portfolio">
                <li className="bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor">
                  Portfolio
                </li>
              </Link>
              <Link href="/events">
                <li className="bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor">
                  Events
                </li>
              </Link>
              <Link href="/news">
                <li className="bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor">
                  News
                </li>
              </Link>
              <Link href="/contactus">
                <li className="bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor">
                  Contact us
                </li>
              </Link>
              <Link href="/testimonial">
                <li className="bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor">
                  Testimonials
                </li>
              </Link>
              <li className="p-2 mx-auto w-full flex items-end justify-center   cursor-pointer bg-white text-center text-primarycolor  shadow-2xl rounded-md hover:bg-primarycolor hover:text-white border border-b-4">
                Get a Quote
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;

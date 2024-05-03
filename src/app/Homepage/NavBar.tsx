"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import logoicon from "../asset/logo.png";
import logoicon2 from "../../../public/logo-300x70.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [ShowOpen, SetshowOpen] = useState(false);
  const closeTimeout = React.useRef<NodeJS.Timeout>();

  const toggleShow = () => {
    SetshowOpen(!ShowOpen);
  };

  const toggleNavbar = () => {
    setOpen(!open);
    SetshowOpen(false);
  };

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
    SetshowOpen(false)
  };
  const openDropdown = () => {
    setShowDropdown(true);
    clearTimeout(closeTimeout.current);
  };

  const closeDropdown = () => {
    closeTimeout.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200); 
  };

  const handleMouseEnter = () => {
    openDropdown();
  };

  const handleMouseLeave = () => {
    closeDropdown();
  };

  const handleOutsideClick = (e:any) => {
    if (!e.target.closest(".dropdown-container")) {
      closeDropdown();
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="z-20 fixed w-full md:top-7 top-0 ">
        <section className="bg-white flex justify-between px-5 items-center p-2   drop-shadow-xl z-10  w-full top-0">
          <Link href="/Homepage">
            <Image src={logoicon2} alt="logo" className="w-48" />
          </Link>
          <ul className="space-x-5  lg:flex flex-row hidden justify-center items-center cursor-pointer font-medium xl:text-base text-sm">
            <div
              className="relative dropdown-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <li className="hover:text-primarycolor flex items-center">
                  Company <RiArrowDropDownLine size={20} className="" />
                </li>
              </div>
              {showDropdown && (
                <div className="absolute -ml-14 downup bg-white text-black mt-2 w-44 p-4 rounded shadow-lg">
                  <div className="flex flex-col justify-center items-center text-sm leading-loose">
                    <Link className="hover:text-primarycolor " href="/about">
                      Who We Are
                    </Link>
                    <Link
                      className="hover:text-primarycolor "
                      href="/lifeatwhy"
                    >
                      Life At WHY
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
          {open === false ? (
            <FontAwesomeIcon
              icon={faBars}
              className="size-5 my-auto lg:hidden"
              onClick={handleClick}
            />
          ) : (
            <FontAwesomeIcon
              icon={faClose}
              className="size-5 my-auto lg:hidden"
              onClick={handleClick}
            />
          )}
        </section>

        {open && (
          <div className="w-[65%] relative float-right todown lg:hidden">
            <ul className="flex  flex-col justify-center pl-10 text-left  pr-4 bg-primarycolor pb-5 pt-5">
              <div>
                <li
                  className="bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor flex items-center gap-1"
                  onClick={toggleShow}
                >
                  Company <IoIosArrowForward size={13} />
                </li>
              </div>
              <Link href="/services">
                <li
                  className="bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor"
                  onClick={toggleNavbar}
                >
                  Services
                </li>
              </Link>
              <Link href="solutions">
                <li
                  className="bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor"
                  onClick={toggleNavbar}
                >
                  Solutions
                </li>
              </Link>
              <Link href="/portfolio">
                <li
                  className="bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor"
                  onClick={toggleNavbar}
                >
                  Portfolio
                </li>
              </Link>
              <Link href="/events">
                <li
                  className="bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor"
                  onClick={toggleNavbar}
                >
                  Events
                </li>
              </Link>
              <Link href="/news">
                <li
                  className="bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor"
                  onClick={toggleNavbar}
                >
                  News
                </li>
              </Link>
              <Link href="/contactus">
                <li
                  className="bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor"
                  onClick={toggleNavbar}
                >
                  Contact us
                </li>
              </Link>
              <Link href="/testimonial">
                <li
                  className="bg-primarycolor p-2 text-white hover:bg-white hover:text-primarycolor"
                  onClick={toggleNavbar}
                >
                  Testimonials
                </li>
              </Link>
              <li
                className="p-2 mx-auto w-full flex items-end justify-center   cursor-pointer bg-white text-center text-primarycolor  shadow-2xl rounded-md hover:bg-primarycolor hover:text-white border border-b-4"
                onClick={toggleNavbar}
              >
                Get a Quote
              </li>
            </ul>
            {ShowOpen && (
              <div className="absolute todown  top-0 pt-5 pl-10 float-right ani2  h-full w-full overflow-hidden bg-primarycolor text-white">
                <ul className="flex  flex-col justify-center text-left leading-loose">
                  <li
                    onClick={toggleShow}
                    className="hover:bg-white hover:text-primarycolor p-1"
                  >
                    Back
                  </li>
                  <Link
                    href="/about"
                    className="hover:bg-white hover:text-primarycolor p-1"
                    onClick={toggleNavbar}
                  >
                    Who We Are
                  </Link>
                  <Link
                    href="/lifeatwhy"
                    className="hover:bg-white hover:text-primarycolor p-1"
                    onClick={toggleNavbar}
                  >
                    Life At WHY
                  </Link>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;

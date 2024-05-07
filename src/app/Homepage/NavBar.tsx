"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faL } from "@fortawesome/free-solid-svg-icons";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import SanityClient from "../SanityClient";
interface Alldata{
  Categoryname:string
}
const NavBar = () => {
  const [alldata,setalldata]=useState<Alldata[]|null >([])
  const [open, setOpen] = useState(false);
  const [showDropdowncompany, setShowDropdowncompany] = useState(false);
  const [ShowOpencompany, SetshowOpencompany] = useState(false);
  const [ShowOpenservice, SetshowOpenservice] = useState(false);
  const closeTimeoutcompany = React.useRef<NodeJS.Timeout>();
  const closeTimeoutservice = React.useRef<NodeJS.Timeout>();
  const [servicedropdown, setservicedropdown] = useState(false);
  const toggleShowcompany = () => {
    SetshowOpencompany(!ShowOpencompany);
  };
  const toggleShowservice = () => {
    SetshowOpenservice(!ShowOpenservice);
  };
useEffect(()=>{
  const getdata=async()=>{
    await SanityClient.fetch(`*[_type=="servicecategory"]{
      Categoryname
      
    }`).then((res:any)=>{
     setalldata(res)
     console.log(res);
     
    })
  }
  getdata();

},[])


  const toggleNavbar = () => {
    setOpen(!open);
    SetshowOpencompany(false);
  };

  const handleClick = () => {
    setOpen(!open);
    console.log(open);
    SetshowOpencompany(false);
  };

  const openDropdowncompany = () => {
    setShowDropdowncompany(true);
    clearTimeout(closeTimeoutcompany.current);
  };

  const closeDropdowncompany = () => {
    closeTimeoutcompany.current = setTimeout(() => {
      setShowDropdowncompany(false);
    }, 300);
  };
  const openDropdownservice = () => {
    setservicedropdown(true);
    clearTimeout(closeTimeoutservice.current);
  };

  const closeDropdownservice = () => {
    closeTimeoutservice.current = setTimeout(() => {
      setservicedropdown(false);
    }, 300);
  };

  const handleMouseEntercompany = () => {
    openDropdowncompany();
  };
  const handleMouseEnterservice = () => {
    openDropdownservice();
  };

  const handleMouseLeavecompany = () => {
    closeDropdowncompany();
    setservicedropdown(false);
  };
  const handleMouseLeaveservice = () => {
    closeDropdownservice();
    setShowDropdowncompany(false);
  };

  const handleOutsideClickcompany = (e: any) => {
    if (!e.target.closest(".dropdown-container")) {
      closeDropdowncompany();
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClickcompany);
    return () => {
      document.body.removeEventListener("click", handleOutsideClickcompany);
    };
  }, []);

  const handleOutsideClickservice = (e: any) => {
    if (!e.target.closest(".dropdown-containerservice")) {
      closeDropdowncompany();
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClickservice);
    return () => {
      document.body.removeEventListener("click", handleOutsideClickservice);
    };
  }, []);

  return (
    <>
      <div className="z-30 fixed w-full md:top-7 top-0 ">
        <section className="bg-white flex justify-between px-5 items-center p-4   drop-shadow-xl z-10  w-full top-0">
          <Link href="/Homepage">
            <img src="./logo-300x70.png" alt="logo" className="w-48" />
          </Link>
          <ul className="space-x-5  lg:flex flex-row hidden justify-center items-center cursor-pointer font-medium xl:text-base text-sm">
            <div
              className="relative dropdown-container"
              onMouseEnter={handleMouseEntercompany}
              onMouseLeave={handleMouseLeavecompany}
            >
              <div>
                <li className="hover:text-primarycolor flex items-center">
                  Company <RiArrowDropDownLine size={20} className="" />
                </li>
              </div>
              {showDropdowncompany && (
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
            <div
              className="relative dropdown-containerservice"
              onMouseEnter={handleMouseEnterservice}
              onMouseLeave={handleMouseLeaveservice}
            >
              <div>
                <Link
                  href="/services"
                  className="hover:text-primarycolor flex items-center"
                >
                  Services <RiArrowDropDownLine size={20} className="" />
                </Link>
              </div>
              {servicedropdown && (
                <div className="absolute -ml-14 downup bg-white text-black mt-2 w-44 p-4 rounded shadow-lg">
                  <div className="flex flex-col justify-center items-center text-sm leading-loose">
                    {alldata&&alldata.map((item:any,index:any)=>(
                      <Link
                      key={index}
                      className="hover:text-primarycolor "
                      href={{
                        pathname: "/servicesections",
                        query: { name:item?.Categoryname },
                      }}
                    >
                      {item?.Categoryname}
                    </Link>
                    ))}
                    
                  </div>
                </div>
              )}
            </div>

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
          <Link href={"/contactus"}>
            {" "}
            <button className=" w-fit px-3 py-2 cursor-pointer bg-white text-primarycolor  shadow-2xl rounded-md hover:bg-primarycolor hover:text-white border text-sm font-medium border-b-4 lg:block hidden">
              Get a Quote
            </button>
          </Link>

          {open === false ? (
            <FontAwesomeIcon
              icon={faBars}
              className="size-5 my-auto lg:hidden rote"
              onClick={handleClick}
            />
          ) : (
            <FontAwesomeIcon
              icon={faClose}
              className="size-5 my-auto lg:hidden rote2"
              onClick={handleClick}
            />
          )}
        </section>

        {open && (
          <div className="w-[65%] relative float-right todown lg:hidden">
            <ul className="flex  flex-col justify-center pl-10 text-left  pr-4 bg-primarycolor pb-5 pt-5">
              <div>
                <li
                  className="bg-primarycolor cursor-pointer p-2 text-white hover:bg-white hover:text-primarycolor flex items-center gap-1"
                  onClick={toggleShowcompany}
                >
                  Company <IoIosArrowForward size={13} />
                </li>
              </div>
              <div>
              <li
                  className="bg-primarycolor cursor-pointer p-2 text-white hover:bg-white hover:text-primarycolor flex items-center gap-1"
                  onClick={toggleShowservice}
                >
                  Services <IoIosArrowForward size={13} />
                </li>
              </div>
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
              <Link href={"/contactus"} className="w-fit">
                <li
                  className="p-2 mt-2 ml-2 w-full xs:w-48 flex items-end justify-center   cursor-pointer bg-white text-center text-primarycolor  shadow-2xl rounded-md hover:bg-primarycolor hover:text-white border border-b-4"
                  onClick={toggleNavbar}
                >
                  Get a Quote
                </li>
              </Link>
            </ul>
            {ShowOpencompany && (
              <div className="absolute todown  top-0 pt-5 pl-10 float-right ani2  h-full w-full overflow-hidden bg-primarycolor text-white">
                <ul className="flex  flex-col justify-center text-left leading-loose">
                  <li
                    onClick={toggleShowcompany}
                    className="hover:bg-white hover:text-primarycolor p-1 cursor-pointer"
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
            {ShowOpenservice && (
              <div className="absolute todown  top-0 pt-5 pl-10 float-right ani2  h-full w-full overflow-hidden bg-primarycolor text-white">
                <ul className="flex  flex-col justify-center text-left leading-loose">
                  <li
                    onClick={toggleShowservice}
                    className="hover:bg-white hover:text-primarycolor p-1 cursor-pointer"
                  >
                    Back
                  </li>
                  <Link
                    href="/services"
                    className="hover:bg-white hover:text-primarycolor p-1"
                    onClick={toggleNavbar}
                  >
                    Our Services
                  </Link>
                  {alldata&&alldata.map((item:any,index:any)=>(
                    <Link
                    className="hover:bg-white hover:text-primarycolor p-1"
                    href={{
                      pathname: "/servicesections",
                      query: { name:item?.Categoryname },
                    }}
                    onClick={toggleNavbar}
                  >
                    {item?.Categoryname}
                  </Link>
                  ))}
                  
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

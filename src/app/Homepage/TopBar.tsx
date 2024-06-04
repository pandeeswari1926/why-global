import React from "react";
import Link from "next/link";
import Image from "next/image";
import facebookicon from "../../../public/facebookicon.png";
import twittericon from "../../../public/twittericon.png";
import instagramicon from "../../../public/instagramicon.png";
import linkedinicon from "../../../public/linkedinicon.png";
import youtubeicon from "../../../public/youtubeicon.png";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const TopBar = () => {
  return (
    <>
      <section className="bg-primarycolor text-white w-full h-9 xl:px-16 px-8 md:flex justify-between items-center top-0 hidden ">
        <section className="flex gap-5 items-center justify-center ">
          <Link
            href="tel:+918270099990"
            className="flex text-sm items-center gap-1" target="_blank"
          >
            <img className="w-3" src="/indi.jpg"></img>
            <p className="text-sm font-semibold">+91-82700 99990</p>
          </Link>
          <Link
            href="tel:+447446936883"
            className="flex text-sm items-center gap-1" target="_blank"
          >
            <img className="w-3" src="/us.jpg"></img>
            <p className="text-sm font-semibold"> +44-7446936883</p>
          </Link>
          <Link
            href="tel:+6531633121"
            className="flex text-sm items-center gap-1" target="_blank"
          >
            <img className="w-3" src="/singapore.jpg"></img>
            <p className="text-sm font-semibold">+65-31633121</p>
          </Link>
        </section>
        <section className="flex gap-2 ">
        <Link className="font-semibold text-sm" href="/news">
              <p className=''>News</p>
            </Link>
            <p className="text-sm">|</p>
            <Link className="font-semibold text-sm" href="/career">
              <p className=''>Careers</p>
            </Link>
        </section>
      </section>
    </>
  );
};
export default TopBar;
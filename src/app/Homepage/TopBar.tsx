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
      <section className="bg-primarycolor text-white w-full h-8 px-10 md:flex justify-between  hidden fixed z-20">
        <section className="flex gap-2 items-center justify-center mb-1">
          <Link
            href="mailto:contact@whyglobalservices.com"
            className="flex items-center gap-1" target="_blank"
          >
            <CiMail />
            <p className="text-sm">contact@whyglobalservices.com</p>
          </Link>
          <p>|</p>
          <Link
            href="https://www.google.com/maps/place/WHY+Global+Services/@13.0712223,80.2405669,15z/data=!3m2!4b1!5s0x3a526672ac53d709:0xc472fff95bbccecd!4m6!3m5!1s0x3a5265be7d4e0655:0x1ecaf35cce10324c!8m2!3d13.071223!4d80.259021!16s%2Fg%2F1hdzfksp0?entry=ttu, Chennai"
            className="flex items-center gap-1" target="_blank"
          >
            <IoLocationOutline />
            <p className="text-sm">Egmore, Chennai.</p>
          </Link>
        </section>

        <section className="flex space-x-5 pt-1">
          <Link
            href="https://www.facebook.com/whyglobalservices/"
            target="_blank"
          >
            <FaFacebookSquare className="h-4 cursor-pointer" />
          </Link>
          <Link target="_blank" href={'https://twitter.com/wehelpyou19'}><FaSquareXTwitter className="h-4 cursor-pointer" target="_blank" /></Link>
          <Link
            href="https://www.instagram.com/whyglobalservices/"
            target="_blank"
          >
            <FaSquareInstagram className="h-4 cursor-pointer" />
          </Link>

          <Link
            href="https://www.linkedin.com/company/why-global-services/?originalSubdomain=in"
            target="_blank"
          >
            <FaLinkedin className="h-4 cursor-pointer" />
          </Link>
          <Link
            href="https://www.youtube.com/results?search_query=why+global+services"
            target="_blank"
          >
            <FaYoutube className="h-4 cursor-pointer" />
          </Link>
        </section>
      </section>
    </>
  );
};

export default TopBar;

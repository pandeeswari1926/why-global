import React from "react";
import msgicon from "../asset/mailiconb.png";
import Link from "next/link";
import locationicon from "../asset/locationiconb.png";
import Image from "next/image";
import facebookicon from "../asset/facebookiconb.png";
import twittericon from "../asset/twittericonb.png";
import instagramicon from "../asset/instagramiconb.png";
import linkedinicon from "../asset/linkediniconb.png";
import youtubeicon from "../asset/youtubeiconb.png";
import callicon from "../asset/calliconb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendar,
  faLocation,
  faMailBulk,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <section className="p-5 sm:p-10 mt-14 bg-black flex justify-center">
        <section className="p-5 sm:p-10 -mt-20 bg-white drop-shadow-2xl grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[100%] xs:w-[60%] sm:w-[100%] md:w-[100%] justify-center rounded-2xl place-items-center gap-5 sm:gap-10">
          <section className="flex flex-col items-center sm:flex-row space-x-2 cursor-pointer">
            <Image src={msgicon} alt="mailicon" className="w-5 h-5" />
            <p className="text-sm sm:text-base">
              contact@whyglobalservices.com
            </p>
          </section>
          <section className="flex-col items-center cursor-pointer flex sm:flex-row space-x-2">
            <Image src={locationicon} alt="locationicon" />
            <p className="text-sm sm:text-base">Egmore, Chennai.</p>
          </section>
          <section className="flex flex-col sm:flex-row cursor-pointer items-center space-x-2">
            <Image src={callicon} alt="callicon" />
            <p className="text-sm sm:text-base ">+91-82700 99990</p>
          </section>
          <section className="flex gap-4 xl:col-span-1 lg:col-span-3">
            <Link href="https://www.facebook.com/whyglobalservices/">
              <Image
                src={facebookicon}
                alt="facebookicon"
                className="h-5 w-5 xs:h-7 xs:w-7"
              />
            </Link>
            <Link href="">
              <Image
                src={twittericon}
                alt="twittericon"
                className="h-5 w-5 xs:h-7 xs:w-7"
              />
            </Link>
            <Link href="https://www.instagram.com/whyglobalservices/">
              <Image
                src={instagramicon}
                alt="instagramicon"
                className="h-5 w-5 xs:h-7 xs:w-7"
              />
            </Link>
            <Link href="https://www.linkedin.com/company/why-global-services/?originalSubdomain=in">
              <Image
                src={linkedinicon}
                alt="linkedinicon"
                className="h-5 w-5 xs:h-7 xs:w-7"
              />
            </Link>
            <Link href="https://www.youtube.com/results?search_query=why+global+services">
              <Image
                src={youtubeicon}
                alt="youtubeicon"
                className="h-5 w-5 xs:h-7 xs:w-7"
              />
            </Link>
          </section>
        </section>
      </section>
      <section className="px-[5%] grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 justify-between gap-5 bg-black text-white">
        <section className="flex flex-col gap-4">
          <h1 className="font-bold text-sm sm:text-lg">About Us</h1>
          <p className="text-xs sm:text-base leading-6">
            We designed a culture that allows our stewards to assimilate with
            our clients and bring our best
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h1 className="font-bold text-sm sm:text-lg">Information</h1>
          <section className="text-xs sm:text-base flex gap-3">
            <FontAwesomeIcon icon={faArrowRight} />
            <p className="-mt-1 text-xs sm:text-base leading-5">
              Managed IT Slots
            </p>
          </section>
          <section className="text-xs sm:text-base flex gap-3">
            <FontAwesomeIcon icon={faArrowRight} />
            <p className="-mt-1 text-xs sm:text-base leading-5">
              IT Consultancy
            </p>
          </section>
          <section className="text-xs sm:text-base flex gap-3">
            <FontAwesomeIcon icon={faArrowRight} />
            <p className="-mt-1 text-xs sm:text-base leading-5">
              Business Solutions
            </p>
          </section>
          <section className="text-xs sm:text-base flex gap-3">
            <FontAwesomeIcon icon={faArrowRight} />
            <p className="-mt-1 text-xs sm:text-base leading-5">
              Digital Sevices
            </p>
          </section>
          <section className="text-xs sm:text-base flex gap-3">
            <FontAwesomeIcon icon={faArrowRight} />
            <p className="-mt-1 text-xs sm:text-base leading-5">Best Seller</p>
          </section>
        </section>
        <section className="flex flex-col gap-4">
          <h1 className="font-bold text-sm sm:text-lg">About Us</h1>
          <p className="text-xs sm:text-base leading-6">
            We designed a culture that allows our stewards to assimilate with
            our clients and bring our best
          </p>
        </section>
        <section className="flex flex-col gap-4 pb-5">
          <h1 className="font-bold text-sm sm:text-lg">Contact Info</h1>
          <section className="flex gap-2">
            <FontAwesomeIcon icon={faLocation} />
            <p className="-mt-1 text-xs sm:text-base leading-5">
              3rd Floor, New No. 75,77 & 79, Lohmanradhri Towers, Egmore,
              Chennai, Tamil Nadu 60008
            </p>
          </section>
          <section className="flex gap-2">
            <FontAwesomeIcon icon={faMailBulk} />
            <p className="-mt-1 text-xs sm:text-base leading-5 whitespace-nowrap overflow-hidden text-ellipsis">
              contact@whyglobalservices.com
            </p>
          </section>
          <section className="flex gap-2">
            <FontAwesomeIcon icon={faMobile} />
            <p className="-mt-1 text-xs sm:text-base leading-5">
              +91-82700 99990
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default Footer;

"use client";
import React from "react";
import Image from "next/image";
import html from "../../../public/html_logo.png";
import css from "../../../public/icons8-css-144.png";
import js from "../../../public/icons8-javascript-144.png";
import react from "../../../public/icons8-react-js-128.png";
import vue from "../../../public/icons8-vue-js-144.png";
import angular from "../../../public/icons8-angular-144.png";
import python from "../../../public/icons8-python-144.png";
import node from "../../../public/icons8-node-js-144.png";
import express from "../../../public/icons8-express-js-144.png";
import graph from "../../../public/icons8-graphql-144.png";

import mysql from "../../../public/icons8-mysql-144.png";import mongo from "../../../public/icons8-mongodb-144.png";import oracle from "../../../public/icons8-oracle-logo-144.png";import postgre from "../../../public/icons8-postgresql-144.png";import microsoft from "../../../public/icons8-microsoft-144.png";import cloud from "../../../public/icons8-google-cloud-144.png";


import native from "../../../public/icons8-react-144.png";
import xamarine from "../../../public/icon.pngegg (5).png";
import flutter from "../../../public/icons8-flutter-144.png";
import ionic from "../../../public/icons8-ionic-144.png";
import nscript from "../../../public/icons8-nativescript-is-an-open-source-framework-to-develop-apps-96.png";

import word  from "../../../public/icons8-wordpress-144.png";
import joomla  from "../../../public/icons8-joomla-144.png";
import drupal  from "../../../public/icons8-drupal-144.png";
import magento  from "../../../public/icons8-magento-144.png";
import wix  from "../../../public/icons8-wix-144.png";
import shopify  from "../../../public/icons8-shopify-144.png";







// Array of technologies
const frontendTech = [
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: js, alt: "JavaScript" },
  { src: react, alt: "React" },
  { src: angular, alt: "Angular" },
  { src: vue, alt: "Vue" },
];

const backendTech = [
  { src: python, alt: "Python" },
  { src: node, alt: "Node.js" },
  { src: express, alt: "Express.js" },
  { src: graph, alt: "GraphQL" },
];

const database = [
  { src: mysql, alt: "mysql" },
  { src: mongo, alt: "" },
  { src: oracle, alt: "" },
  { src: postgre, alt: "" },
  { src: microsoft, alt: "" },
  { src: cloud, alt: "" },
];

const mobile = [
  { src: native, alt: "mysql" },
  { src: xamarine, alt: "" },
  { src: ionic, alt: "" },
  { src: flutter, alt: "" },
  { src: nscript, alt: "" },
  
];

const cms = [
  { src: word, alt: "mysql" },
  { src: joomla, alt: "" },
  { src: drupal, alt: "" },
  { src: magento, alt: "" },
  { src: wix, alt: "" },
  { src: shopify, alt: "" },

  
];

function Technologies() {
  return (
    <div
      className="lg:px-16 md:px-10 sm:px-6 px-5 overflow-hidden h-screen bg-cover bg-no-repeat w-full py-5"
      style={{ backgroundImage: "url('/tech_bg1.png')" }}
    >
      <div className="py-2 mb-10">
        <p className="text-left sixHundred:text-5xl xs:text-4xl text-3xl items-center font-bold">
          Technologies
        </p>
      </div>

      {/* Frontend Section */}
      <div className="bg-white rounded-lg shadow-xl mt-4 flex lg:gap-16 gap-3 justify-center">
        <div className="bg-primarycolor rounded-md shadow-lg relative -top-2 -left-2 lg:w-[30%] w-[40%]  lg:h-16 h-14 text-center text-white clip-bottom-right">
          <h2 className="font-bold lg:text-2xl md:text-lg sm:text-base py-4">FRONTEND</h2>
        </div>

        <div className="relative lg:w-[65%] w-[60%] overflow-hidden">
          <div className="flex items-center gap-16 py-2 w-max animate-scroll-left">
            {frontendTech.map((tech, index) => (
              <Image
                key={index}
                className="h-12 w-12 hover:scale-110 transition-transform duration-300 sm:h-16 sm:w-16 md:h-[9vh] md:w-[5vw]"
                src={tech.src}
                alt={tech.alt}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Backend Section */}
      <div className="bg-white rounded-lg shadow-xl mt-4 flex lg:gap-16 gap-3 justify-center">
        <div className="bg-primarycolor rounded-md shadow-lg relative -top-2 -left-2 lg:w-[30%] w-[40%]  lg:h-16 h-14 text-center text-white clip-bottom-right">
          <h2 className="font-bold lg:text-2xl md:text-lg sm:text-base py-4">BACKEND</h2>
        </div>

       
         <div className="relative lg:w-[65%] w-[60%] overflow-hidden">
          <div className="flex items-center gap-16 py-2 w-max animate-scroll-left">
            {backendTech.map((tech, index) => (
              <Image
                key={index}
                className="h-12 w-12 hover:scale-110 transition-transform duration-300 sm:h-16 sm:w-16 md:h-[9vh] md:w-[5vw]"
                src={tech.src}
                alt={tech.alt}
              />
            ))}
          </div>
        </div>
      </div>


       {/* Database Section */}
       <div className="bg-white rounded-lg shadow-xl mt-4 flex lg:gap-16 gap-3 justify-center">
        <div className="bg-primarycolor rounded-md shadow-lg relative -top-2 -left-2 lg:w-[30%] w-[40%]  lg:h-16 h-14 text-center text-white clip-bottom-right">
          <h2 className="font-bold lg:text-2xl md:text-lg sm:text-base py-4">DATABASE</h2>
        </div>

        {/* <div className="flex items-center justify-evenly gap-16 py-2 w-[65%]">
          {database.map((tech, index) => (
            <Image
              key={index}
              className="h-12 w-12 hover:scale-110 transition-transform duration-300 sm:h-16 sm:w-16 md:h-[9vh] md:w-[5vw]"
              src={tech.src}
              alt={tech.alt}
            />
          ))}
        </div> */}
        <div className="relative lg:w-[65%] w-[60%] overflow-hidden">
          <div className="flex items-center gap-16 py-2 w-max animate-scroll-left">
            {database.map((tech, index) => (
              <Image
                key={index}
                className="h-12 w-12 hover:scale-110 transition-transform duration-300 sm:h-16 sm:w-16 md:h-[9vh] md:w-[5vw]"
                src={tech.src}
                alt={tech.alt}
              />
            ))}
          </div>
        </div>
        
      </div>


       {/* MOBILE Section */}
       <div className="bg-white rounded-lg shadow-xl mt-4 flex lg:gap-16 gap-3 justify-center">
        <div className="bg-primarycolor rounded-md shadow-lg relative -top-2 -left-2 lg:w-[30%] w-[40%]  lg:h-16 h-14 text-center text-white clip-bottom-right">
          <h2 className="font-bold lg:text-2xl md:text-lg sm:text-base py-4">MOBILE</h2>
        </div>

        {/* <div className="flex items-center justify-evenly gap-16 py-2 w-[65%]">
          {mobile.map((tech, index) => (
            <Image
              key={index}
              className="h-12 w-12 hover:scale-110 transition-transform duration-300 sm:h-16 sm:w-16 md:h-[9vh] md:w-[5vw]"
              src={tech.src}
              alt={tech.alt}
            />
          ))}
        </div> */}
         <div className="relative lg:w-[65%] w-[60%] overflow-hidden">
          <div className="flex items-center gap-16 py-2 w-max animate-scroll-left">
            {mobile.map((tech, index) => (
              <Image
                key={index}
                className="h-12 w-12 hover:scale-110 transition-transform duration-300 sm:h-16 sm:w-16 md:h-[9vh] md:w-[5vw]"
                src={tech.src}
                alt={tech.alt}
              />
            ))}
          </div>
        </div>
      </div>


       {/* CMS Section */}
       <div className="bg-white rounded-lg shadow-xl mt-4 flex lg:gap-16 gap-3 justify-center">
        <div className="bg-primarycolor rounded-md shadow-lg relative -top-2 -left-2 lg:w-[30%] w-[40%]  lg:h-16 h-14 text-center text-white clip-bottom-right">
          <h2 className="font-bold lg:text-2xl md:text-lg sm:text-base py-4">CMS</h2>
        </div>

        {/* <div className="flex items-center justify-evenly gap-16 py-2 w-[65%]">
          {cms.map((tech, index) => (
            <Image
              key={index}
              className="h-12 w-12 hover:scale-110 transition-transform duration-300 sm:h-16 sm:w-16 md:h-[9vh] md:w-[5vw]"
              src={tech.src}
              alt={tech.alt}
            />
          ))}
        </div> */}
         <div className="relative lg:w-[65%] w-[60%] overflow-hidden">
          <div className="flex items-center gap-16 py-2 w-max animate-scroll-left">
            {cms.map((tech, index) => (
              <Image
                key={index}
                className="h-12 w-12 hover:scale-110 transition-transform duration-300 sm:h-16 sm:w-16 md:h-[9vh] md:w-[5vw]"
                src={tech.src}
                alt={tech.alt}
              />
            ))}
          </div>
        </div>
      </div>


    
    </div>
  );
}

export default Technologies;

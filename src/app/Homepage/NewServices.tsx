import React from "react";
import { PiMedalFill } from "react-icons/pi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaHandPointRight } from "react-icons/fa";

const TimelineCard = () => {
  const services = [
    {
      title: "Web Designing",
      description:
        "Crafting visually compelling and responsive websites that enhance user experience and reflect your brand’s identity.",
      iconSrc: "/newService1.png",
      bgImage: "url('/wgs gifs (10) 1.png')",
      details: [
        "Responsive Website Design",
        "UI/UX Design",
        "Website Maintenance and Support",
      ],
      bg_color: "			#801818",
    },
    {
      title: "Web Development",
      description:
        "Building robust, scalable websites with cutting-edge technologies, ensuring functionality and seamless performance.",
      iconSrc: "/newService4.png",
      bgImage: "url('/wgs gifs (10) 1.png')",
      details: [
        "Custom Web App Development",
        "E-commerce Website Development",
        "CMS Development",
      ],
      bg_color: "	#CC8899",
    },
    {
      title: "Mobile App Development",
      description:
        "Developing intuitive and user-friendly mobile apps tailored to meet your business needs across all platforms.",
      iconSrc: "/newService2.png",
      bgImage: "url('/wgs gifs (10) 1.png')",
      details: [
        "iOS App Development",
        "Android App Development",
        "Cross-Platform App Development",
      ],
      bg_color: "		#AD4D8C",
    },
    {
      title: "Digital Marketing",
      description:
        "Boosting your online presence with data-driven strategies, SEO, and social media marketing to drive traffic and conversions.",
      iconSrc: "/newService5.png",
      bgImage: "url('/wgs gifs (10) 1.png')",
      details: [
        "Search Engine Optimization",
        "Social Media Marketing",
        "Search Engine Marketing",
        "Content Marketing",
        "Affiliate Marketing",
      ],
      bg_color: "	#42B3AE",
    },
    {
      title: "Internet of Things (IoT)",
      description:
        "Boosting your online presence with data-driven strategies, SEO, and social media marketing to drive traffic and conversions.",
      iconSrc: "/newService3.png",
      bgImage: "url('/wgs gifs (10) 1.png')",
      details: [
        "IoT Consultation and Strategy",
        "IoT Device Integration",
        "IoT Data Analytics",
      ],
      bg_color: "	#E52B50",
    },
  ];

  return (
    <>
      <div
        className="bg-gray-50 py-5  w-full h-full bg-cover object-fill bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/bg_services.png')" }}
      >
        <div className="md:py-8 md:pl-10 p-5">
          <p className="sixHundred:text-5xl xs:text-4xl text-2xl lg:justify-start justify-center flex items-center font-bold">
            Our Services
          </p>
        </div>
        {/* <div className="w-full h-full flex lg:flex-row flex-col lg:justify-around justify-center items-center lg:items-start py-5 px-5">

                    <div>
                        <div>
                            <div className='flex justify-center sm:justify-start items-center'>
                                <div className='bg-slate-50 z-10 drop-shadow-xl rounded-full w-16 h-16 flex justify-center items-center'>
                                    <div className='bg-orange-500  flex justify-center items-center rounded-full drop-shadow-lg w-11 h-11 p-2'>
                                      
                                        <img src="/newService1.png"/>
                                    </div>

                                </div>
                                <div className='w-72 sm:w-[370px] flex justify-start items-center rounded-r-3xl -ml-10 bg-primarycolor h-10'>
                                    <p className='w-16'></p>
                                    <p className='text-lg sm:text-2xl font-semibold'>Web Designing</p>
                                </div>
                            </div>
                            <div className="w-full h-full flex py-5 px-3">
                                <div className="ml-10 ">
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                    <div className="h-6 w-0.5 bg-primarycolor mx-auto"></div>
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                    <div className="h-6 w-0.5 bg-primarycolor mx-auto"></div>
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                </div>

                                <div className="ml-3 space-y-2">
                                    <div className="w-64 ">
                                        <h4 className="font-bold text-base ">Responsive Website Design</h4>

                                    </div>

                                    <div className="w-64 ">
                                        <h4 className="font-bold text-base  ">UI/UX Design</h4>

                                    </div>

                                    <div className="w-64 ">
                                        <h4 className="font-bold text-base  ">Website Maintenance and Support</h4>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='flex justify-center sm:justify-start items-center'>
                                <div className='bg-slate-50 z-10 drop-shadow-xl rounded-full w-16 h-16 flex justify-center items-center'>
                                    <div className='bg-orange-500 flex justify-center items-center rounded-full drop-shadow-lg w-11 h-11 p-3'>
                                      
                                        <img src="/newService2.png"/>
                                    </div>

                                </div>
                                <div className='w-72 sm:w-[370px] flex justify-start items-center rounded-r-3xl -ml-10 bg-primarycolor h-10'>
                                    <p className='w-16'></p>
                                    <p className='text-lg sm:text-2xl font-semibold'>Mobile App Development</p>
                                </div>
                            </div>
                            <div className="w-full h-full flex py-5 px-3">
                                <div className="ml-10 ">
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                    <div className="h-6 w-0.5 bg-primarycolor mx-auto"></div>
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                    <div className="h-6 w-0.5 bg-primarycolor mx-auto"></div>
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                </div>

                                <div className="ml-3 space-y-2">
                                    <div className="w-64 ">
                                        <h4 className="font-bold text-base ">iOS App Development</h4>

                                    </div>

                                    <div className="w-64 ">
                                        <h4 className="font-bold text-base  ">Android App Development</h4>

                                    </div>

                                    <div className="w-64 ">
                                        <h4 className="font-bold text-base  ">Cross-Platform App Development</h4>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='flex justify-center sm:justify-start items-center'>
                                <div className='bg-slate-50 z-10 drop-shadow-xl rounded-full w-16 h-16 flex justify-center items-center'>
                                    <div className='bg-orange-500 flex justify-center items-center rounded-full drop-shadow-lg w-11 h-11 p-2'>
                                      
                                        <img src="/newService3.png"/>
                                    </div>

                                </div>
                                <div className='w-72 sm:w-[370px] flex justify-start items-center rounded-r-3xl -ml-10 bg-primarycolor h-10'>
                                    <p className='w-16'></p>
                                    <p className='text-lg sm:text-2xl font-semibold'>Internet of Things (IoT)</p>
                                </div>
                            </div>
                            <div className="w-full h-full flex py-5 px-3">
                                <div className="ml-10 ">
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                    <div className="h-6 w-0.5 bg-primarycolor mx-auto"></div>
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                    <div className="h-6 w-0.5 bg-primarycolor mx-auto"></div>
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                </div>

                                <div className="ml-3 space-y-2">
                                    <div className="w-64 ">
                                        <h4 className="font-bold text-base">IoT Consultation and Strategy</h4>

                                    </div>

                                    <div className="w-64 ">
                                        <h4 className="font-bold text-base">IoT Device Integration</h4>

                                    </div>

                                    <div className="w-64 ">
                                        <h4 className="font-bold text-base">IoT Data Analytics</h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className='flex justify-center sm:justify-start items-center'>
                                <div className='bg-slate-50 z-10 drop-shadow-xl rounded-full w-16 h-16 flex justify-center items-center'>
                                    <div className='bg-orange-500 flex justify-center items-center rounded-full drop-shadow-lg w-11 h-11 p-2'>
                                     
                                        <img src="/newService4.png"/>
                                    </div>

                                </div>
                                <div className='w-72 sm:w-[370px] flex justify-start items-center rounded-r-3xl -ml-10 bg-primarycolor h-10'>
                                    <p className='w-16'></p>
                                    <p className='text-lg sm:text-2xl font-semibold'>Web Development</p>
                                </div>
                            </div>
                            <div className="w-full h-full flex py-5 px-3">
                                <div className="ml-10 ">
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                    <div className="h-6 w-0.5 bg-primarycolor mx-auto"></div>
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                    <div className="h-6 w-0.5 bg-primarycolor mx-auto"></div>
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                </div>

                                <div className="ml-3 space-y-2">
                                    <div className="w-72 ">
                                        <h4 className="font-bold text-base ">Custom Web App Development</h4>

                                    </div>

                                    <div className="w-72 ">
                                        <h4 className="font-bold text-base  ">E-commerce Website Development</h4>

                                    </div>

                                    <div className="w-72 ">
                                        <h4 className="font-bold text-base  ">Content Management System (CMS)
                                        Development</h4>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='flex justify-center sm:justify-start items-center'>
                                <div className='bg-slate-50 z-10 drop-shadow-xl rounded-full w-16 h-16 flex justify-center items-center'>
                                    <div className='bg-orange-500 flex justify-center items-center rounded-full drop-shadow-lg w-11 h-11 p-2'>
                                        <img src="/newService5.png"/>
                                    </div>

                                </div>
                                <div className='w-72 sm:w-[370px] flex justify-start items-center rounded-r-3xl -ml-10 bg-primarycolor h-10'>
                                    <p className='w-16'></p>
                                    <p className='text-lg sm:text-2xl font-semibold'>Digital Marketing</p>
                                </div>
                            </div>
                            <div className="w-full h-full flex py-5 px-3">
                                <div className="ml-10">
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                    <div className="h-6 w-0.5 bg-primarycolor mx-auto"></div>
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                    <div className="h-6 w-0.5 bg-primarycolor mx-auto"></div>
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                    <div className="h-6 w-0.5 bg-primarycolor mx-auto"></div>
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                    <div className="h-6 w-0.5 bg-primarycolor mx-auto"></div>
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                    <div className="h-6 w-0.5 bg-primarycolor mx-auto"></div>
                                    <div className="w-3 h-3 bg-primarycolor rounded-full"></div>
                                </div>

                                <div className="ml-3 space-y-2">
                                    <div className="w-72">
                                        <h4 className="font-bold text-base ">Search Engine Optimization (SEO)
                                        </h4>
                                    </div>

                                    <div className="w-64 ">
                                        <h4 className="font-bold text-base  ">Social Media Marketing (SMM)</h4>
                                    </div>

                                    <div className="w-64 pt-1">
                                        <h4 className="font-bold text-base  ">Search Engine Marketing (SEM)</h4>
                                    </div>
                                    <div className="w-64 pt-1">
                                        <h4 className="font-bold text-base ">Content Marketing</h4>
                                    </div>

                                    <div className="w-64 pt-">
                                        <h4 className="font-bold text-base  ">Affiliate Marketing</h4>
                                    </div>

                                    <div className="w-64 pt-1">
                                        <h4 className="font-bold text-base  ">Photography & Videography</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        <div className="w-full mt-4 grid grid-cols-1 gap-10 px-4 sm:px-10 md:px-16 lg:px-20 lg:grid-cols-3 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative flex h-72 bg-white w-full flex-col items-center justify-center shadow-lg rounded-lg group"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="mt-2">
                  <div className="bg-slate-50 z-10 drop-shadow-xl rounded-full flex justify-center items-center">
                    <div
                      className="flex justify-center items-center rounded-full drop-shadow-lg w-14 h-14 p-2"
                      style={{ backgroundColor: service.bg_color }}
                    >
                      <img
                        src={service.iconSrc}
                        className="w-10 p-1 h-10"
                        alt={`${service.title} Icon`}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center px-4 sm:px-5 py-4">
                  <h2 className="font-semibold text-lg md:text-xl text-center">
                    {service.title}
                  </h2>
                  <p className="text-sm md:text-base mt-2 text-center">
                    {service.description}
                  </p>
                </div>
              </div>
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className="w-full h-full bg-center bg-no-repeat"
                  style={{ backgroundImage: service.bgImage }}
                >
                  <div
                    className="absolute inset-0 opacity-90"
                    style={{ backgroundColor: service.bg_color }}
                  ></div>
                  <div className="relative flex flex-col gap-4 items-start pl-5 pr-2 bg-transparent justify-center h-full">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex gap-2 justify-center items-center">
                        <div className=" text-primarycolor rounded-full">
                          <FaHandPointRight className="size-6 rounded-full" />
                        </div>
                        <p className="cursor-pointer text-xs md:text-lg font-semibold text-white transition-transform duration-300 ease-out transform hover:scale-95">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TimelineCard;

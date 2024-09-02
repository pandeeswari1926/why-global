import React from "react";
import { PiMedalFill } from "react-icons/pi";

const TimelineCard = () => {
    return (
        <>
            <div className="bg-gray-50 py-5 overflow-hidden">
                <div className='md:py-8 md:pl-10 p-5'>
                    <p className='sixHundred:text-5xl xs:text-4xl text-2xl lg:justify-start justify-center flex items-center font-bold'>Our Services</p>
                </div>
                <div className="w-full h-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:justify-around justify-center items-center lg:items-start py-5 px-5">

                   
                        <div>
                            <div className='flex justify-center sm:justify-start items-center'>
                                <div className='bg-slate-50 z-10 drop-shadow-xl rounded-full w-16 h-16 flex justify-center items-center'>
                                    <div className='bg-orange-500  flex justify-center items-center rounded-full drop-shadow-lg w-11 h-11 p-2'>
                                        {/* <PiMedalFill className='p-1 size-12 text-white' /> */}
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
                                        {/* <PiMedalFill className='p-1 size-12 text-white' /> */}
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
                                        {/* <PiMedalFill className='p-1 size-12 text-white' /> */}
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
                   

                    
                        <div>
                            <div className='flex justify-center sm:justify-start items-center'>
                                <div className='bg-slate-50 z-10 drop-shadow-xl rounded-full w-16 h-16 flex justify-center items-center'>
                                    <div className='bg-orange-500 flex justify-center items-center rounded-full drop-shadow-lg w-11 h-11 p-2'>
                                        {/* <PiMedalFill className='p-1 size-12 text-white' /> */}
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
                                        {/* <PiMedalFill className='p-1 size-12 text-white' /> */}
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
            </div>
        </>
    );
};

export default TimelineCard;

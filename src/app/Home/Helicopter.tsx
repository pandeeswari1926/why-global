"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import heli from "../asset/helicopter.gif"
import style2 from '../asset/style2.png';
import profile1 from '../asset/profile1.png';
import style3 from '../asset/style3.png';
import star from '../asset/stars.png';
import Slider from 'react-slick'

function Helicopter() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 1500,
                }
            },]

    };
    const [clickindex, setclickindex] = useState(0)
    function handleclick(value: any, e: any) {
        setContent(e.target.textContent)
        setclickindex(value)
        console.log(clickindex)

    }
    const [Content, setContent] = useState("Frontend")
    const listItems = ["Frontend", "Backend", 'Database', "Mobile", "CMS"]
    return (
        <div className=''>
            <link rel="stylesheet"
                type="text/css"
                charSet='UTF-8'
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css">
            </link>
            <link rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"></link>
            <div className='bg-custom w-full h-full bg-no-repeat relative lg:p-10'>
                <div className='relative z-10'>
                    <div className='w-full h-full lg:h-[400px] relative mx-auto bg-white right-0 z-10'>
                        <div className='pt-6 pl-10'>
                            <h1 className='text-2xl text-primarycolor font-semibold text-center'>Our Clients Review</h1>
                            <h1 className='text-2xl text-gray-600 font-semibold text-center'>Our Clients Testimonials About</h1>
                        </div>
                        <div className='flex lg:flex-row flex-col gap-10 p-5'>
                            <Slider {...settings} className='overflow-hidden'>
                                <div>
                                    <div className='flex justify-center lg:flex-row flex-col w-[90%] relative mx-auto  pt-8'>
                                        <div className='lg:w-[80%] w-full relative'>
                                            <Image src={style2} alt="style2" className="lg:w-[80%] w-full" />
                                            <Image src={profile1} alt="Profile1" className="lg:w-[70%] w-full top-2 absolute" />
                                            <Image src={style3} alt="style2" className="absolute sm:w-[20%] w-[30%] top-0 right-[80%]" />
                                        </div>
                                        <div className='w-full lg:pt-2'>
                                            <p className="lg:text-left lg:text-md font-normal text-[#5D5D5D] text-justify">Virtual reality environments offer a way to ingrain knowledge more deeply and quickly compared to traditional methods. By prioritizing spatial information, VR helps learners map their understanding effectively.</p>
                                            <hr className=' h-0.5 bg-[#FF8900] mt-4 ' />
                                            <div className='flex md:flex-row flex-col justify-between'>
                                                <div>
                                                    <p className='text-center'>MARK</p>
                                                    <p className=' text-center text-[#FF8900]'>CEO</p>
                                                </div>
                                                <div className='justify-center items-center pl-[10%] md:pl-0 md:w-[30%] mx-auto'>
                                                    <Image src={star} alt='' className=' md:mt-5' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-center lg:flex-row flex-col w-[90%] relative mx-auto  pt-8'>
                                        <div className='lg:w-[80%] w-full relative'>
                                            <Image src={style2} alt="style2" className="lg:w-[80%] w-full" />
                                            <Image src={profile1} alt="Profile1" className="lg:w-[70%] w-full top-2 absolute" />
                                            <Image src={style3} alt="style2" className="absolute sm:w-[20%] w-[30%] top-0 right-[80%]" />
                                        </div>
                                        <div className='w-full lg:pt-2'>
                                            <p className="lg:text-left lg:text-md font-normal text-[#5D5D5D] text-justify">Virtual reality environments offer a way to ingrain knowledge more deeply and quickly compared to traditional methods. By prioritizing spatial information, VR helps learners map their understanding effectively.</p>
                                            <hr className=' h-0.5 bg-[#FF8900]  mt-4 ' />
                                            <div className='flex md:flex-row flex-col justify-between'>
                                                <div>
                                                    <p className='text-center'>MARK</p>
                                                    <p className=' text-center text-[#FF8900]'>CEO</p>
                                                </div>
                                                <div className='justify-center items-center pl-[10%] md:pl-0 md:w-[30%] mx-auto'>
                                                    <Image src={star} alt='' className=' md:mt-5' />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className='flex justify-center lg:flex-row flex-col w-[90%] relative mx-auto  pt-8'>
                                        <div className='lg:w-[80%] w-full relative'>
                                            <Image src={style2} alt="style2" className="lg:w-[80%] w-full" />
                                            <Image src={profile1} alt="Profile1" className="lg:w-[70%] w-full top-2 absolute" />
                                            <Image src={style3} alt="style2" className="absolute sm:w-[20%] w-[30%] top-0 right-[80%]" />
                                        </div>
                                        <div className='w-full lg:pt-2'>
                                            <p className="lg:text-left lg:text-md font-normal text-[#5D5D5D] text-justify">Virtual reality environments offer a way to ingrain knowledge more deeply and quickly compared to traditional methods. By prioritizing spatial information, VR helps learners map their understanding effectively.</p>
                                            <hr className=' h-0.5 bg-[#FF8900]  mt-4 ' />
                                            <div className='flex md:flex-row flex-col justify-between'>
                                                <div>
                                                    <p className='text-center'>MARK</p>
                                                    <p className=' text-center text-[#FF8900]'>CEO</p>
                                                </div>
                                                <div className='justify-center items-center pl-[10%] md:pl-0 md:w-[30%] mx-auto'>
                                                    <Image src={star} alt='' className=' md:mt-5' />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className='oran bg-primarycolor fixed top-[24%] md:top-[18%] lg:top-[10%] left-0  w-[60%] h-[50%] lg:block hidden'>
                    <div className='flex flex-col gap-8 justify-center absolute items-center h-full lg:left-10 lg:top-24'>
                        <div className=''>
                            <p className='lg:text-2xl md:text-2xl text-lg text-white'>Technology</p>
                            <p className='lg:text-5xl md:text-4xl text-xl text-white'>We Work With</p>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:h-fit relative  mx-auto bg-white right-0 z-10 mt-[15%] '>
                    <div className='lg:hidden'>
                        <p className='lg:text-2xl md:text-2xl text-2xl pt-5 text-primarycolor text-center'>Technology</p>
                        <p className='lg:text-3xl md:text-4xl text-3xl  font-semibold text-center'>We Work With</p>
                    </div>
                    <div className='w-full h-full md:flex lg:flex-row flex-col'>
                        <div className='w-full md:h-full h-[50%]'>
                            <Image src={heli} alt='Helicopter' className='h-full' ></Image>
                        </div>
                        <div className='w-full relative flex flex-col md:gap-7 lg:pt-20'>
                            <ul className='w-full  flex flex-row justify-around   md:justify-evenly md:text-lg text-sm'>
                                {listItems.map((item, index) => <li key={index} className='cursor-pointer font-semibold text-xs md:text-lg' style={clickindex === index ? { color: "#FF9315" } : { color: "black" }} onClick={(e) => handleclick(index, e)}>{item}</li>)}
                            </ul>
                            <div className='lg:p-5'>
                                {Content === "Frontend" && (<p className='md:text-lg  text-justify text-xs p-5 md:text-left mx-auto w-full'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettingthe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>)
                                }
                                {Content === "Backend" && (<p className='md:text-lg  text-justify text-xs p-5 md:text-left mx-auto w-full'>1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettingthe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>)
                                }
                                {Content === "Mobile" && (<p className='md:text-lg  text-justify text-xs p-5 md:text-left mx-auto w-full'>2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettingthe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>)
                                }
                                {Content === "Database" && (<p className='md:text-lg  text-justify text-xs p-5 md:text-left mx-auto w-full'>3Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettingthe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>)
                                }
                                {Content === "CMS" && (<p className='md:text-lg  text-justify text-xs p-5 md:text-left mx-auto w-full'>4Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettingthe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Helicopter
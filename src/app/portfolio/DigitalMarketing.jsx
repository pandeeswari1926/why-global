import React from 'react';
import Image from 'next/image';
import dm1 from '../../../public/dm1.png'
import dmcircle1 from '../../../public/dmcircle1.png'
import dmpoint1 from '../../../public/dmpoint1.png'
import dmlike1 from '../../../public/dmlike1.png'
import dmwave1 from '../../../public/dmwave1.png'
import whytaplogo from '../../../public/whytaplogo.png'
import dmbar1 from '../../../public/dmbar1.png'
import dmbg from '../../../public/dmbg.png'
import { MdArrowOutward } from "react-icons/md";
import { Switch } from "antd";

const Digitalmarketing = () => {

  return (
    <article className='relative h-screen '>
        <Image src={dmbg} className='h-full'/>
        <div className='absolute -translate-x-1/2 -translate-y-1/2 lg:top-[42.5%] lg:left-[65%] top-1/2 left-1/2'>
            <article className=''>
                <article className='flex flex-col justify-center items-center h-screen'>
                    <article className='relative w-[270px] xs:w-[400px] sm:w-[600px] h-[450px] bg-gray-200 border-t-[40px] border-whytap rounded-xl flex flex-col justify-center items-center'>
                        <div className='flex flex-col gap-4'>

                            <h1 className='font-semibold xs:text-xl text-[#3E3E3E] pl-5 sm:pl-12 xs:pl-9 text-start'>Overview</h1>

                            <div className='grid grid-cols-2 place-items-center sm:flex flex-row justify-center items-center gap-3 px-5 sm:px-0'>

                                <div className='flex justify-center items-center gap-4   bg-white w-28 xs:w-44 sm:w-fit px-1 py-4 rounded-lg'>
                                    <div className='bg-whytap w-6 h-6 rounded-full' />
                                    <div>
                                        <h1 className='text-[10px] xs:text-xs font-medium'>No.1 Institute</h1>
                                        {/* <p className='text-xs'>Student's Empowerment</p> */}
                                    </div>
                                </div>

                                <div className='flex justify-center items-center gap-4 bg-white w-28 xs:w-44 sm:w-fit px-1 py-4 rounded-lg'>
                                    <div className='bg-whytap w-6 h-6 rounded-full' />
                                    <div>
                                        <h1 className='text-[10px] xs:text-xs font-medium'>No.1 Institute</h1>
                                        {/* <p className='text-xs'>Student's Empowerment</p> */}
                                    </div>
                                </div>

                                <div className='flex justify-center items-center gap-4 bg-white w-28 xs:w-44 sm:w-fit px-1 py-4 rounded-lg'>
                                    <div className='bg-whytap w-6 h-6 rounded-full' />
                                    <div>
                                        <h1 className='text-[10px] xs:text-xs font-medium'>No.1 Institute</h1>
                                        {/* <p className='text-xs'>Student's Empowerment</p> */}
                                    </div>
                                </div>

                                <div className='border-dashed border-gray-500   border rounded-lg bg-gray-300 w-28 xs:w-44 sm:w-24 h-14'>

                                </div>

                            </div>

                            <div className='flex gap-3 justify-center items-center'>
                                <div className='sm:w-[66%] w-28 h-28 xs:w-44 xs:h-44  sm:h-52 bg-white rounded-lg flex flex-col sm:justify-center justify-end pb-5 xs:pb-8 sm:pb-0'>
                                    <Image src={dm1}/>
                                </div>
                                <div className='sm:w-[16%] w-28 h-28 xs:w-44 xs:h-44 sm:h-52 bg-white rounded-lg flex flex-col justify-center items-center'>
                                    <Image src={dmcircle1} className='p-3'/>
                                </div> 
                            </div>

                        </div>

                        {/* absolute contents */}
                        <article className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-0 sm:-mb-36 -mb-[157px]'>
                            <div className='flex xs:gap-1 sm:gap-3'>
                                <div className='sm:w-64 xs:w-40 w-24 bg-white drop-shadow-lg rounded-lg flex flex-col justify-end '>
                                        <Image src={dmpoint1} className='rounded-lg'/>
                                </div>

                                <div className='bg-white drop-shadow-lg rounded-lg w-[130px]'>
                                <div className='flex justify-center items-center gap-3  xs:px-2 py-4 '>
                                    <div className='bg-whytap w-6 h-6 rounded-full' />
                                    <div>
                                        <h1 className='text-[10px] xs:text-xs font-medium'>No.1 Institute</h1>
                                    </div>
                                </div>
                                <div className='flex justify-center items-center gap-3  xs:px-2 py-4 '>
                                    <div className='bg-whytap w-6 h-6 rounded-full' />
                                    <div>
                                        <h1 className='text-[10px] xs:text-xs font-medium'>No.1 Institute</h1>
                                    </div>
                                </div>
                                </div>

                                <div className='bg-white drop-shadow-lg flex flex-col justify-center px-2 pt-4 w-24 rounded-lg'>
                                    <Image src={dmwave1} className=''/>
                                </div>

                            </div>
                        </article>

                        <article className='absolute -translate-x-1/2 -translate-y-1/2 right-0 -mr-[68px] xs:-mr-[75px] sm:-mr-[101px] top-[46%] xs:top-[43%] sm:top-[20.5%]'>
                            <div className='flex justify-center items-center bg-white drop-shadow-lg w-32 xs:w-44 sm:w-40 sm:h-20 h-14  rounded-lg gap-2'>
                                <Image src={dmlike1} className='w-10 h-10 rounded-full'/>
                                <div>
                                    <h2 className='text-xs xs:text-sm font-semibold'>398K</h2>
                                    <p className='text-[10px] xs:text-xs text-[#5A7184]'>Total Likes</p>
                                </div>
                            </div>
                        </article>

                        <article className='absolute -translate-x-1/2 -translate-y-1/2 top-0 sm:top-2 md:left-0 sm:left-14 left-[50%]'>
                        <div className='bg-white drop-shadow-lg border border-whytap px-4 py-2 rounded-lg logo1'>
                            <Image src={whytaplogo} className='sm:w-28 xs:w-24 w-20'/>
                        </div>
                        </article>

                        <article className='absolute -translate-x-1/2 -translate-y-1/2 md:top-48 xs:top-60 top-64 sm:top-52 md:-ml-4 md:left-0 left-12'>
                            <div className='bg-white rounded-lg md:h-40 m-1  drop-shadow-lg flex flex-col justify-between py-2'>
                                <div className='px-2'>
                                    <h1 className='py-1 text-[10px] xs:text-xs sm:text-base'>20 Days</h1>
                                    <p className='text-[8px] sm:text-xs text-[#5A7184]'>Average Likes gained</p>
                                    <div className='flex text-[8px] sm:text-xs bg-whytap w-fit mt-1 text-white p-1 rounded-lg'>
                                        <MdArrowOutward />
                                        <p>10.5%</p>
                                    </div>
                                </div>
                                <div className='sm:w-20 xs:w-12 w-8 mx-auto '>
                                    <Image src={dmbar1}/>
                                </div>
                            </div>
                        </article>

                        <article className='absolute top-0 -mt-16 xs:-mt-10 sm:-mt-3 ml-[250px] xs:ml-[400px] sm:ml-20'>
                            <div className='bg-white sm:w-64 w-24 p-2 rounded-lg drop-shadow-lg'>
                                <h2 className=' font-semibold py-2 text-[10px] sm:text-xs pl-1'>Ads Statuses</h2>
                                <div className='grid xs:grid-cols-1 sm:grid-cols-3 gap-2 place-items-center'>
                                    <Switch
                                        checkedChildren={<span className='text-[10px] flex justify-center items-center'>Inactive</span>}
                                        unCheckedChildren={<span className='text-[10px] flex justify-center items-center'>Active</span>}
                                        className='bg-whytap'
                                        size='small'
                                    />
                                    <Switch
                                        checkedChildren={<span className='text-[10px] flex justify-center items-center'>Inactive</span>}
                                        unCheckedChildren={<span className='text-[10px] flex justify-center items-center'>NeedAction</span>}
                                        className='bg-whytap'
                                        size='small'
                                    />
                                    <Switch
                                        checkedChildren={<span className='text-[10px] flex justify-center items-center'>Inactive</span>}
                                        unCheckedChildren={<span className='text-[10px] flex justify-center items-center'>Allocated</span>}
                                        className='bg-whytap'
                                        size='small'
                                    />
                                    <Switch
                                        checkedChildren={<span className='text-[10px] flex justify-center items-center'>Active</span>}
                                        unCheckedChildren={<span className='text-[10px] flex justify-center items-center'>Inactive</span>}
                                        className='bg-whytap'
                                        size='small'
                                    />
                                    <Switch
                                        checkedChildren={<span className='text-[10px] flex justify-center items-center'>Inactive</span>}
                                        unCheckedChildren={<span className='text-[10px] flex justify-center items-center'>Suspended</span>}
                                        className='bg-whytap'
                                        size='small'
                                    />
                                    <Switch
                                        checkedChildren={<span className='text-[10px] flex justify-center items-center'>Inactive</span>}
                                        unCheckedChildren={<span className='text-[10px] flex justify-center items-center'>Allocated</span>}
                                        className='bg-whytap'   
                                        size='small'
                                    />
                                </div>
                            </div>
                        </article>

                    </article>


                </article>
            </article>
        </div>
        <div className='absolute xl:top-[20%] top-[4.5%] left-0'>
            <div className='bg-[#FF9315] rounded-r-xl text-white md:h-20 h-12 w-64 md:w-96 flex  justify-end items-center'>
                <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold pr-3'>DIGITAL MARKETING</h2>
            </div>
        </div>
    </article>
  )
}

export default Digitalmarketing

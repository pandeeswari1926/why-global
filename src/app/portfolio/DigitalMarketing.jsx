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
        <div className='absolute -translate-x-1/2 -translate-y-1/2 top-[42.5%] left-[65%]'>
            <article>
                <article className='flex flex-col justify-center items-center h-screen'>
                    <article className='relative w-[600px] h-[450px] bg-gray-200 border-t-[40px] border-whytap rounded-xl flex flex-col justify-center items-center'>
                        <div className='flex flex-col gap-4'>

                            <h1 className='font-semibold text-xl text-[#3E3E3E] pl-12'>Overview</h1>

                            <div className='flex justify-center gap-3'>

                                <div className='flex justify-center items-center gap-4  bg-white w-fit px-1 py-4 rounded-lg'>
                                    <div className='bg-whytap w-6 h-6 rounded-full' />
                                    <div>
                                        <h1 className='text-xs font-medium'>No.1 Institute</h1>
                                        {/* <p className='text-xs'>Student's Empowerment</p> */}
                                    </div>
                                </div>

                                <div className='flex justify-center items-center gap-4 bg-white w-fit px-1 py-4 rounded-lg'>
                                    <div className='bg-whytap w-6 h-6 rounded-full' />
                                    <div>
                                        <h1 className='text-xs font-medium'>No.1 Institute</h1>
                                        {/* <p className='text-xs'>Student's Empowerment</p> */}
                                    </div>
                                </div>

                                <div className='flex justify-center items-center gap-4 bg-white w-fit px-1 py-4 rounded-lg'>
                                    <div className='bg-whytap w-6 h-6 rounded-full' />
                                    <div>
                                        <h1 className='text-xs font-medium'>No.1 Institute</h1>
                                        {/* <p className='text-xs'>Student's Empowerment</p> */}
                                    </div>
                                </div>

                                <div className='border-dashed border-gray-500 border rounded-lg bg-gray-300 w-24 h-14'>

                                </div>

                            </div>

                            <div className='flex gap-3 justify-center items-center'>
                                <div className='w-[66%] h-52 bg-white rounded-lg flex flex-col justify-center'>
                                    <Image src={dm1}/>
                                </div>
                                <div className='w-[16%] h-52 bg-white rounded-lg flex flex-col justify-center'>
                                    <Image src={dmcircle1} className='p-3'/>
                                </div> 
                            </div>

                        </div>

                        {/* absolute contents */}
                        <article className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-0 -mb-36'>
                            <div className='flex gap-3'>
                                <div className='w-64 bg-white drop-shadow-lg rounded-lg flex flex-col justify-end '>
                                        <Image src={dmpoint1} className='rounded-lg'/>
                                </div>

                                <div className='bg-white drop-shadow-lg rounded-lg w-[130px]'>
                                <div className='flex justify-center items-center gap-3  px-2 py-4 '>
                                    <div className='bg-whytap w-6 h-6 rounded-full' />
                                    <div>
                                        <h1 className='text-xs font-medium'>No.1 Institute</h1>
                                        {/* <p className='text-xs'>Student's Empowerment</p> */}
                                    </div>
                                </div>
                                <div className='flex justify-center items-center gap-3  px-2 py-4 '>
                                    <div className='bg-whytap w-6 h-6 rounded-full' />
                                    <div>
                                        <h1 className='text-xs font-medium'>No.1 Institute</h1>
                                        {/* <p className='text-xs'>Student's Empowerment</p> */}
                                    </div>
                                </div>
                                </div>

                                <div className='bg-white drop-shadow-lg flex flex-col justify-center px-2 pt-4 w-24 rounded-lg'>
                                    <Image src={dmwave1} className=''/>
                                </div>

                            </div>
                        </article>

                        <article className='absolute -translate-x-1/2 -translate-y-1/2 right-0 -mr-[101px] top-[20.5%]'>
                            <div className='flex justify-center items-center bg-white drop-shadow-lg w-40 h-20 rounded-lg gap-2'>
                                <Image src={dmlike1} className='w-10 h-10 rounded-full'/>
                                <div>
                                    <h2 className='text-sm font-semibold'>398K</h2>
                                    <p className='text-xs text-[#5A7184]'>Total Likes</p>
                                </div>
                            </div>
                        </article>

                        <article className='absolute -translate-x-1/2 -translate-y-1/2 top-2 left-0'>
                        <div className='bg-white drop-shadow-lg border border-whytap px-4 py-2 rounded-lg logo1'>
                            <Image src={whytaplogo} className='w-28'/>
                        </div>
                        </article>

                        <article className='absolute -translate-x-1/2 -translate-y-1/2 top-48 -ml-4 left-0'>
                            <div className='bg-white rounded-lg h-40 m-1  drop-shadow-lg flex flex-col justify-between py-2'>
                                <div className='px-2'>
                                    <h1 className='py-1'>20 Days</h1>
                                    <p className='text-xs text-[#5A7184]'>Average Likes gained</p>
                                    <div className='flex text-xs bg-whytap w-fit mt-1 text-white p-1 rounded-lg'>
                                        <MdArrowOutward />
                                        <p>10.5%</p>
                                    </div>
                                </div>
                                <div className='w-20 mx-auto '>
                                    <Image src={dmbar1}/>
                                </div>
                            </div>
                        </article>

                        <article className='absolute top-0 -mt-3 ml-20'>
                            <div className='bg-white w-64 p-2 rounded-lg drop-shadow-lg'>
                                <h2 className=' font-semibold py-2 text-xs pl-1'>Ads Statuses</h2>
                                <div className='grid grid-cols-3 gap-2 place-items-center'>
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
        <div className='absolute top-[20%] left-0'>
            <div className='bg-[#FF9315] rounded-r-xl text-white h-20 w-96 flex  justify-end items-center'>
                <h2 className='text-3xl font-semibold pr-3'>DIGITAL MARKETING</h2>
            </div>
        </div>
    </article>
  )
}

export default Digitalmarketing

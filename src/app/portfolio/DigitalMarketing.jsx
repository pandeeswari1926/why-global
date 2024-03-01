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
    <article className='relative h-screen'>
        <Image src={dmbg} className='h-full'/>
        <div className='absolute top-0 right-10'>
            <article>
                <article className='flex flex-col justify-center items-center h-screen'>
                    <article className='relative h-[80vh] bg-gray-200 border-t-[40px] border-whytap rounded-xl flex flex-col justify-center items-center'>
                        <div className='flex flex-col gap-4'>

                            <h1 className='font-semibold text-xl text-[#3E3E3E] pl-16'>Overview</h1>

                            <div className='flex justify-center gap-3'>

                                <div className='flex justify-center items-center gap-3 bg-white w-fit px-2 py-4 rounded-lg'>
                                    <div className='bg-whytap w-6 h-6 rounded-full' />
                                    <div>
                                        <h1 className='text-xs font-medium'>No.1 Institute</h1>
                                        {/* <p className='text-xs'>Student's Empowerment</p> */}
                                    </div>
                                </div>

                                <div className='flex justify-center items-center gap-3 bg-white w-fit px-2 py-4 rounded-lg'>
                                    <div className='bg-whytap w-6 h-6 rounded-full' />
                                    <div>
                                        <h1 className='text-xs font-medium'>No.1 Institute</h1>
                                        {/* <p className='text-xs'>Student's Empowerment</p> */}
                                    </div>
                                </div>

                                <div className='flex justify-center items-center gap-3 bg-white w-fit px-2 py-4 rounded-lg'>
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
                                <div className='w-[63%] h-52 bg-white rounded-lg flex flex-col justify-center'>
                                    <Image src={dm1}/>
                                </div>
                                <div className='w-[15%] h-52 bg-white rounded-lg flex flex-col justify-center'>
                                    <Image src={dmcircle1} className='p-3'/>
                                </div> 
                            </div>

                        </div>

                        {/* absolute contents */}
                        <article className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-0 -mb-28'>
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

                        <article className='absolute -translate-x-1/2 -translate-y-1/2 right-0 -mr-[62px] top-[23.5%]'>
                            <div className='flex justify-center items-center bg-white drop-shadow-lg w-36 h-20 rounded-lg gap-2'>
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

                        <article className='absolute -translate-x-1/2 -translate-y-1/2 top-56 left-0'>
                            <div className='bg-white rounded-lg p-3 drop-shadow-lg'>
                                <div className='py-5'>
                                    <h1>20 Days</h1>
                                    <p className='text-xs text-[#5A7184]'>Average Likes gained</p>
                                    <div className='flex text-xs bg-whytap w-fit text-white p-1 rounded-lg'>
                                        <MdArrowOutward />
                                        <p>10.5%</p>
                                    </div>
                                </div>
                                <div className='w-20 mx-auto '>
                                    <Image src={dmbar1}/>
                                </div>
                            </div>
                        </article>

                        <article className='absolute top-0 -mt-3 ml-10'>
                            <div className='bg-white p-2 rounded-lg drop-shadow-lg'>
                                <h2 className='py-2 font-semibold'>Ads Statuses</h2>
                                <div className='grid grid-cols-3 gap-2 place-items-center'>
                                    <Switch
                                        checkedChildren={`Inactive`}
                                        unCheckedChildren={`Active`}
                                        className='bg-whytap'
                                    />
                                    <Switch
                                        checkedChildren={`Inactive`}
                                        unCheckedChildren={`Need action`}
                                        className='bg-whytap'
                                    />
                                    <Switch
                                        checkedChildren={`Active`}
                                        unCheckedChildren={`Allocated`}
                                        className='bg-whytap'
                                    />
                                    <Switch
                                        checkedChildren={`Active`}
                                        unCheckedChildren={`Inactive`}
                                        className='bg-whytap'
                                    />
                                    <Switch
                                        checkedChildren={`Inactive`}
                                        unCheckedChildren={`Suspended`}
                                        className='bg-whytap'
                                    />
                                    <Switch
                                        checkedChildren={`Inactive`}
                                        unCheckedChildren={`Allocated`}
                                        className='bg-whytap'   
                                    />
                                </div>
                            </div>
                        </article>

                    </article>


                </article>
            </article>
        </div>
        <div className='absolute top-[20%] left-0'>
            <div className='bg-[#FF9315] rounded-r-xl text-white py-8 px-14'>
                <h2 className='text-3xl font-semibold pl-5'>DIGITAL MARKETING</h2>
            </div>
        </div>
    </article>
  )
}

export default Digitalmarketing

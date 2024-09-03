import React from "react";

const Whyus = () => {
  return (
    <div className="">
      <h1 className="text-5xl font-bold p-8 text-center  ">Why Choose Us ?</h1>

      <div className="bg-   rounded-full w-20 h-20 flex-col justify-center items-center">
        <div className="bg-slate-50  flex justify-center items-center rounded-full drop-shadow-lg w-[85%] h-[85%]">
          <img
            src="/Whychooseusimg1.png "
            className="p-1 h-12 w-8 text-primarycolor"
          />
        </div>
        <div>
        
          <p className="  text-sm   font-semibold">13+ Year of Expertise</p>
        </div>
      </div>

      {/* <div className='bg-  rounded-full  w-20 h-20 flex-col justify-center items-center'>
                        <div className='bg-slate-50  flex justify-center items-center rounded-full drop-shadow-lg w-[85%] h-[85%]'>
                        <img src='/Whychooseusimg1.png ' className='p-1 h-12 w-8 text-primarycolor' />
                        </div>
                        <div> <p className='  text-sm   font-semibold'>13+ Year of Expertise</p>
                        </div>
                     </div> */}
    </div>
  );
};

export default Whyus;

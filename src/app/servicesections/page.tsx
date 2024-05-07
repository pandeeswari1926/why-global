import React from "react";

const page = () => {
  return (
    <article className="mt-10">
        <section className="">
            <h2 className="xs2:text-5xl xs:text-4xl text-2xl bg-clip-text sha text-center">APP DEVELOPMENT</h2>
        </section>
      <section className=" flex justify-evenly flex-wrap">
        <div className="relative mt-20 flex w-80 flex-col rounded-xl bg-slate-200 mx-3 xs:mx-0 bg-clip-border text-gray-700 shadow-lg">
          <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-orange-400 to-primarycolor">
            <img
              src="./collaborator.jpg"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Web Designing
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              felis ligula.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-primarycolor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-200 transition-all hover:shadow-lg hover:shadow-orange-200 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Read More
            </button>
          </div>
        </div>
        
      </section>
    </article>
  );
};
export default page;

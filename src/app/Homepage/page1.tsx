import Image from "next/image";
import project from "../../../public/icon.png";
import project2 from "../../../public/icon2.png";
import project3 from "../../../public/project3.png";
import project4 from "../../../public/project4.png";

export default function Home() {
  return (
    <div className="p-5">
      <main className="md:bg-summa md:min-h-96 md:object-cover md:bg-cover md:flex md:flex-col">
        <h3 className="text-[#FF8900] lg:pt-10 pt-5 lg:pl-10 text-center font-bold">OUR WORK PROCESS</h3>
        <h2 className="lg:pl-10 text-center font-medium pt-3 text-lg lg:text-2xl">HOW ITINC HELP OF YOUR BUSINESS GROW AND SUCCESSFUL</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-0 gap-5 lg:pl-48 sm:px-10   md:pt-28">
          <div className="lg:w-[80%] w-full h-full relative drop-shadow-2xl">
            <div className="border-2 mt-10 bg-white rounded-ss-3xl">
              <Image src={project} alt="project" />
              <h1 className="xl:font-semibold font-medium xl:p-3 lg:p-1 p-3 ">IT DESIGN PROJECT</h1>
              <p className="p-3 text-xs">Design and propose products improvements through periodical and accurate testing.</p>
            </div>
            <div className="bg-white border-2 w-fit h-fit p-1 px-3 rounded-full absolute -right-4 lg:bottom-48 md:bottom-40 bottom-36">1</div>
          </div>
          <div className="h-full lg:w-[80%] relative drop-shadow-2xl">
            <div className=" border-2 bg-white rounded-ss-3xl">
              <Image src={project2} alt="" />
              <h1 className="xl:font-semibold font-medium  xl:p-3 lg:p-1 p-3">PRODUCT ENGINEER</h1>
              <p className="p-3 text-xs">Design and propose products improvements through periodical and accurate testing.</p>
            </div>
            <div className="bg-white border-2 w-fit h-fit p-1 px-3 rounded-full  absolute -right-4 lg:bottom-56 sm:bottom-44 bottom-36">2</div>
          </div>
          <div className="lg:w-[80%] h-full relative drop-shadow-2xl">
            <div className="border-2 sm:mt-10 bg-white rounded-ss-3xl">
              <Image src={project3} alt="" />
              <h1 className="xl:font-bold font-medium xl:p-3 lg:p-1 p-3">CLOUD INTEGRATION</h1>
              <p className="p-3 text-xs">Design and propose products improvements through periodical and accurate testing.</p>
            </div>
            <div className="bg-white border-2 w-fit h-fit p-1 px-3 rounded-full  absolute -right-4 lg:bottom-48 md:bottom-40 bottom-36 ">3</div>
          </div>
          <div className="lg:w-[80%] h-full relative drop-shadow-2xl">
            <div className="border-2 bg-white rounded-ss-3xl">
              <Image src={project4} alt="" />
              <h1 className="xl:font-bold font-medium xl:p-3 lg:p-1 p-3">IT CONSULTANCY</h1>
              <p className="p-3 text-xs">Design and propose products improvements through periodical and accurate testing.</p>
            </div>
            <div className="bg-white border-2 w-fit h-fit p-1 px-3 rounded-full  absolute -right-4 lg:bottom-56  sm:bottom-44 bottom-36">4</div>
          </div>
        </div>
      </main >
      <div>
      </div>
    </div>
  );
}
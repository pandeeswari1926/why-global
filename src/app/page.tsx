import Image from "next/image";
import why from "./why/page"
import Why from './why/page';
import Services from "@/app/services/page";
import Link from 'next/link'
import Page from "./Homepage/page";
// import { useRouter } from 'next/router';


export default function Home() {
  // const router = useRouter();
  return (
    <>
      <main className="">
        {/* <button type="button" onClick={() => router.push('/why')}>Why</button> */}
        {/* <Why /> */}
        {/* <Services /> */}
        <Page />
      </main>
    </>
  );
}

"use client"

import {ReactLenis, useLenis} from "lenis/react";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import BackgroundImage from '@/public/bg-img.png'
import Intro from "@/components/Intro";
import Skills from "@/components/Skills"

export default function Home() {

  const lenis = useLenis(({scroll})=>{});

  return (
    <ReactLenis root>

      <div className="p-5 sm:p-10">
        <div className="w-full flex justify-center">
          <Navbar/>
        </div>
        <Image src={BackgroundImage} className="absolute right-0 opacity-15 md:top-30 rotate-180 -z-10" alt="bg decoration image"/>
        <main className="mx-0 sm:mx-10 md:mx-10 lg:mx-45 lg:mt-27">
          <section className="xl:px-20">
            <Intro/>
          </section>

          <section>
            <Skills/>
          </section>
        </main>
      </div>
    </ReactLenis>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       {/* <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         button
    //       </a> */}
    //     </div>
   
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
  
  );
}

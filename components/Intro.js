"use client"
import React from 'react'
import Image from 'next/image'
import Sourav from '@/public/sourav.png'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import GitHub from '@/public/github.svg'
import LinkedIn from '@/public/linkedin.svg'



const Intro = () => {
    return (
        <div className='flex flex-col items-center justify-center sm:flex-row sm:justify-between mt-25 mb-10 mx-0 md:mx-10 w-full'>
            <div>
                <div className='About'>
                    <h1 className='text-5xl font-bold'>Hi, I'm</h1>
                    <h1 className='text-5xl font-bold'>Sourav Kumar</h1>
                    <div className='flex text-2xl font-bold gap-2 mt-2 flex-wrap'>
                        <h2>I'm a </h2>
                        <h2><Typewriter
                            options={{
                                strings: [
                                    'Full Stack Developer',
                                    'Machine Learning Engineer',
                                    'Web Application Developer'
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        </h2>
                    </div>
                    <h3 className='text-[#9299a7] mt-3'>I make computers behave. Sometimes. The rest of the time, I pretend it was a feature.</h3>
                </div>

                <div className="flex flex-wrap gap-4 mt-7">
                    <Link
                        href="#"
                        className="text-sm px-4 py-2 rounded-lg bg-white text-gray-900 font-medium transition-all duration-300 hover:bg-gray-200">
                        Let&apos;s Connect
                    </Link>
                    <Link
                        href="#"
                        className="text-sm px-4 py-2 rounded-lg bg-transparent border border-gray-700 text-white font-medium transition-all duration-300 hover:bg-gray-800 ">
                        Download Resume
                    </Link>
                </div>

                <div className="social flex gap-3 my-5">
                    <p className='my-auto text-[#9299a7] text-sm'>Socials:</p>
                    <Link href={"https://github.com/sourav4243/"} target='_blank'>
                        <div className='h-8 w-8 min-h-8 min-w-8 bg-[#16181b] rounded-full p-2 border border-white/[.10] flex justify-center items-center transition-all hover:bg-gray-800 '>
                            <Image src={GitHub} alt='github logo' />
                        </div>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/sourav-kumar-56a6482b4"} target='_blank'>
                        <div className='h-8 w-8 min-h-8 min-w-8 bg-[#16181b] rounded-full p-2 border border-white/[.10] flex justify-center items-center transition-all hover:bg-gray-800 '>
                            <Image src={LinkedIn} alt='linkedin logo' />
                        </div>
                    </Link>
                </div>
            </div>

            <div className='rounded-full border-2 border-gray-800 w-fit min-w-[250px] shadow-[0_0_45px_rgba(0,0,0,0.7)] m-5 hover:shadow-[0_0_55px_rgba(35,65,81,0.7)] hover:scale-103 transition-all hover:border-gray-700 '>
                <div className='rounded-full border-7 border-gray-900 w-fit hover:border-gray-900'>
                    <Image src={Sourav} alt='User Photo' height={250} width={250} className='rounded-full' />
                </div>
            </div>


        </div>
    )
}

export default Intro

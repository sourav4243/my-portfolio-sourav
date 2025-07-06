import React from 'react'
import CLogo from '@/public/skills/c.svg'
import CppLogo from '@/public/skills/cpp.svg'
import CssLogo from '@/public/skills/css3.svg'
import FlutterLogo from '@/public/skills/flutter.svg'
import GitLogo from '@/public/skills/git.svg'
import JSLogo from '@/public/skills/javascript.svg'
import MongoDBLogo from '@/public/skills/mongo.svg'
import NextjsLogo from '@/public/skills/nextjs.svg'
import NodejsLogo from '@/public/skills/nodejs.svg'
import PostgreLogo from '@/public/skills/postgresql.svg'
import PythonLogo from '@/public/skills/python.svg'
import TailwindLogo from '@/public/skills/tailwind.svg'

import Image from 'next/image'


const Skills = () => {
  return (
    <div className='my-30 w-80vw '> 
        <div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-[var(--primary-color)] py-5'>Skills & Technologies</h1>
            <p className='text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-[var(--secondary-color)]'>Technologies I work with</p>
        </div>
        {/* <div className="px-[20%] grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 gap-4 py-10 text-center text-[var(--secondary-color)] content-center items-center">

            <div className="bg-gray-800 rounded-sm p-1 border border-[var(--border)] hover:border-[var(--hover-border)] hover:scale-110 transition-all duration-200 ease-in-out hover:text-white justify-self-center">
                <Image src={CLogo} alt='' height={50} width={50}/>
                <p>C</p>
            </div>

            <div className="bg-gray-800 rounded-sm p-1 border border-[var(--border)] hover:border-[var(--hover-border)] hover:scale-110 transition-all duration-200 ease-in-out hover:text-white justify-self-center">
                <Image src={CppLogo} alt='' height={50} width={50}/>
                <p>C++</p>
            </div>

            <div className="bg-gray-800 rounded-sm p-1 border border-[var(--border)] hover:border-[var(--hover-border)] hover:scale-110 transition-all duration-200 ease-in-out hover:text-white justify-self-center">
                <Image src={CssLogo} alt='' height={50} width={50}/>
                <p>Css3</p>
            </div>
            
            <div className="bg-gray-800 rounded-sm p-1 border border-[var(--border)] hover:border-[var(--hover-border)] hover:scale-110 transition-all duration-200 ease-in-out hover:text-white justify-self-center">
                <Image src={FlutterLogo} alt='' height={50} width={50}/>
                <p>Flutter</p>
            </div>

            <div className="bg-gray-800 rounded-sm p-1 border border-[var(--border)] hover:border-[var(--hover-border)] hover:scale-110 transition-all duration-200 ease-in-out hover:text-white justify-self-center">
                <Image src={GitLogo} alt='' height={50} width={50}/>
                <p>Github</p>
            </div>
            
            <div className="bg-gray-800 rounded-sm p-1 border border-[var(--border)] hover:border-[var(--hover-border)] hover:scale-110 transition-all duration-200 ease-in-out hover:text-white justify-self-center">
                <Image src={JSLogo} alt='' height={50} width={50}/>
                <p>Javascript</p>
            </div>

            <div className="bg-gray-800 rounded-sm p-1 border border-[var(--border)] hover:border-[var(--hover-border)] hover:scale-110 transition-all duration-200 ease-in-out hover:text-white justify-self-center">
                <Image src={MongoDBLogo} alt='' height={50} width={50}/>
                <p>MongoDB</p>
            </div>
            
            <div className="bg-gray-800 rounded-sm p-1 border border-[var(--border)] hover:border-[var(--hover-border)] hover:scale-110 transition-all duration-200 ease-in-out hover:text-white justify-self-center">
                <Image src={NextjsLogo} alt='' height={50} width={50}/>
                <p>Next.js</p>
            </div>

            <div className="bg-gray-800 rounded-sm p-1 border border-[var(--border)] hover:border-[var(--hover-border)] hover:scale-110 transition-all duration-200 ease-in-out hover:text-white justify-self-center">
                <Image src={NodejsLogo} alt='' height={50} width={50}/>
                <p>Node.js</p>
            </div>
            
            <div className="bg-gray-800 rounded-sm p-1 border border-[var(--border)] hover:border-[var(--hover-border)] hover:scale-110 transition-all duration-200 ease-in-out hover:text-white justify-self-center">
                <Image src={PostgreLogo} alt='' height={50} width={50}/>
                <p>Postgre SQL</p>
            </div>

            <div className="bg-gray-800 rounded-sm p-1 border border-[var(--border)] hover:border-[var(--hover-border)] hover:scale-110 transition-all duration-200 ease-in-out hover:text-white justify-self-center">
                <Image src={PythonLogo} alt='' height={50} width={50}/>
                <p>Python</p>
            </div>

            <div className="bg-gray-800 rounded-sm p-1 border border-[var(--border)] hover:border-[var(--hover-border)] hover:scale-110 transition-all duration-200 ease-in-out hover:text-white justify-self-center">
                <Image src={TailwindLogo} alt='' height={50} width={50}/>
                <p>Tailwind Css</p>
            </div>
        </div> */}

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 gap-2 py-5 lg:w-auto justify-self-center-safe text-[var(--secondary-color)] justify-items-center">
            {[
                { src: CLogo, label: "C" },
                { src: CppLogo, label: "C++" },
                { src: CssLogo, label: "CSS3" },
                { src: FlutterLogo, label: "Flutter" },
                { src: GitLogo, label: "GitHub" },
                { src: JSLogo, label: "JavaScript" },
                { src: MongoDBLogo, label: "MongoDB" },
                { src: NextjsLogo, label: "Next.js" },
                { src: NodejsLogo, label: "Node.js" },
                { src: PostgreLogo, label: "PostgreSQL" },
                { src: PythonLogo, label: "Python" },
                { src: TailwindLogo, label: "Tailwind CSS" },
            ].map((item, index) => (
                <div
                    key={index}
                    className="h-22 w-20 sm:h-22 sm:w-22 md:h-24 md:w-24 flex flex-col items-center text-center justify-center bg-gray-800 rounded-md border border-[var(--border)] hover:border-[var(--hover-border)] hover:scale-110 hover:text-white transition-all duration-200 ease-in-out active:border-[var(--hover-border)] active:scale-110 active:text-white"
                    >
                    <Image src={item.src} alt={`${item.label} logo`} height={50} width={50} />
                    <p className="mt-1 mb-1 text-sm">{item.label}</p>
                </div>
            ))}
        </div>


    </div>
  )
}

export default Skills

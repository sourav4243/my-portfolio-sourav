import React from 'react'
import ReactLogo from '@/public/skills/react.svg'
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
import HTMLLogo from '@/public/skills/html5.svg'

import Image from 'next/image'


const Skills = () => {
  return (
    <div className='my-30 w-80vw' id='skills'> 
        <div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold text-[var(--primary-color)] py-3'>Skills & Technologies</h1>
            <p className='text-center text-sm sm:text-lg md:text-xl lg:text-2xl text-[var(--secondary-color)]'>Technologies I work with</p>
        </div>
       
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 gap-2 py-5 lg:w-auto justify-self-center-safe text-[var(--secondary-color)] justify-items-center">
            {[
                { src: ReactLogo, label: "React.js"},    
                { src: NextjsLogo, label: "Next.js" },
                { src: CLogo, label: "C" },
                { src: CppLogo, label: "C++" },
                { src: CssLogo, label: "CSS3" },
                { src: FlutterLogo, label: "Flutter" },
                { src: GitLogo, label: "GitHub" },
                { src: JSLogo, label: "JavaScript" },
                { src: MongoDBLogo, label: "MongoDB" },
                { src: NodejsLogo, label: "Node.js" },
                { src: PostgreLogo, label: "PostgreSQL" },
                { src: PythonLogo, label: "Python" },
                { src: TailwindLogo, label: "Tailwind CSS" },
                { src: HTMLLogo, label: "HTML5"},
            ].map((item, index) => (
                <div
                    key={index}
                    className="group skill-box h-22 w-20 sm:h-22 sm:w-22 md:h-24 md:w-24 flex flex-col items-center text-center justify-center bg-gradient-to-br from-gray-900/60 via-gray-700/30 to-gray-900/60 rounded-md border border-[var(--border)] hover:scale-105 hover:text-white hover:shadow-xl hover:shadow-black transition-all duration-100 sm:duration-100 ease-in-out active:scale-105 active:text-white active:shadow-lg active:shadow-black"
                    >
                    <Image src={item.src} alt={`${item.label} logo`} height={50} width={50} className='group-hover:transform-3d group-hover:-rotate-z-5 group-active:transform-3d group-active:-rotate-z-5 duration-200'/>
                    <p className="mt-1 mb-1 text-sm drop-shadow-[0px_3px_1px_black] group-hover:drop-shadow-[0px_5px_1px_black]">{item.label}</p>
                </div>
            ))}
        </div>


    </div>
  )
}

export default Skills

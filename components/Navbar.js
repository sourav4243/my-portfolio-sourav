import React from 'react'
import Image from 'next/image'
import Home from '@/public/home.svg'
import Project from '@/public/project.svg'
import Code from'@/public/code.svg'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='w-[80vw] md:w-[70vw] lg:w-[50vw] bg-[#0a0c0f] h-12 md:h-14 flex items-center px-5 py-auto rounded-xl border border-white/[.10] justify-between sm:justify-between md:justify-between mini fixed z-1000'>
        <Link href="#home">
          <div className='flex items-center gap-4 '>
            <div className='h-8 w-8 min-h-8 min-w-8 bg-[#16181b] rounded-md border border-white/[.10] flex justify-center items-center transition-all hover:scale-110'>
              <Image src={Code} alt='vscode logo'/>
            </div>
            <p className='font-solid'>Sourav Kumar</p>
          </div>
        </Link>
        <ul className='gap-2 sm:gap-4 text-[#9299a7] font-bold text-sm flex md:inline-flex sm:inline-flex'>
            <li className='flex gap-1 cursor-pointer hover:bg-gray-800 hover:text-white p-2 rounded-md transition-all duration:500 ease-out'>
              <Image src={Home} height={15} width={15} alt='Home logo'/>
              <Link href="#home">
                <p className='hidden sm:block'>Home</p>
              </Link>
            </li>
            <li className='flex gap-1 cursor-pointer hover:bg-gray-800 hover:text-white p-2 rounded-md transition-all duration:500 ease-out'>
              <Image src={Project} height={15} width={15} alt='Project logo'/>
              <p className='hidden sm:block '>Projects</p>
            </li>            
        </ul>
    </header>
  )
}

export default Navbar

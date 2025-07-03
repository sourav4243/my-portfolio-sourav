import React from 'react'
import Image from 'next/image'
import Home from '@/public/home.svg'
import Project from '@/public/project.svg'
import Code from'@/public/code.svg'

const Navbar = () => {
  return (
    <header className='w-[50vw] bg-[#0a0c0f] h-14 flex items-center px-5 py-auto rounded-xl border border-white/[.10] justify-between'>
        <div className='flex items-center gap-4 '>
            <div className='h-8 w-8 bg-[#16181b] rounded-md border border-white/[.10] flex justify-center items-center transition-all hover:scale-110'>
            <Image src={Code} alt='vscode logo' height={25} width={25}/>
            </div>
            <p className='font-solid'>Sourav Kumar</p>
        </div>
        <ul className='flex gap-4 text-[#9299a7] font-bold text-sm'>
            <li className='flex gap-1 cursor-pointer hover:bg-gray-800 hover:text-white p-2 rounded-md transition-all duration:500 ease-out'><Image src={Home} height={15} width={15} alt='Home logo'/>Home</li>
            <li className='flex gap-1 cursor-pointer hover:bg-gray-800 hover:text-white p-2 rounded-md transition-all duration:500 ease-out'><Image src={Project} height={15} width={15} alt='Project logo'/>Projects</li>            
        </ul>
    </header>
  )
}

export default Navbar

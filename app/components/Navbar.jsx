"use client"
import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MobileMenu from './MobileMenu'

const navLinks = [
    {
        title: "Home",
        path: "#home"
    },
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Portfolio",
        path: "#portfolio"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-3'>
            <Link href={"/"} 
            className='text-3xl md:text-5xl text-white font-semibold'
            >
                <span className='text-lime-600 font-extrabold'>BSN</span>
                Tech
            </Link>
            <div className='mobile-menu block md:hidden'>
                { !navbarOpen ? 
                <button 
                    onClick={() => setNavbarOpen(true)}  
                    className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                    <Bars3Icon className='w-5 h-5 text-white'/>
                </button> 
                :   <button
                        onClick={() => setNavbarOpen(false)}
                        className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                        <XMarkIcon className='w-5 h-5 text-white'/>
                    </button>  }
            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        {navbarOpen && <MobileMenu links={navLinks} />}
    </nav>
  )
}

export default Navbar
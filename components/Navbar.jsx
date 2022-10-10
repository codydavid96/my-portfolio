import Image from 'next/image';
import Link from 'next/Link';
import React, {useEffect, useState} from 'react';
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed top-0 w-full h-20 shadow-lg z-[100] bg-[#1f1f1f]/75 backdrop-filter backdrop-blur-sm'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image 
                    src="/../public/assets/navLogoWhite.png" 
                    alt="/" 
                    width="87" 
                    height="65" 
                />
                <div>
                    <ul className='hidden md:flex'>
                        <Link href="/#main">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href="/#skills">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} className="cursor-pointer" />
                    </div>
                </div>
            </div>
            
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={
                    nav 
                    ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1f1f1f]/50 backdrop-filter backdrop-blur-sm p-10 ease-in duration-500 shadow-xl' 
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image 
                                src="/../public/assets/navLogoWhite.png" 
                                alt="/" 
                                width="87" 
                                height="65" 
                            />
                            <div onClick={handleNav} className='rounded-full shadow-sm shadow-gray-900 p-3 cursor-pointer'>
                               <AiOutlineClose /> 
                            </div>
                        </div>
                        <div className='border-b border-[#508aae] my-4'>
                            <p className='w-[85%] md:w[90%] py-4'>Let's get into it.</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href="/#main">
                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-l'>Home</li>
                            </Link>
                            <Link href="/#about">
                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-l'>About</li>
                            </Link>
                            <Link href="/#skills">
                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-l'>Skills</li>
                            </Link>
                            <Link href="/#projects">
                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-l'>Projects</li>
                            </Link>
                            <Link href="/#contact">
                                <li onClick={() => setNav(false)} className='py-4 text-sm hover:border-l'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-10'>
                            <p className='uppercase tracking-widest text-[#508aae]'>Let's connect</p>
                            <div className='flex items-center justify-between my-4 sm:w-[80%]'>
                                <div className='rounded-full shadow-sm shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-sm shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-sm shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-sm shadow-gray-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar;
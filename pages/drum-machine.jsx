import Image from 'next/image'
import React from 'react'
import drumMachineImg from '../public/assets/projects/drum-machine.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const drumMachine = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer')
    };

    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={drumMachineImg} alt='/' />
                <div className='absolute top-[70%] maxw-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
                    <h2 className='py-2'>Drum Machine</h2>
                    <h3>JavaScript / HTML / CSS</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p className='uppercase text-[#ffed28] tracking-widest'>Project</p>
                    <h2>Overview</h2>
                    <p>
                        This project was a part of my freeCodeCamp.org 
                        curriculum. It helped me learn about 
                        accessing files in my code and a little bit of 
                        logic. While simple, it was a fun project
                        that helped me grasp some basics a bit
                        better.
                    </p>
                    <button onClick={() => openInNewTab("https://codydavid96.github.io/freecodecamp-drum-machine/")} className='px-8 py-2 mt-4 mr-8'>Demo</button>
                    <button onClick={() => openInNewTab("https://github.com/codydavid96/freecodecamp-drum-machine")} className='px-8 py-2 mt-4'>Code</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-900 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center front-hold pb-2'>Tools</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p 
                                className='text-[#13e2da] py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' />
                                JavaScript
                            </p>
                            <p 
                                className='text-[#13e2da] py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' />
                                HTML
                            </p>
                            <p 
                                className='text-[#13e2da] py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' />
                                CSS
                            </p>
                            <p 
                                className='text-[#13e2da] py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' />
                                Bootstrap
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>

        </div>
    )
}

export default drumMachine
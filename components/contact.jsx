import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from 'next/Link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import {MdOutlineContactless} from 'react-icons/md'

const Contact = () => {

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer')
    };
    
    return (
        <div id='contact' className='w-full h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
              <h2 className='pl-4 text-left uppercase tracking-widest text-[#ffed28]'>Connect</h2>
              <h3 className='pl-4 pb-8 text-left tracking-widest'>Lets have a chat.</h3>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* Left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <div className="p-12 w-auto h-auto m-auto shadow-xl shadow-black bg-gradient-to-br from-[#9055ff] to-[#13e2da] rounded-full flex items-center justify-center"> 
                                <p className='text-[#1f1f1f]'> <MdOutlineContactless size={300} /> </p>
                                </div>
                            </div>
                            <div>
                                <h2 className='py-2'>Cody Hardman</h2>
                                <p>Web Developer</p>
                                <p className='py-4'>I am available for full-time positions. Contact me and let&apos;s have a chat!</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex space-x-4 py-4'>
                                    <div className="rounded-full bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-sm shadow-black p-6 cursor-pointer hover:scale-105 ease-in duration-300" onClick={() => openInNewTab("https://www.linkedin.com/in/cody-hardman-a68ab1249/")}>
                                        <FaLinkedinIn />
                                    </div>
                                    <div className="rounded-full bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-sm shadow-black p-6 cursor-pointer hover:scale-105 ease-in duration-300" onClick={() => openInNewTab("https://github.com/codydavid96")}>
                                        <FaGithub />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right */}
                    
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-black rounded-xl lg:p-4'>
                        <div className='p-4'>

                            <form action="https://formsubmit.co/codyhardmandeveloper@gmail.com" method="POST">
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name*</label>
                                        <input name="name" className='border-2 rounded-full p-3 flex border-gray-900 text-[#1f1f1f]' 
                                        type="text" required
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input name="number" className='border-2 rounded-full p-3 flex border-gray-900 text-[#1f1f1f]' 
                                        type="text"
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email*</label>
                                    <input name="email" className='border-2 rounded-full p-3 flex border-gray-900 text-[#1f1f1f]' 
                                    type="email" required
                                    />
                                    <label className='uppercase text-sm py-2'>Subject*</label>
                                    <input name="subject" className='border-2 rounded-full p-3 flex border-gray-900 text-[#1f1f1f]' 
                                    type="text" 
                                    />
                                    <label className='uppercase text-sm py-2'>Message*</label>
                                    <textarea name="message" type="message" className='border-2 rounded-xl p-3 border-gray-900 text-[#1f1f1f]' rows='10' required></textarea>
                                </div>
                                <div>
                                    <p className='italic'>* Indicates required field.</p>
                                </div>
                                <button className='w-full p-4 mt-4'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className="rounded-full shadow-sm shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <HiOutlineChevronDoubleUp className='m-auto' size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact
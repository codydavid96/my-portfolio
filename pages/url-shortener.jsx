import Image from 'next/image'
import React from 'react'
import urlShortenerImg from '../public/assets/projects/url-shortener.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const urlShortener = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer')
    };

    return (
        <div className='w-full'>
            <div className='max-w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={urlShortenerImg} alt='/' />
                <div className='absolute top-[70%] maxw-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
                    <h2 className='py-2'>URL Shortener</h2>
                    <h3>Next.js / TypeScript / Tailwind CSS</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p className='uppercase text-[#ffed28] tracking-widest'>Project</p>
                    <h2>Overview</h2>
                    <p>
                        This project was a self-directed effort to build a more real-world
                        applicable app. I utilised Next.js in conjunction with Tailwind CSS
                        to build the app. This was my first project using TypeScript and I found it 
                        to be a cleaner experience than raw JavaScript. I also ensured to keep
                        my HTML clean while using TailWind and instead utilised the CSS stylesheet 
                        to create custom classes. For the actual back-end of the project, I used
                        Axios to utilise the shrtco.de API.
                    </p>
                    <button onClick={() => openInNewTab("https://vercel.live/link/url-shortener-2yvk2hwzy-codydavid96.vercel.app?via=deployment-visit-button")} className='px-8 py-2 mt-4 mr-8'>Demo</button>
                    <button onClick={() => openInNewTab("https://github.com/codydavid96/url-shortener")} className='px-8 py-2 mt-4'>Code</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-black rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center front-hold pb-2'>Tools</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p 
                                className='text-[#13e2da] py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' />
                                Next.js
                            </p>
                            <p 
                                className='text-[#13e2da] py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' />
                                TypeScript
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
                                Tailwind CSS
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

export default urlShortener
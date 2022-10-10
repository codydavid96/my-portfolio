import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({title, backgroundImg, language, projectUrl}) => {
    return (
        <div>
            <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-black rounded-full p-4 group hover:bg-gradient-to-r from-[#9055ff] to-[#13e2da]'>
                <Image className='rounded-full group-hover:opacity-10' src={backgroundImg} alt='/' />
                <div className='text-[#1f1f1f] hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='uppercase text-2xl tracking-wider text-center'>{title}</h3>
                    <p className='pb-4 pt-2 text-center'>{language}</p>
                    <Link href={projectUrl}>
                        <p className='text-center py-3 rounded-lg bg-[#1f1f1f] text-white font-bold text-lg cursor-pointer hover:bg-[#9055ff] hover:text-[#1f1f1f]'>More Info</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ProjectItem
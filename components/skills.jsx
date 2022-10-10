import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div className='pt-10 md:h-screen' id='skills'>
      <div className='p-10'>
        <h2 className='pl-4 text-left uppercase tracking-widest text-[#ffed28]'>Skills</h2>
        <h3 className='pl-4 pb-8 text-left tracking-widest'>What I can do.</h3>
      </div>
      <div>

        <div className='font-bold pr-10 pl-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                      
            <div className='p-6 bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-xl shadow-black rounded-full hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/skills/HTML.png' 
                        width='64px' 
                        height='64px' 
                        alt='/' 
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-xl shadow-black rounded-full hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/skills/CSS.png' 
                        width='64px' 
                        height='64px' 
                        alt='/' 
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-xl shadow-black rounded-full hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/skills/JavaScript.png' 
                        width='64px' 
                        height='64px' 
                        alt='/' 
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JavaScript</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-xl shadow-black rounded-full hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/skills/React.png' 
                        width='64px' 
                        height='64px' 
                        alt='/' 
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>React</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-xl shadow-black rounded-full hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/skills/Bootstrap.png' 
                        width='64px' 
                        height='64px' 
                        alt='/' 
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Bootstrap</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-xl shadow-black rounded-full hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/skills/Tailwind CSS.png' 
                        width='64px' 
                        height='64px' 
                        alt='/' 
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Tailwind</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 bg-gradient-to-br from-[#9055ff] to-[#13e2da] text-[#1f1f1f] shadow-xl shadow-black rounded-full hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src='/../public/assets/skills/GitHub.png' 
                        width='64px' 
                        height='64px' 
                        alt='/' 
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>GitHub</h3>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
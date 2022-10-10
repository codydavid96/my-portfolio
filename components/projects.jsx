import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProjectItem from './projectItem'
import calculatorImg from '../public/assets/Projects/calculator.png'
import pomodoroTimerImg from '../public/assets/Projects/pomodoro-timer.png'
import drumMachineImg from '../public/assets/Projects/drum-machine.png'

const Projects = () => {
    return (
        <div id='projects' className='w-full h-auto'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <h2 className='pl-4 text-left uppercase tracking-widest text-[#ffed28]'>Projects</h2>
            <h3 className='pl-4 pb-8 text-left tracking-widest'>What I&apos;ve made so far.</h3>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem 
                    title="Calculator" 
                    backgroundImg={calculatorImg}
                    language="JavaScript" 
                    projectUrl='/calculator' 
                    />
                    <ProjectItem 
                    title="Pomodoro Timer" 
                    backgroundImg={pomodoroTimerImg} 
                    language="React.JS"
                    projectUrl='/pomodoro-timer' 
                    />
                    <ProjectItem 
                    title="Drum Machine" 
                    backgroundImg={drumMachineImg}
                    language="JavaScript" 
                    projectUrl='drum-machine' 
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
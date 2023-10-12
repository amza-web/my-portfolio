import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import github from '@/app/assets/svg/github.svg'
import arrow from '@/app/assets/svg/arrow.svg'

const Project = ({project}) => {
  return (
    <div className='project md:mx-auto md:max-w-xl lg:max-w-none lg:flex lg:flex-row lg:justify-center lg:gap-16'>
        <div className="img-cont shadow-pr lg:basis-3/5">
            <Image src={project.image} alt='proj1' />
        </div>
        <div className='px-5 md:max-w-xs md:mx-auto lg:basis-2/5 lg:max-w-none lg:py-7'>
            <h4 className='mb-5'>{project.name}</h4>
            <p className='lg:text-base'>
                {project.desc}
            </p>
            <ul className='mt-5 text-base font-semibold'>
                {project.involvedTech.map((skill, index)=>{
                    
                    return <li key={index}>{skill}</li>
                })}
            </ul>
            <div className='flex gap-2.5 justify-evenly mt-10'>
                <Link className='flex gap-1.5 items-center justify-center ' href={'#'}>Code <Image className='h-[1.5em] w-min' src={github} alt='github icon' />  </Link>
                <Link className='flex gap-1.5 items-center justify-center ' href={'#'}>Live Demo<Image className='h-[1.5em] w-min' src={arrow} alt='foward icon' />  </Link>
            </div>
        </div>
    </div>
  )
}

export default Project
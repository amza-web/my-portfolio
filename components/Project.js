import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import github from '@/app/assets/svg/github.svg'
import arrow from '@/app/assets/svg/arrow.svg'

const Project = ({project}) => {
  return (
    <div className='project'>
        <div className="img-cont shadow-pr">
            <Image src={project.image} alt='proj1' />
        </div>
        <div className='px-5'>
            <h4>{project.title}</h4>
            <p>
                {project.desc}
            </p>
            <ul className='mt-5'>
                {project.involvedTech.map((skill, index)=>{
                    
                    return <li>{skill}</li>
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
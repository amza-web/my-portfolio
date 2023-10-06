import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import Project from '@/components/Project'

import hero from '@/app/assets/img/hero.png'
import linkedin from '@/app/assets/svg/linkedin.svg'
import github from '@/app/assets/svg/github.svg'
import html from '@/app/assets/svg/html.svg'
import css from '@/app/assets/svg/css.svg'
import js from '@/app/assets/svg/js.svg'
import react from '@/app/assets/svg/react.svg'
import nextJs from '@/app/assets/svg/nextjs.svg'
import mapS from '@/app/assets/svg/map-search.svg'
import mail from '@/app/assets/svg/mail.svg'
import linkedinB from '@/app/assets/svg/linkedinB.svg'
import githubB from '@/app/assets/svg/githubB.svg'
import tailwindcss from '@/app/assets/svg/tailwindcss.svg'
import about from "@/app/assets/img/about.webp"
import designo from '@/app/assets/img/car-rental.webp'


export default function Home() {
  const projList=[
    {
      name: "Designo",
      image: designo,
      desc: `A car rental website is an online platform that allows users to rent 
      cars for personal or business use. The website provides an interface for searching, 
      comparing, and reserving cars.`,
      involvedTech: ['React','NextJs', 'TailwindCss'],

    },
    {
      name: "pofivij",
      image: designo,
      desc: `kjkjsbfjsbfkjbfs lj jsljlsjb form that allows users to rent 
      cars for persk nsj si nsk nisn isn kjsb s interface for serviwb arching, 
      comparing, iwfjoiw in iw cars.`,
      involvedTech: ['React', 'TailwindCss'],
    }
  ]
  const date = new Date()
  return (
    <main className=''>
      
      <Navigation />
      <section className='pt-32 text-center mx-4 flex flex-col gap-7'>
        <div className='flex justify-center'>
          <picture className='hero-pic'>
            <Image className="absolute scale-125" src={hero} alt='hero' />
          </picture>
        </div>
        <div>
          <h1 className='text-4xl font-bold my-5'>Front-End React Developer👋🏽</h1>
          <p className='font-mulish text-llp'>Hi, I'm Amza Omiteru. A passionate Front-end React Developer with a keen eye👀 for detail.</p>
          <span className='flex justify-center gap-4 max-h-11 my-11'>
            <Link href={'#'}>
              <Image className='img-icon' src={linkedin} alt='logo' />
            </Link>
            <Link href={'#'}>
              <Image className='img-icon' src={github} alt='logo' />
            </Link>
          </span>
        </div>

      </section>
      <section className='skills mb-28 mt-5 text-center'>
        <div>
          <h4 className='border-0 border-[#2d2e3280] pb-2 px-1 mb-8 border-b-2 inline-block font-mulish font-semibold'>Tech Stack</h4>
        </div>
        <ul>
          <li>
            <Image src={html} alt='HTML logo' />
          </li>
          <li>
            <Image src={css} alt='HTML logo' />
          </li>
          <li>
            <Image src={js} alt='HTML logo' />
          </li>
          <li>
            <Image src={react} alt='HTML logo' />
          </li>
          <li>
            <Image src={nextJs} alt='HTML logo' />
          </li>
          <li>
            <Image src={tailwindcss} alt='HTML logo' />
          </li>
        </ul>
      </section>
      <section className='about px-5'>
        <div className='px-4 mb-9'>
          <picture>
            <Image  className='overflow-hidden rounded-2xl' src={about} alt='about-img' />
          </picture>
        </div>
        <div className=' text-center'>
          <h2>About me</h2>
          <h3>A dedicated Front-end Developer with keen eye👀 for details</h3>
          <p className='font-mulish'>
            As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React,
            Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. 
            My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing 
            cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional
            teams to produce outstanding web applications.
          </p>
        </div>
      </section>

      <section className='portfolio mt-20 flex flex-col gap-14 mb-20 '>
        {projList.map((item, index)=>{
          return (<Project project={item} key={index} />)
        })}
      </section>
      <section className='text-center bg-white py-20'>
        <h2>Contact</h2>
        <h3>Don't be shy! Hit me up! 👇</h3>
        <div className='flex flex-col gap-[50px] mt-[50px]'>
          <div>
            <div className='h-14  w-14 rounded-full bg-white inline-flex items-center justify-center text-blue-600 shadow-md'>
              <Image className='w-[30px]' src={mapS} alt="location-icon" />
            </div>
            <div>
              <h5 className='text-dblue font-bold capitalize'>Location</h5>
              <p className='text-lp'>Lagos, Nigeria</p>
            </div>
          </div>
          <div>
            <div className='h-14  w-14 rounded-full bg-white inline-flex items-center justify-center text-blue-600 shadow-md'>
              <Image className='max-w-[30px]' src={mail} alt="location-icon" />
            </div>
            <div>
              <h5 className='text-dblue font-bold capitalize'>Mail</h5>
              <Link className='text-lp' href={'mailto:amza.web@gmail.com'}>amza.web@gmail.com</Link>
            </div>
          </div>
        </div>
      </section>
      
      <footer className='bg-dblue text-center py-[50px]'>
        <div>
          <p className='text-white text-[17px]'>Copyright © {date.getFullYear()}. All rights reserved</p>
          <div className='flex justify-center mt-3'>
            <div>
              <Image className='w-7 inline-block mr-5' src={linkedinB}/>
              <Image className='w-7 inline-block' src={githubB}/>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

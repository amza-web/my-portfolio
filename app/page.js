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
      <section className='pt-32 lg:pt-44 lg:min-h-[350px] text-center mx-4 flex flex-col lg:flex-row md:text-left gap-7 md:max-w-lg md:mx-auto lg:max-w-5xl lg:justify-between lg:px-10'>
        <div className='flex justify-center'>
          <picture className='hero-pic lg:w-[350px] lg:h-[350px] lg:'>
            <Image className="absolute lg:static scale-125" src={hero} alt='hero' />
          </picture>
        </div>
        <div className='lg:-order-1 lg:max-w-[500px]'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold my-5'>Front-End React Developer👋🏽</h1>
          <p className='font-mulish text-llp'>Hi, I'm Amza Omiteru. A passionate Front-end React Developer with a keen eye👀 for detail.</p>
          <span className='flex justify-center lg:justify-start gap-4 max-h-11 my-11'>
            <Link href={'#'}>
              <Image className='img-icon' src={linkedin} alt='logo' />
            </Link>
            <Link href={'#'}>
              <Image className='img-icon' src={github} alt='logo' />
            </Link>
          </span>
        </div>

      </section>
      <section className='skills mb-28 mt-5 text-center lg:text-left lg:container-d md:max-w-xl  md:mx-auto lg:max-w-5xl lg:flex lg:items-center lg:mt-24'>
        <div className='lg:inline-block'>
          <h4 className='tech-txt'>Tech Stack</h4>
        </div>
        <ul className='lg:inline-on'>
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
        <div className="lg:container-d lg:flex lg:mx-auto lg:gap-10">
          <div className='px-4 lg:pl-0 mb-9 md:mx-auto md:max-w-lg lg:basis-1/2'>
            <picture className='lg:h-full lg:w-full lg:overflow-hidden lg:flex lg:rounded-2xl'>
              <Image  className='overflow-hidden rounded-2xl' src={about} alt='about-img' />
            </picture>
          </div>
          <div className=' text-center lg:text-left md:mx-auto md:max-w-xl lg:basis-1/2'>
            <h2>About me</h2>
            <h3 className='lg:pb-5'>A dedicated Front-end Developer with keen eye👀 for details</h3>
            <p className='font-mulish'>
              As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React,
              Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience.
              My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing
              cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </section>
      <section className='my-20 portfolio lg:container-d lg:mx-auto'>
        <div className='text-center md:text-left mb-16'>
          <h2 className="uppercase text-lblue text-base">Portfolio</h2>
          <h3 className='text-2xl'>Each project is a unique piece of development 🧩</h3>
        </div>
        <div className='flex flex-col gap-14 lg:proj-list'>
          {projList.map((item, index)=>{
            return (<Project project={item} key={index} />)
          })}
        </div>
      </section>
      <section className='text-center md:text-left bg-white py-20 px-10'>
        <div className="lg:container-d">
          <h2>Contact</h2>
          <h3>Don't be shy! Hit me up! 👇</h3>
          <div className='flex flex-col md:flex-row gap-14 mt-14 md:gap-20'>
            <div className='md:flex md:gap-5'>
              <div className='h-14  w-14 rounded-full bg-white inline-flex items-center justify-center text-blue-600 shadow-md'>
                <Image className='w-[30px]' src={mapS} alt="location-icon" />
              </div>
              <div>
                <h5 className='text-dblue font-bold capitalize'>Location</h5>
                <p className='text-lp'>Lagos, Nigeria</p>
              </div>
            </div>
            <div className='md:flex md:gap-5'>
              <div className='h-14  w-14 rounded-full bg-white inline-flex items-center justify-center text-blue-600 shadow-md'>
                <Image className='max-w-[30px]' src={mail} alt="location-icon" />
              </div>
              <div>
                <h5 className='text-dblue font-bold capitalize'>Mail</h5>
                <Link className='text-lp' href={'mailto:amza.web@gmail.com'}>amza.web@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className='bg-dblue text-center py-14 px-10'>
        <div className='md:flex md:justify-between md:items-center lg:container-d'>
          <p className='text-white text-[17px]'>Copyright © {date.getFullYear()}. All rights reserved</p>
          <div className='flex justify-center mt-3'>
            <div>
              <Image className='w-7 inline-block mr-5' src={linkedinB} alt='linkedin'/>
              <Image className='w-7 inline-block' src={githubB} alt='Github'/>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

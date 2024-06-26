import Image from "next/image"
import Navigation from "@/components/Navigation"
import Link from "next/link"
import Project from "@/components/Project"

import hero from "@/app/assets/img/hero.jpg"
import linkedin from "@/app/assets/svg/linkedin.svg"
import github from "@/app/assets/svg/github.svg"
import html from "@/app/assets/svg/html.svg"
import css from "@/app/assets/svg/css.svg"
import js from "@/app/assets/svg/js.svg"
import react from "@/app/assets/svg/react.svg"
import nextJs from "@/app/assets/svg/nextjs.svg"
import mapS from "@/app/assets/svg/map-search.svg"
import mail from "@/app/assets/svg/mail.svg"
import linkedinB from "@/app/assets/svg/linkedinB.svg"
import githubB from "@/app/assets/svg/githubB.svg"
import tailwindcss from "@/app/assets/svg/tailwindcss.svg"
import about from "@/app/assets/img/about.webp"
import designo from "@/app/assets/img/designo.png"
import dimitri from "@/app/assets/img/dimitri.png"
import mangatagallo from "@/app/assets/img/mangata&gallo.png"

export default function Home() {
  const projList = [
    {
      name: "Designo",
      image: designo,
      desc: `Designing a captivating website and boosting 
      search rankings was rewarding 🚀. Our efforts led
       to increased traffic and a thriving client base 🌟.`,
      involvedTech: ["React", "NextJs", "TailwindCss"],
      codeLink: "https://github.com/amza-web/Designo",
      liveLink: "https://designoa.vercel.app/",
    },
    {
      name: "Elevating Dimitri's Portfolio",
      image: dimitri,
      desc: `Collaborating with Dimitri, a talented web developer, 
      led to enriching experiences and significant growth, 
      with a 57% increase in website visitors! 🚀`,
      involvedTech: ["NextJs", "React", "TailwindCss"],
      codeLink: "https://github.com/amza-web/",
      liveLink: "https://dimitrio.vercel.app/",
    },
    {
      name: "Mangata & Gallo Jewelry Store",
      image: mangatagallo,
      desc: `I helped Mangata & Gallo Jewelry Store expand 
      globally with a responsive website, 
      boosting their customer base by 30%.`,
      involvedTech: ["HTML", "CSS", "JavaScript"],
      nocodeLink: true,
      codeLink: "https://github.com/amza-web/Designo",
      liveLink: "https://mangata-jewelry.netlify.app/",
    },
  ]
  const date = new Date()
  return (
    <main className="">
      <Navigation />
      <div className="lg:h-screen lg:flex lg:flex-col lg:justify-center">
        <div>
          <section className="pt-32 lg:pt-44 lg:min-h-[350px] text-center mx-4 flex flex-col lg:flex-row md:text-left gap-7 md:max-w-lg md:mx-auto lg:max-w-5xl lg:justify-between lg:px-10">
            <div className="flex justify-center">
              <picture className="hero-pic lg:w-[350px] lg:h-[350px] lg:">
                <Image
                  className="absolute lg:static scale-125"
                  src={hero}
                  alt="hero"
                />
              </picture>
            </div>
            <div className="lg:-order-1 lg:max-w-[500px]">
              <h1 className="text-4xl md:text-5xl lg:text-[55px] font-bold my-5">
                Front-End React Developer👋🏽
              </h1>
              <p className="font-mulish text-llp">
                Hi, I'm Amza Omiteru. A passionate Front-end React Developer
                with a keen eye👀 for detail.
              </p>
              <span className="flex justify-center lg:justify-start gap-4 max-h-11 my-11">
                <Link href={"#"}>
                  <Image className="img-icon" src={linkedin} alt="logo" />
                </Link>
                <Link href={"#"}>
                  <Image className="img-icon" src={github} alt="logo" />
                </Link>
              </span>
            </div>
          </section>
          <section className="skills mb-28 mt-5 text-center lg:text-left lg:container-d md:max-w-xl  md:mx-auto lg:max-w-5xl lg:flex lg:items-center lg:mt-24">
            <div className="lg:inline-block">
              <h4 className="tech-txt">Tech Stack</h4>
            </div>
            <ul className="lg:inline-on">
              <li>
                <Image src={html} alt="HTML logo" />
              </li>
              <li>
                <Image src={css} alt="HTML logo" />
              </li>
              <li>
                <Image src={js} alt="HTML logo" />
              </li>
              <li>
                <Image src={react} alt="HTML logo" />
              </li>
              <li>
                <Image src={nextJs} alt="HTML logo" />
              </li>
              <li>
                <Image src={tailwindcss} alt="HTML logo" />
              </li>
            </ul>
          </section>
        </div>
      </div>
      <section id="about-sec" className="about px-5 lg:py-36">
        <div className="lg:container-d lg:flex lg:mx-auto lg:gap-10">
          <div className="px-4 lg:pl-0 mb-9 md:mx-auto md:max-w-lg lg:basis-1/2">
            <picture className="lg:h-full lg:w-full lg:overflow-hidden lg:flex lg:rounded-2xl">
              <Image
                className="overflow-hidden rounded-2xl"
                src={about}
                alt="about-img"
              />
            </picture>
          </div>
          <div className=" text-center lg:text-left md:mx-auto md:max-w-xl lg:basis-1/2">
            <h2>About me</h2>
            <h3 className="lg:pb-5">
              A dedicated Front-end Developer with keen eye👀 for details
            </h3>
            <p className="font-mulish">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </section>
      <section id="portfolio-sec" className="my-20 lg:my-36 portfolio lg:container-d lg:mx-auto">
        <div className="text-center md:text-left mb-16">
          <h2 className="uppercase text-lblue text-base">Portfolio</h2>
          <h3 className="text-2xl">
            Each project is a unique piece of development 🧩
          </h3>
        </div>
        <div className="flex flex-col gap-14 lg:proj-list">
          {projList.map((item, index) => {
            return <Project project={item} key={index} />
          })}
        </div>
      </section>
      <section id="contact-sec" className="text-center md:text-left bg-white py-20 px-10">
        <div className="lg:container-d">
          <h2>Contact</h2>
          <h3>Don't be shy! Hit me up! 👇</h3>
          <div className="flex flex-col md:flex-row gap-14 mt-14 md:gap-20">
            <div className="md:flex md:gap-5">
              <div className="h-14  w-14 rounded-full bg-white inline-flex items-center justify-center text-blue-600 shadow-md">
                <Image className="w-[30px]" src={mapS} alt="location-icon" />
              </div>
              <div>
                <h5 className="text-dblue font-bold capitalize">Location</h5>
                <p className="text-lp">Lagos, Nigeria</p>
              </div>
            </div>
            <div className="md:flex md:gap-5">
              <div className="h-14  w-14 rounded-full bg-white inline-flex items-center justify-center text-blue-600 shadow-md">
                <Image
                  className="max-w-[30px]"
                  src={mail}
                  alt="location-icon"
                />
              </div>
              <div>
                <h5 className="text-dblue font-bold capitalize">Mail</h5>
                <Link className="text-lp" href={"mailto:amza.web@gmail.com"}>
                  amza.web@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dblue text-center py-14 px-10">
        <div className="md:flex md:justify-between md:items-center lg:container-d">
          <p className="text-white text-[17px]">
            Copyright © {date.getFullYear()}. All rights reserved
          </p>
          <div className="flex justify-center mt-3">
            <div>
              <Image
                className="w-7 inline-block mr-5"
                src={linkedinB}
                alt="linkedin"
              />
              <Image className="w-7 inline-block" src={githubB} alt="Github" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

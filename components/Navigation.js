'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

import menuBtn from '@/app/assets/svg/menu.svg'
import xMark from '@/app/assets/svg/xmark.svg'

const Navigation = () => {
    const [navOpened, setnavOpened] = useState(false)
    const openNav = (inp) => {
        setnavOpened(true)
        }
    
    const closeNav = (inp) => {
        setnavOpened(false)
    }
    
    return (
        <header className='bg-white py-7 px-11 pl-12 flex justify-between shadow-pr fixed top-0 w-full z-50'>
            <div>
                <h3 className="logo">Amza.dev</h3>
            </div>
            <nav className={navOpened ? "nav left-0" : "nav -left-[100vw]"}>
                <div className='relative'>
                    <button className='absolute right-10 top-8' onClick={closeNav}>
                        <Image src={xMark} alt='logo' height={33} />
                    </button>
                </div>
                <div className='flex justify-center h-full items-center text-2xl'>
                    <ul className='flex flex-col gap-10 text-center'>
                        <li><Link href={'#'}>Home</Link></li>
                        <li><Link href={'#'}>About</Link></li>
                        <li><Link href={'#'}>Portfolio</Link></li>
                        <li><Link href={'#'}>Contact</Link></li>
                    </ul>
                </div>
            </nav>
            <div>
                <button onClick={openNav}>
                    <Image src={menuBtn} alt='logo' width={23} height={23} />
                </button>
            </div>
        </header>
    )
}

export default Navigation
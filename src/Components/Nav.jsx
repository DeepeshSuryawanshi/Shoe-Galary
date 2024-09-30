import React from 'react'
import {HeaderLogo} from "../assets/images"
import { hamburger } from '../assets/icons'
import {navLinks} from "../Constants/index"

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={HeaderLogo} width={130} height={29} alt="logo" />
        </a>
        <ul className='flex-1  flex justify-center items-center gap-16 max-lg:hidden'>
          {
            navLinks.map((item)=>(
              <ul key={item.label}>
                <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray ' >
                  {item.label}
                </a>
              </ul>
            ))
          }
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="contact logo" width={25} height={25}/>
        </div>
      </nav>
    </header>
  )
}

export default Nav

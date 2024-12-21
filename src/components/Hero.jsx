import React from 'react'
import {logo }from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='logo' className='w-28 object-contain' />
            <button type='button' className='black_btn' onClick={()=>window.open('https://github.com/mukeshlodhi-04')}>
                Github
            </button>
        </nav>

        <h1 className='head_text'>Summarize Articles with SUMZ</h1>
        <h2 className='desc'>Turn your length articales into sort , simple and clean summary </h2>

    </header>
  )
}

export default Hero
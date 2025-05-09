import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold  hidden md:inline'>Portfolio.</div>
        
            <div className='space-x-6 '>
                <a href="#home" className='hover:text-blue-400 text-blue-800'>Home</a>
                <a href="#about" className='hover:text-grey-400'>About</a>
                <a href="#skills" className='hover:text-grey-400'>Skills</a>
                <a href="#projects" className='hover:text-grey-400'>Projects</a>
                <a href="#contact" className='hover:text-grey-400'>Contact</a>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
        </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:24'>
            <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                <div className='flex-1 mb-4 md:mb-0'>
                    <h3 className='text-2xl font-bold mb-2'>Deepak</h3>
                   <p className='text-gray-400'>Full-stack Developer based in the India, jounior in web and softwaredevelopment</p>
                </div>
                <div className='flex-1 w-full'>
                    <form  className='flex items-center justify-center'>
                        <input type="email" placeholder='Enter Email' className='w-full p-3 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' />
                        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-3 rounded-r-lg'>Contact</button>
                    </form>
                </div>
            </div>
            <div className='border-t border-gray-600 pt-4 flex flex-col  md:flex-row justify-between items-center'>
                <p className='text-gray-400 mb-2'>
                    &copy; { new Date().getFullYear()} Deepak. All rights reserved.
                </p>

                <div className='flex space-x-4 mb-2 md:my-0'>
                    <a href="#" className='text-gray-400 hover:text-white'>
                        <FaFacebook className='text-blue-800'/>
                    </a>
                    <a href="#" className='text-gray-400 hover:text-white'>
                        <FaLinkedin className='text-blue-800'/>
                    </a>
                    <a href="#" className='text-gray-400 hover:text-white'>
                        <FaGithub />
                    </a>
                    <a href="#" className='text-gray-400 hover:text-white'>
                        <FaInstagram  className='bg-pink-800'/>
                    </a>
                </div>
                <div className='flex space-x-4'>
                    <a href="#" className='text-gray-400 hover:text-white'>
                        Privacy
                    </a>
                    <a href="#" className='text-gray-400 hover:text-white'>
                        Terms of Services
                    </a>
                </div>
            </div>
        </div>    
    </footer>
  )
}

export default Footer
import React from 'react'
import AboutImage from '../assets/HeroImage.png.png'


const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutImage} alt="" className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
                <div className='flex-1'>
                    <p className='text-lg mb-8'> "I am a programmer. I am a fresher frontend and backend developer. Last year, I was learning full-stack development. This is my passion, and I want to build my career in it. It was hard to learn, but I stayed motivated."
            "I faced many difficulties on this journey. I worked very hard, and now things feel easier."</p>
                    <div className='space-y-4'>
                      <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                          <div className='bg-gradient-to-r from-green-400 to to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>


                          </div>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>React JS</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                          <div className='bg-gradient-to-r from-green-400 to to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'>
                          

                          </div>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>Node JS</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                          <div className='bg-gradient-to-r from-green-400 to to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12'>
                          

                          </div>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>Javascript</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                          <div className='bg-gradient-to-r from-green-400 to to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                          

                          </div>
                        </div>
                      </div>
                      <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>Tailwind</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                          <div className='bg-gradient-to-r from-green-400 to to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-3/12'>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='mt-12 flex justify-between text-center'>
                    <div>
                      <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                        1+
                      </h3>
                      <p>years experience</p>
                    </div>
                    <div>
                      <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                        15+
                      </h3>
                      <p>Projects compeleted</p>
                    </div>
                    <div>
                      <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                        0
                      </h3>
                      <p>Clients</p>
                    </div>
                </div>
              </div>
                

            </div>
        </div>
    </div>
  )
}

export default About

import React from 'react'
import project1 from '../assets/project1.png.jpg'
import project2 from '../assets/project2.png.jpg'
import project3 from '../assets/project3.png.webp'

const projects =[
  {
    id: 1,
    name:" E-commerce",
    technologies:"MERN Stack",
    image:project1,
  }
  ,
  {
    id: 2,
    name:" Content Creator ",
    technologies:"MERN Stack",
    image:project2,
  },
  {
    id: 3,
    name:"Traveling Blog",
    technologies:"MERN Stack",
    image:project3,
  }
]

const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:24'>
            <h2 className='text-4xl font-bold text-center mb-12'> My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map(project =>(
                  <div className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                    <img src={project.image} alt="" className='rounded-lg mb-4 w-full h-60 object-cover' />
                    <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                    <p className='text-gray-400 mb-2'>{project.technologies}</p>
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects
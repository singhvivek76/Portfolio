import React, {useState} from 'react'
import {projects} from '../../constants'

const Projects = () => {
  // const [selectedProject, setSelectedProject] = useState(null);

  // const handleOpenModal = (project) => {
  //   setSelectedProject(project);
  // };

 


  return (
    <section 
      id='projects' 
      className='py-5 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'
    >
      <div className='text-center mb-4'>
        <h2 className='text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4 text-center mt-4'>
          Projects
        </h2>
        <div className='w-30 h-1 bg-[#8245ec] mx-auto mt-2'></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
        {projects.map((project) => (
          <div
            key={project.id}
            //onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-4">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}

              </div>

              <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>

            </div>
          </div>
        ))}
      </div>

      

    </section>
  )
}

export default Projects
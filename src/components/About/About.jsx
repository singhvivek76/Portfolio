import React, { useState, useEffect } from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import profileImage from '../../assets/profile1.jpeg'

const Hero = () => {
  
  return (
    <section
      id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-6 md:mt-18 lg:mt-16'
    >
      <div className='text-center mb-4'>
        <h2 className='text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4 text-center mt-4'>
          About Me
        </h2>
        <div className='w-35 h-1 bg-[#8245ec] mx-auto mt-2'></div>
      </div>
      
      <div className='flex flex-col md:flex-row justify-between mt-8 md:mt-0 gap-x-4 md:flex-row'>
        
        <div className='md:w-1/2 text-center md:text-left mt-4 md:mt-0'>
          <img src={profileImage} alt='Vivek Kumar Singh'
            className='w-100 h-115 object-cover p-8 drop-shadow-[0_10px_20px_rgba(130, 69, 236, 0.5)] text-white  md:w-full'
          />
  
        </div>

        <div className='md:w-1/2 md:justify-end text-white md:mt-0 mt-4 pt-8'>
          <p className='leading-relaxed text-justify'>
            I am a Computer Science and Engineering student at Meerut Institute of Technology (Meerut) which is associated with Dr. A.P.J. Abdul Kalam Technical University (Lucknow) with strong foundations in Data Structures and Algorithms and hands-on experience in full-stack web development. I enjoy building scalable, user-focused applications using modern technologies.
          </p>
          <br/> 
          <p className='leading-relaxed text-justify'>
            I have solved <span className="font-bold text-purple-400"> 150+ problems </span> on LeetCode, which has strengthened my problem-solving skills and ability to write efficient, maintainable code. I am a continuous learner and am actively seeking opportunities to contribute to real-world projects and grow as an engineer.
          </p>
          
        
        </div>

      </div>

    </section>
  )
}

export default Hero;
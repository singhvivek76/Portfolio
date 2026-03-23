import React, { useState, useEffect } from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import profileImage from '../../assets/profile.jpeg'

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Vivek Kumar Singh', 'Full Stack Developer', 'Problem Solver'];
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenTexts = 2000;

  useEffect(() => {
    let timeout;
    const currentText = texts[currentIndex];

    if (!isDeleting) {
      // Typing
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Pause before erasing
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenTexts);
      }
    } else {
      // Erasing
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, erasingSpeed);
      } else {
        // Move to next text (defer state update to avoid setState in effect warning)
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <section
      id='home'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-6 md:mt-18 lg:mt-16'
    >
      <div className='flex w-full flex-col-reverse md:flex-row justify-between items-center mt-8'>
        <div className='md:w-1/2 text-center md:text-left mt-4 md:mt-0'>
          
          <h2 className='mb-4 text-4xl lg:text-5xl font-bold tracking-tight leading-tight sm:text-5xl'>
            <span className='text-white sm:text-4xl md:text-5xl'>
              Hello, I'm
            </span> <br />
            <span className='bg-linear-to-r text-bold from-purple-400 to-pink-500 bg-clip-text text-transparent inline-block min-w-70 sm:min-w-80 lg:min-w-200'>
              {displayText}
              <span className='animate-pulse'>|</span>
            </span>

          </h2>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-4 mt-4 leading-relaxed text-justify">
            Full-Stack Developer and competitive programmer with strong DSA fundamentals, experienced in building scalable web applications and AI-powered products using modern tech stacks.
          </p>

          <div className='flex md:flex space-x-4 text-gray-300 mr-4 justify-center items-center md:justify-start'>
                      <a href="https://github.com/singhvivek76"
                        target="_blank" rel="noopener noreferrer"
                        className='text-gray-300 hover:text-[#8245ec]'
                      >
                        <FaGithub size={28} />
                      </a>
                      <a href="https://www.linkedin.com/in/singhvivek76/"
                        target="_blank" rel="noopener noreferrer"
                        className='text-gray-300 hover:text-[#8245ec]'
                      >
                        <FaLinkedin size={28} />
                      </a>
                      <a href="https://leetcode.com/u/tovivek/"
                        target="_blank" rel="noopener noreferrer"
                        className='text-gray-300 hover:text-[#8245ec]'
                      >
                        <SiLeetcode size={28} />
                      </a>
          </div>
        
          <button
            className="px-10 mt-4 py-4 rounded-full mr-3 mb-2 hover:bg-slate-300 text-white sm:w-fit bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 items-center justify-center"
            suppressHydrationWarning
          >
            Available for Internships
          </button>
          <br /><br />

          <a
            href="/vivekkrsingh.pdf"
            download="VivekKumarSingh_Resume.pdf"
            rel="noopener noreferrer"
            className="inline-block w-full text-white py-4 px-14 rounded-full font-bold transition duration-300 transform hover:scale-110 text-center bg-gradient-to-r from-[#8245ec] to-[#a855f7] shadow-lg hover:shadow-[#8245ec]/50"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            Download Resume
          </a>
      
        </div>

        <div className='md:w-1/2 flex justify-center md:justify-end'>
          
          <img src={profileImage} alt='Vivek Kumar Singh'
            className='w-100 h-108 p-6 rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130, 69, 236, 0.5)] text-white'
          />
        
        </div>

      </div>

    </section>
  )
}

export default Hero;
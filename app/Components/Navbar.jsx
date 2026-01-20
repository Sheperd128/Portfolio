import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 transition-all duration-300 ${isScroll ? "backdrop-blur-md bg-black/30 border-b border-white/10" : ""}`}
    >
      {/* Logo Area */}
      <h1 className="text-2xl font-bold font-outfit tracking-tighter cursor-pointer">
        EMMANUEL<span className="text-blue-500">.</span>
      </h1>

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center gap-8 bg-white/5 px-8 py-2 rounded-full border border-white/10 backdrop-blur-sm'>
        {['Home', 'About', 'Work', 'Contact'].map((item) => (
          <li key={item}>
            <a className='font-ovo text-sm hover:text-blue-400 transition-colors' href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Socials / CTA */}
      <div className='hidden md:flex items-center gap-4'>
        <a href="https://github.com/Sheperd128" target="_blank" className="hover:text-blue-500 transition"><FaGithub size={20}/></a>
        <a href="https://www.linkedin.com/in/oluwashina-sipho-adenegan-8049a032b" target="_blank" className="hover:text-blue-500 transition"><FaLinkedin size={20}/></a>
        <a href="#contact" className='px-5 py-2 border border-blue-500 text-blue-500 rounded-full font-ovo text-sm hover:bg-blue-500 hover:text-white transition duration-300'>
          Let's Talk
        </a>
      </div>
    </motion.nav>
  )
}

export default Navbar
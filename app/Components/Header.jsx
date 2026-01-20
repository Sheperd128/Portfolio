import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import { FaDownload } from "react-icons/fa"

const Header = () => {
  return (
    <div id="home" className='w-full min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-4 overflow-hidden relative pt-20 md:pt-0'>
        
        {/* Background Glow Effect */}
        <div className="absolute top-[-20%] right-[-10%] w-75 md:w-125 h-75 md:h-125 bg-emerald-600/20 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-75 md:w-100 h-75 md:h-100 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>

        <motion.div 
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, ease: "backOut" }}
          className='mb-6 relative mt-10 md:mt-0'
        >
            <Image src={assets.profile_img} alt='Shina' className='rounded-full w-28 h-28 md:w-32 md:h-32 object-cover border-4 border-white/10 shadow-lg'/>
            <motion.span 
              animate={{ rotate: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 2 }}
              className="absolute bottom-0 right-0 text-3xl"
            >👋</motion.span>
        </motion.div>

        <motion.h3 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className='text-lg md:text-2xl font-ovo text-emerald-400 tracking-wide mb-2'
        >
            Hi, I'm Oluwashina Sipho Emmanuel Adenegan
        </motion.h3>

        <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className='text-4xl sm:text-6xl lg:text-[80px] font-outfit font-bold leading-tight'
        >
            Building Logic <br /> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-500">
                Solving Problems.
            </span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className='max-w-2xl mx-auto font-ovo text-gray-400 mt-6 text-base md:text-lg'
        >
            Full-Stack Engineer & Creative Technologist bridging the gap between <span className="text-white">Healthcare</span>, <span className="text-white">AI</span>, and <span className="text-white">Software</span>.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
            className='flex flex-col sm:flex-row gap-4 mt-10 mb-10 md:mb-0'
        >
            <a href="#work" className='px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition transform text-center'>
                View My Work
            </a>

            <a href="#contact" className='px-8 py-3 border border-white/30 rounded-full hover:bg-white/10 hover:border-white transition text-center'>
                Contact Me
            </a>

            {/* --- RESUME BUTTON ADDED HERE --- */}
            {/* Note: Ensure the file is inside the 'public' folder. Next.js serves files in 'public' from the root '/'. */}
            <a 
                href="/Oluwashina Sipho Emmanuel Adenegan_Resume.pdf" 
                download 
                className='px-8 py-3 border border-white/30 rounded-full flex items-center justify-center gap-2 hover:bg-emerald-600 hover:border-emerald-600 transition text-center'
            >
                My Resume <FaDownload />
            </a>
        </motion.div>
    </div>
  )
}

export default Header
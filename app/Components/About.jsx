import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-20'>
        <motion.h4 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
            className='text-center mb-2 text-lg font-ovo text-blue-400'
        >
            The Backstory
        </motion.h4>
        
        <motion.h2 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            className='text-center text-5xl font-outfit font-bold mb-16'
        >
            From Medicine to Machines
        </motion.h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20'>
            {/* Left Col - Image */}
            <motion.div 
                initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}
                className='w-64 sm:w-80 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.3)]'
            >
                <Image src={assets.user_image} alt="Profile" className="w-full hover:scale-110 transition duration-500"/>
            </motion.div>

            {/* Right Col - Content */}
            <div className='flex-1'>
                <p className='mb-8 font-ovo text-gray-300 leading-relaxed text-lg'>
                    My journey didn't start with code; it started with a stethoscope. I originally wanted to be a 
                    <span className="text-white font-semibold"> Neurosurgeon</span> or Cardiologist, driven by a desire to save lives in ERs. 
                    <br /><br />
                    But I realized something: <span className="text-blue-400 italic">"Theory is boring, action is where the fun is."</span> 
                    I've always loved taking electronics apart, and when I pivoted to Computer Science, I found my true calling. 
                    Now, my goal is to merge these worlds—building <span className="text-white font-semibold">AI systems for hospitals</span> and surgical robotics to help rural areas get the care they need.
                </p>

                {/* Info Grid */}
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10'>
                    {infoList.map((item, index) => (
                        <motion.li 
                            whileHover={{ y: -5 }}
                            key={index} 
                            className='border border-white/10 rounded-xl p-6 bg-white/5 hover:border-blue-500/50 transition duration-300'
                        >
                            <div className='mb-4'>{item.icon}</div>
                            <h3 className='font-semibold text-white mb-2'>{item.title}</h3>
                            <p className='text-gray-400 text-sm'>{item.description}</p>
                        </motion.li>
                    ))}
                </ul>

                <h4 className='text-gray-400 mb-4 font-ovo'>Tech Stack & Tools</h4>
                <div className='flex flex-wrap gap-4'>
                    {toolsData.map((tool, index) => (
                        <motion.div 
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            className='flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg text-2xl text-white'
                        >
                            {tool}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
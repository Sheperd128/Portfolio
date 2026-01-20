import { serviceData } from '@/assets/assets'
import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div id='services' className='w-full px-6 md:px-[12%] py-20 scroll-mt-20'>
        <motion.h4 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
            className='text-center mb-2 text-lg font-ovo text-emerald-400'
        >
            What I Do
        </motion.h4>
        
        <motion.h2 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            className='text-center text-3xl md:text-5xl font-outfit font-bold mb-16'
        >
            My Expertise
        </motion.h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-400'>
           I bridge the gap between complex backend logic and beautiful frontend design.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
            {serviceData.map(({icon, title, description}, index) => (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className='border border-white/10 rounded-xl px-8 py-12 cursor-pointer bg-white/5 hover:border-emerald-500/50 hover:bg-white/10 transition duration-500 shadow-lg'
                    key={index}
                >
                    <div className='flex items-center justify-center mb-6 p-4 rounded-full bg-emerald-600/10 w-max mx-auto border border-emerald-500/20'>
                        {icon}
                    </div>
                    <h3 className='text-xl my-4 font-semibold text-white text-center'>{title}</h3>
                    <p className='text-sm text-gray-400 leading-6 text-center'>{description}</p>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Services
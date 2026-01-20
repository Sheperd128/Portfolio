import { workData } from '@/assets/assets'
import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaLock } from 'react-icons/fa'

const Work = () => {
  return (
    <div id='work' className='w-full px-6 md:px-[12%] py-20'>
        <motion.h4 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
            className='text-center mb-2 text-lg font-ovo text-emerald-400'
        >
            My Portfolio
        </motion.h4>
        
        <motion.h2 
            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            className='text-center text-3xl md:text-5xl font-outfit font-bold mb-16'
        >
            Selected Works
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {workData.map((project, index) => (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    // Fixed: Changed h-[400px] to h-100 for desktop
                    className='group relative rounded-2xl overflow-hidden cursor-pointer h-80 md:h-100 border border-white/5 bg-slate-900'
                >
                    {/* Background Image Logic */}
                    <div 
                        className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${project.comingSoon ? 'grayscale blur-[2px]' : 'group-hover:scale-110'}`}
                        style={{ backgroundImage: `url(${project.bgImage})`, backgroundColor: '#0d2725' }} 
                    />
                    
                    {/* Dark Overlay */}
                    <div className='absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-500'></div>

                    {/* Content */}
                    <div className='absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                        <div className='flex flex-wrap gap-2 mb-3'>
                            {project.tags.map((tag, i) => (
                                <span key={i} className='text-xs px-3 py-1 bg-emerald-600/80 rounded-full text-white backdrop-blur-sm'>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h2 className='text-xl md:text-2xl font-bold text-white mb-2'>{project.title}</h2>
                        <p className='text-gray-300 text-sm hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                            {project.description}
                        </p>
                        
                        {project.comingSoon ? (
                             <div className='inline-flex items-center gap-2 mt-4 text-gray-500 font-bold uppercase tracking-widest text-xs cursor-not-allowed'>
                                <FaLock size={12}/> Coming Soon
                             </div>
                        ) : (
                            <a href={project.link} target="_blank" className='inline-flex items-center gap-2 mt-4 text-emerald-400 hover:text-emerald-300 font-semibold transition'>
                                View Project <FaExternalLinkAlt size={12}/>
                            </a>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>

        <div className='text-center mt-20'>
             <a href="https://github.com/Sheperd128" target="_blank" className="px-8 py-3 border border-white/20 rounded-full hover:bg-emerald-500/10 hover:border-emerald-500 hover:text-emerald-400 transition duration-300 block sm:inline-block w-full sm:w-auto">
                See More on GitHub
             </a>
        </div>
    </div>
  )
}

export default Work
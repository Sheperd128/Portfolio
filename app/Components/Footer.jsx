import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-20 bg-gradient-to-t from-emerald-900/20 to-transparent py-10'>
      <div className='text-center'>
        
        <h1 className="text-3xl font-bold font-outfit tracking-tighter cursor-pointer mb-6">
            EMMANUEL<span className="text-emerald-500">.</span>
        </h1>

        <div className='w-max flex items-center gap-2 mx-auto mb-10'>
            <a href="mailto:emmanueladenegan@gmail.com" className='text-gray-300 hover:text-emerald-400 transition flex items-center gap-2'>
               ✉️ emmanueladenegan@gmail.com
            </a>
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-white/10 mx-[10%] mt-6 py-6'>
          <p className='text-gray-500'>© 2026 Oluwashina Emmanuel Adenegan. All rights reserved.</p>
          
          <ul className='flex items-center gap-6 justify-center mt-4 sm:mt-0 text-xl text-gray-400'>
              <li><a target='_blank' href="https://github.com/Sheperd128" className="hover:text-emerald-400 transition"><FaGithub /></a></li>
              <li><a target='_blank' href="https://www.linkedin.com/in/oluwashina-sipho-adenegan-8049a032b" className="hover:text-emerald-400 transition"><FaLinkedin /></a></li>
          </ul>
      </div>

    </div>
  )
}

export default Footer
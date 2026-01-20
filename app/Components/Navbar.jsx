import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect Scroll for Glass Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 transition-all duration-300 ${isScroll ? "backdrop-blur-md bg-black/30 border-b border-white/10" : ""}`}
    >
      {/* Logo */}
      <a href="#home" className="text-2xl font-bold font-outfit tracking-tighter cursor-pointer z-50">
        EMMANUEL<span className="text-emerald-500">.</span>
      </a>

      {/* Desktop Menu (Hidden on Mobile) */}
      <ul className='hidden md:flex items-center gap-8 bg-white/5 px-8 py-2 rounded-full border border-white/10 backdrop-blur-sm'>
        {['Home', 'About', 'Work', 'Contact'].map((item) => (
          <li key={item}>
            <a className='font-ovo text-sm hover:text-emerald-400 transition-colors' href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Socials / CTA */}
      <div className='hidden md:flex items-center gap-4'>
        <a href="https://github.com/Sheperd128" target="_blank" className="hover:text-emerald-500 transition"><FaGithub size={20}/></a>
        <a href="https://www.linkedin.com/in/oluwashina-sipho-adenegan-8049a032b" target="_blank" className="hover:text-emerald-500 transition"><FaLinkedin size={20}/></a>
        <a href="#contact" className='px-5 py-2 border border-emerald-500 text-emerald-500 rounded-full font-ovo text-sm hover:bg-emerald-500 hover:text-white transition duration-300'>
          Let's Talk
        </a>
      </div>

      {/* Mobile Hamburger Button (Visible on Phone Only) */}
      <button 
        className="md:hidden text-white z-50 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </motion.nav>

    {/* Mobile Full Screen Menu Overlay */}
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: "tween", duration: 0.3 }}
          // Fixed: Changed bg-[#061817] to bg-darkBg
          className="fixed inset-0 bg-darkBg z-40 flex flex-col items-center justify-center md:hidden"
        >
          <ul className='flex flex-col items-center gap-8 text-2xl font-outfit'>
            {['Home', 'About', 'Work', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  onClick={() => setIsMenuOpen(false)}
                  className='hover:text-emerald-500 transition-colors' 
                  href={`#${item.toLowerCase()}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          
          <div className='flex items-center gap-6 mt-10'>
             <a href="https://github.com/Sheperd128" target="_blank" className="text-white hover:text-emerald-500"><FaGithub size={28}/></a>
             <a href="https://www.linkedin.com/in/oluwashina-sipho-adenegan-8049a032b" target="_blank" className="text-white hover:text-emerald-500"><FaLinkedin size={28}/></a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}

export default Navbar
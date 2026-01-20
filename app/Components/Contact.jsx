import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "2f45eeca-8c85-499e-b47b-2e1a0dd7c2fa");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Message Sent Successfully!");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='contact' className='w-full px-6 md:px-[12%] py-20 bg-linear-to-b from-transparent to-black'>
            <motion.h4 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} 
                className='text-center mb-2 text-lg font-ovo text-emerald-400'
            >
                Connect with me
            </motion.h4>
            <h2 className='text-center text-3xl md:text-5xl font-outfit font-bold mb-16'>Get in Touch</h2>

            <div className='max-w-2xl mx-auto text-center'>
                 {/* WhatsApp Direct Link */}
                <motion.a 
                    whileHover={{ scale: 1.05 }}
                    href="https://wa.me/27812345678" // REMEMBER TO ADD YOUR NUMBER
                    className='inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full mb-12 font-bold shadow-lg hover:bg-green-600 transition w-full md:w-auto justify-center'
                >
                    <FaWhatsapp size={24} /> Chat on WhatsApp
                </motion.a>

                <p className='text-gray-400 mb-8'>Or send me an email directly here:</p>

                <form onSubmit={onSubmit} className='flex flex-col gap-6 text-left'>
                    {/* Changed grid-cols-1 for mobile, 2 for desktop */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <input type="text" placeholder='Your Name' required 
                            className='p-4 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-emerald-500 text-white'/>
                        <input type="email" placeholder='Your Email' required 
                            className='p-4 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-emerald-500 text-white'/>
                    </div>
                    <textarea rows='5' placeholder='Your Message' required
                        className='p-4 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-emerald-500 text-white resize-none'></textarea>
                    
                    <button type='submit' className='py-3 px-8 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition w-full md:w-max mx-auto flex items-center justify-center gap-2'>
                        Submit Message <FaPaperPlane />
                    </button>
                    <p className='text-center text-green-400 mt-4'>{result}</p>
                </form>
            </div>
        </div>
    )
}

export default Contact
import React from 'react'
import logo from '../assets/logo.png'
import { SOCIAL_MEDIA_LINKS } from '../constants'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <div className="mb-9 mt-20 ">
            <div className='flex items-center justify-center'>
                < motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} src={logo} alt="" width={200} className='my-20' />
            </div>
            <div className="flex items-center justify-center gap-8">
                {SOCIAL_MEDIA_LINKS.map((links, index) => (
                    <motion.a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.2, delay: index * 0.5 }} key={index} target='_blank' rel='noopener noreferrer' href={links.href}>{links.icon}</motion.a>
                ))}
            </div>
            <p className='mt-8 text-center text-sm tracking-wide text-gray-400'> &copy; All rights reserved by Ashish Kumar.  </p>
        </div>
    )
}

export default Footer

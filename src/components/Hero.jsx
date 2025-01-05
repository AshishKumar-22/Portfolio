import React from 'react'
import { HERO, SOCIAL_MEDIA_LINKS } from '../constants'
import ashishKumar_Img from '../assets/ashish-img.png'
import { motion } from 'framer-motion';




const Hero = () => {
    return (
        <>
            <section className='flex min-h-screen  flex-wrap items-center' id='home'>
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, }} className="w-full md:w-1/2 borde p-2">
                    <h2 className='my-8 p-2 text-4xl  font-bold md:text-5xl lg:text-[7rem] '>{HERO.name}</h2>
                    <p className='p-2 text-3xl tracking-tighter lg:text-4xl '>{HERO.greet}</p>
                    <p className='mb-8 p-2 text-xl '>{HERO.description}</p>

                    <div className="flex items-center justify-center gap-8 w-96 p-2 mb-8 sm:w-full">
                        {SOCIAL_MEDIA_LINKS.map((links, index) => (
                            <motion.a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.2, delay: index * 0.5 }} key={index} target='_blank' rel='noopener noreferrer' href={links.href}>{links.icon}</motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="w-full md:w-1/2">
                    <div className="flex justify-center ">
                        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} src={ashishKumar_Img} alt="Ashish Kumar" width={550} height={550} className='rounded-3xl' />
                    </div>
                </motion.div>
            </section>
        </>
    )
}

export default Hero

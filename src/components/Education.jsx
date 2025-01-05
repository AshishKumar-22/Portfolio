import React from 'react'
import { EDUCATION } from '../constants'
import { motion } from 'framer-motion'

const Education = () => {
    return (
        <section className='py-8' id='education'>
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className=' mb-4 font-bold text-center text-4xl '>My Education</motion.h2>

            {EDUCATION.map((educationData, index) => (
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: index * 0.5 }} key={index} className=' mb-6 p-10  '>
                    <h3 className='text-xl font-semibold '>{educationData.degree}</h3>
                    <p className='text-lg'>{educationData.description}</p>
                    <p className='text-sm text-stone-300'>{educationData.duration}</p>
                    <p className='mt-2 '>{educationData.institution}</p>
                </motion.div>
            ))}

        </section>
    )
}

export default Education

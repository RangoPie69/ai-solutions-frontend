import React from 'react'
import { motion } from 'motion/react'

const Title = ({title, desc}) => {
  return (
    <div>
      <motion.h2 
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.6}}
      viewport={{once: true}}
      className='text-3xl text-center sm:text-5xl font-medium pb-5'>{title}</motion.h2>

      <motion.p 
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.2}}
      viewport={{once: true}}
      className='max-w-lg mx-auto text-center text-gray-500 
      dark:text-white/75 pb-0'>{desc}</motion.p>
    </div>
  )
}

export default Title

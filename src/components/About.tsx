import React from 'react'
import image from '../assets/img4.svg'
import { Button } from '.'
import { motion } from 'framer-motion'
import { textVariant2, headerVariants, } from '../constants/motion'


const About = () => {
  return (
    <motion.div className='xl:flex justify-between pt-10 p-7 px-10 h-auto'
    variants={headerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}>
       <div className=''><img src={image} className='h-[70%]'/></div>
      <motion.div className='sm:w-[600px] w-full pt-20'
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}>
        <h1 className=' text-[50px] font-bold '>About Us.</h1>
        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro, placeat, nostrum aut dolore recusandae aliquid facere fuga est molestiae repellendus eveniet perspiciatis alias. Quasi rerum inventore vitae enim impedit?</p>
     <div className='pt-10'>
      <Button title='Learn More' styles='' />
     </div>
      </motion.div>
    </motion.div>
  )
}

export default About
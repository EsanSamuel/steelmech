import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { textVariant2, headerVariants, } from '../constants/motion'

type Props = {
    text: string
    title: string
    icon: ReactNode
}

const Card = ({ text, title, icon }: Props) => {
    return (
        <motion.div className='bg-white rounded-[10px] p-5 text-left card  hover:text-white'
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}>
            <h1>{icon}</h1>
            <h1 className='text-black font-bold text-[20px] pb-5 pt-2 '>{title}</h1>
            <h1 className='text-[#5f5f5f]'>{text}</h1>
        </motion.div>
    )
}

export default Card
import React from 'react'
import { Card } from '.'
import { GrTechnology } from 'react-icons/gr'
import { MdIndeterminateCheckBox } from 'react-icons/md'
import { motion } from 'framer-motion'
import { textVariant2, headerVariants, } from '../constants/motion'

const Services = () => {
    return (
        <motion.div className='text-center about'
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}>
            <hr className='' />
            <h1 className='font-bold text-[50px] pb-5 pt-5'>Our Services</h1>
            <p className='sm:px-[20%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quam commodi eligendi reprehenderit neque optio, laborum sapiente.</p>

            <div className='grid sm:grid-cols-3 grid-cols-1 gap-8 mt-10 sm:p-20'>

                <Card
                    icon={<MdIndeterminateCheckBox className='text-[#8a2eff] text-[50px] p-3 rounded bg-[#cce0ff]' />}
                    title='Technology'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali' />

                <Card
                    icon={<MdIndeterminateCheckBox className='text-[#eb4174] text-[50px] p-3 rounded bg-[#ffe3e3]' />}
                    title='Technology'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali' />
                <Card
                    icon={<MdIndeterminateCheckBox className='text-[#83a4e4] text-[50px] p-3 rounded bg-[#b5f0f0]' />}
                    title='Technology'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali' />
                <Card
                    icon={<MdIndeterminateCheckBox className='text-[#5d69be] text-[50px] p-3 rounded bg-[#e4d3f1]' />}
                    title='Technology'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali' />
                <Card
                    icon={<MdIndeterminateCheckBox className='text-[#39e75f] text-[50px] p-3 rounded bg-[#cefad0]' />}
                    title='Technology'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali' />
                <Card
                    icon={<MdIndeterminateCheckBox className='text-[#c651cd] text-[50px] p-3 rounded bg-[#fbddfd]' />}
                    title='Technology'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali' />
            </div>
        </motion.div>
    )
}

export default Services
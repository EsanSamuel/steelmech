
import { Button } from '.'
import image1 from '../assets/img2.svg'
import { motion } from 'framer-motion'
import {  headerVariants, } from '../constants/motion'

const Main = () => {
    return (
        <motion.div className='sm:pt-[10%] sm:px-10 pt-[25%] p-5 xl:flex justify-between gap-20'
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            >
            <div className=''>
                <motion.h1 className='text-[70px] pt-10 font-bold'>Your Partner for <br className='sm:flex hidden' /> every <span className='font-light'>tech </span>activities.</motion.h1>
                <p className='sm:w-[600px] w-full'>Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <div className='sm:mt-10 mt-7'>
                    <Button
                        title='Get Started'
                        styles='' />
                </div>
            </div>

            <div>
                <img src={image1} className='sm:flex pt-10' />
            </div>
        </motion.div>
    )
}

export default Main
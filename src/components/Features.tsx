import { motion } from 'framer-motion'
import { headerVariants, } from '../constants/motion'
import img from '../assets/img5.svg'
import { Button } from '.'

const Features = () => {
    return (
        <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}>
            <div className='bg-[#dafcfc] h-auto rounded-[20px] text-center sm:px-[30%] px-5 py-10'>
                <h1 className='font-bold sm:text-[50px] text-[40px] pb-5'>Easily make purchases from your favourite services</h1>
                <p>Make purchases from your favourite services such as; Amazon, Spotify and Bitcoin directly from your virtual wallet.</p>
                <Button title='Continue' styles='w-full mt-10' />
                <img src={img} className='pt-10' />
            </div>
        </motion.div>
    )
}

export default Features
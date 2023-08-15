import React from 'react'
import { footerLinks } from '../constants'
import { motion } from 'framer-motion'
import { textVariant2, headerVariants, } from '../constants/motion'

type Props = {
  title: string
  Links: Array<string>
}

const FooterColumn = ({ title, Links }: Props) => (
  <div>
    <ul><h1 className='font-bold'>{title}</h1>
      <li className='mt-2' >
        {Links.map((link) => (
          <li key={link} className='pt-2 cursor-pointer'>{link}</li>
        ))}
      </li>
    </ul>
  </div>
)

const Footer = () => {
  return (
    <motion.div className='sm:flex justify-between'
    variants={textVariant2}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}>

      <h1 className='font-bold pb-10'>steelmech.</h1>

      <div className='sm:flex gap-10 pb-10'>
        <div className='pb-10'>
          <FooterColumn
            title={footerLinks[0].title}
            Links={footerLinks[0].links} />
        </div>

        <div className='pb-10'>
          <FooterColumn
            title={footerLinks[1].title}
            Links={footerLinks[1].links} />
        </div>
        <FooterColumn
          title={footerLinks[3].title}
          Links={footerLinks[3].links} />
      </div>
    </motion.div>
  )
}

export default Footer
import React from 'react'

type Props = {
    title: string
    styles: string
}

const Button = ({ title, styles }: Props) => {
    return (
        <button className={`sm:px-7 px-10 bg-[#5c69be] py-3 rounded-full  ${styles} hover:opacity-50 text-white`}>
            {title}
        </button>
    )
}

export default Button
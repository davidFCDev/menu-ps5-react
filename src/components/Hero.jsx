import React from 'react';
import Buttons from './Buttons';
import { motion } from "framer-motion";
import "../index.css";

const Hero = ({ avatar, text }) => {

    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='fixed flex flex-col text-gray-300 bottom-12 justify-center gap-6 items-center' >
                <img src={avatar} alt='logo' className='w-[500px]'/>
                <h1 className='text-3xl font-semibold'>{text}</h1>
                <Buttons />
        </motion.section>
    )
}

export default Hero
import React from 'react';
import { motion } from "framer-motion";

const Card = ({ card }) => {
    return (
        <motion.div 
            className='box-shadow-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
                <img src={card} alt='card' className='h-[200px] w-[300px]'/>
        </motion.div>
    )
}

export default Card
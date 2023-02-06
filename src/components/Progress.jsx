import React from 'react';
import { BsTrophyFill } from 'react-icons/bs';
import { motion } from "framer-motion";

const Progress = () =>  (
        <motion.section 
            className='bg-black-gradient box-shadow-2 text-white flex gap-10 py-2 px-5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
                <BsTrophyFill className='text-3xl my-2'/>
                <div className='flex flex-row gap-20'>
                    <div className=''>
                        <p className='text-xs text-gray-300'>Progress</p>
                        <h2 className='text-xl'>15%</h2>
                    </div>
                    <div className='text-right'>
                        <p className='text-xs text-gray-300'>Earned</p>
                        <h2 className='text-xl'>10/46</h2>
                    </div>
                </div>
        </motion.section>
)


export default Progress
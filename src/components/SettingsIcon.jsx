import React from 'react';
import { RiSettings5Fill } from 'react-icons/ri';

const SettingsIcon = () =>  (
    <div className='p-[1px] hover:border border-white rounded-full hover:shadow-sm hover:shadow-white'>
        <div className='p-[9px] transition rounded-full hover:text-black hover:bg-gray-200 hover:cursor-pointer hover:border-2 hover:border-black'>
            <RiSettings5Fill className='text-[26px]'/>
        </div>
    </div>
)


export default SettingsIcon
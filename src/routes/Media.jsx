import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { links } from '../constants';

const Media = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedListItem, setSelectedListItem] = useState(null);

    const handleWheel = event => {
        if (isHovering) {
        event.currentTarget.scrollLeft += event.deltaY;
        }
    };

    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>

                <ul
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        scrollBehavior: 'smooth',
                    }}
                    onMouseOver={() => setIsHovering(true)}
                    onMouseOut={() => setIsHovering(false)}
                    onWheel={handleWheel}
                    className='flex gap-10 my-10 mx-2 overflow-x-hidden'
                    >
                        {links.map((link, index) => (
                            <li 
                                key={link.id}
                                className='box-shadow'
                                onClick={() => {
                                    setSelectedVideo(link);
                                    setSelectedListItem(index);
                                    }}
                                style={
                                    selectedListItem === index
                                        ? { opacity: '0.2' }
                                        : {}
                                    }
                                >
                                {
                                    selectedListItem === index ?
                                    (<div className='bg-black-gradient w-[220px] h-[125px]'></div>) :
                                    (<ReactPlayer url={link.link} width='220px' height='125px' light={true} playing={false} />)
                                }
                            </li>
                        ))}
                </ul>
                    {selectedVideo && (
                        <div className='w-full my-14'>
                            <div className='bg-black w-fit h-fit m-auto box-shadow'>
                                <ReactPlayer url={selectedVideo.link} width='600px' height='340px' light={true} controls={true} />
                            </div>
                        </div>
                    )}
        </motion.div>
    )
}

export default Media;
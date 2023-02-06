import React, { useState } from 'react';
import { motion } from 'framer-motion';


const Menu = ({ games, onGameSelect }) => {
    const [selectedGame, setSelectedGame] = useState(games[0].id);
    const [hoveredGame, setHoveredGame] = useState(null);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
                <ul className='menu flex flex-wrap px-4 py-5 justify-between w-fit hover:cursor-pointer'>
                    {games.map((game) => (
                        <li
                        key={game.id} 
                        onClick={() => { 
                            setSelectedGame(game.id);
                            onGameSelect(game)
                            }}
                        onMouseEnter={() => {
                            setSelectedGame(null);
                            setHoveredGame(game.id);
                            }}
                        onMouseLeave={() => setHoveredGame(null)}
                        className='px-1 rounded-3xl'
                        >
                        <img
                            className= 'rounded-3xl'
                            src={game.img}
                            alt={game.name}
                            style={
                                game.id === hoveredGame || game.id === selectedGame
                                ? {
                                    width: "120px",
                                    height: "120px",
                                    border: "2px solid white",
                                    transition: "all 0s ease-in-out",
                                    boxShadow: '0 0 10px white',
                                }
                                : { 
                                    width: "100px",
                                    height: "100px",
                                    border: "2px solid #060C18",
                                    transition: "all 0.5s ease-in-out",
                                }
                            }
                            />
                        </li>
                    ))}
                </ul>
        </motion.div>
    )
}

export default Menu


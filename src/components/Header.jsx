import React, { useContext, useRef } from 'react';
import { AppContext } from '../App';
import user from '../assets/images/user.png';
import Clock from './Clock';
import SettingsIcon from './SettingsIcon';
import SearchIcon from './SearchIcon';
import sonidoPs5 from '../assets/audios/sonidoPs.mp3';

const Header = () => {
    const { route, setRoute } = useContext(AppContext);
    const audioRef = useRef(null);

    const handleClick = () => {
        audioRef.current.play();
    };

    return (
        <header className='w-full h-[90px] flex py-6 items-center navbar justify-between text-white'>
            <div className='flex gap-16 font-semibold text-[20px]'>
                <audio ref={audioRef} src={sonidoPs5}></audio>
                <button 
                    onClick={ () => {
                        handleClick();
                        setRoute("home");
                    }} 
                    className={ route === "home" ? "text-white" : "text-gray-300"}
                    >Games</button>
                <button 
                    onClick={() => {
                        handleClick();
                        setRoute("media");
                    }} 
                    className={ route === "media" ? "text-white" : "text-gray-300"}
                    >Media</button>
            </div>
            <div className='flex max-w-[35%] items-center gap-16'>
                <SearchIcon />
                <SettingsIcon />
                <img src={user} alt='avatar' className='w-[45px] border-2 border-white rounded-full hover:cursor-pointer user-shadow'/>
                <Clock />
            </div>
        </header>
    )
}

export default Header
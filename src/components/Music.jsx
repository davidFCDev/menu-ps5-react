import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { TbVolume, TbVolumeOff } from "react-icons/tb";

const Music = ({ audio }) => {
    const [isMuted, setIsMuted] = useState(false);
    
        const handleMuteUnmute = () => {
        setIsMuted(!isMuted);
        };

        return (
        <>
            <ReactAudioPlayer
                src={audio}
                autoPlay={true}
                controls={false}
                muted={isMuted}
            />
                <button onClick={handleMuteUnmute}>
                    {
                        isMuted 
                        ? 
                        (<TbVolumeOff className='text-2xl fixed bottom-8 left-8 text-white'/>) 
                        : 
                        (<TbVolume className='text-2xl fixed bottom-8 left-8 text-white'/>)
                        }
                </button>
        </>
        );
    };


export default Music;
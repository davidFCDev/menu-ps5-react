import React from 'react';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Music from '../components/Music';
import Card from '../components/Card';
import Progress from '../components/Progress';

const Home = ({ games, onGameSelect, avatar, text, audio, card, trophy }) => {
    return (
        <section>
            <div>
                <Menu games={games} onGameSelect={onGameSelect} />
                <Hero avatar={avatar} text={text} />
                <Music audio={audio} />
            </div>
            <div className='flex flex-col gap-8 w-[300px] fixed right-20 bottom-10'>
                <Card card={card}/>
                <Progress trophy={trophy}/>
            </div>
        </section>
    )
}

export default Home;
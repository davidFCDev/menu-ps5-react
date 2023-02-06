import React, { createContext, useState } from 'react';
import { games } from './constants';
import styles from './style';
import Header from "./components/Header";
import './index.css';
import Home from './routes/Home';
import Media from './routes/Media';
import Settings from './routes/Settings';

export const AppContext = createContext(null);

function App() {
  const [backgroundImage, setBackgroundImage] = useState(games[0].bg);
  const [avatar, setAvatar] = useState(games[0].avatar);
  const [text, setText] = useState(games[0].text);
  const [card, setCard] = useState(games[0].card);
  const [trophy, setTrophy] = useState(games[0].trophy);
  const [audio, setAudio] = useState(games[0].audio);
  const [route, setRoute] = useState("home");

  const handleGameSelect = (selectedGame) => {
    setBackgroundImage(selectedGame.bg);
    setAvatar(selectedGame.avatar);
    setText(selectedGame.text);
    setCard(selectedGame.card);
    setTrophy(selectedGame.trophy);
    setAudio(selectedGame.audio);
  }

  return (
    <AppContext.Provider value={{ route, setRoute }} >
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='screen'
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Header />
            <main >
              {route === "home" && <Home games={games} onGameSelect={handleGameSelect} avatar={avatar} text={text} audio={audio} card={card} trophy={trophy}/>}
              {route === "media" && <Media /> }
              {route === "settings" && <Settings />}
            </main> 
          </div>
        </div>
      </div>
      </AppContext.Provider>
  )
}

export default App


import {
  useNavigate,
  Routes,
  Route,
} from 'react-router-dom';

import { useRef, useState } from 'react';

import Letter from './Letter.jsx';
import Memories from './Memories.jsx';
import Memory1 from './MemoryOne.jsx';
import Memory2 from './MemoryTwo.jsx';
import Memory3 from './MemoryThree.jsx';
import Memory4 from './MemoryFour.jsx';
import Memory5 from './MemoryFive.jsx';
import Memory6 from './MemorySix.jsx';
import FinalPage from './FinalPage.jsx';

import './App.css';

function Home({ isPlaying, toggleMusic }) {
  const navigate = useNavigate();

  return (
    <div className="birthday-page">
      <div className="floating-hearts" aria-hidden="true">
        <span>♥</span>
        <span>♡</span>
        <span>♥</span>
        <span>♡</span>
        <span>♥</span>
        <span>♡</span>
        <span>♥</span>
      </div>

      <nav className="navbar">
        <div className="logo">♥ V ♥</div>
        <span>MADE WITH LOVE</span>
      </nav>

      <main className="hero">
        <p className="eyebrow">
          A LITTLE SURPRISE FOR SOMEONE SPECIAL
        </p>

        <div className="heart">♥</div>

        <h1>
           Happy Birthday 
          <br />
          <span>Vijju ♥</span>
        </h1>

        <p className="subtitle">
          To my favourite person, my happiest place,
          <br />
          and my forever kind of love.
        </p>

        <button
          type="button"
          className="surprise-button"
          onClick={() => navigate('/letter')}
        >
          Click here  <span>♡</span>
        </button>

        <button
          type="button"
          className="music-button"
          onClick={toggleMusic}
        >
          {isPlaying
            ? 'Ⅱ Pause Our Song ♡'
            : '♫ Click to enjoy the view with music ♡'}
        </button>

        <p className="date">· YOUR SPECIAL DAY</p>
      </main>

      <footer>
        <span>MADE WITH ALL MY LOVE</span>
        <span>♡ FOREVER YOURS ♡</span>
      </footer>
    </div>
  );
}

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        if (audio.currentTime === 0) {
          audio.currentTime = 37;
        }

        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error('Music playback error:', error);
      alert(
        'Could not play the song. Please check your music file.'
      );
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/our-song.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          console.error(
            'Music file error. Check public/music/our-song.mp3'
          );
        }}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              isPlaying={isPlaying}
              toggleMusic={toggleMusic}
            />
          }
        />

        <Route path="/letter" element={<Letter />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/memory1" element={<Memory1 />} />
        <Route path="/memory2" element={<Memory2 />} />
        <Route path="/memory3" element={<Memory3 />} />
        <Route path="/memory4" element={<Memory4 />} />
        <Route path="/memory5" element={<Memory5 />} />
        <Route path="/memory6" element={<Memory6 />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </>
  );
}

export default App;

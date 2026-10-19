

import { useNavigate } from 'react-router-dom';
import './MemoryOne.css';

function Memory1() {
  const navigate = useNavigate();

  return (
    <div className="memories-page">
      <p className="memories-label">OUR FIRST SPECIAL MEMORY ♡</p>

      <h1>The Day My Heart Chose You</h1>

      <div className="memory-detail">
        <img
          src="/images/memory3.jpg"
          alt="Our Chinna Tirupati memory"
        />

        <p>
          That day at Chinna Tirupati, I didn't know I would
          come back with a feeling so special. Somewhere
          between the little moments we shared, my heart
          started whispering, "Maybe he's the one."

          I went there for a visit, but my heart came back
          choosing you a little more. And look at me now,
           — still choosing you! ❤️
        </p>

        <p className="memory-love-note">
          YOU, ME, AND A LITTLE FOREVER ♡
        </p>
      </div>
<div className="memory-one-buttons">
  <button
    className="story-button"
    onClick={() => navigate('/memory2')}
  >
    Our Tough Days ♡
  </button>
</div>
      
    </div>
  );
}

export default Memory1;

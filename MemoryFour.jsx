
import { useNavigate } from 'react-router-dom';
import './MemoryFour.css';

function Memory4() {
  const navigate = useNavigate();

  return (
    <div className="memory-four-page">
      <p className="memory-four-label">
        A VIEW MADE BETTER BY YOU ♡
      </p>

      <h1 style={{
    color: "#530637"
      }}> The First Time You Showed Me the Beach 🌊</h1>

      <div className="memory-four-card">
        <div className="memory-four-photo-frame">
          <img
            src="/images/memory4.jpg"
            alt="Our first beach visit together"
          />
        </div>

        <div className="memory-four-story">
          <p
              style={{
    color: "#530637"
      }}>
Remember the first time you showed me the beach?
            🌊❤️
          </p>

          <p>
            The sea was beautiful, the waves kept coming and
            going, and there I was, making another memory
            with my favourite person.
          </p>

          <p>
            I got to see a beautiful place through your eyes,
            and somehow that made it even more special.
            Maybe it was the sound of the waves, maybe it was
            the view… or maybe it was simply because I was
            there with you. 🥹💕
          </p>

          <p>
            If you ask me what made that day special, I
            wouldn't say it was just the beach. It was
            getting to share that little moment with you.
          </p>
        </div>

        <p className="memory-four-love-note">
          MY FAVOURITE VIEW IS STILL YOU ♡
        </p>
      </div>

      <div className="memory-four-buttons">
        <button
          className="memory-four-button"
          onClick={() => navigate('/memory5')}
        >
          Our Second Beach Visit 🌊
        </button>
      </div>
    </div>
  );
}

export default Memory4;


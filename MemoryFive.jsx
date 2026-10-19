
import { useNavigate } from 'react-router-dom';
import './MemoryFive.css';

function Memory5() {
  const navigate = useNavigate();

  return (
    <div className="memory-five-page">
      <p className="memory-five-label">
        ANOTHER BEACH, ANOTHER BEAUTIFUL MEMORY ♡
      </p>

      <h1 style={{
    color: "#530637"
      }}>Our Second Beach Visit 🌊</h1>

      <div className="memory-five-card">
        <div className="memory-five-photo-frame">
          <img
            src="/images/memory5.jpg"
            alt="Our second beach visit"
          />
        </div>

        <div className="memory-five-story">
          <p>
            Going to the beach with you once was special,
            but getting to experience it with you again
            made my heart even happier. 🌊❤️
          </p>

          <p>
            It's funny how a place can become so special
            just because you're there with me. I don't
            need a perfect plan or an expensive date.
            Give me your company, your smile, and a little
            time with you, and I'll be the happiest girl.
          </p>

          <p>
            If I could relive that day, I would choose it
            again and again, because every little moment
            with you becomes a memory I want to keep forever.
            🥹💕
          </p>
        </div>

        <p className="memory-five-love-note">
          EVERY WAVE, EVERY MOMENT, EVERY TIME — YOU ♡
        </p>
      </div>

      <div className="memory-five-buttons">
        <button
          className="memory-five-button"
          onClick={() => navigate('/memory6')}
        >
          Our College Fest 🎉
        </button>
      </div>
    </div>
  );
}

export default Memory5;

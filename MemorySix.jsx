
import { useNavigate } from 'react-router-dom';
import './MemorySix.css';

function Memory6() {
  const navigate = useNavigate();

  return (
    <div className="memory-six-page">
      <p className="memory-six-label">
        A DAY MADE SPECIAL BY YOU ♡
      </p>

      <h1 style={{
        color: "#530637"
      }}>Our College Fest Memory 🎉</h1>

      <div className="memory-six-card">
        <div className="memory-six-photo-frame">
          <img
            src="/images/memory6.jpg"
            alt="Our college fest memory"
          />
        </div>

        <div className="memory-six-story">
          <p>
            Our college fest was more than just an event
            for me. It became another beautiful memory
            because you were part of it. ❤️
          </p>

          <p>
            And do you remember how my friends said that
            you were such a good person? Hearing those
            words made me smile, because they were seeing
            the goodness in you that made me feel special
            too. 🥹💕
          </p>

          <p>
            Maybe that's one of the things I love most
            about you — the way you make people notice
            the good in you without even trying.
          </p>

          <p>
            Among all the people and all the moments,
            you still became my favourite part of the day.
            And honestly, you're still my favourite person.
            Always you! 💗
          </p>
        </div>

        <p className="memory-six-love-note">
          MY FAVOURITE PERSON, IN EVERY CROWD ♡
        </p>
      </div>

      <div className="memory-six-buttons">
        <button
          className="memory-six-button"
          onClick={() => navigate('/final')}
        >
          One Last Thing, My Love 💌
        </button>
      </div>
    </div>
  );
}

export default Memory6;

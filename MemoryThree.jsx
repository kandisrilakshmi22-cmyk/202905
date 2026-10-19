
import { useNavigate } from 'react-router-dom';
import './MemoryThree.css';

function Memory3() {
  const navigate = useNavigate();

  return (
    <div className="memory-three-page">
      <p className="memory-three-label">
        ONE OF MY FAVOURITE DAYS ♡
      </p>

      <h1   style={{
    color: "#530637"
      }}> 

Black Outfits, Full Hearts 🖤</h1>

      <div className="memory-three-card">
        <div className="memory-three-photo-frame">
          <img
            src="/images/memory1.jpg"
            alt="Our black-outfits lunch date"
          />
        </div>

        <div className="memory-three-story">
          <p>
            Just you, me, both dressed in black, and a simple
            little lunch date. 🖤
          </p>

          <p>
            Maybe it wasn't some grand, fancy date, but
            honestly? Those simple moments with you are the
            ones that make my heart the happiest.
          </p>

    
          <p>
            It's funny how an ordinary lunch can turn into
            one of my favourite memories just because I got
            to spend it with you. I would choose a thousand
            simple dates with you over anything else.
          </p>
        </div>

        <p className="memory-three-love-note">
          MY FAVOURITE PERSON, EVERY SINGLE TIME ♡
        </p>
      </div>

      <div className="memory-three-buttons">
        <button
          className="memory-three-button"
          onClick={() => navigate('/memory4')}
        >
          Our Beach Day ♡
        </button>
      </div>
    </div>
  );
}

export default Memory3;

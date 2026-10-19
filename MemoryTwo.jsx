
import { useNavigate } from 'react-router-dom';
import './MemoryTwo.css';

function Memory2() {
  const navigate = useNavigate();

  return (
    <div className="memory-two-page">
      <p  className="memory-two-label">
        EVEN OUR TOUGH DAYS MATTER ♡
      </p>

      <h1 style={{
    color: "#530637"
      }}> 
Even When We Fight, I Choose You</h1>

      <div className="memory-two-card">
        <div className="memory-two-photo-frame">
          <img
            src="/images/memory2.jpg"
            alt="Our Chinna Tirupati memory"
          />
        </div>

        <div className="memory-two-story">
          <p>
            Who knew Chinna Tirupati would become the place
            for one of our toughest moments too? 🥺❤️
          </p>

          <p>
            We had our serious fights, and maybe things
            weren't perfect. We got upset, we
            misunderstood each other, and our little hearts
            had a difficult time.
          </p>

          <p>
            But one fight or mistake can never erase all the love
            between us. We're not perfect, and we don't
            have to be. We're two imperfect people learning
            how to understand each other better.
          </p>

          <p>
            So, even on the days when we don't agree,
            remember this,  you're still my favourite
            person to make up with🫂💕
          </p>
        </div>

        <p className="memory-two-love-note">
          A LITTLE FIGHT, A LOT OF LOVE ♡
        </p>
      </div>

      <div className="memory-two-buttons">
        <button
          className="memory-two-button"
          onClick={() => navigate('/memory3')}
        >
          Our Black Outfit Date 🖤
        </button>
      </div>
    </div>
  );
}

export default Memory2;

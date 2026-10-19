

import { useNavigate } from 'react-router-dom';
import './Letter.css';

function Letter() {
  const navigate = useNavigate();

  return (
    <div className="letter-page">
      <div className="letter-card">
        <p className="letter-top">A LITTLE LETTER, JUST FOR YOU</p>

        <div className="letter-heart">♥</div>

        <h1>To My Vijju</h1>
        <p className="letter-subtitle">
          On your very special day...
        </p>

        <div className="letter-divider">♡ ───── ♡</div>

        <p>Happy Birthday, my love! ❤️</p>

        <p>
          You are one of the most beautiful parts of my life.
          Every little moment with you becomes a memory I want
          to keep close to my heart forever.
        </p>

        <p>
          I wish you a lifetime of happiness, success, peaceful
          days, and dreams coming true. I hope this new year of
          your life brings you everything your heart deserves.
        </p>

        <p>
          Thank you for being you, for the smiles, the memories,
          and the love that makes my world feel a little more
          beautiful.
        </p>

        <p className="letter-signature">
          Forever yours,
          <br />
          With all my love ♡
        </p>

        <div className="letter-footer">
          MADE WITH LOVE · JUST FOR YOU
        </div>

        <button
          type="button"
          className="memories-button"
          onClick={() => navigate('/memories')}
        >
          Relive Our Memories ♡
        </button>
      </div>
    </div>
  );
}

export default Letter;

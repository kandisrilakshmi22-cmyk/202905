
import './Memories.css';
import { useNavigate } from 'react-router-dom';

function Memories() {
  const navigate = useNavigate();
  return (
    <div className="memories-page">
      <p className="memories-label">OUR LITTLE WORLD</p>

      <h1>
        Our Memories <span>♡</span>
      </h1>

      <p className="memories-intro">
        Every moment with you is a memory
        <br />
        I wish I could live a thousand times.
      </p>

      <div className="memories-heart">♥</div>

      <p className="memories-note">
        A little collection of you, me, and our story.
      </p>

      
<div className="memories-gallery">
  <div className="memories-photo">
    <img src="/images/memory3.jpg" alt="Our favourite memory" />
    <p>My favourite moment ♡</p>
  </div>

  <div className="memories-photo">
    <img src="/images/memory2.jpg" alt="A happy memory together" />
    <p>Us being us ♥</p>
  </div>

  <div className="memories-photo">
    <img src="/images/memory1.jpg" alt="A special moment together" />
    <p>A memory to keep ♡</p>
  </div>
  <div className="memories-photo">
  <img src="/images/memory4.jpg" alt="Another special memory together" />
  <p>One more beautiful memory ♡</p>
</div>

<div className="memories-photo">
  <img src="/images/memory5.jpg" alt="A moment close to my heart" />
  <p>Forever my favourite person ♥</p>
</div>
<div className="memories-photo">
  <img src="/images/memory6.jpg" alt="A moment close to my heart" />
  <p> My Forever and Always ♥</p>
</div>
</div>

<div className="story-buttons">
  
<button
  type="button"
  className="story-button"
  onClick={() => {
    console.log('Have a look clicked!');
    navigate('/memory1');
  }}
>
  Have a look ♡
</button>
   
</div>

      <p className="memories-footer">
        YOU & ME, ALWAYS ♡
      </p>
    </div>
  );
}

export default Memories;

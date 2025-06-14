import { Link } from 'react-router-dom';
import './styles/SecondPage.css';
import { GiBoomerangSun } from "react-icons/gi";

function SecondPage() {
  return (
    <>
      <div className="image-container">
       <div className="streaming-title">
  Supply & Demand — Now on streaming
</div>


        <a
          href="https://open.spotify.com/intl-fr/track/7qpLWfD11Ajphmitp3XQsQ?si=f369f44a66f14a31"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="Site22.jpg"
            alt="Play on Spotify"
            className="clickable-image"
          />
        </a>
        <br>
        </br>
     <Link to="/" className="back-icon-fixed">
  <GiBoomerangSun />
</Link>

      </div>

    </>
  );
}

export default SecondPage;

import { Link, useNavigate } from 'react-router-dom';
import './styles/SecondPage.css';
import { GiBoomerangSun } from "react-icons/gi";

function SecondPage() {
  const navigate = useNavigate();

  return (
    <div className="image-container">
      <div className="streaming-title">
        Yesplease!
      </div>

      <div className="side-by-side">
        <img
          src="Cover.JPG"
          alt="Go to Sounds"
          className="clickable-image"
          onClick={() => navigate('/sounds')}
        />
        <img
          src="Extract.JPG"
          alt="Go to Videoclips"
          className="clickable-image"
          onClick={() => navigate('/videoclips')}
        />
      </div>

      <Link to="/" className="back-icon-fixed">
        <GiBoomerangSun />
      </Link>
    </div>
  );
}

export default SecondPage;

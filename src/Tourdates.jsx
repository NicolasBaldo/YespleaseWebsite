import { Link } from 'react-router-dom';
import './styles/Tourdates.css';
import { GiBoomerangSun } from "react-icons/gi";

function Tourdates() {
  return (
    <div className="tourdates-container">
      <img
        src="Tour.JPG" 
        alt="Tour Poster"
        className="tour-image"
      />

      <div className="back-link">
        <Link to="/" className="back-icon-fixed">
          <GiBoomerangSun />
        </Link>
      </div>
    </div>
  );
}

export default Tourdates;

import { useNavigate } from 'react-router-dom';
import './styles/Home.css';
import CircularText from './CircularText';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="image-container">
      <CircularText
        text="● ON TOUR ● "
        onClick={() => navigate('/tourdates')}
      />

      <img
        src="Band.JPG"
        alt="Go"
        onClick={() => navigate('/other')}
        className="clickable-image"
      />
    </div>
  );
}

export default Home;

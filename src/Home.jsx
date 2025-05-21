import { useNavigate } from 'react-router-dom';
import './styles/Home.css';




function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/other');
  };

return (
  <div className="image-container">
    <img
      src="rose-essai.jpg"
      alt="Go"
      onClick={handleClick}
      className="clickable-image"
    />
  </div>
);

}

export default Home;

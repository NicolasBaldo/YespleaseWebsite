import { useNavigate } from 'react-router-dom';
import './styles/Home.css';


function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/other');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      <img
        src="rose-essai.jpg" // Mets ton image dans le dossier `public`
        alt="Go"
        onClick={handleClick}
        style={{ cursor: 'pointer', width: '300px', height: 'auto' }}
      />
    </div>
  );
}

export default Home;

import { Link } from 'react-router-dom';

function secondPage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Supply And Demand now on streaming on Spotify</h1>
      <Link to="/">← Back</Link>
    </div>
  );
}

export default secondPage;

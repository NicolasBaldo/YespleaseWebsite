import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import OtherPage from './secondPage';
import Tourdates from './Tourdates';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/other" element={<OtherPage />} />
      <Route path="/tourdates" element={<Tourdates />} />
    </Routes>
  );
}

export default App;

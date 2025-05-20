import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import OtherPage from './secondPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/other" element={<OtherPage />} />
    </Routes>
  );
}

export default App;

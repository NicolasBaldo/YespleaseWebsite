import './styles/CircularText.css';

function CircularText({ text, onClick }) {
  return (
    <div className="circular-text-container" onClick={onClick}>
      <svg viewBox="0 0 200 200" className="circular-svg">
        <defs>
          <path
            id="circlePath"
            d="M 100, 100
               m -75, 0
               a 75,75 0 1,1 150,0
               a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text fill="white" fontSize="12" fontWeight="bold">
          <textPath href="#circlePath" startOffset="0">
            {text.repeat(10)}
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export default CircularText;

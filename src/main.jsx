import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Intro from './intro.jsx';
import Cookie from './cookie.jsx';

function App() {
  const [end, setEnd] = useState(0);
  const [screen, setScreen] = useState("intro");

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {screen === "intro" ? (
        <Intro end={end} setEnd={setEnd} setScreen={setScreen} />
      ) : (
        <Cookie setScreen={setScreen} />
      )}
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
import './index.css';

export default function Intro({ end, setEnd, setScreen }) {
  const handleContinue = (newEnd) => {
    setEnd(newEnd);
  };

  if (end === 0) {
    return (
      <div className="intro-scene border-primary border-2">
        <h1 className="animation-0">Good Morning</h1>
        <p className="animation-0">You wake up after a night of almost no sleep after a hard and a monotonous work week. You feel groggy and disoriented. You hear a mystic voice saying:</p>
        <h3 className="animation-0">Oh Child , you are one of my best follower and I can't let you see you suffer due to monotony so you must learn to face it or else you will be lost in the world of monotony</h3>
        <div className="join">
          <button 
            onClick={() => setEnd(1)} 
            className="btn btn-soft btn-primary join-item"
          >
            Nah fuck this man i must have smoked something
          </button>
          <button 
            onClick={() => setEnd(2)} 
            className="btn btn-soft btn-secondary join-item"
          >
            Ah shit Maybe it could be true couldn't hurt to try
          </button>
        </div>
      </div>
    );
  }

  if (end === 1) {
    return (
      <div className="intro-scene">
        <h1 data-textify className="animation-0">Good Morning</h1>
        <p data-textify className="animation-0">You wake up after a night of almost no sleep after a hard and a monotonous work week. You feel groggy and disoriented. You hear a mystic voice saying:</p>
        <h3 data-textify className="animation-0">Oh Child , you are one of my best follower and I see you are struggling you will be lost in the world of monotony until you learn to face it so you will now repeat the whole day but..</h3>
        <div className="join">
          <button 
            onClick={() => setEnd(0)} 
            className="btn btn-soft"
          >
            but...what????
          </button>
        </div>
      </div>
    );
  }

  if (end === 2) {
    return (
      <div className="intro-scene">
        <h1 data-textify className="animation-0">Now you go down groggily</h1>
        <p data-textify className="animation-0">Now you see your mom and she says:</p>
        <div className="join">
        <button 
            onClick={() => setScreen('cookie')} 
            className="btn btn-soft btn-primary"
          >
            "Can you fetch me some cookies??"
          </button>
          <button 
            onClick={() => setEnd(1)} 
            className="btn btn-soft btn-secondary join-item"
          >
            "why are you sulking soo much..."
          </button>
        </div>
      </div>
    );
  }

  if (end === 3) {
    return (
      <div className="intro-scene">
        <h1 data-textify className="animation-0">You start telling your mom about the dream</h1>
        <p data-textify className="animation-0">As you're talking, you notice your mom's face goes pale.</p>
        <h3 data-textify className="animation-0">"That's... that's impossible. I had the exact same dream last night."</h3>
        <div className="join">
          <button 
            onClick={() => setEnd(5)} 
            className="btn btn-soft"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  if (end === 5) {
    return (
      <div className="intro-scene">
        <h1 data-textify className="animation-0">The world around you starts to fade</h1>
        <p data-textify className="animation-0">You hear the voice again:</p>
        <h3 data-textify className="animation-0">"Now do you believe? The cycle continues until you learn."</h3>
        <div className="join">
          <button 
            onClick={() => setScreen('cookie')} 
            className="btn btn-soft btn-primary"
          >
            Continue to Cookie Game
          </button>
        </div>
      </div>
    );
  }

  return null;
}
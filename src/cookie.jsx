import { useState } from 'react';
import "./index.css";
function Cookie() {
  const [cookies, setCookies] = useState(0);

  const handleClick = () => {
    setCookies(cookies + 1);
  };
if (cookies === 10) {
window.location.reload();
}
  return (
    <div className='cookie-scene flex text-center flex-col items-center'>
      <p>You have {cookies} cookies.</p>
      <button onClick={handleClick} className='btn btn-primary'>Click for a cookie!</button>
    </div>
  );
}

export default Cookie;

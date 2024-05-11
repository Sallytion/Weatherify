import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx'
import ThreeScene from './components/ThreeScene.jsx'
import { CardDemo } from './components/CardDemo.jsx'
import Confetti from './components/Confetti.jsx'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isRainy,setIsRainy] = useState(false);
  const [isSunny,setIsSunny] = useState(false);
  const [darkClouds,setDarkClouds] = useState(false);
  const [lightning,setLightning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Confetti isRainy={isRainy}/>
      <Navbar />
      <ThreeScene isSunny={isSunny} darkClouds={darkClouds} lightning={lightning}/>
      <div>
        <b><h1 style={{fontSize:"60px"}}>23°C</h1></b>
        <br />
        <h1 style={{}}>Bhad, Gujrat</h1>
        <br />
      </div>
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <CardDemo />
        <br />
        <CardDemo />
        <br />
        <CardDemo />
      </div>
    </>
  )
}

export default App
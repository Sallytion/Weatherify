import React, { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar.jsx'
import ThreeScene from './components/ThreeScene.jsx'
import { CardDemo } from './components/CardDemo.jsx'
import Confetti from './components/Confetti.jsx'
import * as dat from 'dat.gui';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isRainy,setIsRainy] = useState(false);
  const [isSunny,setIsSunny] = useState(false);
  const [darkClouds,setDarkClouds] = useState(false);
  const [lightning,setLightning] = useState(false);

  const gui = useRef();
  useEffect(() => {
  gui.current = new dat.GUI();
  gui.current.add({ isRainy }, 'isRainy').onChange(setIsRainy);
  gui.current.add({ isSunny }, 'isSunny').onChange(setIsSunny);
  gui.current.add({ darkClouds }, 'darkClouds').onChange(setDarkClouds);
  gui.current.add({ lightning }, 'lightning').onChange(setLightning);

  return () => {
    gui.current.destroy();
  };
}, []);

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
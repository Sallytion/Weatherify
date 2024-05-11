import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, extend, useThree, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import cloud from '../assets/cloud.glb';
import lightning from '../assets/lightning.glb';
import { MeshPhysicalMaterial } from 'three';
import { Shape,ExtrudeGeometry} from 'three';
import * as THREE from 'three';

import '../App.css';

extend({ OrbitControls });

const Controls = ({ setCloudColor }) => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();
  const initialPosition = useRef(camera.position.clone());

  useFrame(() => {
    camera.position.lerp(initialPosition.current, 0.08);
    controls.current.update();
  });

  const onDoubleClick = useRef(() => {
    controls.current.reset();
  });

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      onDoubleClick={onDoubleClick.current}
    />
  );
};

const CloudModel = ({ cloudColor }) => {
  const gltf = useLoader(GLTFLoader, cloud);

  const material = useMemo(() => new MeshPhysicalMaterial({
    color: cloudColor,
    roughness: 0.5,
    metalness: 0.5,
  }), [cloudColor]);

  gltf.scene.traverse((node) => {
    if (node.isMesh) {
      node.material = material;
    }
  });

  return <primitive object={gltf.scene} position={[0,2,0]} />;
};

const LightningModel = () => {
  const gltf = useLoader(GLTFLoader, lightning);

  const material = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: 'yellow',
    roughness: 0.5,
    metalness: 0.5,
    side: THREE.DoubleSide,
  }), []);

  gltf.scene.traverse((node) => {
    if (node.isMesh) {
      node.material = material;
    }
  });

  return <primitive object={gltf.scene} position={[0,2,0]}/>;
};

const ThreeScene = ({ isSunny, darkClouds, lightning }) => {
  const [cloudColor,setCloudColor] = useState(darkClouds ? 0xaaaaaa : 0xffffff);

  return (
    <div className="threeScene">
      <Canvas className="canvas" camera={{ position: [0, 0, 15] }} style={{height: '60vh'}}>
          <ambientLight />
          <pointLight position={[5, 8, 2]} intensity={250} />
          <CloudModel cloudColor={cloudColor} />
          {lightning && <LightningModel />}
          <Controls setCloudColor={setCloudColor} />
          {isSunny && <mesh position={[5,4,0]}>
            <circleGeometry args={[3, 32]} />
            <meshPhysicalMaterial color={0xFFFF00} />
          </mesh>}
      </Canvas>
    </div>
  );
};

export default ThreeScene;
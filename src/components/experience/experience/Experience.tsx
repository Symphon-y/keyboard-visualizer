import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Keyboard } from '../index';
const Experience = () => {
  return (
    <>
      <Canvas>
        <mesh>
          <Keyboard />
        </mesh>
      </Canvas>
    </>
  );
};

export default Experience;

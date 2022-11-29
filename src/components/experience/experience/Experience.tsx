import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Keyboard } from '../index';
import {
  ContactShadows,
  Environment,
  RandomizedLight,
} from '@react-three/drei';
import { OrbitControlContext } from '../../../context/OrbitControlContext';
const Experience = () => {
  return (
    <>
      <Canvas>
        <color args={['white']} attach='background' />
        <RandomizedLight
          amount={8}
          radius={5}
          ambient={0.5}
          position={[5, 3, 2]}
          bias={0.001}
        />
        {/* Sets the default Lighting settings for the scene */}
        {/* <Skybox /> */}
        <Environment preset='city' />
        <OrbitControlContext>
          <mesh
            position={[0, 1.55, 0]}
            rotation={[-Math.PI * -0.25, 0, 0]}
            scale={40}
            rotation-y={Math.PI * 0.001}>
            <Keyboard />
          </mesh>
        </OrbitControlContext>

        <ContactShadows
          opacity={1}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color='#000000'
        />
      </Canvas>
    </>
  );
};

export default Experience;

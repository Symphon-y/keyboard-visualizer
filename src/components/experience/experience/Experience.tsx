import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Keyboard } from '../index';
import {
  ContactShadows,
  Environment,
  RandomizedLight,
} from '@react-three/drei';
import { OrbitControlContext } from '../../../context/OrbitControlContext';
import { useKeyValues } from '../../../hooks/useKeyValues';
const Experience = () => {
  // Hovered State for Cursor Change on Hover
  const [hovered, setHovered] = useState(false);

  // Property Change
  const { keyValue, setKeyValue } = useKeyValues();
  const [opacity, setOpacity] = useState(100);
  const [transmission, setTransmission] = useState(1);
  const [clearCoat, setClearCoat] = useState(1);
  const [reflectivity, setReflectivity] = useState(1);
  const [color, setColor] = useState('#1f275a');

  const handleColorChange = (e: any) => {
    e.preventDefault();
    setColor(e.target.value);
    for (const key in keyValue) {
      if (keyValue[key as keyof typeof keyValue].selected) {
        setKeyValue((draft): any => {
          draft[key as keyof typeof keyValue].color = e.target.value;
        });
      }
    }
  };

  const handleOpacity = (e: any) => {
    e.preventDefault();
    setOpacity(e.target.value);
    for (const key in keyValue) {
      if (keyValue[key as keyof typeof keyValue].selected) {
        setKeyValue((draft): any => {
          draft[key as keyof typeof keyValue].opacity = e.target.value / 100;
        });
      }
    }
  };
  const handleTransmission = (e: any) => {
    e.preventDefault();
    setTransmission(e.target.value);
    for (const key in keyValue) {
      if (keyValue[key as keyof typeof keyValue].selected) {
        setKeyValue((draft): any => {
          draft[key as keyof typeof keyValue].transmission =
            e.target.value / 100;
        });
      }
    }
  };
  const handleClearCoat = (e: any) => {
    e.preventDefault();
    setClearCoat(e.target.value);
    for (const key in keyValue) {
      if (keyValue[key as keyof typeof keyValue].selected) {
        setKeyValue((draft): any => {
          draft[key as keyof typeof keyValue].clearCoat = e.target.value / 100;
        });
      }
    }
  };
  const handleReflectivity = (e: any) => {
    e.preventDefault();
    setReflectivity(e.target.value);
    for (const key in keyValue) {
      if (keyValue[key as keyof typeof keyValue].selected) {
        setKeyValue((draft): any => {
          draft[key as keyof typeof keyValue].reflectivity =
            e.target.value / 100;
        });
      }
    }
  };
  // Handles Cursor Change on Hover
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);

  return (
    <div>
      <div style={{ height: '50rem' }}>
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
              onPointerOver={() => setHovered(true)}
              onPointerOut={() => setHovered(false)}
              position={[0, 1.55, 0]}
              rotation={[-Math.PI * -0.25, 0, 0]}
              scale={40}
              rotation-y={Math.PI * 0.001}>
              <Keyboard keyValue={keyValue} setKeyValue={setKeyValue} />
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
      </div>
      <div>
        Color
        <input type='color' onChange={handleColorChange} />
        Opacity
        <input
          type='range'
          min={1}
          max={100}
          value={opacity}
          className='slider'
          id='myRange'
          onChange={handleOpacity}
        />
        Transmission
        <input
          type='range'
          min={1}
          max={100}
          value={transmission}
          className='slider'
          id='myRange'
          onChange={handleTransmission}
        />
        Clear Coat
        <input
          type='range'
          min={1}
          max={100}
          value={clearCoat}
          className='slider'
          id='myRange'
          onChange={handleClearCoat}
        />
        Reflectivity
        <input
          type='range'
          min={1}
          max={100}
          value={reflectivity}
          className='slider'
          id='myRange'
          onChange={handleReflectivity}
        />
      </div>
    </div>
  );
};

export default Experience;

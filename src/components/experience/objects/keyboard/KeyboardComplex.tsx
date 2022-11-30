import React from 'react';
import { useRef, useEffect, useCallback } from 'react';
import { useGLTF } from '@react-three/drei';
import { animated } from '@react-spring/three';
import useKeyboard, { Keys } from '../../../../hooks/useKeyboard';

export default function Keyboard({ keyValue, setKeyValue, ...props }: any) {
  const group = useRef();
  const { nodes, materials }: any = useGLTF('/models/keyboard_complex.glb');

  const { handleKeypress, getRefAndPosition, getRef } = useKeyboard();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === Keys.tab) {
        e.preventDefault();
      }
      handleKeypress('DOWN', e.code);
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      handleKeypress('UP', e.code);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeypress]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <animated.mesh
          {...getRef(Keys.plate)}
          name='plate'
          castShadow
          receiveShadow
          geometry={nodes.plate.geometry}
          material={materials.plate}
          position={[0.00134338, -0.01323594, -0.00115875]}
          userData={{ name: 'plate' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              plate: {
                ...keyValue.plate,
                selected: !keyValue.plate.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.plate.clearCoat}
            transmission={keyValue.plate.transmission}
            reflectivity={keyValue.plate.reflectivity}
            transparent={keyValue.plate.transparent}
            color={keyValue.plate.color}
            opacity={keyValue.plate.opacity}
          />
        </animated.mesh>
        <group
          name='Cube020'
          position={[-0.06279859, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.020' }}>
          <animated.mesh
            name='Cube070_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube070_1.geometry}
            material={materials['switch bottom.001']}
          />
          <animated.mesh
            name='Cube070_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube070_2.geometry}
            material={materials['switch.001']}
          />
        </group>
        <group
          name='Cube021'
          position={[-0.07955249, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.021' }}>
          <animated.mesh
            name='Cube071_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube071_1.geometry}
            material={materials['switch bottom.002']}
          />
          <animated.mesh
            name='Cube071_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube071_2.geometry}
            material={materials['switch.002']}
          />
        </group>
        <group
          name='Cube022'
          position={[-0.09629859, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.022' }}>
          <animated.mesh
            name='Cube072_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube072_1.geometry}
            material={materials['switch bottom.003']}
          />
          <animated.mesh
            name='Cube072_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube072_2.geometry}
            material={materials['switch.003']}
          />
        </group>
        <group
          name='Cube023'
          position={[-0.09029859, -0.00733654, 0.01441584]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.023' }}>
          <animated.mesh
            name='Cube073_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube073_1.geometry}
            material={materials['switch bottom.004']}
          />
          <animated.mesh
            name='Cube073_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube073_2.geometry}
            material={materials['switch.004']}
          />
        </group>
        <group
          name='Cube024'
          position={[-0.09179859, -0.0065515, -0.00056361]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.024' }}>
          <animated.mesh
            name='Cube074_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube074_1.geometry}
            material={materials['switch bottom.005']}
          />
          <animated.mesh
            name='Cube074_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube074_2.geometry}
            material={materials['switch.005']}
          />
        </group>
        <group
          name='Cube025'
          position={[-0.09429859, -0.00576646, -0.01554305]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.025' }}>
          <animated.mesh
            name='Cube075_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube075_1.geometry}
            material={materials['switch bottom.006']}
          />
          <animated.mesh
            name='Cube075_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube075_2.geometry}
            material={materials['switch.006']}
          />
        </group>
        <group
          name='Cube026'
          position={[-0.09729859, -0.00500759, -0.03002318]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.026' }}>
          <animated.mesh
            name='Cube076_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube076_1.geometry}
            material={materials['switch bottom.007']}
          />
          <animated.mesh
            name='Cube076_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube076_2.geometry}
            material={materials['switch.007']}
          />
        </group>
        <group
          name='Cube019'
          position={[-0.07729859, -0.00576646, -0.01554305]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.019' }}>
          <animated.mesh
            name='Cube077_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube077_1.geometry}
            material={materials['switch bottom.008']}
          />
          <animated.mesh
            name='Cube077_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube077_2.geometry}
            material={materials['switch.008']}
          />
        </group>
        <group
          name='Cube027'
          position={[-0.07229859, -0.0065515, -0.00056361]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.027' }}>
          <animated.mesh
            name='Cube078_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube078_1.geometry}
            material={materials['switch bottom.009']}
          />
          <animated.mesh
            name='Cube078_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube078_2.geometry}
            material={materials['switch.009']}
          />
        </group>
        <group
          name='Cube028'
          position={[-0.06729859, -0.00733654, 0.01441584]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.028' }}>
          <animated.mesh
            name='Cube079_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube079_1.geometry}
            material={materials['switch bottom.010']}
          />
          <animated.mesh
            name='Cube079_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube079_2.geometry}
            material={materials['switch.010']}
          />
        </group>
        <group
          name='Cube029'
          position={[-0.04479859, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.029' }}>
          <animated.mesh
            name='Cube080_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube080_1.geometry}
            material={materials['switch bottom.011']}
          />
          <animated.mesh
            name='Cube080_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube080_2.geometry}
            material={materials['switch.011']}
          />
        </group>
        <group
          name='Cube030'
          position={[0.02420142, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.030' }}>
          <animated.mesh
            name='Cube081'
            castShadow
            receiveShadow
            geometry={nodes.Cube081.geometry}
            material={materials['switch bottom.012']}
          />
          <animated.mesh
            name='Cube081_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube081_1.geometry}
            material={materials['switch.012']}
          />
        </group>
        <group
          name='Cube031'
          position={[0.04320142, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.031' }}>
          <animated.mesh
            name='Cube082'
            castShadow
            receiveShadow
            geometry={nodes.Cube082.geometry}
            material={materials['switch bottom.013']}
          />
          <animated.mesh
            name='Cube082_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube082_1.geometry}
            material={materials['switch.013']}
          />
        </group>
        <group
          name='Cube032'
          position={[0.05970141, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.032' }}>
          <animated.mesh
            name='Cube083'
            castShadow
            receiveShadow
            geometry={nodes.Cube083.geometry}
            material={materials['switch bottom.014']}
          />
          <animated.mesh
            name='Cube083_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube083_1.geometry}
            material={materials['switch.014']}
          />
        </group>
        <group
          name='Cube033'
          position={[0.07620141, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.033' }}>
          <animated.mesh
            name='Cube084'
            castShadow
            receiveShadow
            geometry={nodes.Cube084.geometry}
            material={materials['switch bottom.015']}
          />
          <animated.mesh
            name='Cube084_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube084_1.geometry}
            material={materials['switch.015']}
          />
        </group>
        <group
          name='Cube034'
          position={[0.09570141, -0.00812158, 0.02939528]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.034' }}>
          <animated.mesh
            name='Cube085'
            castShadow
            receiveShadow
            geometry={nodes.Cube085.geometry}
            material={materials['switch bottom.016']}
          />
          <animated.mesh
            name='Cube085_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube085_1.geometry}
            material={materials['switch.016']}
          />
        </group>
        <group
          name='Cube035'
          position={[0.08770142, -0.00733654, 0.01441584]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.035' }}>
          <animated.mesh
            name='Cube086'
            castShadow
            receiveShadow
            geometry={nodes.Cube086.geometry}
            material={materials['switch bottom.017']}
          />
          <animated.mesh
            name='Cube086_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube086_1.geometry}
            material={materials['switch.017']}
          />
        </group>
        <group
          name='Cube036'
          position={[0.09270142, -0.0065515, -0.00056361]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.036' }}>
          <animated.mesh
            name='Cube087'
            castShadow
            receiveShadow
            geometry={nodes.Cube087.geometry}
            material={materials['switch bottom.018']}
          />
          <animated.mesh
            name='Cube087_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube087_1.geometry}
            material={materials['switch.018']}
          />
        </group>
        <group
          name='Cube037'
          position={[0.09720142, -0.00576646, -0.01554305]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.037' }}>
          <animated.mesh
            name='Cube088'
            castShadow
            receiveShadow
            geometry={nodes.Cube088.geometry}
            material={materials['switch bottom.019']}
          />
          <animated.mesh
            name='Cube088_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube088_1.geometry}
            material={materials['switch.019']}
          />
        </group>
        <group
          name='Cube038'
          position={[0.09470141, -0.00500759, -0.03002318]}
          rotation={[-3.08923228, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.038' }}>
          <animated.mesh
            name='Cube024_1'
            castShadow
            receiveShadow
            geometry={nodes.Cube024_1.geometry}
            material={materials['switch bottom']}
          />
          <animated.mesh
            name='Cube024_2'
            castShadow
            receiveShadow
            geometry={nodes.Cube024_2.geometry}
            material={materials['switch']}
          />
        </group>
        {/* //SECTION - Keys */}
        <animated.mesh
          {...getRefAndPosition(Keys.backquote)}
          name='Backquote'
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['keycaps2.001']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              backquote: {
                ...keyValue.backquote,
                selected: !keyValue.backquote.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.backquote.clearCoat}
            transmission={keyValue.backquote.transmission}
            reflectivity={keyValue.backquote.reflectivity}
            transparent={keyValue.backquote.transparent}
            color={keyValue.backquote.color}
            opacity={keyValue.backquote.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyA)}
          name='KeyA'
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['keycaps2.002']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.001' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyA: {
                ...keyValue.keyA,
                selected: !keyValue.keyA.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyA.clearCoat}
            transmission={keyValue.keyA.transmission}
            reflectivity={keyValue.keyA.reflectivity}
            transparent={keyValue.keyA.transparent}
            color={keyValue.keyA.color}
            opacity={keyValue.keyA.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyZ)}
          name='KeyZ'
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials['keycaps2.003']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.002' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyZ: {
                ...keyValue.keyZ,
                selected: !keyValue.keyZ.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyZ.clearCoat}
            transmission={keyValue.keyZ.transmission}
            reflectivity={keyValue.keyZ.reflectivity}
            transparent={keyValue.keyZ.transparent}
            color={keyValue.keyZ.color}
            opacity={keyValue.keyZ.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.tab)}
          name='Tab'
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials['keycaps.001']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.003' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              tab: {
                ...keyValue.tab,
                selected: !keyValue.tab.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.tab.clearCoat}
            transmission={keyValue.tab.transmission}
            reflectivity={keyValue.tab.reflectivity}
            transparent={keyValue.tab.transparent}
            color={keyValue.tab.color}
            opacity={keyValue.tab.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyQ)}
          name='KeyQ'
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['keycaps2.004']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.004' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyQ: {
                ...keyValue.keyQ,
                selected: !keyValue.keyQ.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyQ.clearCoat}
            transmission={keyValue.keyQ.transmission}
            reflectivity={keyValue.keyQ.reflectivity}
            transparent={keyValue.keyQ.transparent}
            color={keyValue.keyQ.color}
            opacity={keyValue.keyQ.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.capsLock)}
          name='CapsLock'
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials['keycaps.002']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.005' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              capsLock: {
                ...keyValue.capsLock,
                selected: !keyValue.capsLock.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.capsLock.clearCoat}
            transmission={keyValue.capsLock.transmission}
            reflectivity={keyValue.capsLock.reflectivity}
            transparent={keyValue.capsLock.transparent}
            color={keyValue.capsLock.color}
            opacity={keyValue.capsLock.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.shiftLeft)}
          name='ShiftLeft'
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials['keycaps.001']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.006' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              shiftLeft: {
                ...keyValue.shiftLeft,
                selected: !keyValue.shiftLeft.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.shiftLeft.clearCoat}
            transmission={keyValue.shiftLeft.transmission}
            reflectivity={keyValue.shiftLeft.reflectivity}
            transparent={keyValue.shiftLeft.transparent}
            color={keyValue.shiftLeft.color}
            opacity={keyValue.shiftLeft.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.space)}
          name='Space'
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials['keycaps.004']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.007' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              space: {
                ...keyValue.space,
                selected: !keyValue.space.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.space.clearCoat}
            transmission={keyValue.space.transmission}
            reflectivity={keyValue.space.reflectivity}
            transparent={keyValue.space.transparent}
            color={keyValue.space.color}
            opacity={keyValue.space.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.controlLeft)}
          name='ControlLeft'
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['keycaps.005']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.008' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              controlLeft: {
                ...keyValue.controlLeft,
                selected: !keyValue.controlLeft.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.controlLeft.clearCoat}
            transmission={keyValue.controlLeft.transmission}
            reflectivity={keyValue.controlLeft.reflectivity}
            transparent={keyValue.controlLeft.transparent}
            color={keyValue.controlLeft.color}
            opacity={keyValue.controlLeft.opacity}
          />
        </animated.mesh>
        {/* Meta (windows/apple/linux/super) intentionally left non functional */}
        <animated.mesh
          name='MetaLeft'
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials['keycaps.006']}
          position={[-0.07954678, -0.00084373, 0.03001156]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.009' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              metaLeft: {
                ...keyValue.metaLeft,
                selected: !keyValue.metaLeft.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.metaLeft.clearCoat}
            transmission={keyValue.metaLeft.transmission}
            reflectivity={keyValue.metaLeft.reflectivity}
            transparent={keyValue.metaLeft.transparent}
            color={keyValue.metaLeft.color}
            opacity={keyValue.metaLeft.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.altLeft)}
          name='AltLeft'
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials['keycaps.007']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.010' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              altLeft: {
                ...keyValue.altLeft,
                selected: !keyValue.altLeft.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.altLeft.clearCoat}
            transmission={keyValue.altLeft.transmission}
            reflectivity={keyValue.altLeft.reflectivity}
            transparent={keyValue.altLeft.transparent}
            color={keyValue.altLeft.color}
            opacity={keyValue.altLeft.opacity}
          />
        </animated.mesh>
        {/* The "Menu key" left non functional intentionally */}
        <animated.mesh
          name='MenuLeft'
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials['keycaps.008']}
          position={[0.0764515, -0.00084373, 0.03001156]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.011' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              menuLeft: {
                ...keyValue.menuLeft,
                selected: !keyValue.menuLeft.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.menuLeft.clearCoat}
            transmission={keyValue.menuLeft.transmission}
            reflectivity={keyValue.menuLeft.reflectivity}
            transparent={keyValue.menuLeft.transparent}
            color={keyValue.menuLeft.color}
            opacity={keyValue.menuLeft.opacity}
          />
        </animated.mesh>
        {/* Right win/super/mac ect key, intentionally left non functional */}
        <animated.mesh
          name='SuperRight'
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials['keycaps.009']}
          position={[0.05967194, -0.00084373, 0.03001156]}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.012' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              superRight: {
                ...keyValue.superRight,
                selected: !keyValue.superRight.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.superRight.clearCoat}
            transmission={keyValue.superRight.transmission}
            reflectivity={keyValue.superRight.reflectivity}
            transparent={keyValue.superRight.transparent}
            color={keyValue.superRight.color}
            opacity={keyValue.superRight.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.altRight)}
          name='AltRight'
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials['keycaps.010']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.013' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              altRight: {
                ...keyValue.altRight,
                selected: !keyValue.altRight.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.altRight.clearCoat}
            transmission={keyValue.altRight.transmission}
            reflectivity={keyValue.altRight.reflectivity}
            transparent={keyValue.altRight.transparent}
            color={keyValue.altRight.color}
            opacity={keyValue.altRight.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.controlRight)}
          name='ControlRight'
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials['keycaps.011']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.014' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              controlRight: {
                ...keyValue.controlRight,
                selected: !keyValue.controlRight.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.controlRight.clearCoat}
            transmission={keyValue.controlRight.transmission}
            reflectivity={keyValue.controlRight.reflectivity}
            transparent={keyValue.controlRight.transparent}
            color={keyValue.controlRight.color}
            opacity={keyValue.controlRight.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.backslash)}
          name='Backslash'
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials['keycaps.012']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.015' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              backslash: {
                ...keyValue.backslash,
                selected: !keyValue.backslash.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.backslash.clearCoat}
            transmission={keyValue.backslash.transmission}
            reflectivity={keyValue.backslash.reflectivity}
            transparent={keyValue.backslash.transparent}
            color={keyValue.backslash.color}
            opacity={keyValue.backslash.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.backspace)}
          name='Backspace'
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials['keycaps.013']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.016' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              backspace: {
                ...keyValue.backspace,
                selected: !keyValue.backspace.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.backspace.clearCoat}
            transmission={keyValue.backspace.transmission}
            reflectivity={keyValue.backspace.reflectivity}
            transparent={keyValue.backspace.transparent}
            color={keyValue.backspace.color}
            opacity={keyValue.backspace.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.enter)}
          name='Enter'
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials['keycaps.014']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.017' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              enter: {
                ...keyValue.enter,
                selected: !keyValue.enter.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.enter.clearCoat}
            transmission={keyValue.enter.transmission}
            reflectivity={keyValue.enter.reflectivity}
            transparent={keyValue.enter.transparent}
            color={keyValue.enter.color}
            opacity={keyValue.enter.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.shiftRight)}
          name='ShiftRight'
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials.keycaps}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.018' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              shiftRight: {
                ...keyValue.shiftRight,
                selected: !keyValue.shiftRight.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.shiftRight.clearCoat}
            transmission={keyValue.shiftRight.transmission}
            reflectivity={keyValue.shiftRight.reflectivity}
            transparent={keyValue.shiftRight.transparent}
            color={keyValue.shiftRight.color}
            opacity={keyValue.shiftRight.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.digit1)}
          name='Digit1'
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={materials['keycaps2.005']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.039' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              digit1: {
                ...keyValue.digit1,
                selected: !keyValue.digit1.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.digit1.clearCoat}
            transmission={keyValue.digit1.transmission}
            reflectivity={keyValue.digit1.reflectivity}
            transparent={keyValue.digit1.transparent}
            color={keyValue.digit1.color}
            opacity={keyValue.digit1.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.digit2)}
          name='Digit2'
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={materials['keycaps2.006']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.040' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              digit2: {
                ...keyValue.digit2,
                selected: !keyValue.digit2.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.digit2.clearCoat}
            transmission={keyValue.digit2.transmission}
            reflectivity={keyValue.digit2.reflectivity}
            transparent={keyValue.digit2.transparent}
            color={keyValue.digit2.color}
            opacity={keyValue.digit2.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.digit3)}
          name='Digit3'
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={materials['keycaps2.007']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.041' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              digit3: {
                ...keyValue.digit3,
                selected: !keyValue.digit3.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.digit3.clearCoat}
            transmission={keyValue.digit3.transmission}
            reflectivity={keyValue.digit3.reflectivity}
            transparent={keyValue.digit3.transparent}
            color={keyValue.digit3.color}
            opacity={keyValue.digit3.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.digit4)}
          name='Digit4'
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={materials['keycaps2.008']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.042' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              digit4: {
                ...keyValue.digit4,
                selected: !keyValue.digit4.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.digit4.clearCoat}
            transmission={keyValue.digit4.transmission}
            reflectivity={keyValue.digit4.reflectivity}
            transparent={keyValue.digit4.transparent}
            color={keyValue.digit4.color}
            opacity={keyValue.digit4.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.digit5)}
          name='Digit5'
          castShadow
          receiveShadow
          geometry={nodes.Cube043.geometry}
          material={materials['keycaps2.009']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.043' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              digit5: {
                ...keyValue.digit5,
                selected: !keyValue.digit5.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.digit5.clearCoat}
            transmission={keyValue.digit5.transmission}
            reflectivity={keyValue.digit5.reflectivity}
            transparent={keyValue.digit5.transparent}
            color={keyValue.digit5.color}
            opacity={keyValue.digit5.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.digit6)}
          name='Digit6'
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={materials['keycaps2.010']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.044' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              digit6: {
                ...keyValue.digit6,
                selected: !keyValue.digit6.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.digit6.clearCoat}
            transmission={keyValue.digit6.transmission}
            reflectivity={keyValue.digit6.reflectivity}
            transparent={keyValue.digit6.transparent}
            color={keyValue.digit6.color}
            opacity={keyValue.digit6.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.digit7)}
          name='Digit7'
          castShadow
          receiveShadow
          geometry={nodes.Cube045.geometry}
          material={materials['keycaps2.011']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.045' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              digit7: {
                ...keyValue.digit7,
                selected: !keyValue.digit7.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.digit7.clearCoat}
            transmission={keyValue.digit7.transmission}
            reflectivity={keyValue.digit7.reflectivity}
            transparent={keyValue.digit7.transparent}
            color={keyValue.digit7.color}
            opacity={keyValue.digit7.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.digit8)}
          name='Digit8'
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={materials['keycaps2.012']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.046' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              digit8: {
                ...keyValue.digit8,
                selected: !keyValue.digit8.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.digit8.clearCoat}
            transmission={keyValue.digit8.transmission}
            reflectivity={keyValue.digit8.reflectivity}
            transparent={keyValue.digit8.transparent}
            color={keyValue.digit8.color}
            opacity={keyValue.digit8.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.digit9)}
          name='Digit9'
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={materials['keycaps2.013']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.047' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              digit9: {
                ...keyValue.digit9,
                selected: !keyValue.digit9.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.digit9.clearCoat}
            transmission={keyValue.digit9.transmission}
            reflectivity={keyValue.digit9.reflectivity}
            transparent={keyValue.digit9.transparent}
            color={keyValue.digit9.color}
            opacity={keyValue.digit9.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.digit0)}
          name='Digit0'
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={materials['keycaps2.014']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.048' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              digit0: {
                ...keyValue.digit0,
                selected: !keyValue.digit0.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.digit0.clearCoat}
            transmission={keyValue.digit0.transmission}
            reflectivity={keyValue.digit0.reflectivity}
            transparent={keyValue.digit0.transparent}
            color={keyValue.digit0.color}
            opacity={keyValue.digit0.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.minus)}
          name='Minus'
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={materials['keycaps2.015']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.049' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              minus: {
                ...keyValue.minus,
                selected: !keyValue.minus.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.minus.clearCoat}
            transmission={keyValue.minus.transmission}
            reflectivity={keyValue.minus.reflectivity}
            transparent={keyValue.minus.transparent}
            color={keyValue.minus.color}
            opacity={keyValue.minus.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.equal)}
          name='Equal'
          castShadow
          receiveShadow
          geometry={nodes.Cube050.geometry}
          material={materials['keycaps2.016']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.050' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              equal: {
                ...keyValue.equal,
                selected: !keyValue.equal.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.equal.clearCoat}
            transmission={keyValue.equal.transmission}
            reflectivity={keyValue.equal.reflectivity}
            transparent={keyValue.equal.transparent}
            color={keyValue.equal.color}
            opacity={keyValue.equal.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyS)}
          name='KeyS'
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
          material={materials['keycaps2.017']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.051' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyS: {
                ...keyValue.keyS,
                selected: !keyValue.keyS.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyS.clearCoat}
            transmission={keyValue.keyS.transmission}
            reflectivity={keyValue.keyS.reflectivity}
            transparent={keyValue.keyS.transparent}
            color={keyValue.keyS.color}
            opacity={keyValue.keyS.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyD)}
          name='KeyD'
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={materials['keycaps2.018']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.052' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyD: {
                ...keyValue.keyD,
                selected: !keyValue.keyD.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyD.clearCoat}
            transmission={keyValue.keyD.transmission}
            reflectivity={keyValue.keyD.reflectivity}
            transparent={keyValue.keyD.transparent}
            color={keyValue.keyD.color}
            opacity={keyValue.keyD.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyF)}
          name='KeyF'
          castShadow
          receiveShadow
          geometry={nodes.Cube053.geometry}
          material={materials['keycaps2.019']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.053' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyF: {
                ...keyValue.keyF,
                selected: !keyValue.keyF.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyF.clearCoat}
            transmission={keyValue.keyF.transmission}
            reflectivity={keyValue.keyF.reflectivity}
            transparent={keyValue.keyF.transparent}
            color={keyValue.keyF.color}
            opacity={keyValue.keyF.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyG)}
          name='KeyG'
          castShadow
          receiveShadow
          geometry={nodes.Cube054.geometry}
          material={materials['keycaps2.020']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.054' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyG: {
                ...keyValue.keyG,
                selected: !keyValue.keyG.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyG.clearCoat}
            transmission={keyValue.keyG.transmission}
            reflectivity={keyValue.keyG.reflectivity}
            transparent={keyValue.keyG.transparent}
            color={keyValue.keyG.color}
            opacity={keyValue.keyG.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyH)}
          name='KeyH'
          castShadow
          receiveShadow
          geometry={nodes.Cube055.geometry}
          material={materials['keycaps2.021']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.055' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyH: {
                ...keyValue.keyH,
                selected: !keyValue.keyH.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyH.clearCoat}
            transmission={keyValue.keyH.transmission}
            reflectivity={keyValue.keyH.reflectivity}
            transparent={keyValue.keyH.transparent}
            color={keyValue.keyH.color}
            opacity={keyValue.keyH.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyJ)}
          name='KeyJ'
          castShadow
          receiveShadow
          geometry={nodes.Cube056.geometry}
          material={materials['keycaps2.022']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.056' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyJ: {
                ...keyValue.keyJ,
                selected: !keyValue.keyJ.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyJ.clearCoat}
            transmission={keyValue.keyJ.transmission}
            reflectivity={keyValue.keyJ.reflectivity}
            transparent={keyValue.keyJ.transparent}
            color={keyValue.keyJ.color}
            opacity={keyValue.keyJ.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyK)}
          name='KeyK'
          castShadow
          receiveShadow
          geometry={nodes.Cube057.geometry}
          material={materials['keycaps2.023']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.057' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyK: {
                ...keyValue.keyK,
                selected: !keyValue.keyK.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyK.clearCoat}
            transmission={keyValue.keyK.transmission}
            reflectivity={keyValue.keyK.reflectivity}
            transparent={keyValue.keyK.transparent}
            color={keyValue.keyK.color}
            opacity={keyValue.keyK.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyL)}
          name='KeyL'
          castShadow
          receiveShadow
          geometry={nodes.Cube058.geometry}
          material={materials['keycaps2.024']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.058' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyL: {
                ...keyValue.keyL,
                selected: !keyValue.keyL.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyL.clearCoat}
            transmission={keyValue.keyL.transmission}
            reflectivity={keyValue.keyL.reflectivity}
            transparent={keyValue.keyL.transparent}
            color={keyValue.keyL.color}
            opacity={keyValue.keyL.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.semicolon)}
          name='Semicolon'
          castShadow
          receiveShadow
          geometry={nodes.Cube059.geometry}
          material={materials['keycaps2.025']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.059' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              semicolon: {
                ...keyValue.semicolon,
                selected: !keyValue.semicolon.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.semicolon.clearCoat}
            transmission={keyValue.semicolon.transmission}
            reflectivity={keyValue.semicolon.reflectivity}
            transparent={keyValue.semicolon.transparent}
            color={keyValue.semicolon.color}
            opacity={keyValue.semicolon.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.quote)}
          name='Quote'
          castShadow
          receiveShadow
          geometry={nodes.Cube060.geometry}
          material={materials['keycaps2.026']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.060' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              quote: {
                ...keyValue.quote,
                selected: !keyValue.quote.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.quote.clearCoat}
            transmission={keyValue.quote.transmission}
            reflectivity={keyValue.quote.reflectivity}
            transparent={keyValue.quote.transparent}
            color={keyValue.quote.color}
            opacity={keyValue.quote.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyX)}
          name='KeyX'
          castShadow
          receiveShadow
          geometry={nodes.Cube061.geometry}
          material={materials['keycaps2.027']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.061' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyX: {
                ...keyValue.keyX,
                selected: !keyValue.keyX.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyX.clearCoat}
            transmission={keyValue.keyX.transmission}
            reflectivity={keyValue.keyX.reflectivity}
            transparent={keyValue.keyX.transparent}
            color={keyValue.keyX.color}
            opacity={keyValue.keyX.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyC)}
          name='KeyC'
          castShadow
          receiveShadow
          geometry={nodes.Cube062.geometry}
          material={materials['keycaps2.028']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.062' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyC: {
                ...keyValue.keyC,
                selected: !keyValue.keyC.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyC.clearCoat}
            transmission={keyValue.keyC.transmission}
            reflectivity={keyValue.keyC.reflectivity}
            transparent={keyValue.keyC.transparent}
            color={keyValue.keyC.color}
            opacity={keyValue.keyC.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyV)}
          name='KeyV'
          castShadow
          receiveShadow
          geometry={nodes.Cube063.geometry}
          material={materials['keycaps2.029']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.063' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyV: {
                ...keyValue.keyV,
                selected: !keyValue.keyV.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyV.clearCoat}
            transmission={keyValue.keyV.transmission}
            reflectivity={keyValue.keyV.reflectivity}
            transparent={keyValue.keyV.transparent}
            color={keyValue.keyV.color}
            opacity={keyValue.keyV.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyB)}
          name='KeyB'
          castShadow
          receiveShadow
          geometry={nodes.Cube064.geometry}
          material={materials['keycaps2.030']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.064' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyB: {
                ...keyValue.keyB,
                selected: !keyValue.keyB.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyB.clearCoat}
            transmission={keyValue.keyB.transmission}
            reflectivity={keyValue.keyB.reflectivity}
            transparent={keyValue.keyB.transparent}
            color={keyValue.keyB.color}
            opacity={keyValue.keyB.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyN)}
          name='KeyN'
          castShadow
          receiveShadow
          geometry={nodes.Cube065.geometry}
          material={materials['keycaps2.031']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.065' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyN: {
                ...keyValue.keyN,
                selected: !keyValue.keyN.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyN.clearCoat}
            transmission={keyValue.keyN.transmission}
            reflectivity={keyValue.keyN.reflectivity}
            transparent={keyValue.keyN.transparent}
            color={keyValue.keyN.color}
            opacity={keyValue.keyN.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyM)}
          name='KeyM'
          castShadow
          receiveShadow
          geometry={nodes.Cube066.geometry}
          material={materials['keycaps2.032']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.066' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyM: {
                ...keyValue.keyM,
                selected: !keyValue.keyM.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyM.clearCoat}
            transmission={keyValue.keyM.transmission}
            reflectivity={keyValue.keyM.reflectivity}
            transparent={keyValue.keyM.transparent}
            color={keyValue.keyM.color}
            opacity={keyValue.keyM.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.comma)}
          name='Comma'
          castShadow
          receiveShadow
          geometry={nodes.Cube067.geometry}
          material={materials['keycaps2.033']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.067' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              comma: {
                ...keyValue.comma,
                selected: !keyValue.comma.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.comma.clearCoat}
            transmission={keyValue.comma.transmission}
            reflectivity={keyValue.comma.reflectivity}
            transparent={keyValue.comma.transparent}
            color={keyValue.comma.color}
            opacity={keyValue.comma.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.period)}
          name='Period'
          castShadow
          receiveShadow
          geometry={nodes.Cube068.geometry}
          material={materials['keycaps2.034']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.068' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              period: {
                ...keyValue.period,
                selected: !keyValue.period.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.period.clearCoat}
            transmission={keyValue.period.transmission}
            reflectivity={keyValue.period.reflectivity}
            transparent={keyValue.period.transparent}
            color={keyValue.period.color}
            opacity={keyValue.period.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.slash)}
          name='Slash'
          castShadow
          receiveShadow
          geometry={nodes.Cube069.geometry}
          material={materials['keycaps2.035']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.069' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              slash: {
                ...keyValue.slash,
                selected: !keyValue.slash.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.slash.clearCoat}
            transmission={keyValue.slash.transmission}
            reflectivity={keyValue.slash.reflectivity}
            transparent={keyValue.slash.transparent}
            color={keyValue.slash.color}
            opacity={keyValue.slash.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyW)}
          name='KeyW'
          castShadow
          receiveShadow
          geometry={nodes.Cube070.geometry}
          material={materials['keycaps2.036']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.070' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyW: {
                ...keyValue.keyW,
                selected: !keyValue.keyW.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyW.clearCoat}
            transmission={keyValue.keyW.transmission}
            reflectivity={keyValue.keyW.reflectivity}
            transparent={keyValue.keyW.transparent}
            color={keyValue.keyW.color}
            opacity={keyValue.keyW.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyE)}
          name='KeyE'
          castShadow
          receiveShadow
          geometry={nodes.Cube071.geometry}
          material={materials['keycaps2.037']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.071' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyE: {
                ...keyValue.keyE,
                selected: !keyValue.keyE.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyE.clearCoat}
            transmission={keyValue.keyE.transmission}
            reflectivity={keyValue.keyE.reflectivity}
            transparent={keyValue.keyE.transparent}
            color={keyValue.keyE.color}
            opacity={keyValue.keyE.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyR)}
          name='KeyR'
          castShadow
          receiveShadow
          geometry={nodes.Cube072.geometry}
          material={materials['keycaps2.038']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.072' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyR: {
                ...keyValue.keyR,
                selected: !keyValue.keyR.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyR.clearCoat}
            transmission={keyValue.keyR.transmission}
            reflectivity={keyValue.keyR.reflectivity}
            transparent={keyValue.keyR.transparent}
            color={keyValue.keyR.color}
            opacity={keyValue.keyR.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyT)}
          name='KeyT'
          castShadow
          receiveShadow
          geometry={nodes.Cube073.geometry}
          material={materials['keycaps2.039']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.073' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyT: {
                ...keyValue.keyT,
                selected: !keyValue.keyT.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyT.clearCoat}
            transmission={keyValue.keyT.transmission}
            reflectivity={keyValue.keyT.reflectivity}
            transparent={keyValue.keyT.transparent}
            color={keyValue.keyT.color}
            opacity={keyValue.keyT.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyY)}
          name='KeyY'
          castShadow
          receiveShadow
          geometry={nodes.Cube074.geometry}
          material={materials['keycaps2.040']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.074' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyY: {
                ...keyValue.keyY,
                selected: !keyValue.keyY.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyY.clearCoat}
            transmission={keyValue.keyY.transmission}
            reflectivity={keyValue.keyY.reflectivity}
            transparent={keyValue.keyY.transparent}
            color={keyValue.keyY.color}
            opacity={keyValue.keyY.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyU)}
          name='KeyU'
          castShadow
          receiveShadow
          geometry={nodes.Cube075.geometry}
          material={materials['keycaps2.041']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.075' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyU: {
                ...keyValue.keyU,
                selected: !keyValue.keyU.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyU.clearCoat}
            transmission={keyValue.keyU.transmission}
            reflectivity={keyValue.keyU.reflectivity}
            transparent={keyValue.keyU.transparent}
            color={keyValue.keyU.color}
            opacity={keyValue.keyU.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyI)}
          name='KeyI'
          castShadow
          receiveShadow
          geometry={nodes.Cube076.geometry}
          material={materials['keycaps2.042']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.076' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyI: {
                ...keyValue.keyI,
                selected: !keyValue.keyI.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyI.clearCoat}
            transmission={keyValue.keyI.transmission}
            reflectivity={keyValue.keyI.reflectivity}
            transparent={keyValue.keyI.transparent}
            color={keyValue.keyI.color}
            opacity={keyValue.keyI.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyO)}
          name='KeyO'
          castShadow
          receiveShadow
          geometry={nodes.Cube077.geometry}
          material={materials['keycaps2.043']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.077' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyO: {
                ...keyValue.keyO,
                selected: !keyValue.keyO.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyO.clearCoat}
            transmission={keyValue.keyO.transmission}
            reflectivity={keyValue.keyO.reflectivity}
            transparent={keyValue.keyO.transparent}
            color={keyValue.keyO.color}
            opacity={keyValue.keyO.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.keyP)}
          name='KeyP'
          castShadow
          receiveShadow
          geometry={nodes.Cube078.geometry}
          material={materials['keycaps2.044']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.078' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              keyP: {
                ...keyValue.keyP,
                selected: !keyValue.keyP.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.keyP.clearCoat}
            transmission={keyValue.keyP.transmission}
            reflectivity={keyValue.keyP.reflectivity}
            transparent={keyValue.keyP.transparent}
            color={keyValue.keyP.color}
            opacity={keyValue.keyP.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.bracketLeft)}
          name='BracketLeft'
          castShadow
          receiveShadow
          geometry={nodes.Cube079.geometry}
          material={materials['keycaps2.045']}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.079' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              bracketLeft: {
                ...keyValue.bracketLeft,
                selected: !keyValue.bracketLeft.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.bracketLeft.clearCoat}
            transmission={keyValue.bracketLeft.transmission}
            reflectivity={keyValue.bracketLeft.reflectivity}
            transparent={keyValue.bracketLeft.transparent}
            color={keyValue.bracketLeft.color}
            opacity={keyValue.bracketLeft.opacity}
          />
        </animated.mesh>
        <animated.mesh
          {...getRefAndPosition(Keys.bracketRight)}
          name='BracketRight'
          castShadow
          receiveShadow
          geometry={nodes.Cube080.geometry}
          material={materials.keycaps2}
          rotation={[0.05235988, 0, 0]}
          scale={0.5}
          userData={{ name: 'Cube.080' }}
          onClick={(e) => {
            e.stopPropagation();
            setKeyValue({
              ...keyValue,
              bracketRight: {
                ...keyValue.bracketRight,
                selected: !keyValue.bracketRight.selected,
              },
            });
          }}>
          <meshPhysicalMaterial
            clearcoat={keyValue.bracketRight.clearCoat}
            transmission={keyValue.bracketRight.transmission}
            reflectivity={keyValue.bracketRight.reflectivity}
            transparent={keyValue.bracketRight.transparent}
            color={keyValue.bracketRight.color}
            opacity={keyValue.bracketRight.opacity}
          />
        </animated.mesh>
      </group>
    </group>
  );
}

useGLTF.preload('/models/keyboard_complex.glb');

import React, {
  Fragment,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { type } from '@testing-library/user-event/dist/type';

type Props = {
  children: JSX.Element;
};

interface CamContext {
  api: boolean;
  setApi: Dispatch<SetStateAction<boolean>>;
}
const camContext = createContext<CamContext>({} as CamContext); // I AM SO CONFUSED lol

export const OrbitControlContext = ({ children }: Props) => {
  const [api, setApi] = useState(true);
  const { gl, camera } = useThree();

  const value = {
    api,
    setApi,
  };

  return (
    <Fragment>
      <OrbitControls
        args={[camera, gl.domElement]}
        enableZoom={false}
        maxAzimuthAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.5}
        minAzimuthAngle={-Math.PI / 4}
        minPolarAngle={0}
        enableDamping
        enabled={api}
      />
      <camContext.Provider value={value}>{children}</camContext.Provider>
    </Fragment>
  );
};

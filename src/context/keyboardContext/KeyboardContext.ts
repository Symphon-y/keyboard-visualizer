import { createContext } from 'react';

interface KeyboardContextState {
  keyA: string;
  setKeyA: (a: boolean) => void;
}

const KeyboardContext = createContext<KeyboardContextState>({});

export default KeyboardContext;

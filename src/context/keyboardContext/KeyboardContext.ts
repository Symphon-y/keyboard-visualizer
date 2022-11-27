import { createContext } from 'react';

interface KeyboardContextState {}

const KeyboardContext = createContext<KeyboardContextState>({});

export default KeyboardContext;

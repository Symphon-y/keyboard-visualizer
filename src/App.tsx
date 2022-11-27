import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import { Footer, Header } from './components';

function App() {
  return (
    <div className='App'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

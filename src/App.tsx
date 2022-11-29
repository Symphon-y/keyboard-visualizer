import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import { Footer, Header } from './components';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='Experience'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

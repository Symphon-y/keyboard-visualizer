import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Experience } from '../components';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Experience />,
      },
    ],
  },
]);

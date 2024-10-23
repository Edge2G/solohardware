import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import './App.css';

import HomePage from './pages/HomePage';
import CpuPage from './pages/CpuPage';
import GpuPage from './pages/GpuPage';
import MboardsPage from './pages/MboardsPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/cpus',
    element: <CpuPage />
  },
  {
    path: '/gpus',
    element: <GpuPage />
  },
  {
    path: '/mboards',
    element: <MboardsPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

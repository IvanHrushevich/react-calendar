import { createBrowserRouter, RouteObject, Navigate } from 'react-router-dom';

import Login from '../components/Login';
import Event from '../components/Event';

const routes: RouteObject[] = [
  { path: '/login', element: <Login /> },
  { path: '/calendar', element: <Event /> },
  { path: '*', element: <Navigate to="/login" /> },
];

export const router = createBrowserRouter(routes);

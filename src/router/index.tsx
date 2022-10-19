import { createBrowserRouter, RouteObject, Navigate } from 'react-router-dom';

import Login from '../components/Login';
import Event from '../components/Event';

const enum Route {
  LOGIN = '/login',
  CALENDAR = '/calendar',
  OTHER = '*',
}

const routes: RouteObject[] = [
  { path: Route.LOGIN, element: <Login /> },
  { path: Route.CALENDAR, element: <Event /> },
  { path: Route.OTHER, element: <Navigate to={Route.CALENDAR} /> },
];

export const router = createBrowserRouter(routes);

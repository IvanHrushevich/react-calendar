import { RouteObject, Navigate } from 'react-router-dom';

import Login from '../pages/Login';
import Event from '../pages/Event';

const enum Route {
  LOGIN = '/login',
  CALENDAR = '/calendar',
  OTHER = '*',
}

export const publicRoutes: RouteObject[] = [
  { path: Route.LOGIN, element: <Login /> },
  { path: Route.OTHER, element: <Navigate to={Route.CALENDAR} /> },
];

export const privateRoutes: RouteObject[] = [
  { path: Route.CALENDAR, element: <Event /> },
  { path: Route.OTHER, element: <Navigate to={Route.CALENDAR} /> },
];

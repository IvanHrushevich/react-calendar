import { Navigate, RouteObject, Routes, Route } from 'react-router-dom';
import CalendarPage from '../pages/CalendarPage';
import LoginPage from '../pages/LoginPage';

export const enum RouteEnum {
  LOGIN = '/login',
  CALENDAR = '/calendar',
  OTHER = '*',
}

export const publicRoutes: RouteObject[] = [
  { path: RouteEnum.LOGIN, element: <LoginPage /> },
  { path: RouteEnum.OTHER, element: <Navigate to={RouteEnum.LOGIN} /> },
];

export const privateRoutes: RouteObject[] = [
  { path: RouteEnum.CALENDAR, element: <CalendarPage /> },
  { path: RouteEnum.OTHER, element: <Navigate to={RouteEnum.CALENDAR} /> },
];

const getRoutes = (routes: RouteObject[]) => (
  <Routes>
    {routes.map((route: RouteObject) => (
      <Route path={route.path} element={route.element} key={route.path}></Route>
    ))}
  </Routes>
);

const AppRouter = () => {
  const isAuth = false;
  return getRoutes(isAuth ? privateRoutes : publicRoutes);
};

export default AppRouter;

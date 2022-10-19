import { FC, useRef } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import './App.css';
import { privateRoutes, publicRoutes } from './router';

const App: FC = () => {
  const isAuth: boolean = true;
  const routes: RouteObject[] = isAuth ? privateRoutes : publicRoutes;
  const router = useRef(createBrowserRouter(routes));

  return <RouterProvider router={router.current} />;
};

export default App;

import { Layout } from 'antd';
import { FC, useRef } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import { privateRoutes, publicRoutes } from './router';

const App: FC = () => {
  const isAuth: boolean = true;
  const routes: RouteObject[] = isAuth ? privateRoutes : publicRoutes;
  const router = useRef(createBrowserRouter(routes));

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <RouterProvider router={router.current} />
      </Layout.Content>
    </Layout>
  );
};

export default App;

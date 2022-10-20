import { Layout } from 'antd';
import { FC } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import { useTypedSelector } from './hooks/useTypedSelector';
import { privateRoutes, publicRoutes } from './router';
import { RootState } from './store';

const App: FC = () => {
  const { isAuth } = useTypedSelector((state: RootState) => state.auth);

  const routes: RouteObject[] = isAuth ? privateRoutes : publicRoutes;
  const router = createBrowserRouter(routes);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <RouterProvider router={router} />
      </Layout.Content>
    </Layout>
  );
};

export default App;

import { Layout } from 'antd';
import { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { useActions } from './hooks/useActions';
import { User } from './models/User';

const App: FC = () => {
  const { setUser, setIsAuth } = useActions();

  useEffect(() => {
    const isAuth: string | null = localStorage.getItem('auth');
    const username: string | null = localStorage.getItem('username');

    if (isAuth) {
      setUser({ username: username } as User);
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <BrowserRouter>
        <Navbar />
        <Layout.Content>
          <AppRouter />
        </Layout.Content>
      </BrowserRouter>
    </Layout>
  );
};

export default App;

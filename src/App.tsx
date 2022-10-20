import { Layout } from 'antd';
import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';

const App: FC = () => {
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

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesApp;

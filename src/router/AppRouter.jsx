import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage.jsx';
import HeroesRoutes from '../heroes/routes/HeroesRoutes.jsx';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="/*" element={<HeroesRoutes />}></Route>
      </Routes>
    </>
  );
};

import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage.jsx';
import HeroesRoutes from '../heroes/routes/HeroesRoutes.jsx';
import { PrivateRouter } from './PrivateRouter.jsx';
import { PublicRouter } from './PublicRouter.jsx';

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path={'login'} element={
          <PublicRouter>
            <LoginPage/>
          </PublicRouter>
        }/>
        {/*<Route path="login" element={<LoginPage />}></Route>*/}

        <Route path="/*" element={
          <PrivateRouter>
            {/*<Route path="/*" element={<HeroesRoutes />}></Route>*/}
            <HeroesRoutes/>
          </PrivateRouter>
        }/>
      </Routes>
    </>
  );
};

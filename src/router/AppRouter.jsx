import { Navigate, Route, Routes } from 'react-router-dom';
import { MarvelPage } from '../heroes/pages/MarvelPage.jsx';
import { DcPage } from '../heroes/pages/DcPage.jsx';
import { LoginPage } from '../auth/pages/LoginPage.jsx';
import { Navbar } from '../ui/components/index.js';

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />}></Route>
        <Route path="dc" element={<DcPage />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="/" element={<Navigate to={"/marvel"} />}></Route>
      </Routes>
    </>
  );
};

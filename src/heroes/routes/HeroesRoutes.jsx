import { Navbar } from '../../ui/components/index.js';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MarvelPage } from '../pages/MarvelPage.jsx';
import { DcPage } from '../pages/DcPage.jsx';
import SearchPage from '../pages/SearchPage.jsx';
import HeroPage from '../pages/HeroPage.jsx';

const HeroesRoutes = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage/>}></Route>
          <Route path="dc" element={<DcPage/>}></Route>
          <Route path="search" element={<SearchPage/>}></Route>
          <Route path="hero/:id" element={<HeroPage/>}></Route>
          <Route path="/" element={<Navigate to={'/marvel'}/>}></Route>
        </Routes>
      </div>
    </>
  );
};

HeroesRoutes.propTypes = {};

HeroesRoutes.defaultProps = {};

export default HeroesRoutes;

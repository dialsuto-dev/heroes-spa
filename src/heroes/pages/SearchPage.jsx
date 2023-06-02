import HeroCard from '../components/HeroCard.jsx';
import { useForm } from '../../hook/useForm.js';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroByName } from '../helpers/getHeroByName.js';

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return null;
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr/>
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr/>

          {
            heroes.length === 0
              ? (q !== '') && (<div className="alert alert-danger">No hero with <b>{q}</b></div>)
              : (q === '') && (<div className="alert alert-primary">Search a hero</div>)
          }

          {heroes.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

SearchPage.propTypes = {};

SearchPage.defaultProps = {};

export default SearchPage;

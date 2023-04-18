import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher.js';
import HeroCard from './HeroCard.jsx';

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {
        heroes && heroes.map(hero => (
          <HeroCard
            key={hero.id}
            {...hero}
          />
        ))
      }
    </div>
  );
};

export default HeroList;

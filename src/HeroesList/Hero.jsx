import React, { useState, useEffect } from 'react';

const Hero = ({ hero }) => {
  const [heroName, setHeroName] = useState('');
  useEffect(() => {
    setHeroName(hero.name);
  }, [hero]);

  return <div>{heroName}</div>;
};

export default Hero;

import { useEffect, useState } from 'react';
import { getTrending } from '../../services/movieApi';
import { Heading } from './HomeStyled';
import { MoviesGallery } from '../../components/MoviesGallery/MoviesGallery';
import { Section } from '../../components/Section/Section';

const Home = () => {
  const [movies, setMovies] = useState(() => []);

  useEffect(() => {
    (async () => {
      setMovies(await getTrending());
    })();
  }, []);

  return (
    <Section>
      <Heading>Trending today</Heading>
      <MoviesGallery movies={movies} />
    </Section>
  );
};

export default Home;
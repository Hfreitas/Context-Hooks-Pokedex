import React, { useContext } from 'react';
import { PokedexContext } from '../context';
import { Header, PokeGrid, PaginationComponent, Loading } from '../components';

function Home() {
  const {
    pokelist: { list, isFetching },
  } = useContext(PokedexContext);
  return (
    <main>
      <Header />
      {isFetching ? <Loading /> : <PokeGrid list={list} />}
      <PaginationComponent />
    </main>
  );
}

Home.propTypes = {};

export default Home;

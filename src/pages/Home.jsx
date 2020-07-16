import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { PokedexContext } from '../context';
import { Header, PokeGrid, PaginationComponent, Loading } from '../components';

function Home() {
  const {
    redirect,
    setRedirect,
    filter,
    setFilter,
    setOffset,
    pokelist: { list, isFetching },
  } = useContext(PokedexContext);

  useEffect(
    () => () => {
      setRedirect(false);
      setFilter('');
      setOffset(0);
    },
    [setRedirect, setFilter, setOffset],
  );

  if (redirect) return <Redirect to={`/pokemon/${filter}`} />;

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

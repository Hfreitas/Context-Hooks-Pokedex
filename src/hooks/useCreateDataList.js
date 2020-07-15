import { useCallback, useEffect, useState } from 'react';

export default function useCreateDataList(offset, limit, callback1, callback2) {
  const [list, setlist] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [listError, setListError] = useState('');

  const getPokeList = useCallback(() => {
    callback1(offset, limit).then(
      (response) => {
        callback2(response.results).then((data) => {
          setlist(data);
        });
        setIsFetching(false);
      },
      (response) => {
        setListError(response.message);
        setIsFetching(false);
      },
    );
  }, [offset, limit, callback1, callback2]);

  useEffect(() => {
    setIsFetching(true);
    getPokeList();
    return () => {
      setIsFetching(false);
      setlist([]);
      setListError('');
    };
  }, [getPokeList]);

  return { list, isFetching, listError };
}

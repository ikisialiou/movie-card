import * as React from 'react';
import { useDispatch } from 'react-redux';

import { searchMovies } from '../../actions/moviesList';
import { Logo } from '../Logo';
import { SearchPanel } from './SearchPanel';
import './Banner.scss';
import { SearchParamsEvent, SearchByType } from './SearchPanel/SearchPanel';

interface MoviesListDispatchProps {
  onSearchMoviesClick: (searchBy: SearchByType, search: string) => void;
}

interface BannerProps {
  onSearchMoviesClick: (searchBy: SearchByType, search: string) => void;
}

export const Banner: React.FC<{}> = () => {
  const [searchBy, setSearchBy] = React.useState<SearchByType>('title');
  const dispatch = useDispatch();

  const onClickSearch = (e: any): void => {
    e.preventDefault();
    const { value } = e.target.elements.search;
    dispatch(searchMovies(searchBy, value));
  };

  const onChangeSearchParam = ({ target }: SearchParamsEvent): void => {
    setSearchBy(target.name);
  };

  return (
    <div className="banner">
      <Logo />

      <SearchPanel searchBy={searchBy} onChangeSearchParam={onChangeSearchParam} onClickSearch={onClickSearch} />
    </div>
  );
};

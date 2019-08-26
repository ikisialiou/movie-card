import * as React from 'react';
import { useDispatch } from 'react-redux';

import { SortPanelContext } from 'components/Movie/SortPanel/SortPanelStore';
import { searchMovies } from '../../actions/moviesList/actions';
import { Logo } from '../Logo';
import { SearchPanel } from './SearchPanel';
import './Banner.scss';
import { SearchParamsEvent, SearchByType } from './SearchPanel/SearchPanel';

export const Banner: React.FC<{}> = () => {
  const [searchBy, setSearchBy] = React.useState<SearchByType>('title');
  const dispatch = useDispatch();
  const { sortBy } = React.useContext(SortPanelContext);

  const onClickSearch = (e: any): void => {
    e.preventDefault();
    const { value } = e.target.elements.search;
    dispatch(searchMovies(searchBy, value, sortBy));
  };

  const onChangeSearchParam = ({ target }: SearchParamsEvent): void => {
    setSearchBy(target.value);
  };

  return (
    <div className="banner">
      <Logo />

      <SearchPanel searchBy={searchBy} onChangeSearchParam={onChangeSearchParam} onClickSearch={onClickSearch} />
    </div>
  );
};

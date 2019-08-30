import * as React from 'react';

import { SortByStore } from 'components/Movie/SortBy';
import { Banner } from 'components/Banner';
import { MoviesList } from 'components/Movie/MoviesList';
import { SerachInfoPanel } from './SearchInfoPanel';

export const SearchPage: React.FunctionComponent<{}> = () => (
  <React.Fragment>
    <SortByStore>
      <Banner />
      <SerachInfoPanel />
      <MoviesList />
    </SortByStore>
  </React.Fragment>
);

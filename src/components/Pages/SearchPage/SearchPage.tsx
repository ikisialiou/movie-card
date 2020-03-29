import * as React from 'react';

import { SortByStore } from 'components/Movie/SortBy';
import { Banner } from 'components/Banner';
import { MoviesList } from 'components/Movie';
import { SearchInfoPanel } from './SearchInfoPanel';

export const SearchPage: React.FunctionComponent<{}> = () => (
  <React.Fragment>
    <SortByStore>
      <Banner />
      <SearchInfoPanel />
      <MoviesList />
    </SortByStore>
  </React.Fragment>
);

import * as React from 'react';

import { Footer as NamedFooter } from 'components/Footer';
import { SearchPage } from 'components/Pages/SearchPage';

export const App: React.FunctionComponent<{}> = () => (
  <React.Fragment>
    <SearchPage />
    <NamedFooter />
  </React.Fragment>
);

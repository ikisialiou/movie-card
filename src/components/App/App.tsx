import * as React from 'react';

import { Footer } from 'components/Footer';
import { SearchPage } from 'components/Pages/SearchPage';

export const App: React.FunctionComponent<{}> = () => (
  <React.Fragment>
    <SearchPage />
    <Footer />
  </React.Fragment>
);

import * as React from 'react';

import { Banner } from '../Banner';
// import { MoviesList } from '../Movie';
import { MoviesList } from '../../containers';
import { Footer } from '../Footer';

export const App: React.FunctionComponent<{}> = () => (
  <React.Fragment>
    <Banner />
    <MoviesList />
    <Footer />
  </React.Fragment>
);

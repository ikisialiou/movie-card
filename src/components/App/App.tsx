import * as React from 'react';

import { SortPanelStore } from 'components/Movie/SortPanel/SortPanelStore';
import { Banner } from '../Banner';
import { MoviesList } from '../../containers';
import { Footer } from '../Footer';

export const App: React.FunctionComponent<{}> = () => (
  <React.Fragment>
    <SortPanelStore>
      <Banner />
      <MoviesList />
    </SortPanelStore>
    <Footer />
  </React.Fragment>
);

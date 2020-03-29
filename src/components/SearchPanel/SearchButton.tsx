import * as React from 'react';

import { Button } from 'components/Common/Button';
import './SearchPanel.scss';

export const SearchButton: React.FC<{}> = () => (
  <Button type="submit" className="button__pink button__big">
    SEARCH
  </Button>
);

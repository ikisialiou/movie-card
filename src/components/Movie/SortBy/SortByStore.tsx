import * as React from 'react';

interface SortByContextValues {
  sortBy: string;
  onClickSortBy: (e: any) => void;
}

export const SortByContext = React.createContext<SortByContextValues | null>(null);

export const SortByStore: React.FC<{}> = ({ children }) => {
  const [sortBy, setSortBy] = React.useState('release_date');

  const onClickSortBy = (e: any): void => {
    const { value } = e.target;
    setSortBy(value);
  };

  return <SortByContext.Provider value={{ sortBy, onClickSortBy }}>{children}</SortByContext.Provider>;
};

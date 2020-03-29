import * as React from 'react';

interface InfoPanelProps {
  moviesCount: number;
}

interface SortPanelContextValues {
  sortBy: string;
  onClickSortBy: (e: any) => void;
}

export const SortPanelContext = React.createContext<SortPanelContextValues | null>(null);

export const SortPanelStore: React.FC<{}> = ({ children }) => {
  const [sortBy, setSortBy] = React.useState('release_date');

  const onClickSortBy = (e: any): void => {
    const { value } = e.target;
    setSortBy(value);
  };

  return <SortPanelContext.Provider value={{ sortBy, onClickSortBy }}>{children}</SortPanelContext.Provider>;
};

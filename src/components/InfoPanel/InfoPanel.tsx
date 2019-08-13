import * as React from 'react';

import './InfoPanel.scss';

export interface InfoPanelProps {
  moviesCount: number;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ moviesCount }) => (
  <div className="sort-panel">
    <span>
      {moviesCount}
      movies found
    </span>
    <span>Sort by</span>
    <button type="button">release date</button>
    <button type="button">rating</button>
  </div>
);

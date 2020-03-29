import * as React from 'react';

interface MoviesCountInfoProps {
  moviesCount: number;
}

export const MoviesCountInfo: React.FC<MoviesCountInfoProps> = ({ moviesCount }) => (
  <span>{moviesCount} movies found</span>
);

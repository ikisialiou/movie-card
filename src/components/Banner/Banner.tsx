import * as React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { searchMovies } from '../../actions/moviesList';
import { Logo } from '../Logo';
import { SearchPanel } from './SearchPanel';
import * as styles from './Banner.scss';
import { SearchParamsEvent, SearchByType } from './SearchPanel/SearchPanel';

const cx = classNames.bind(styles);

interface MoviesListDispatchProps {
  searchMovies: (searchBy: SearchByType, search: string) => void;
}

interface BannerProps {
  searchMovies: (searchBy: SearchByType, search: string) => void;
}

interface BannerState {
  searchBy: SearchByType;
}

const connector = connect<{}, MoviesListDispatchProps, {}>(
  null,
  { searchMovies }
);

class Banner extends React.Component<BannerProps, BannerState> {
  public state: BannerState = {
    searchBy: 'title',
  };

  private onClickSearch = (e: any) => {
    e.preventDefault();
    const { value } = e.target.elements.search;
    this.props.searchMovies(this.state.searchBy, value);
  };

  private onChangeSearchParam = ({ target }: SearchParamsEvent): void => {
    this.setState({
      searchBy: target.name,
    });
  };

  public render(): JSX.Element {
    return (
      <div className={cx('banner')}>
        <Logo />

        <SearchPanel
          searchBy={this.state.searchBy}
          onChangeSearchParam={this.onChangeSearchParam}
          onClickSearch={this.onClickSearch}
        />
      </div>
    );
  }
}

export const ConnectedBanner = connector(Banner);

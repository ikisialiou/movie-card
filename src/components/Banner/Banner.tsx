import * as React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { Button } from 'common/Button';
import { Input } from 'common/Input';
import { loadMovies } from '../../actions/moviesList';
import { Logo } from '../Logo';
import * as styles from './Banner.scss';
import { ButtonColorType, ButtonEvent } from '../Common/Button/Button';

const cx = classNames.bind(styles);

interface MoviesListDispatchProps {
  loadMovies: () => void;
}

interface BannerProps {
  loadMovies: () => void;
}

interface BannerState {
  searchBy: string;
}

interface SearchParamsEventTarget extends EventTarget {
  name: string;
}

interface SearchParamsEvent extends ButtonEvent {
  target: SearchParamsEventTarget;
}

const connector = connect<{}, MoviesListDispatchProps, {}>(
  null,
  { loadMovies }
);

export class Banner extends React.Component<BannerProps, BannerState> {
  public state: BannerState = {
    searchBy: 'title',
  };

  private onClickSearchBtn = () => {
    this.props.loadMovies();
  };

  private onChangeSearchParam = ({ target }: SearchParamsEvent): void => {
    this.setState({
      searchBy: target.name,
    });
  };

  private getColorButton = (name: string): ButtonColorType => {
    if (this.state.searchBy === name) {
      return 'pink';
    }

    return 'gray';
  };

  public render(): JSX.Element {
    return (
      <div className={cx('banner')}>
        <Logo />

        <div className={cx('search')}>
          <h2>FIND YOUR MOVIE</h2>
          <Input name="search" />

          <div className={cx('search__params')}>
            <div>
              <span>SEARCH BY</span>
              <Button
                name="title"
                caption="TITLE"
                color={this.getColorButton('title')}
                onClick={this.onChangeSearchParam}
              />
              <Button
                name="genre"
                caption="GENRE"
                color={this.getColorButton('genre')}
                onClick={this.onChangeSearchParam}
              />
            </div>
            <div>
              <Button name="search" caption="SEARCH" onClick={this.onClickSearchBtn} color="pink" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const ConnectedBanner = connector(Banner);

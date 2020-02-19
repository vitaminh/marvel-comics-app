import React from 'react';

import { ComicsGrid } from '../index';
import { SITE_NAME } from '../constants';
import store, { GET_COMIC_LIST } from '../../store';

class ComicListPresentational extends React.Component {
  componentDidMount() {
    document.title = SITE_NAME;
    if (!this.props.comicList.loaded) {
      store.dispatch({type: GET_COMIC_LIST})
    }
  }

  render() {
    if (!this.props.comicList.loaded) {
      return <div>Loading comics, standby...</div>;
    }

    return (
      <div>
        <ComicsGrid comicList={this.props.comicList.comicList} />
      </div>
  );
  }
}

export default ComicListPresentational;
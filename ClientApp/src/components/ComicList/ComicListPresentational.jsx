import React from 'react';
import { Link } from 'react-router-dom';

import { SITE_NAME } from '../Constants';
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
        {this.props.comicList.comicList.map(comic => (
          <div key={comic.id}>
            <Link to={`/comics/${comic.id}`}>
              <div>
                <img src={comic.thumbnail.path + '.' + comic.thumbnail.extension} alt="Comic Thumbnail" />
              </div>
              <p>{comic.title}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default ComicListPresentational;
import React from 'react';

import { ComicsGrid } from './index';
import { SITE_NAME } from './constants';

class Favorites extends React.Component {

  componentDidMount() {
    document.title = `${SITE_NAME} - Favorites`;
  }

  render() {
    const fakeFavorites = [
      {
        title: 'Fake Title',
        id: 84680,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5e42ca80e8907",
          extension: "jpg"
        }
      },
      {
        title: 'Another Fake Title',
        id: 84680,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5e42ca80e8907",
          extension: "jpg"
        }
      },
      {
        title: 'Yet Another Fake Title',
        id: 84680,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5e42ca80e8907",
          extension: "jpg"
        }
      },
      {
        title: 'Still Another Fake Title',
        id: 84680,
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5e42ca80e8907",
          extension: "jpg"
        }
      }
    ];

    return (
      <div>
        <ComicsGrid comicList={fakeFavorites} />
      </div>
    );
  }
}



export default Favorites;
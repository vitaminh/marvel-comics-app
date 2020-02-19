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
        coverImageUrl: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5e42ca80e8907.jpg'
      },
      {
        title: 'Another Fake Title',
        id: 84681,
        coverImageUrl: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5e42ca80e8907.jpg'
      },
      {
        title: 'Yet Another Fake Title',
        id: 84682,
        coverImageUrl: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5e42ca80e8907.jpg'
      },
      {
        title: 'Still Another Fake Title',
        id: 84683,
        coverImageUrl: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5e42ca80e8907.jpg'
      },
      {
        title: 'YEAH Another Fake Title',
        id: 84684,
        coverImageUrl: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/5e42ca80e8907.jpg'
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
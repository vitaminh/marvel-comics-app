import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardBody, CardTitle, CardGroup
} from 'reactstrap';

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
        <CardGroup>
          {this.props.comicList.comicList.map(comic => {
            const coverImgUrl = comic.thumbnail.path + '.' + comic.thumbnail.extension;
            return (
            <div key={comic.id}>
              <Link to={`/comics/${comic.id}`}>
                <Card className="text-center" style={{ width: '16rem' }}>
                  <CardImg top src={coverImgUrl} />
                  <CardBody>
                    <CardTitle>{comic.title}</CardTitle>
                  </CardBody>
                </Card>
              </Link>
            </div>
          )})}
        </CardGroup>
      </div>
    );
  }
}

export default ComicListPresentational;
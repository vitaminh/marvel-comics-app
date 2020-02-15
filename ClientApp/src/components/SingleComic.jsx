import React from 'react';
import { withRouter } from 'react-router-dom';

import {SITE_NAME} from './Constants';
import {fetchData} from '../store/utils'

class SingleComic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  async componentDidMount() {
    const comicId = this.props.match.params.id;
    const response = await fetchData(`https://gateway.marvel.com:443/v1/public/comics/${comicId}?`);
    this.setState(response.data.data.results[0]);
    document.title = `${SITE_NAME} - ${this.state.title}`;
  }

  render() {
    const comic = this.state;

    if (!comic.title) {
      return (<p>Loading</p>)
    }

    return (
      <div>
        <div>
          <img src={comic.thumbnail.path + '.' + comic.thumbnail.extension} alt="Comic Thumbnail" />
        </div>
        <p>{comic.title}</p>
      </div>
    )
  }
}

export default withRouter(SingleComic);
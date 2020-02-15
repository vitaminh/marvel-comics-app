import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Card, CardBody, CardImg, CardTitle
} from 'reactstrap';

import {SITE_NAME} from './constants';
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
        <Card className="text-center" style={{ width: '30rem' }}>
          <CardImg src={comic.thumbnail.path + '.' + comic.thumbnail.extension} alt="Comic Thumbnail" />
          <CardBody>
            <CardTitle>{comic.title}</CardTitle>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default withRouter(SingleComic);
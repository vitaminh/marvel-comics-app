import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Card, CardBody, CardImg, CardTitle
} from 'reactstrap';

import {FavoritesButton} from './index';
import {SITE_NAME} from './constants';
import {fetchData} from '../store/utils'
import authService from './api-authorization/AuthorizeService';

class SingleComic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comicData: {},
      isAuthenticated: false,
      userName: null
    };  }

  async componentDidMount() {
    // Retrieve comic data
    const comicId = this.props.match.params.id;
    const response = await fetchData(`https://gateway.marvel.com:443/v1/public/comics/${comicId}?`);
    this.setState({
        ...this.state,
        comicData: response.data.data.results[0]});
    document.title = `${SITE_NAME} - ${this.state.comicData.title}`;

    // Retrieve AuthService information to determing logged-in status
    this._subscription = authService.subscribe(() => this.populateState());
    this.populateState();
  }

  componentWillUnmount() {
    authService.unsubscribe(this._subscription);
  }

  async populateState() {
    const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()])
    this.setState({
      isAuthenticated,
      userName: user && user.name
    });
    console.log(user);
  }

  render() {
    const comic = this.state.comicData;

    if (!comic.title) {
      return (<p>Loading</p>)
    }

    return (
      <div>
        <Card className="text-center mx-auto" style={{ width: '30rem' }}>
          <CardImg src={comic.thumbnail.path + '.' + comic.thumbnail.extension} alt="Comic Thumbnail" />
          <CardBody>
            <CardTitle>{comic.title}</CardTitle>
            {this.state.isAuthenticated && <FavoritesButton userName={this.state.userName}/>}
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default withRouter(SingleComic);
import React from 'react';
import store, { GET_CHARACTER_LIST } from '../../store';

class CharacterListPresentational extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    store.dispatch({type: GET_CHARACTER_LIST})
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading characters, standby...</div>;
    }

    return (
      <div>
        {this.props.characterList.map(character => (
          <div key={character.id}>
            <p>{character.name}<img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt="Character Thumbnail" /></p>
          </div>
        ))}
      </div>
    );
  }
}

export default CharacterListPresentational;

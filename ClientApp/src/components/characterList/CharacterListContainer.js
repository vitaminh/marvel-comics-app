import { connect } from 'react-redux';

import CharacterListPresentational from './CharacterListPresentational';

const mapState = state => ({
  characterList: state.characterList
});

const CharacterListContainer = connect(
  mapState
)(CharacterListPresentational);

export default CharacterListContainer;
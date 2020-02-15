import { RETRIEVED_CHARACTER_LIST } from '../constants'

// Initial State
const initialCharacterListState = [];

// Action Creators
export const retrievedCharacterList = characterList => ({
  type: RETRIEVED_CHARACTER_LIST,
  characterList
});

// Reducer
const characterListReducer = (characterList = initialCharacterListState, action) => {
  switch (action.type) {
    case RETRIEVED_CHARACTER_LIST:
      return action.characterList;
    default:
      return characterList;
  }
}

export default characterListReducer;
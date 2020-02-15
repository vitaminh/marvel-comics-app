import { call, put, takeEvery } from 'redux-saga/effects';

import { GET_CHARACTER_LIST } from '../constants';
import { retrievedCharacterList } from '../reducers/characterListReducer';
import { fetchData } from '../utils';

// Sagas
const fetchCharacterList = () => {
  return fetchData('https://gateway.marvel.com/v1/public/characters?');
}

export function* getCharacterList() {
  const response = yield call(fetchCharacterList);
  const characterList = response.data.data.results;
  yield put(retrievedCharacterList(characterList));
}

export function* watchGetCharacterList() {
  yield takeEvery(GET_CHARACTER_LIST, getCharacterList);
}
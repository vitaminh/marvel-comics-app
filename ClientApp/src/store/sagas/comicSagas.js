import { call, put, takeEvery } from 'redux-saga/effects';

import { GET_COMIC_LIST } from '../constants';
import { retrievedComicList } from '../reducers/comicListReducer';
import { fetchData } from '../utils';

// Sagas
const fetchComicList = () => {
  return fetchData('https://gateway.marvel.com:443/v1/public/comics?dateDescriptor=thisWeek&orderBy=onsaleDate&');
}

export function* getComicList() {
  const response = yield call(fetchComicList);
  const comicList = response.data.data.results;
  yield put(retrievedComicList(comicList));
}

export function* watchGetComicList() {
  yield takeEvery(GET_COMIC_LIST, getComicList);
}
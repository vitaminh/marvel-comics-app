import { all } from 'redux-saga/effects';

import { getComicList, watchGetComicList } from './comicSagas';

export default function* rootSaga() {
  yield all([
    getComicList(),
    watchGetComicList()
  ])
}
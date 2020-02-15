import { connect } from 'react-redux';

import ComicListPresentational from './ComicListPresentational';

const mapState = state => ({
  comicList: state.comicList
});

const ComicListContainer = connect(
  mapState
)(ComicListPresentational);

export default ComicListContainer;
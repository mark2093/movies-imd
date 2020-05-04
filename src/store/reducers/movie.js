import { combineReducers } from 'redux';
import { isFetchingReducer } from './common';

const initMovieReducer = () => {
  const item  = (state = {}, action) => {
    switch(action.type) {
      case 'UNMOUNT_MOVIE':
        return {};
      case 'UPDATE_MOVIE_SUCCESS':
      case 'FETCH_MOVIE_BY_ID':
        return action.movie;
      default:
        return state;
    }
  }

  const isFetching = isFetchingReducer('movie');

  return combineReducers({
    item,
    isFetching
  });
}

const movie = initMovieReducer();
export default movie;



import { combineReducers } from 'redux';
import { isFetchingReducer } from './common';

const initMoviesReducer = () => {

  const items = (state = [], action) => {
    switch(action.type) {
      case 'FETCH_MOVIES':
        return action.movies;
      case 'CREATE_MOVIE':
        return [...state, action.movie];
      default:
        return state;
    }
  }

  const isFetching = isFetchingReducer('movies');

  return combineReducers({
    items,
    isFetching
  })
}

const movies = initMoviesReducer();
export default movies;
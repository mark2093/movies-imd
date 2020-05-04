import { combineReducers } from "redux"
import { createList } from './common';


const initManageReducer = () => {
  return combineReducers({
    movies: createList('manage-movies'),
   
  })
}

const manage = initManageReducer();
export default manage;
import axios from 'axios';
import axiosService from '../services/AxiosService';
import { extractApiErrors } from './index';
import { deleteResource } from './index';
const { bwmAxios } = axiosService;


export const fetchMovies = () => dispatch => {
  axios.get('/api/v1/movies')
    .then(res => {
      const movies = res.data;
      dispatch({
        type: 'FETCH_MOVIES',
        movies
      });
    })
}

export const fetchUserMovies = () => dispatch => {
  dispatch({type: 'REQUEST_DATA', resource: 'manage-movies'});
  return bwmAxios.get('/movies/me')
    .then(res => res.data)
    .then(movies => {
      dispatch({
        type: 'REQUEST_DATA_COMPLETE',
        data: movies,
        resource: 'manage-movies'
      })
    })
}


export const fetchMovieById = movieId => async dispatch => { 
  //debugger
  dispatch({type: 'REQUEST_DATA', resource: 'movie'});
  const res = await bwmAxios.get(`/movies/${movieId}`)
  dispatch({type: 'REQUEST_DATA_COMPLETE', resource: 'movie'});
  dispatch({
    type: 'FETCH_MOVIE_BY_ID',
    movie: res.data
  });
}

export const createMovie = movie => {
  return bwmAxios.post('/movies', movie);
}

export const updateMovie = (id, movieData) => dispatch => {
  return bwmAxios.patch(`/movies/${id}`, movieData)
    .then(res => res.data)
    .then(updatedMovie => 
      dispatch({
        type: 'UPDATE_MOVIE_SUCCESS',
        movie: updatedMovie
      })
    )
    .catch(error => Promise.reject(extractApiErrors(error.response || [])))
}

export const deleteMovie = movieId => dispatch => {
  return dispatch(
    deleteResource(
      { url: `/movies/${movieId}`, 
        resource: 'manage-movies'}))
}
const express = require('express');
const router = express.Router();
const { onlyAuthUser } = require('../controllers/users');
const { 
  getMovies,
  getUserMovies,
  getMovieById,
  createMovie,
  deleteMovie,
  updateMovie,
  verifyUser } = require('../controllers/movies');

router.get('', getMovies);
router.get('/me', onlyAuthUser, getUserMovies);
router.get('/:movieId', getMovieById);
router.get('/:movieId/verify-user', onlyAuthUser, verifyUser);

router.post('', createMovie);

router.patch('/:movieId', onlyAuthUser, updateMovie);

router.delete('/:movieId', onlyAuthUser, deleteMovie);

module.exports = router;

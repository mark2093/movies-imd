const Movie = require('../models/movies');


exports.getMovies = async (req, res) => {
  try{
  const rentals = await Movie.find().populate('image');
    return res.json(rentals);
  } catch(error) {
    return res.mongoError(error);
  }
}

  
  
//'GET: /api/v1/movies/me'
exports.getUserMovies = async (req, res) => {
  const { user } = res.locals;

  try {
    const movies = await Movie.find({owner: user}).populate('image');
    return res.json(movies);
  } catch(error) {
    return res.mongoError(error);
  }
}

exports.getMovieById = async (req, res) => {
  const { movieId } = req.params;

  try {
    const movie = await Movie
      .findById(movieId)
      .populate('owner', '-password -_id')
      .populate('image');
    return res.json(movie);
  } catch(error) {
    return res.mongoError(error);
  }
}

exports.verifyUser = async (req, res) => {
  const { user } = res.locals;
  const { movieId } = req.params;

  try {
    const movie = await Movie.findById(movieId).populate('owner');

    if (movie.owner.id !== user.id) {
      return res.sendApiError(
        { title: 'Invalid User', 
          detail: 'You are not An Authorized User!'});
    }
    
    return res.json({status: 'verified'});
  } catch(error) {
    return res.mongoError(error);
  }
}

exports.createMovie = (req, res) => {
  const movieData = req.body;
  movieData.owner = res.locals.user;

  Movie.create(movieData, (error, createdMovie) => {
    if (error) { return res.mongoError(error); }

    return res.json(createdMovie);
  })
}

exports.updateMovie = async (req, res) => {
  const { movieId } = req.params;
  const { user } = res.locals;
  const movieData = req.body;

  try {
    const movie = await Movie.findById(movieId).populate('owner');

    if (movie.owner.id !== user.id) {
      return res.sendApiError(
        { title: 'Invalid User', 
          detail: 'You are not An Authorized User!'});
    }

    movie.set(movieData);
    await movie.save();
    return res.status(200).send(movie);
  } catch(error) {
    return res.mongoError(error);
  }
}

exports.deleteMovie = async (req, res) => {
  const { movieId } = req.params;
  const { user } = res.locals;

  try {
    const movie = await Movie.findById(movieId).populate('owner');
    
    if (user.id !== movie.owner.id) {
      return res.sendApiError(
        { title: 'Invalid User', 
          detail: 'You are not An Authorized User!'});
    }

    await movie.remove();
    return res.json({id: movieId});
  } catch(error) {
    return res.mongoError(error);
  }
}




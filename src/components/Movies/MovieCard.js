import React from 'react';
import { Link } from 'react-router-dom';


  const MovieCard = ({movie, renderMenu}) => {

  return (
    <>
        <Link className="movie-link" to={`/movies/${movie._id}`}>
        <div className="card bwm-card">
        <h5 className="card-title big-font">{movie.title}</h5>
          <img 
            className="card-img-top" 
            src={movie.image.url}
            alt={movie.image.url} 
            />
          <div className="card-body">
            <h6 className={`card-subtitle mb-0 type-${movie.category}`}>
            {movie.category}
            </h6>
            <h6> {movie.description}</h6>
            
          </div>
        </div>
      </Link>
      { renderMenu && renderMenu() }
    </>
  )

 
}

export default MovieCard;
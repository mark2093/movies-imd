import React from 'react';
import { fetchUserMovies, deleteMovie } from '../actions';
import { connect } from 'react-redux';
import MovieCard from './Movies/MovieCard';
import ApiErrors from './forms/ApiErrors';
import { Link } from 'react-router-dom';

class ManageMovies extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUserMovies());
  }

  deleteMovie = (movieId) => {
    const canDelete = this.askForPermission();
    if (!canDelete) { return; }

    this.props.dispatch(deleteMovie(movieId));
  }

  askForPermission() {
    return window.confirm('Are you sure you want to delete this Movie?');
  }

  renderMovies = (movies) => 
  movies.map(movie => 
      <div key={movie._id} className="col-md-3">
        <MovieCard 
          movie={movie}
          renderMenu={() => 
            <>
              <button 
                onClick={() => this.deleteMovie(movie._id)}
                className="btn btn-danger">Delete</button>
              <Link 
                to={{pathname: `/movies/${movie._id}/edit`}}
                className="btn btn-bwm-main ml-2">Update</Link>
            </>
          }
        />
      </div>
    );

  render() {
    const { movies, errors, isFetching } = this.props;
    console.log(isFetching);
    return (
      <div className="card-list">  
        <h1 className="page-title">My Movies</h1>
        <ApiErrors errors={errors} />
        <div className="row">
          { this.renderMovies(movies) }
        </div>
      
        { !isFetching && movies.length === 0 &&
          <p className="alert alert-warning">
            You dont have any Movies Yet :(
          </p>
        }
      </div>
    )
  }
}

const mapStateToProps = ({manage}) => {
  return {
    movies: manage.movies.items,
    isFetching: manage.movies.isFetching,
    errors: manage.movies.errors
  }
}

export default connect(mapStateToProps)(ManageMovies);
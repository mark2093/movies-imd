import React, { Component } from 'react';
import MovieCard from './Movies/MovieCard';
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/';

class MoviesHome extends Component {

  componentDidMount() {
    this.props.dispatch(fetchMovies());

  }


  renderMovies = (movies) =>
  
    movies.map(movie =>
      <div key={movie._id} className="col-md-3">
      
    <MovieCard movie={movie} />
      </div>
      
    )

  render() {
    const { movies } = this.props;
    console.log(this.props)
    return (
      <div className="card-list">
        <h1 className="page-title">Movies From Around the World</h1>
        <div className="row">
          {this.renderMovies(movies)}
        
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ movies }) => {
  return {
    movies: movies.items
  }
}

export default connect(mapStateToProps)(MoviesHome);
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovieById } from '../actions';

class MovieDetail extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.dispatch(fetchMovieById(id))
    }

    componentWillUnmount() {
        this.props.dispatch({ type: 'UNMOUNT_MOVIE' });
    }



    render() {
        const { movie, isFetching, } = this.props;
        if (isFetching || !movie._id) { return null; }
        return (
            <section id="movieDetails">
                <div className="upper-section">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="movie-title">{movie.title}</h1>
                            <img className="movie-img" src={movie.image.url} alt={movie.title} />
                        </div>

                    </div>
                </div>
                <div className="details-section">
                    <div className="row">
                        <div className="col-md-8">
                            <h6 className={`movie-type type-${movie.category}`}>
                                {movie.category}
                            </h6>
                            <p className="movie-description">
                                {movie.description}
                            </p>
                        </div>
                        <div className="col-md-4">
                            <button
                                type="submit"
                                className="btn btn-danger">Delete Movie
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = ({ movie, auth: { isAuth } }) =>
    ({ movie: movie.item, isFetching: movie.isFetching, isAuth: isAuth })

const MovieDetailWithRouter = withRouter(MovieDetail);
export default connect(mapStateToProps)(MovieDetailWithRouter);
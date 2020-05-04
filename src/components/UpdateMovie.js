import React, { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMovieById, updateMovie } from '../actions';
//import { capitalize } from 'helpers/functions'
import { toast } from 'react-toastify';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  EditableInput,
  EditableTextarea,
  EditableSelect,
  EditableImage
} from './editable';

const withUserCheck = Component => props => {
  const [guard] = useState({canProceed: false, isChecking: true});
  //const { id } = props.match.params;

  
  const { canProceed, isChecking } = guard;
  if (!isChecking && canProceed) {
    return <Component {...props}/>
  } else if (!isChecking && !canProceed) {
    return <Redirect to={{pathname: '/'}} />
  } else {
    return <h1>Loading...</h1>
  }
}


class MovieEdit extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchMovieById(id))
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'UNMOUNT_MOVIE'});
  }

  updateMovie = (movieData, onSuccess, onError) => {
    const { id } = this.props.match.params;
    this.props.dispatch(updateMovie(id, movieData))
      .then(() => {
        onSuccess()
      })
      .catch(errors => {
        const message = errors.length > 0 ? errors[0].detail : 'Ooops, something went wrong';
        toast.error(message, {
          autoClose: 3000
        });
        onError();
      })
  }

    render() {
    const { movie, isFetching } = this.props;
    if (isFetching || !movie._id) { return null; }
    return (
      <section id="movieEdit">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
           <EditableImage
                entity={movie}
                field={'image'}
                containerType={"block"}
                className="movie-img mb-2"
                transformView={image => image.url}
                onUpdate={this.updateMovie}
              />
            </div>
         </div>
        </div>
        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
            <div className="movie">
              <EditableSelect
                entity={movie}
                field={'category'}
                options={['apartment', 'condo', 'house']}
                onUpdate={this.updateMovie}
                className={`movie-type type-${movie.category}`}
              />
              <EditableInput
                entity={movie}
                field={'title'}
                onUpdate={this.updateMovie}
                className={'movie-title'}
              />
            <EditableTextarea
                entity={movie}
                field={'description'}
                onUpdate={this.updateMovie}
                className={'movie-description'}
                rows={5}
                cols={60}
              />
              <hr/>
             /
            </div>
            </div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({movie, auth: { isAuth }}) => 
  ({ movie: movie.item, isFetching: movie.isFetching, isAuth: isAuth })

const MovieEditWithRouterAndCheck = withRouter(withUserCheck(MovieEdit));
export default connect(mapStateToProps)(MovieEditWithRouterAndCheck);
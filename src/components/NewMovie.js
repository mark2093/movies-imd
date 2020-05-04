import React , { Component } from 'react';
import MovieForm from './forms/MovieForm';
import { createMovie } from '../actions';
import { Redirect } from 'react-router-dom';



class NewMovie extends Component {
    state = {
        shouldRedirect: false
      }

      handleAddMovie = (movieData) => {
        createMovie(movieData)
          .then(_ => this.setState({shouldRedirect: true}))
          .catch(_ => console.log('Errors'))
      }
    
      render() {
        const { shouldRedirect } = this.state;
    
        if (shouldRedirect) {
          return <Redirect to={{pathname: '/'}} />
        }
    
        return (
          <section id="newMovie">
            <div className="bwm-form">
              <div className="row">
                <div className="col-md-5">
                  <h1 className="page-title">Add A new Movie</h1>
                  <MovieForm onSubmit={this.handleAddMovie} />
                  
                </div>
                <div className="col-md-6 ml-auto">
                  <div className="image-container">
                    <h2 className="catchphrase">Hundreds of awesome places in reach of few clicks.</h2>
                    <img src="/images/create-Movie.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section> 
        )
      }
    }
    
    export default NewMovie;



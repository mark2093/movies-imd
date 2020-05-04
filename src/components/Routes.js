
import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import AuthRoute from './Auth/AuthRoute';
import GuestRoute from './Auth/GuestRoute';

import MoviesHome from './MoviesHome';
import MovieDetails from './MovieDetails';
import UpdateMovie from './UpdateMovie';
import NewMovie from './NewMovie';
import Login from './Login';
import Register from './Register';
import SecretPage from './SecretPage';
import ManageMovies from './ManageMovies';


const Routes = () => {
  return (
    <div className="container bwm-container">
      <Switch>
        <Route exact path="/">
          <MoviesHome />
        </Route>
        <AuthRoute path="/movies/manage">
          <ManageMovies />
        </AuthRoute>
        <AuthRoute path="/movies/new">
          <NewMovie />
        </AuthRoute>
        <AuthRoute path="/movies/:id/edit">
          <UpdateMovie />
        </AuthRoute>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
        <AuthRoute path="/secret">
          <SecretPage />
        </AuthRoute>
        <GuestRoute path="/login">
          <Login />
        </GuestRoute>
        <GuestRoute path="/register">
          <Register />
        </GuestRoute>
      </Switch>
    </div>
  )
}

export default Routes;
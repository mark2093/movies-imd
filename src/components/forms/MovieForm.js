import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FileLoader from '../file-upload/FileLoader';

const movieOptions = ['Movie', 'TVSeries'];

const MovieForm = ({onSubmit}) => {

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    register({name: 'image'})
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="title">Name</label>
        <input 
          ref={register}
          name="title"
          type="text"
          className="form-control"
          id="title"/>
      </div>

      <div className="form-group">
        <label htmlFor="city">Release Year</label>
        <input 
          ref={register}
          name="year"
          type="text"
          className="form-control"
          id="year"/>
      </div>

      
      <div className="form-group">
        <label htmlFor="category">Category</label>

        <select 
          ref={register}
          name="category"
          className="form-control"
          id="category">
          {
            movieOptions.map(option => 
              <option key={option}>{option}</option> 
            )
          }
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="image">Image</label>
        <FileLoader 
          onFileUpload={image => setValue('image', image._id)}
        />
      </div>

      
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea 
          ref={register}
          name="description"
          rows="5"
          type="text"
          className="form-control"
          id="description">
        </textarea>
      </div>

      
      
      <button 
        type="submit"
        className="btn btn-bwm-main">Add Movie
      </button>
    </form>
  )
}

export default MovieForm;
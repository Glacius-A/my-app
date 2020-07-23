import React from "react";

class MovieItem extends React.Component {
   constructor() {
      super();
      this.state = {
         willWatch: false
      };
   }


   render() {
      const { movie, removeMovie, addMovieToWillWatch } = this.props;
      // console.log(props);
      return (
         <div >
            {/* <p>{movie.title}</p> */}
            {/* <button onClick={removeMovie.bind(this, props.movie)}> delete movie </button> */}
            <div className="card">
               <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
                     movie.poster_path}`}
                  alt=""
               />
               <div className="card-body">
                  <h6 className="card-title">{movie.title}</h6>
                  <div className="d-flex justify-content-between align-items-center">
                     <p className="mb-0">Rating: {movie.vote_average}</p>
                     <div>
                        {this.state.willWatch ? (
                           <button onClick={addMovieToWillWatch.bind(null, movie)} type="button" className="btn btn-success ml-2">Remove Will Watch</button>
                        ) : (
                              <button onClick={addMovieToWillWatch.bind(null, movie)} type="button" className="btn btn-secondary ml-2">Add Will Watch</button>
                           )
                        }
                        <button onClick={removeMovie.bind(this, movie)} className="btn btn-secondary mr-2"> delete movie </button>

                     </div>
                  </div>
               </div>
            </div>
         </div >

      )
   }
}



export default MovieItem;
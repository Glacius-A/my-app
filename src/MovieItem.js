import React from "react";

const MovieItem = props => {
   const { movie, removeMovie } = props;
   console.log(props);
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
                     <button onClick={removeMovie.bind(this, props.movie)} className="btn btn-secondary"> delete movie </button>
                     <button type="button" className="btn btn-secondary ml-2">Will Watch</button>
                  </div>
               </div>
            </div>
         </div>
      </div>

   )
}

export default MovieItem;
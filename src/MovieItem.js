import React from "react";

class MovieItem extends React.Component {
   constructor() {
      super();
      this.state = {
         willWatch: false
      };
   }


   render() {
      const { movie, removeMovie, addMovieToWillWatch, removeMovieToWillWatch } = this.props;
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
                  <div className="d-flex justify-content-between align-items-center"><h6 className="card-title">{movie.title}</h6>
                     <p className="mb-0">Rating: {movie.vote_average}</p> </div>

                  <div>

                     <div className="d-flex justify-content-end align-items-center">
                        {this.state.willWatch ? (

                           <button onClick={() => {
                              this.setState({
                                 willWatch: false
                              });
                              removeMovieToWillWatch(movie);
                           }}

                              type="button" className="btn btn-success" > Remove Will Watch</button>
                        ) : (
                              <button onClick={() => {
                                 this.setState({
                                    willWatch: true
                                 });
                                 addMovieToWillWatch(movie);
                              }}
                                 type="button" className="btn btn-secondary">Add Will Watch</button>
                           )
                        }
                        <button onClick={removeMovie.bind(this, movie)} className="btn btn-secondary ml-2 "> delete movie </button>

                     </div>
                  </div>
               </div>
            </div>
         </div >

      )
   }
}



export default MovieItem;
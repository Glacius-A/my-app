import React from 'react';
import moviesData from '../src/moviesData';
import MovieItem from './MovieItem';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id
    });
    // console.log(updateMovies);
    this.setState({
      movies: updateMovies
    });
  };

  addMovieToWillWatch = movie => {
    // console.log(movie);

    // const updateWillWatch = [...this.state.moviesWillWatch];
    // updateWillWatch.push(movie);

    const updateWillWatch = [...this.state.moviesWillWatch, movie];

    // console.log(updateWillWatch);
    this.setState({
      moviesWillWatch: updateWillWatch
    });
  };

  render() {
    // console.log(this);
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">

              {
                this.state.movies.map(movie => {
                  return (
                    <div className="col-6 mb-4" key={movie.id}>
                      <MovieItem
                        movie={movie}
                        removeMovie={this.removeMovie}
                        addMovieToWillWatch={this.addMovieToWillWatch}
                      />
                    </div>)
                })
              }

            </div>
          </div>
          <div className="col-3">
            <p>
              will watch: {this.state.moviesWillWatch.length}
            </p>
          </div>
        </div>
      </div >
    );
  }
}

// function App() {
//   return this.state.movies[1].title
// }

export default App;

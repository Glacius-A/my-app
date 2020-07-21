import React from 'react';
import moviesData from '../src/moviesData';
import MovieItem from './MovieItem';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData
    };
  }

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id
    });
    console.log(updateMovies);
    this.setState({
      movies: updateMovies
    });
  };

  render() {
    console.log(this);
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            {
              this.state.movies.map(movie => {
                return <MovieItem
                  key={movie.id}
                  movie={movie}
                  removeMovie={this.removeMovie}
                />
              })
            }
          </div>
          <div className="col-3">
            <p>
              will watch
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

import React from 'react';
import moviesData from '../src/moviesData';

function removeMovie(movie) {
  const updateMovies = this.state.movies.filter(function (item) {
    return item.id !== movie.id
  });
  console.log(updateMovies);
  this.setState({
    movies: updateMovies
  });
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData
    };
  }
  render() {
    console.log(this);
    return (<div>{this.state.movies.map(movie => {
      return <div>
        <p>{movie.title}</p>
        <button onClick={removeMovie.bind(this, movie)}> delet </button>
      </div>
    })
    }
    </div >
    );
  }
}

// function App() {
//   return this.state.movies[1].title
// }

export default App;

import { useEffect, useState } from 'react';
import './App.css';

import MovieList from './components/MovieList';
import movieData from './components/movies.json';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';

function App() {
  const [movies, setMovies] = useState(movieData);
  const [filteredMovies, setFilteredMovies] = useState(movieData);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]);
  };
  const handleFilter = () => {
    const filtered = movies.filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(title.toLowerCase());
      const ratingMatch = rating === '' || movie.rating <= parseFloat(rating);
      return titleMatch && ratingMatch;
    });
    setFilteredMovies(filtered);
  };
  const handleFilterChange = () => {
    handleFilter({ title, rating });
  };

 useEffect(() => {
  handleFilter()
 }, [rating, title])
 
  return (
    <div className="App">
      <h1>Movie App</h1>

      <AddMovie onAdd={addMovie} />
      <Filter title={title} setTitle={setTitle} rating={rating} setRating={setRating} handleFilterChange={handleFilterChange} />


      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;

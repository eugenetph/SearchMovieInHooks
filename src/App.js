import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { Input } from 'antd';

import MovieCard from './components/MovieCard'
import movieList from './data/MovieList'

function App() {

  const [listOfMovies, setListOfMovies] = useState(movieList)

  const onChange = (e) => {
    const { value } = e.target
    const movie = value ? movieList.filter(movie => movie.name.toLowerCase().includes(value.toLowerCase())) : movieList
    setListOfMovies(movie)
  }

  return (
    <div className="App">
      <div style={{ width: 300 }}>
        <Input placeholder="Please enter the movie name" onChange={onChange} />
      </div>

      <div style={{ width: 400, margin: '0 auto' }}>
        {listOfMovies.map((movie, index) => {
          return (
            <MovieCard key={index} movie={movie} />
          )
        })}
      </div>
    </div>
  );
}

export default App;

import React, { useState, useReducer } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { Input, Button } from 'antd';

import MovieCard from './components/MovieCard'
import Navigation from './components/Navigation'
import LikedModal from './components/LikedModal'

import MovieReducer from './reducer/MovieReducer'
import { MovieProvider } from './context/MovieContext'

import movieList from './data/MovieList'

function App() {

  const [state, dispatch] = useReducer(MovieReducer, ['eugene']);

  const [listOfMovies, setListOfMovies] = useState(movieList)
  const [pageNumber, setPageNumber] = useState(0)
  const [isLikeModalVisible, setIsLikeModalVisible] = useState(false)

  const onChange = (e) => {
    const { value } = e.target
    const movie = value ? movieList.filter(movie => movie.name.toLowerCase().includes(value.toLowerCase())) : movieList
    setListOfMovies(movie)
  }

  return (
    <MovieProvider value={{ state, dispatch }} >
      <div className="App">
        <div style={{ width: 300 }}>
          <Input placeholder="Please enter the movie name" onChange={onChange} />
          <Button type="primary" onClick={() => setIsLikeModalVisible(true)}>Show Liked Movie</Button>
        </div>
        <div>
          <Navigation pageNumber={pageNumber} maxPageNumber={Math.floor(listOfMovies.length / 3)} setPageNumber={setPageNumber} />
        </div>
        <div style={{ width: 400, margin: '0 auto' }}>
          {listOfMovies.slice(3 * pageNumber, 3 * (pageNumber + 1)).map((movie, index) => {
            return (
              <MovieCard key={index} movie={movie} />
            )
          })}
        </div>
        <LikedModal isLikeModalVisible={isLikeModalVisible} setIsLikeModalVisible={setIsLikeModalVisible} />
      </div>
    </ MovieProvider>
  );
}

export default App;

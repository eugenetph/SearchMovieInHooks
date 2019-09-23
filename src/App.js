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

  const [state, dispatch] = useReducer(MovieReducer, ['Deadpool']);

  const [listOfMovies, setListOfMovies] = useState(movieList)
  const [pageNumber, setPageNumber] = useState(0)
  const [isLikeModalVisible, setIsLikeModalVisible] = useState(false)

  const isLikeHandler = (name) => {
    return state ? state.includes(name) : false
  }

  const maxPageNumberHandler = () => {
    return Math.floor(listOfMovies.length / 3)
  }

  const onChange = (e) => {
    const { value } = e.target
    const movie = value ? movieList.filter(movie => movie.name.toLowerCase().includes(value.toLowerCase())) : movieList
    setListOfMovies(movie)
    setPageNumber(0)
  }

  return (
    <MovieProvider value={{ state, dispatch }} >
      <div className="App">
        <div style={{ display: 'incline-block' }}>
          <Input style={{ width: 300, marginRight: 20 }} placeholder="Search for movie name" onChange={onChange} />
          <Button disabled={state.length ? false : true} onClick={() => setIsLikeModalVisible(true)}>Show Liked Movie</Button>
        </div>
        <div>
          <Navigation pageNumber={pageNumber} maxPageNumber={maxPageNumberHandler()} setPageNumber={setPageNumber} />
        </div>
        <div className='movie-container' style={{ width: 400, margin: '0 auto' }}>
          {listOfMovies.slice(3 * pageNumber, 3 * (pageNumber + 1)).map((movie, index) => {
            return (
              <MovieCard key={index} movie={movie} isLike={isLikeHandler(movie.name)}/>
            )
          })}
        </div>
        <LikedModal isLikeModalVisible={isLikeModalVisible} setIsLikeModalVisible={setIsLikeModalVisible} />
      </div>
    </ MovieProvider>
  );
}

export default App;

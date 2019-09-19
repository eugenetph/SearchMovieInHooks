import React from 'react'
import { Card, Button } from 'antd';

import { MovieConsumer } from '../context/MovieContext'

const MovieCard = ({ movie = undefined }) => {

    return (

        <MovieConsumer>
            {({ state, dispatch }) => (
            <Card title={movie.name}>
                <p>Production Year: {movie.productionYear}</p>
                <p>Genre: {movie.genre}</p>
                <p>Synopsis Short: {movie.synopsisShort}</p>
                <Button onClick={() => {state = [...state, movie.name]}}>Like</Button>
            </Card>)
            }
        </MovieConsumer>
    )
}

export default MovieCard


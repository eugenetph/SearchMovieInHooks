import React from 'react'
import { Card, Button, Icon } from 'antd';

import { MovieConsumer } from '../context/MovieContext'

const MovieCard = ({ movie = undefined, isLike = false}) => {

    return (
        <MovieConsumer>
            {({ state, dispatch }) => (
                <Card title={movie.name}>
                    <p>Production Year: {movie.productionYear}</p>
                    <p>Genre: {movie.genre}</p>
                    <p>Synopsis Short: {movie.synopsisShort}</p>
                    <Button style={{ backgroundColor: isLike ? 'green': null }} onClick={() => {
                        dispatch({ type: 'UPDATE_FAV_MOVIE_LIST', payload: movie.name })
                    }
                    }><Icon type='like' />Like</Button>
                </Card>)
            }
        </MovieConsumer>
    )
}

export default MovieCard


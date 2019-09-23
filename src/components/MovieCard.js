import React, { useContext } from 'react'
import { Card, Button, Icon } from 'antd';

import MovieContext from '../context/MovieContext'

const MovieCard = ({ movie = undefined, isLike = false }) => {

    const context = useContext(MovieContext)

    return (
        <Card title={movie.name}>
            <p>Production Year: {movie.productionYear}</p>
            <p>Genre: {movie.genre}</p>
            <p>Synopsis Short: {movie.synopsisShort}</p>
            <Button style={{ backgroundColor: isLike ? 'green' : null }} onClick={() => {
                context.dispatch({ type: 'UPDATE_FAV_MOVIE_LIST', payload: movie.name })
            }
            }><Icon type='like' />Like</Button>
        </Card>
    )
}

export default MovieCard


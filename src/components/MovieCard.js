import React from 'react'
import { Card } from 'antd';

const MovieCard = ({ movie = undefined }) => {

    return (
        <div>
            <Card title={movie.name}>
                <p>Production Year: {movie.productionYear}</p>
                <p>Genre: {movie.genre}</p>
                <p>Synopsis Short: {movie.synopsisShort}</p>
            </Card>
        </div>
    )
}

export default MovieCard


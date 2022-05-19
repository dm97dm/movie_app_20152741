import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, year, summary, poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className='movie_genres'>
                    {genres.map((genre, index) => {
                        return<li ket={index} className='movie_genre'>{genre}</li>
                    })}
                </ul>
                <p className="mivie_summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
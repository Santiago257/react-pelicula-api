//Lista de peliculas
//Importamos la librearia de react
import React from 'react'
import PropTypes from 'prop-types'
//Pintar datos de una pelicula
//Movie va a ser un objeto que contiene los datos
const Card = ({movie}) => {
    //Con un return vamos a pintar las cosas
    //Todas estas cosas estan en nuestro data.json
    return (
        //El col-md-4 es para que cada carta ocupe una tercera parte de la pantalla
        <div className="col-md-4">
            <div className="card">
            <img src={movie.Poster} alt={movie.Title} className="card-img-top" width="100" ></img>
                <div className="card-body">
                    <h4>{movie.Title} {movie.Year}</h4>
                    <p>{movie.Type}</p>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string,
        Year: PropTypes.string,
        Poster: PropTypes.string,
        Type: PropTypes.string,
    }).isRequired
}

export default Card
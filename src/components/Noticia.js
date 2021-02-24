import PropTypes from "prop-types";
import React from 'react'

const Noticia = ({ noticia }) => {
    // Extraer los datos
    const { urlToImage, url, title, description, source } = noticia;

    const imagen = ((urlToImage)
        ?
        <div className="card-image">
            <img src={ urlToImage } alt={ title } />
            <span className="card-title">{ source.name }</span>
        </div>
        :
        null);

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                { imagen }
                <div className="card-content">
                    <h3>{ title }</h3>
                    <p>{ description }</p>
                </div>

                <div className="card-action">
                    <a href={ url } _target="_blank" rel="noopener noreferrer" className="waves-effect waves-light button">Ver noticia completa</a>
                </div>
            </div>
        </div>
    )
}

Noticia.propTypes = {
    noticia: PropTypes.shape({
        description: PropTypes.any,
        source: PropTypes.shape({
            name: PropTypes.any
        }),
        title: PropTypes.any,
        url: PropTypes.any,
        urlToImage: PropTypes.any
    })
}

export default Noticia

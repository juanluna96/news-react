import PropTypes from "prop-types";
import React from 'react'
import Noticia from './Noticia';

const ListadoNoticias = ({ noticias }) => {
    return (
        <div className="row">
            {noticias.map((noticia) => {
                return (<Noticia key={ noticia.url } noticia={ noticia }></Noticia>)
            }) }
        </div>
    )
}

ListadoNoticias.propTypes = {
    noticias: PropTypes.shape({
        map: PropTypes.func
    })
}

export default ListadoNoticias

import PropTypes from "prop-types";
import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = ({ setCategoria }) => {
    const OPCIONES = [
        { value: 'generaL', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' },
    ]

    // Utilizar custom hooks
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    // Submit al form, pasar categoria a app.js
    const buscarNoticias = (e) => {
        e.preventDefault();

        setCategoria(categoria);
    }

    return (
        <div className={ `${styles.buscador} row` }>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={ buscarNoticias }>
                    <h2 className={ styles.heading }>Encuentra las noticias por categorías</h2>
                    <div className="input-field col s12">
                        <SelectNoticias></SelectNoticias>
                        <input type="submit" className={ `${styles.btn_block} btn-large amber darken-2` } value="Buscar" />
                    </div>
                </form>
            </div>
        </div>
    )
}

Formulario.propTypes = {
    setCategoria: PropTypes.func
}

export default Formulario

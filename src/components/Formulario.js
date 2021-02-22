import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario = () => {

    // Utilizar custom hooks
    const [categoria, SelectNoticias] = useSelect();

    return (
        <div className={ `${styles.buscador} row` }>
            <div className="col s12 m8 offset-m2">
                <form action="">
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

export default Formulario

import React, { useState } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  margin-bottom: 20px;
`;

const useSelect = (stateInicial, opciones) => {

    // State del custom hook
    const [state, setState] = useState(stateInicial);

    const SelectNoticias = () => (
        <Select className="mb-2 browser-default" value={ state } onChange={ e => setState(e.target.value) }>
            <option value="">Seleccione</option>
            {opciones.map(opcion => (
                <option value={ opcion.value } key={ opcion.value }>{ opcion.label }</option>
            )) }
        </Select>
    )

    return [state, SelectNoticias];
}

export default useSelect

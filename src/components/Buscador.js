import React from 'react';
import { IonSearchbar } from '@ionic/react';

const Buscador = (props) => {

   const leerDatos = (e) => {
        // termino de busqueda
        const termino = e.target.value;
        // enviamos por props
        props.busqueda(termino);
    }

    return (
        <IonSearchbar  placeholder="Buscar" onIonChange={leerDatos}></IonSearchbar>

    );
};

export default Buscador;
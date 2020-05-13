import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';


const Contacto = (props) => {

    const { nombre, telefono_celular, telefono_fijo, id, area } = props.info;
    const tc = telefono_celular;
    const tf = telefono_fijo;
    const color = props.color
    const hash = "#"
    const res = hash.concat(color)

    return (
        <IonItem href={`/areas/contactos/detalle/${id}/${color}/${tc}/${tf}/${nombre}/${area}`}>
            <div style={{ height: '25px', width: '25px', borderRadius: '50%', background: res }}> </div>
            <IonLabel className="px-2">
                <div>{props.info.nombre}</div>
            </IonLabel>
        </IonItem>
    );
};

export default Contacto;
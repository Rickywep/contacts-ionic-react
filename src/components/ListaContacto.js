import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';

const ListaContacto = (props) => {

    const { nombre, telefono_celular, telefono_fijo, area, id } = props.info;  
    const color ="vacio"
    const tc = telefono_celular;
    const tf = telefono_fijo;    
    
    return (
        <IonItem href={`/areas/contactos/detalle/${id}/${color}/${tc}/${tf}/${nombre}/${area}`}>
            <IonLabel className="px-2">
                <div>{nombre}
                    <h3 className="text-secondary">
                        {area}
                    </h3>
                </div>
            </IonLabel>
        </IonItem>
    );
};

export default ListaContacto;
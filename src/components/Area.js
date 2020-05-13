import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';

const Area = (props) => {
    const color = props.info.color
    
    return (

        <IonItem href={`areas/contactos/${props.info.id}/${props.info.nombre}/${color.substr(1)}/`}>
            <div style={{ height: '20px', width: '20px', borderRadius: '50%', background: color }}> </div>
            <IonLabel className="px-2"> <div>{props.info.nombre}</div> </IonLabel>
        </IonItem>
    );
};

export default Area;
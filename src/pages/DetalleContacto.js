import React from 'react';
import { IonPage, IonIcon, IonToolbar, IonButtons, IonBackButton, IonLabel, IonContent, IonList, IonItem, IonTitle } from '@ionic/react';
import { call } from 'ionicons/icons';
import { CallNumber } from '@ionic-native/call-number';




const DetalleContacto = (props) => {

    const { nombre, tc, tf, color, id, area } = props.match.params


    let url = ""

    if (color !== "vacio") {
        url += "/areas/contactos/"
        url += `${id}/${area}/${color}`
    } else {
        url = "/todos"
    }


    const llamarTc = e => {
        e.preventDefault();
        const { tc } = props.match.params

        CallNumber.callNumber(tc, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err))
    }
    const llamarTf = e => {
        e.preventDefault();
        const { tf } = props.match.params

        CallNumber.callNumber(tf, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', tf, err))
    }


    return (
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref={`${url}/`} />
                </IonButtons>
                    <IonTitle className="text-primary">{nombre}</IonTitle>
            </IonToolbar>
            <IonContent>
                <IonList>
                    {(tc !== "null") ?
                        <IonItem className="row px-4" onClick={llamarTc}>
                            <div className="col-10">
                                <IonLabel>
                                    <h2>{tc}</h2>
                                    <h3 className="text-secondary">celular</h3>
                                </IonLabel>
                            </div>
                            <IonIcon style={{ color: '#3880ff' }} icon={call} />
                        </IonItem>
                        : null
                    }
                    {(tf !== "null") ?
                        <IonItem className="row px-4" onClick={llamarTf}>
                            <div className="col-10">
                                <IonLabel>
                                    <h2>{tf}</h2>
                                    <h3 className="text-secondary">Telefono</h3>
                                </IonLabel>
                            </div>
                            <IonIcon style={{ color: '#3880ff' }} icon={call} />
                        </IonItem>
                        : null
                    }
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default DetalleContacto;
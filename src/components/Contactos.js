import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonPage, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonList } from '@ionic/react';
import Loading from './Loading';
import Contacto from './Contacto';


const Contactos = (props) => {

    const [contactos, setContactos] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const { nombre } = props.match.params;
        async function fetchFromAPI() {
            await axios.get(`https://rickywep.pythonanywhere.com/contactos/endpoint/contactos.json?area=${nombre}`)
                .then(res => {
                    setContactos(res.data)
                    setLoading(false)
                })
                .catch()
        }
        fetchFromAPI()
    }, [props.match.params]);

    

    return (
        <IonPage>
            <IonToolbar >
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/areas" />
                </IonButtons>
                <IonTitle>{props.match.params.nombre}</IonTitle>
            </IonToolbar>
            
            <IonContent>
                {loading ? <Loading /> : null}

                <IonList>
                    {
                        contactos.map(contacto => (
                            <Contacto
                                info={contacto}
                                color={props.match.params.color}
                                key={contacto.id}
                            />
                        ))
                    }
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Contactos;
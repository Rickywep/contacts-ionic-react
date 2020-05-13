import React, { useState, useEffect } from 'react';
import Contacto from '../components/ListaContacto';
import Loading from '../components/Loading';
import Buscador from '../components/Buscador';
import Logo from '../logo_MinSegTuc.png';
import { IonList, IonPage, IonContent, IonToolbar } from '@ionic/react';

import axios from 'axios';

const ListaCompleta = () => {

    const [contactos, setContactos] = useState([]);
    const [respuesta, setRespuesta] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        queryAPI();

    }, []);

    const queryAPI = async () => {

        await axios.get('https://rickywep.pythonanywhere.com/contactos/endpoint/todos.json')
            .then(res => {
                setContactos(res.data)
                setRespuesta(res.data)
                setLoading(false)                
            })
            .catch()
    }

    const busquedaContactos = (busqueda) => {

        if (busqueda.length > 1) {
            let resultado;
            resultado = contactos.filter(area => (
                area.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1
            ))
            setRespuesta(resultado)
        } else {
            queryAPI();
        }
    }

    return (
        <IonPage>
            <IonContent>
                <img alt="logo de ministerio de seguridad" src={Logo} />
                        {loading ? <Loading /> : null}
                <div className="sticky-top">
                    <IonToolbar>
                        <Buscador
                            busqueda={busquedaContactos}
                        />
                    </IonToolbar>
                </div>
                <IonList>
                    {
                        respuesta.map(contacto => (
                            <Contacto
                                info={contacto}
                                key={contacto.id}
                            />))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default ListaCompleta;
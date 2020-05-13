import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonPage, IonContent, IonList, IonToolbar } from '@ionic/react';
import Area from './Area';
import Buscador from './Buscador';
import Loading from './Loading';
import Logo from '../logo_MinSegTuc.png'
import { Network, Plugins } from '@capacitor/core';


const Areas = () => {

    const [areas, setAreas] = useState([]);
    const [respuesta, setRespuesta] = useState([])
    const [loading, setLoading] = useState(true)


    const { Storage } = Plugins;

    const setObject = async (res) => {
        await Storage.set({
            key: 'areas',
            value: JSON.stringify(res)
        })
        console.log("Local Storage", res);
    }

    const isConnectedNetwork = async () => { return await Network.getStatus(); }

    useEffect(() => {
        async function getObject() {
            const ret = await Storage.get({ key: 'areas' });
            const a = JSON.parse(ret.value);
            if (a != null) {
                setAreas(a)
                setRespuesta(a)
                setLoading(false)
            } else {
                if (isConnectedNetwork()) {
                    console.log("hay internet, se cargaron las areas")
                    queryAPI()
                } else { console.log("no se pueden cargar las areas") }
            }
        } getObject()
    }, []);
    const queryAPI = async () => {
        await axios.get('https://rickywep.pythonanywhere.com/contactos/endpoint/api/area')
            .then(res => {
                setAreas(res.data)
                setRespuesta(res.data)
                setLoading(false)
                setObject(res.data)

            })
    };

    const busquedaAreas = (busqueda) => {
        if (busqueda.length > 1) {

            let resultado;
            resultado = areas.filter(area => (
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
                            busqueda={busquedaAreas}
                        />
                    </IonToolbar>
                </div>
                <IonList>
                    {
                        respuesta.map(area => (
                            <Area
                                info={area}
                                key={area.id}
                            />
                        ))
                    }
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Areas;
import React from 'react';
import { IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';
import { apps, peopleOutline } from 'ionicons/icons';

import { IonReactRouter } from '@ionic/react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Areas from './Areas';
import Contactos from './Contactos';
import DetalleContacto from '../pages/DetalleContacto';
import ListaCompleta from '../pages/ListaContactos';


const tabroot = () => {
    return (

        <IonReactRouter>
            <IonTabs>
                <Router/>
                <IonRouterOutlet>
                    <Route path="/" component={Login} exact={true} />
                    <Route path="/areas" component={Areas} exact={true} />
                    <Route path="/areas/contactos/:id/:nombre/:color/" component={Contactos} exact={true}/>
                    <Route path="/areas/contactos/detalle/:id/:color/:tc/:tf/:nombre/:area" component={DetalleContacto}/>
                    <Route path="/todos/" component={ListaCompleta} exact={true} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="areas" href="/areas">
                        <IonIcon icon={apps} />
                        <IonLabel>AREAS</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="todos" href="/todos/">
                        <IonIcon icon={peopleOutline} />
                        <IonLabel>TODOS</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    );
};

export default tabroot;
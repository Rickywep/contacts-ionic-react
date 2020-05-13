import React from 'react';
import { IonPage,  IonItem, IonInput, IonLabel, IonContent, IonButton} from '@ionic/react';
import Logo from '../logo_MinSegTuc.png'


const login = () => {
    return (
        <IonPage>
            <IonContent>
                <div className="mt-5">
                    <img alt="logo de ministerio de seguridad" src={Logo} />
                    <div className="container">
                        <IonItem>
                            <IonLabel position="floating">N° Legajo</IonLabel>
                            <IonInput type="number"></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">N° DNI"</IonLabel>
                            <IonInput type="number"></IonInput>
                        </IonItem>
                        <div className="mt-3">
                            <IonButton expand="block" href="/areas">Ingresar</IonButton>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default login;
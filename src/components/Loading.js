import React from 'react';
import { IonProgressBar } from '@ionic/react';


const Loading = () => {
    return (
        <IonProgressBar type="indeterminate" reversed={true}></IonProgressBar>
    );
};

export default Loading;
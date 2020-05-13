import React from 'react';
import Login from './pages/Login';
import Tabroot from './components/TabRoot';
import { IonApp } from '@ionic/react';

import { BrowserRouter as Router, Route } from 'react-router-dom';


/* Core CSS required for Ionic components to work properly */
import "@ionic/core/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/core/css/normalize.css";
import "@ionic/core/css/structure.css";
import "@ionic/core/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/core/css/padding.css";
import "@ionic/core/css/float-elements.css";
import "@ionic/core/css/text-alignment.css";
import "@ionic/core/css/text-transformation.css";
import "@ionic/core/css/flex-utils.css";
import "@ionic/core/css/display.css";

function App() {


  return (
    <Router>
      <IonApp>
        <Route path="/" component={Login} />
        <Route path="/areas" component={Tabroot} />
        <Route path="/todos" component={Tabroot} />
      </IonApp>
    </Router>
  );
}

export default App;

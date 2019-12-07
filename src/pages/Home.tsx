import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonFooter, IonMenuButton, IonFab, IonFabButton } from '@ionic/react';
import React from 'react';

import {star, camera, build, add } from 'ionicons/icons';

import { Plugins, CameraResultType } from '@capacitor/core';
import CameraComponent from '../components/CameraComponent';
import ApiCallComponent from '../components/ApiCallComponent';
import ApiCall from '../components/ApiCall.js';
import ApiCallImages from '../components/ApiCallImages.jsx';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle color="dark" size="large">TestApp</IonTitle>

        <IonButtons slot="primary">
          <IonButton color="secondary">
            <IonIcon slot="start" icon={star} />Rate the app
          </IonButton>
          <IonButton color="secondary" href="/about">
            <IonIcon slot="start" icon={build} />About page
          </IonButton>
        </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ApiCallImages />
        <CameraComponent />
      </IonContent>

      <IonFooter>

      </IonFooter>
    </IonPage>
  );
};

export default Home;

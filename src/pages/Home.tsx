import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonFooter, IonMenuButton } from '@ionic/react';
import React from 'react';

import {star, camera, build } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle color="light" size="large">Une application de test</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonButton color="secondary">
              <IonIcon slot="end" icon={camera} />
              Take a picture
        </IonButton>

        <IonButton color="primary">
            <IonIcon slot="end" icon={star} />
              Rate this application
        </IonButton>

      </IonContent>

      <IonFooter>

      </IonFooter>
    </IonPage>
  );
};

export default Home;

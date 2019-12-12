import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonFooter, IonMenuButton } from '@ionic/react';
import React from 'react';

import {star, camera, build } from 'ionicons/icons';


const About: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>About Page</IonTitle>
          <IonContent>
            
          </IonContent>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        
      </IonContent>
    </IonPage>
  );
};

export default About;

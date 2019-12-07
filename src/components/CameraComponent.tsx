import { IonContent, IonHeader, IonPage, IonTitle, IonIcon,
    IonToolbar, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { Plugins, CameraResultType } from '@capacitor/core';
import {camera } from 'ionicons/icons';


const CameraComponent: React.FC = () => {
    const { Camera } = Plugins;
    const [photo, setPhoto] = useState();
    const takePhoto = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
      setPhoto(image.webPath);
    };
    return (
        <>
          <img src={photo} />
          <IonButton onClick={takePhoto}><IonIcon slot="end" icon={camera} /></IonButton>
        </>
    );
};
export default CameraComponent;
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonFooter, IonMenuButton, IonFab, IonFabButton } from '@ionic/react';
import React from 'react';

const ApiCallComponent: React.FC = () => {
    const getData = ['test', 'test2', 'test3']
    let dataFromApi;

    const fetchData = () => fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(({data}) => {
        dataFromApi = data
        console.log(data);
    }).catch(err => {
        console.error('Error: ', err);
    });

    fetchData();

    return (
        <>
        <ul>
            {getData.map(elem =>(
                <li key={elem}>{elem}</li>
            ))}
        </ul>
        <p>test</p>
        </>
    );
};

export default ApiCallComponent;

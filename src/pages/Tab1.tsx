import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {mockresponse} from '../data/issues'

const Tab1: React.FC = () => {
  
  let issues = mockresponse.data.repository.issues.edges.map(eachEdge => eachEdge.node)
  // console.log(issues)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Issues</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Github Issue List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {issues.map(eachIssue => (
            <IonItem>
              <IonLabel>{eachIssue.title}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

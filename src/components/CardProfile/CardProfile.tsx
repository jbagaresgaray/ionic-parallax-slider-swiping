import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonCardContent,
  IonButton,
} from "@ionic/react";

import "./CardProfile.scss";

const CardProfile: React.FC = () => {
  return (
    <IonCard className="card-profile">
      <IonCardHeader>
        <IonCardTitle>Erica Simmons</IonCardTitle>
        <IonCardSubtitle>
          Passionate about floral patterns and photographing them.
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonButton className="social-button" color="follow">
          Follow
        </IonButton>
        <IonButton className="social-button" color="darkseid">
          Message
        </IonButton>
      </IonCardContent>
      <IonGrid className="images-grid">
        <IonRow>
          <IonCol size="6" className="ion-text-center">
            <img src="./assets/images/Rectangle3.svg" alt="" />
          </IonCol>
          <IonCol size="6" className="ion-text-center">
            <img src="./assets/images/Rectangle2.svg" alt="" />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  );
};

export default CardProfile;

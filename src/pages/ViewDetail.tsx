import {
  IonContent,
  IonHeader,
  IonPage,
  IonButtons,
  IonToolbar,
  IonButton,
  IonIcon,
  useIonRouter,
} from "@ionic/react";
import { close } from "ionicons/icons";
import Avatar from "../components/Avatar/Avatar";
import CardProfile from "../components/CardProfile/CardProfile";
import "./ViewDetail.scss";

const ViewDetail: React.FC = () => {
  const router = useIonRouter();

  const dismiss = () => {
    console.log("dismiss");
    router.goBack();
  };

  return (
    <IonPage id="view-detail-page">
      <IonContent fullscreen>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="end">
              <IonButton onClick={dismiss} className="btn-dismiss">
                <IonIcon slot="icon-only" icon={close} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <Avatar />
        <CardProfile />
      </IonContent>
    </IonPage>
  );
};

export default ViewDetail;

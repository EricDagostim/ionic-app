import { IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
// import './Tab3.css';
import './Globals.css';

import {settingsOutline} from 'ionicons/icons';

const avatarUrl = "./assets/img/profile-image.jpg";
const name = 'Éric';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonRow className="header-row-content">
            <IonAvatar>
              <img src={avatarUrl} alt="avatar" />
            </IonAvatar>
             <IonTitle>Olá, {name}!</IonTitle>
            
            <IonButton fill="clear" href='perfil'>
              <IonIcon icon={settingsOutline} />
            </IonButton>
          </IonRow>
      </IonToolbar>
    </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

import { IonAvatar, IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Historico.css';
import './Globals.css';

import {settingsOutline} from 'ionicons/icons';

const avatarUrl = "./assets/img/profile-image.jpg";
const name = 'Éric';

const Historico: React.FC = () => {
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

          <IonGrid>
            <IonRow>
              <h1>Histórico de Transações</h1>
            </IonRow>
          </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default Historico;

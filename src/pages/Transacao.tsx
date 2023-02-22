import { IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Transacao.css';
import './Globals.css';

import {settingsOutline} from 'ionicons/icons';

const avatarUrl = "./assets/img/profile-image.jpg";
const name = 'Éric';

const Transacao: React.FC = () => {
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
        <h1>Página de Transações</h1>
      </IonContent>
    </IonPage>
  );
};

export default Transacao;

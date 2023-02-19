import { IonContent, IonBadge, IonPage, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonHeader, IonToolbar, IonAvatar, IonTitle, IonIcon} from '@ionic/react';
import './Tab1.css';

import {settingsOutline} from 'ionicons/icons';

const avatarUrl = "./assets/img/profile-image.jpg";
const name = 'Éric';

const Tab1: React.FC = () => {

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

           <IonCard>
             <IonCardHeader>
               <IonBadge color="primary">Solicitação de Documento</IonBadge>
               <IonCardTitle>Matheus Fernandes</IonCardTitle>
             </IonCardHeader>

            <IonCardContent>
              Favor enviar documentos relativos a posse do imóvel.
            </IonCardContent>
           </IonCard>  
           
           <IonCard>
             <IonCardHeader>
               <IonBadge color="warning">Solicitação de Pagamento</IonBadge>
               <IonCardTitle>Maurício Costa:</IonCardTitle>
             </IonCardHeader>

            <IonCardContent>
              Solicitação referente à entrada acordada de 15% do valor do veículo.
            </IonCardContent>
           </IonCard>  

           <IonCard>
              <IonCardHeader>
               <IonBadge color="danger">Revizão de Documentos</IonBadge>
               <IonCardTitle>Júlia Souza:</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Reenviar documentação do veículo 
                "abc000" no formato de PDF. Obrigada!
              </IonCardContent>
           </IonCard>

          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
    
  );
};

export default Tab1;

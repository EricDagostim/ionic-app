import { IonContent, IonBadge, IonPage, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonHeader, IonToolbar, IonAvatar, IonTitle, IonIcon} from '@ionic/react';
import './Solicitacoes.css';
import './Globals.css';

import {settingsOutline} from 'ionicons/icons';

const avatarUrl = "./assets/img/profile-image.jpg";
const name = 'Éric';



const Solicitacoes: React.FC = () => {

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
                <IonBadge className="badge-warning">Solicitação de Documento</IonBadge>
                <IonCardTitle>Matheus Fernandes</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                Favor enviar documentos relativos a posse do imóvel.
              </IonCardContent>
              <IonButton fill='clear'>
              Ver
              </IonButton>
            </IonCard>  
           

           <IonCard>
             <IonCardHeader>
               <IonBadge className="badge-primary">Solicitação de Pagamento</IonBadge>
               <IonCardTitle>Maurício Costa:</IonCardTitle>
             </IonCardHeader>

            <IonCardContent>
              Solicitação referente à entrada acordada de 15% do valor do veículo.
            </IonCardContent>
           </IonCard>  

           <IonCard>
              <IonCardHeader>
               <IonBadge className="badge-danger">Revizão de Documentos</IonBadge>
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

export default Solicitacoes;

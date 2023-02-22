import { IonAvatar, IonBreadcrumb, IonBreadcrumbs, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react';


import {settingsOutline, eye, arrowBackOutline, checkmarkCircleOutline, createOutline, alertCircleOutline} from 'ionicons/icons';
import './Perfil.css';
import './Globals.css';
const avatarUrl = "./assets/img/profile-image.jpg";
const name = 'Éric';




const Perfil: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonRow className="header-row-content">
            <IonButton fill="default">
            <IonIcon icon={arrowBackOutline}/> 
            Voltar
            </IonButton>
           
            <IonButton fill="outline" color="warning" href='tab2'>
              <IonIcon icon={createOutline} />
              Editar
            </IonButton>
          </IonRow>
      </IonToolbar>
    </IonHeader>
      <IonContent fullscreen>

      <IonGrid>
        <IonRow>
          <IonCol>
            
            <IonRow className='align-center m-5'>
              <IonAvatar className="align-center">
                <img src={avatarUrl} alt="avatar" />
              </IonAvatar>
            </IonRow>

            <IonItem>
              <IonLabel>Modo Escuro</IonLabel>
              <IonToggle>
                
              </IonToggle>
            </IonItem>

            <IonList inset={true}>
              <IonItem>
                <IonLabel>Éric Nascimento</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>CPF/RG 
                </IonLabel>
                <IonIcon icon={checkmarkCircleOutline} color="success"/>
              </IonItem>
              <IonItem>
                <IonLabel>Foto de Segurança</IonLabel>
                <IonIcon icon={alertCircleOutline} color="danger"/>
                
              </IonItem>
              <IonItem>
                <IonLabel>Notificações</IonLabel>
                <IonIcon icon={settingsOutline} color="gray"/>
              </IonItem>
              <IonItem>
                <IonLabel>Termos de uso</IonLabel>
                <IonIcon icon={eye} color="gray"/>
              </IonItem>

              <IonItem>
                <IonLabel>ID do perfil</IonLabel>
                <IonLabel></IonLabel> 
                <IonLabel>#453#455347*%</IonLabel> 
              </IonItem>
            </IonList>
          
          
          </IonCol>
        </IonRow>
      </IonGrid>


      

      
        
      </IonContent>
    </IonPage>
  );
};

export default Perfil;

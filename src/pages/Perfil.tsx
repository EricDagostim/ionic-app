import { IonAvatar, IonBreadcrumb, IonBreadcrumbs, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react';


import {settingsOutline, arrowBackOutline, checkmarkCircleOutline, createOutline, alertCircleOutline} from 'ionicons/icons';
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
            
            
            <IonAvatar>
              <img src={avatarUrl} alt="avatar" />
            </IonAvatar>

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
                <IonLabel>Foto com identidade</IonLabel>
                <IonIcon icon={alertCircleOutline} color="danger"/>
                
              </IonItem>
              <IonItem>
                <IonLabel>Pac-Man</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Super Mario World</IonLabel>
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

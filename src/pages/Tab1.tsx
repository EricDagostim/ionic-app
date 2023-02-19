import { IonContent, IonHeader, IonBadge, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Olá, Éric!</IonTitle>
          
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
        <IonGrid>
          <IonRow>

           <IonCard>
             <IonCardHeader>
               <IonBadge color="primary">15min</IonBadge>
               <IonCardTitle>Solicitação de Pagamento</IonCardTitle>
               <IonCardSubtitle>de Maurício Costa</IonCardSubtitle>
             </IonCardHeader>

            <IonCardContent>
              Solicitação referente à entrada acordada de 15% do valor do veículo.
            </IonCardContent>

            <IonButton fill="clear" color="medium">Lembrar</IonButton>
              <IonButton fill="solid" color="success">Pagar</IonButton>
           </IonCard>  
           
           <IonCard>
             <IonCardHeader>
               <IonBadge color="primary">15min</IonBadge>
               <IonCardTitle>Solicitação de Pagamento</IonCardTitle>
               <IonCardSubtitle>de Maurício Costa</IonCardSubtitle>
             </IonCardHeader>

            <IonCardContent>
              Solicitação referente à entrada acordada de 15% do valor do veículo.
            </IonCardContent>

            <IonButton fill="clear" color="medium">Lembrar</IonButton>
              <IonButton fill="solid" color="success">Pagar</IonButton>
           </IonCard>  

           <IonCard>
             <IonCardHeader>
               <IonBadge color="primary">15min</IonBadge>
               <IonCardTitle>Solicitação de Pagamento</IonCardTitle>
               <IonCardSubtitle>de Maurício Costa</IonCardSubtitle>
             </IonCardHeader>

            <IonCardContent>
              Solicitação referente à entrada acordada de 15% do valor do veículo.
            </IonCardContent>

            <IonButton fill="clear" color="medium">Lembrar</IonButton>
              <IonButton fill="solid" color="success">Pagar</IonButton>
           </IonCard>

          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
    
  );
};

export default Tab1;

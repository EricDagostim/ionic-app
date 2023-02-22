import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonAvatar,
  IonButton,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addCircleOutline, notificationsOutline, analyticsOutline, settingsOutline} from 'ionicons/icons';
import Solicitacoes from './pages/Solicitacoes';
import Historico from './pages/Historico';
import Transacao from './pages/Transacao';
import Perfil from './pages/Perfil'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';

// import icons
// import { notificationsOutline } from 'ionicons'


setupIonicReact();


const App: React.FC = () => (
  <IonApp>
      


    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>

        <Route exact path="/perfil">
            <Perfil />
        </Route>

          <Route exact path="/solicitacoes">
            <Solicitacoes />
          </Route>
          <Route exact path="/historico">
            <Historico />
          </Route>
          <Route path="/Transacao">
            <Transacao />
          </Route>

          <Route exact path="/">
            <Redirect to="/Perfil" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="solicitacoes" href="/solicitacoes">
            <IonIcon icon={notificationsOutline} />
            <IonLabel>Solicitações</IonLabel>
          </IonTabButton>
          <IonTabButton tab="historico" href="/historico">
            <IonIcon icon={analyticsOutline} />
            <IonLabel>Histórico</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Transacao" href="/Transacao">
            <IonIcon icon={addCircleOutline} />
            <IonLabel>Criar Transação</IonLabel>
          </IonTabButton>
          
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    

    
  </IonApp>
);

export default App;

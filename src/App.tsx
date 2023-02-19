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
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
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
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>

          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="solicitacoes" href="/solicitacoes">
            <IonIcon icon={notificationsOutline} />
            <IonLabel>Solicitações</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={analyticsOutline} />
            <IonLabel>Histórico</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={addCircleOutline} />
            <IonLabel>Criar Transação</IonLabel>
          </IonTabButton>
          
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    

    
  </IonApp>
);

export default App;

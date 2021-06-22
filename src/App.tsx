import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  setupConfig,
  mdTransitionAnimation,
  IonRouterOutlet,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

/* Theme variables */
import "./theme/shared.scss";
import "./theme/variables.scss";

import Tabs from "./components/Tabs/Tabs";
import ViewMessage from "./pages/ViewDetail";
import Home from "./pages/Home";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

setupConfig({
  mode: "ios",
  rippleEffect: false,
  navAnimation: mdTransitionAnimation,
});

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route path="/tab" render={() => <Tabs />} />
          <Route path="/detail/:id">
            <ViewMessage />
          </Route>

          <Route path="/" component={Home} exact={true} />
          <Redirect exact from="/" to="/tab/home" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

import React, { useState } from "react";
import {
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
} from "@ionic/react";
import { Redirect, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Tab2Page from "../../pages/Tab2";
import Tab3Page from "../../pages/Tab3";

import homeIcon from "../../assets/icon/Home.svg";
import homeActiveIcon from "../../assets/icon/Home-active.svg";

import momentsIcon from "../../assets/icon/Moments.svg";
import momentsActiveIcon from "../../assets/icon/Moments-active.svg";

import uploadIcon from "../../assets/icon/Upload.svg";
import uploadActiveIcon from "../../assets/icon/Upload-active.svg";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <IonTabs onIonTabsDidChange={(ev) => setActiveTab(ev.detail.tab)}>
      <IonRouterOutlet>
        <Route path="/" exact={true}>
          <Redirect to="/tab/home" />
        </Route>
        <Route path="/tab/home" exact={true}>
          <Home />
        </Route>
        <Route path="/tab/tab2" exact={true}>
          <Tab2Page />
        </Route>
        <Route path="/tab/tab3" exact={true}>
          <Tab3Page />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom" className="tab-bar-bottom">
        <IonTabButton tab="home" href="/tab/home">
          {activeTab === "home" ? (
            <IonIcon src={homeActiveIcon} />
          ) : (
            <IonIcon src={homeIcon} />
          )}
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab/tab2">
          {activeTab === "tab2" ? (
            <IonIcon src={momentsActiveIcon} />
          ) : (
            <IonIcon src={momentsIcon} />
          )}
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab/tab3">
          {activeTab === "tab3" ? (
            <IonIcon src={uploadActiveIcon} />
          ) : (
            <IonIcon src={uploadIcon} />
          )}
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;

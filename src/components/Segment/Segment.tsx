import React from "react";
import { IonToolbar, IonSegment, IonSegmentButton } from "@ionic/react";
import "./Segment.scss";

const Segment: React.FC = () => {
  return (
    <IonToolbar className="segment-toolbar">
      <IonSegment mode="md" scrollable value="one" color="dark">
        <IonSegmentButton value="one">Top picks</IonSegmentButton>
        <IonSegmentButton value="two">Recent</IonSegmentButton>
        <IonSegmentButton value="three">Collections</IonSegmentButton>
        <IonSegmentButton value="four">Explore</IonSegmentButton>
      </IonSegment>
    </IonToolbar>
  );
};

export default Segment;

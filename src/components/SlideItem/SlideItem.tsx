import { IonCard } from "@ionic/react";
import React from "react";
import Avatar from "../Avatar/Avatar";

import "./SliderItem.scss";

interface Props {
  itemSrc?: string;
  onCardClick?: () => void;
}

const SlideItem: React.FC<Props> = ({ itemSrc, onCardClick }) => {
  return (
    <div className="SliderItem" onClick={onCardClick}>
      <IonCard>
        <img src={itemSrc} alt="" />
      </IonCard>
      <Avatar />
    </div>
  );
};

export default SlideItem;

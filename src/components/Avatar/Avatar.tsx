import React from "react";
import { IonAvatar } from "@ionic/react";
import "./Avatar.scss";

const Avatar: React.FC = () => {
  return (
    <IonAvatar className="UserAvatar">
      <img
        src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
        alt=""
      />
    </IonAvatar>
  );
};

export default Avatar;

import React from "react";
import classNames from 'classnames';
import Time from '../Time/indexTime';
import IconReaded from "../IconReaded/indexIconReaded"

import "./DialogItem.scss";

const getAvatar = avatar => {
  if (avatar) {
    return (<img src="https://sun9-45.userapi.com/impg/604pXax9N6--gZ1nVeUdAF7lWyswBCkIzwXzPQ/P7K86r7Anec.jpg?size=50x0&quality=96&crop=0,0,1790,1790&sign=64dd05d8cf09f8d434cf3e72fe635fd1&ava=1" alt="" />
    );
  } else {
    // make avatar
  }
};

const DialogItem = ({ user, message, unreaded }) => (
  <div className={classNames("dialogs__item", {"dialogs__item--online": user.isOnline} )}>
    <div className="dialogs__item-avatar">
      {/*<img src={user.avatar} alt={`${user.fullname} avatar`} />*/}
      {getAvatar("https://sun9-45.userapi.com/impg/604pXax9N6--gZ1nVeUdAF7lWyswBCkIzwXzPQ/P7K86r7Anec.jpg?size=50x0&quality=96&crop=0,0,1790,1790&sign=64dd05d8cf09f8d434cf3e72fe635fd1&ava=1")}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>Федор Достоевский</b>
        <span>
          {/* <Time date={new Date()} /> */}
          13:03
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>
        Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки
        </p>
        <IconReaded isMe={true} isReaded={true} />
        {unreaded > 0 && <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? "+9" : unreaded}</div>}
      </div>
    </div>
  </div>
);

export default DialogItem;

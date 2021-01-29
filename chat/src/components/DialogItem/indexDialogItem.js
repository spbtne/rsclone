import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import IconReaded from '../IconReaded/indexIconReaded';
import Avatar from '../Avatar/indexAvatar';

import './DialogItem.scss';

const getFreshDate = (dateString) => {
  const date = new Date(dateString);

  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  );
};

const getMessageTime = (createdAtRaw) => {
  const createdAt = getFreshDate(createdAtRaw);
  if (isToday(createdAt)) {
    return format(createdAt, 'HH:mm');
  } else {
    return format(createdAt, 'mm.dd.yyyy');
  }
};

const DialogItem = ({ user, undread, created_at, text, isMe }) => (
  <div
    className={classNames('dialogs__item', {
      'dialogs__item--online': user.isOnline,
    })}>
    <div className="dialogs__item-avatar">
      <Avatar user={user} />
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>{getMessageTime(created_at)}</span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{text}</p>
        {isMe && <IconReaded isMe={true} isReaded={false} />}
        {undread > 0 && (
          <div className="dialogs__item-info-bottom-count">{undread > 9 ? '+9' : undread}</div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;

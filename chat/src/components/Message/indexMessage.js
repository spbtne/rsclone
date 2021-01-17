import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import classNames from "classnames";
import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/no-read.svg";
import readedSvgWhite from "../../assets/img/readedWhite.svg";
import noReadedSvgWhite from "../../assets/img/no-readWhite.svg";

import "./Message.scss";

function Message({ avatar, user, text, date, isMe, isReaded, attachments }) {
  return (
    <div className={classNames("message", { "message--isme": isMe })}>
      <div className="message__avatar">
        <img src={avatar} alt={`${user.fullname} avatar`} />
      </div>
      <div className="message__container">
        <div className="message__bubble">
          <p className="message__text">{text}</p>
          <img
            src={isMe ? (isReaded ? readedSvg : noReadedSvg) : (isReaded ? readedSvgWhite : noReadedSvgWhite)}
            alt="Check icon"
            className="message__check-icon"
          />
        </div>
        <div className="message__attachments">
          {attachments &&
            attachments.map((item) => (
              <div className="message__attachments-item">
                <img src={item.url} alt={item.filename} />
              </div>
            ))}
        </div>
        <span className="message__date">
          {formatDistanceToNow(date, { addSuffix: true, locale: ruLocale })}
        </span>
      </div>
    </div>
  );
}

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.object,
  user: PropTypes.object,
  attachments: PropTypes.array,
};

export default Message;

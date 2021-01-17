import React from "react";
import PropTypes from "prop-types";
// import formatDistanceToNow from "date-fns/formatDistanceToNow";
// import ruLocale from "date-fns/locale/ru";
import classNames from "classnames";
import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/no-read.svg";
import readedSvgWhite from "../../assets/img/readedWhite.svg";
import noReadedSvgWhite from "../../assets/img/no-readWhite.svg";

import Time from '../Time/indexTime'

import "./Message.scss";
import IconReaded from "../IconReaded/indexIconReaded";

function Message({ avatar, user, text, date, isMe, isReaded, attachments, isTyping }) {
  return (
    <div className={classNames("message", {
    "message--isme": isMe,
    "message--is-typing": isTyping,
    "message--image": attachments && attachments.length === 1 })}>
      <div className="message__avatar">
        <img src={avatar} alt={`${user.fullname} avatar`} />
      </div>
      <div className="message__container">
        <IconReaded isMe={isMe} isReaded={isReaded}/>
{(text || isTyping) && <div className="message__bubble">
          {text && <p className="message__text">{text}</p>}
            {isTyping && <div className="message__typing">
            <span />
            <span />
            <span />
          </div>}
          <div class="chat-bubble">

          </div>
          <img
            src={isMe ? (isReaded ? readedSvg : noReadedSvg) : (isReaded ? readedSvgWhite : noReadedSvgWhite)}
            alt="Check icon"
            className="message__check-icon"
          />
        </div>}
        <div className="message__attachments">
          {attachments &&
            attachments.map((item) => (
              <div className="message__attachments-item">
                <img src={item.url} alt={item.filename} />
              </div>
            ))}
        </div>
        {date && (
        <span className="message__date">
          <Time date={date} />
        </span>
  )}
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
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool
};

export default Message;

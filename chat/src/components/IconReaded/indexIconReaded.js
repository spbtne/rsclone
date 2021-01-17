import React from "react";
import PropTypes from "prop-types";
import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/no-read.svg";
// import formatDistanceToNow from "date-fns/formatDistanceToNow";
// import ruLocale from "date-fns/locale/ru";

//import { Button as BaseButton } from "antd";

const IconReaded = ({ isMe, isReaded }) => 
isMe &&
(isReaded ? (
  <img className="message__icon-readed" src={readedSvg} alt="Readed icon" />
  ) : (
    <img 
    className="message__icon-readed message__icon-readed--no"
    src={noReadedSvg}
    alt="No readed icon"
    />
  ));

  IconReaded.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool
  };

export default IconReaded;

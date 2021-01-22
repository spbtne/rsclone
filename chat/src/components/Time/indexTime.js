import React, { Fragment } from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";

//import { Button as BaseButton } from "antd";

const getFreshDate = (dateString) => {
  const date = new Date(dateString);

  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );
};

const Time = ({ date }) => (
  <Fragment>
    {formatDistanceToNow(getFreshDate(date), {
      addSuffix: true,
      locale: ruLocale,
    })}
  </Fragment>
);

Time.propTypes = {
  date: PropTypes.string,
};

export default Time;

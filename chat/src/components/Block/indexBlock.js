import React from "react";
import classNames from 'classnames';

import "./Block.scss";

function Block({ children, className }) {
  return <div className={classNames("block", className)}>{children}</div>;
}

export default Block;

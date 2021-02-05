import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { dialogsActions } from "../redux/actions/indexActions";
import { Dialogs as BaseDialogs } from "../components/indexComponents";

import socket from "../core/socket.js";

const Dialogs = ({
  fetchDialogs,
  currentDialogId,
  setCurrentDialogId,
  items,
  userId,
}) => {
  const [inputValue, setValue] = useState("");
  const [filtred, setFiltredItems] = useState(Array.from(items));

  const onChangeInput = (value = "") => {
    setFiltredItems(
      items.filter(
        (dialog) =>
          dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >=
            0 ||
          dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >=
            0
      )
    );
    setValue(value);
  };

  const onNewDialog = () => {
    fetchDialogs();
  };

  window.fetchDialogs = fetchDialogs;
  useEffect(() => {
    if (items.length) {
      onChangeInput();
    }
  }, [items]);

  useEffect(() => {
    fetchDialogs();
    // if (!items.length) {
    //   fetchDialogs();
    // } else {
    //   setFiltredItems(items);
    // }
    socket.on("SERVER:DIALOG_CREATED", onNewDialog);
    socket.on("SERVER:NEW_MESSAGE ", onNewDialog);
    return () => {
      socket.removeListener("SERVER:DIALOG_CREATED", onNewDialog);
      socket.removeListener("SERVER:NEW_MESSAGE ", onNewDialog);
    };
  }, []);

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);

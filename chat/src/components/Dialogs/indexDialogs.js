import React from "react";
import orderBy from "lodash/orderBy";
import { Input, Empty } from "antd";

import DialogItem from "../DialogItem/indexDialogItem";

import "./Dialogs.scss";

const Dialogs = ({ items, userId, onSearch, inputValue, currentDialogId, onSelectDialog }) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Input.Search
        placeholder="Поиск среди контактов"
        onChange={e => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    
    {items.length ? (
      orderBy(items, ["desc"]).map(item => (
        <DialogItem
          key={item._id}
          isMe={item.author._id === userId}
          userId={userId}
          onSelect = {onSelectDialog}
          currentDialogId={currentDialogId}
          user={item.partner}
          created_at={item.lastMessage.createdAt}
          text={item.lastMessage.text}
          {...item}
        />
      ))
    ) : (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="Ничего не найдено"
      />
    )}
  </div>
);

export default Dialogs;
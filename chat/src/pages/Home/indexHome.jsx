import React from "react";


import { Button } from "antd";
import {
  EllipsisOutlined,
} from "@ant-design/icons";
import {
  Messages,
  ChatInput,
  StatusHead,
} from "../../containers/indexContainers";
import { Sidebar } from "../../containers/indexContainers";

import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="chat">
        <Sidebar />
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div></div>
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-header-username">
                <StatusHead />
              </b>
            </div>
            <Button type="link" shape="circle" icon={<EllipsisOutlined />} />
          </div>
          <div className="chat__dialog-messages">
            <Messages />
          </div>
          <div className="chat__dialog-input">
            <ChatInput />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

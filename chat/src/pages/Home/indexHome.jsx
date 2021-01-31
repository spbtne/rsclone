
import React from 'react';
import { Button } from 'antd';
import { TeamOutlined, FormOutlined, EllipsisOutlined, SmileOutlined } from "@ant-design/icons";
import { Status, ChatInput } from '../../components/indexComponents';
import { Dialogs, Messages } from "../../containers/indexContainers"

import './Home.scss';

const Home = () => {
  return (
    <section className="home">
        <div className="chat">
          <div className="chat__sidebar">
            <div className="chat__sidebar-header">
              <div>
                <TeamOutlined />
                <span>Список диалогов</span>
              </div>
              <Button type="link" shape="circle" icon={<FormOutlined />}/>
            </div>
            <div className="chat__sidebar-dialogs">
            
              <Dialogs
                userId={0}
              />
            </div>

          </div>
          <div className="chat__dialog">
            <div className="chat__dialog-header">
            <div>

            </div>
                <div className="chat__dialog-header-center">
                  <b className="chat__dialog-header-username">Гай Юлий Цезарь</b>
                  <div className="chat__dialog-header-status">
                    <Status online />
                  </div>
                </div>
                <Button type="link" shape="circle" icon={<EllipsisOutlined />}/>
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

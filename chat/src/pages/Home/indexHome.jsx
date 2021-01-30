import React from 'react';
import { Button } from 'antd';
import { TeamOutlined, FormOutlined, EllipsisOutlined, SmileOutlined } from "@ant-design/icons";
import { Messages, Status, ChatInput } from '../../components/indexComponents';
import { Dialogs } from "../../containers/indexContainers"

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
                items={[
                  {
                    _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                    text:
                      'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
                    created_at: 'Sun May 11 2019 21:16:55',
                    user: {
                      _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                      fullname: 'Федор Достоевский',
                      avatar: 'https://kupidonia.ru/content/crossword/photo/big/235_1.jpg',
                    },
                  },
                  {
                    _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                    text:
                      'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
                    created_at: 'Sun May 11 2019 21:16:55',
                    user: {
                      _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                      fullname: 'Федор Достоевский',
                      avatar: 'https://kupidonia.ru/content/crossword/photo/big/235_1.jpg',
                    },
                  },
                  {
                    _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                    text:
                      'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
                    created_at: 'Sun May 11 2019 21:16:55',
                    user: {
                      _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                      fullname: 'Федор Достоевский',
                      avatar: 'https://kupidonia.ru/content/crossword/photo/big/235_1.jpg',
                    },
                  },
                  {
                    _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                    text:
                      'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
                    created_at: 'Sun May 11 2019 21:16:55',
                    user: {
                      _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                      fullname: 'Федор Достоевский',
                      avatar: 'https://kupidonia.ru/content/crossword/photo/big/235_1.jpg',
                    },
                  },
                  {
                    _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                    text:
                      'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
                    created_at: 'Sun May 11 2019 21:16:55',
                    user: {
                      _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                      fullname: 'Федор Достоевский',
                      avatar: 'https://kupidonia.ru/content/crossword/photo/big/235_1.jpg',
                    },
                  },
                  {
                    _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                    text:
                      'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
                    created_at: 'Sun May 11 2019 21:16:55',
                    user: {
                      _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                      fullname: 'Федор Достоевский',
                      avatar: 'https://kupidonia.ru/content/crossword/photo/big/235_1.jpg',
                    },
                  },
                  {
                    _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                    text:
                      'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
                    created_at: 'Sun May 11 2019 21:16:55',
                    user: {
                      _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                      fullname: 'Федор Достоевский',
                      avatar: 'https://kupidonia.ru/content/crossword/photo/big/235_1.jpg',
                    },
                  },
                  {
                    _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                    text:
                      'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
                    created_at: 'Sun May 11 2019 21:16:55',
                    user: {
                      _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                      fullname: 'Федор Достоевский',
                      avatar: 'https://kupidonia.ru/content/crossword/photo/big/235_1.jpg',
                    },
                  },
                  {
                    _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                    text:
                      'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
                    created_at: 'Sun May 11 2019 21:16:55',
                    user: {
                      _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                      fullname: 'Федор Достоевский',
                      avatar: 'https://kupidonia.ru/content/crossword/photo/big/235_1.jpg',
                    },
                  },
                  {
                    _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                    text:
                      'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
                    created_at: 'Sun May 11 2019 21:16:55',
                    user: {
                      _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                      fullname: 'Федор Достоевский',
                      avatar: 'https://kupidonia.ru/content/crossword/photo/big/235_1.jpg',
                    },
                  },
                  {
                    _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                    text:
                      'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
                    created_at: 'Sun May 11 2019 21:16:55',
                    user: {
                      _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                      fullname: 'Федор Достоевский',
                      avatar: 'https://kupidonia.ru/content/crossword/photo/big/235_1.jpg',
                    },
                  },
                  {
                    _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                    text:
                      'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
                    created_at: 'Sun May 11 2019 21:16:55',
                    user: {
                      _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                      fullname: 'Федор Достоевский',
                      avatar: 'https://kupidonia.ru/content/crossword/photo/big/235_1.jpg',
                    },
                  },
                  {
                    _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                    text:
                      'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша',
                    created_at: 'Sun May 11 2019 21:16:55',
                    user: {
                      _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                      fullname: 'Федор Достоевский',
                      avatar: 'https://kupidonia.ru/content/crossword/photo/big/235_1.jpg',
                    },
                  },
                  {
                    _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                    text: 'Привет! Как твои дела?',
                    created_at: 'Fri Jan 22 2021 12:16:55',
                    user: {
                      _id: 'd95b2b8d46ebc680284bb1e90692f8d4',
                      fullname: 'Алан Тьюринг',
                      avatar: null,
                    },
                  },
                ]}
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

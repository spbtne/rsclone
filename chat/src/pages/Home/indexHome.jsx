import React from 'react';

import { Message, Dialogs } from '../../components/indexComponents';

import './Home.scss';

const Home = () => {
  return (
    <section className="home">
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
      <Message
        avatar="https://sun9-45.userapi.com/impg/604pXax9N6--gZ1nVeUdAF7lWyswBCkIzwXzPQ/P7K86r7Anec.jpg?size=50x0&quality=96&crop=0,0,1790,1790&sign=64dd05d8cf09f8d434cf3e72fe635fd1&ava=1"
        date="Sun Apr 21 2019 21:16:55"
        audio="https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/instrument2-2384.mp3"
      />

      {/*      <Message
        avatar="https://sun9-45.userapi.com/impg/604pXax9N6--gZ1nVeUdAF7lWyswBCkIzwXzPQ/P7K86r7Anec.jpg?size=50x0&quality=96&crop=0,0,1790,1790&sign=64dd05d8cf09f8d434cf3e72fe635fd1&ava=1"
        text="Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻"
        date={new Date(2021, 0, 14, 13, 26, 46)}
        isReaded={false}
        attachments={[
            {
              fileName: "image.jpg",
              url: "https://source.unsplash.com/100x100/?random1&nature,water",
            },
            {
              fileName: "image.jpg",
              url: "https://source.unsplash.com/100x100/?random2&nature,water",
            },
            {
              fileName: "image.jpg",
              url: "https://source.unsplash.com/100x100/?random3&nature,water",
            },
          ]}
      ></Message>
      <Message
        avatar="https://sun9-45.userapi.com/impg/604pXax9N6--gZ1nVeUdAF7lWyswBCkIzwXzPQ/P7K86r7Anec.jpg?size=50x0&quality=96&crop=0,0,1790,1790&sign=64dd05d8cf09f8d434cf3e72fe635fd1&ava=1"
        text="Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻"
        date={new Date(2021, 0, 14, 13, 16, 46)}
        isMe={true}
        isReaded={true}
        attachments={[
          {
            fileName: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random1&nature,water",
          },
          {
            fileName: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random2&nature,water",
          },
          {
            fileName: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random3&nature,water",
          },
        ]}
      ></Message>
      <Message
        avatar="https://sun9-45.userapi.com/impg/604pXax9N6--gZ1nVeUdAF7lWyswBCkIzwXzPQ/P7K86r7Anec.jpg?size=50x0&quality=96&crop=0,0,1790,1790&sign=64dd05d8cf09f8d434cf3e72fe635fd1&ava=1"
        attachments={[
          {
            fileName: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random1&nature,water",
          }
        ]}
      />      <Message
        avatar="https://sun9-45.userapi.com/impg/604pXax9N6--gZ1nVeUdAF7lWyswBCkIzwXzPQ/P7K86r7Anec.jpg?size=50x0&quality=96&crop=0,0,1790,1790&sign=64dd05d8cf09f8d434cf3e72fe635fd1&ava=1"
        isTyping
      />*/}
    </section>
  );
};

export default Home;

import React from "react";
import PropTypes from "prop-types";
import { Empty } from 'antd';

import { Message } from '../../components/indexComponents';


const Messages = ({ items }) => {
  return items ? <div>
    <Message
        avatar="https://sun9-45.userapi.com/impg/604pXax9N6--gZ1nVeUdAF7lWyswBCkIzwXzPQ/P7K86r7Anec.jpg?size=50x0&quality=96&crop=0,0,1790,1790&sign=64dd05d8cf09f8d434cf3e72fe635fd1&ava=1"
        date="Sun Apr 21 2019 21:16:55"
        audio="https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/instrument2-2384.mp3"
      />
            <Message
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
      />   
      <Message
        avatar="https://sun9-45.userapi.com/impg/604pXax9N6--gZ1nVeUdAF7lWyswBCkIzwXzPQ/P7K86r7Anec.jpg?size=50x0&quality=96&crop=0,0,1790,1790&sign=64dd05d8cf09f8d434cf3e72fe635fd1&ava=1"
        attachments={[
          {
            fileName: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random1&nature,water",
          }
        ]}
      />
      <Message
        avatar="https://sun9-45.userapi.com/impg/604pXax9N6--gZ1nVeUdAF7lWyswBCkIzwXzPQ/P7K86r7Anec.jpg?size=50x0&quality=96&crop=0,0,1790,1790&sign=64dd05d8cf09f8d434cf3e72fe635fd1&ava=1"
        attachments={[
          {
            fileName: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random1&nature,water",
          }
        ]}
      />
      <Message
        avatar="https://sun9-45.userapi.com/impg/604pXax9N6--gZ1nVeUdAF7lWyswBCkIzwXzPQ/P7K86r7Anec.jpg?size=50x0&quality=96&crop=0,0,1790,1790&sign=64dd05d8cf09f8d434cf3e72fe635fd1&ava=1"
        attachments={[
          {
            fileName: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random1&nature,water",
          }
        ]}
      />
      <Message
        avatar="https://sun9-45.userapi.com/impg/604pXax9N6--gZ1nVeUdAF7lWyswBCkIzwXzPQ/P7K86r7Anec.jpg?size=50x0&quality=96&crop=0,0,1790,1790&sign=64dd05d8cf09f8d434cf3e72fe635fd1&ava=1"
        attachments={[
          {
            fileName: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random1&nature,water",
          }
        ]}
      />
      <Message
        avatar="https://sun9-45.userapi.com/impg/604pXax9N6--gZ1nVeUdAF7lWyswBCkIzwXzPQ/P7K86r7Anec.jpg?size=50x0&quality=96&crop=0,0,1790,1790&sign=64dd05d8cf09f8d434cf3e72fe635fd1&ava=1"
        attachments={[
          {
            fileName: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random1&nature,water",
          }
        ]}
      />   
      <Message
        avatar="https://sun9-45.userapi.com/impg/604pXax9N6--gZ1nVeUdAF7lWyswBCkIzwXzPQ/P7K86r7Anec.jpg?size=50x0&quality=96&crop=0,0,1790,1790&sign=64dd05d8cf09f8d434cf3e72fe635fd1&ava=1"
        isTyping
      />
  </div> : <Empty description="Нет сообщений"/>
};

Messages.propTypes = {
  items: PropTypes.array
};

export default Messages;

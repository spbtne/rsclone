import React from "react";

import { Message } from "../../components/indexComponents";

import "./Home.scss";

function Home() {
  return (
    <section className="home">
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
    </section>
  );
}

export default Home;

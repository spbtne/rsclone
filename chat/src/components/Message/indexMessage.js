import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// import formatDistanceToNow from "date-fns/formatDistanceToNow";
// import ruLocale from "date-fns/locale/ru";
import classNames from 'classnames';
import readedSvg from '../../assets/img/readed.svg';
import noReadedSvg from '../../assets/img/no-read.svg';
import readedSvgWhite from '../../assets/img/readedWhite.svg';
import noReadedSvgWhite from '../../assets/img/no-readWhite.svg';
import waveSvg from '../../assets/img/wave.svg';
import playSvg from '../../assets/img/play.svg';
import pauseSvg from '../../assets/img/pause.svg';

import Time from '../Time/indexTime';

import './Message.scss';
import IconReaded from '../IconReaded/indexIconReaded';

// const Message = ({ avatar, user, text, date, audio, isMe, isReaded, attachments, isTyping }) => {
//   return (
//     <div className={classNames("message", {
//     "message--isme": isMe,
//     "message--is-typing": isTyping,
//     "message--is-audio": audio,
//     "message--image": attachments && attachments.length === 1})}>
//       <div className="message__avatar">
//         <img src={avatar} alt={`${user.fullname} avatar`} />
//       </div>
//       <div className="message__container">
//         <IconReaded isMe={isMe} isReaded={isReaded}/>
//           {!audio && (text || isTyping) && <div className="message__bubble">
//           {text && <p className="message__text">{text}</p>}
//             {isTyping && <div className="message__typing">
//             <span />
//             <span />
//             <span />
//           </div>}
//           <div class="chat-bubble">

//           </div>
//           <img
//             src={isMe ? (isReaded ? readedSvg : noReadedSvg) : (isReaded ? readedSvgWhite : noReadedSvgWhite)}
//             alt="Check icon"
//             className="message__check-icon"
//           />
//         </div>}
//         <div className="message__attachments">
//           {attachments &&
//             attachments.map((item) => (
//               <div className="message__attachments-item">
//                 <img src={item.url} alt={item.filename} />
//               </div>
//             ))}
//         </div>
//         {date && (
//         <span className="message__date">
//           <Time date={date} />
//         </span>
//   )}
//       </div>
//     </div>
//   );
// }

function Message({ avatar, user, text, date, audio, isMe, isReaded, attachments, isTyping }) {
  const [isPlaying, setIsPlaing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioElem = useRef(null);

  useEffect(() => {
    audioElem.current.volume = '0.1';
    audioElem.current.addEventListener(
      'playing',
      () => {
        setIsPlaing(true);
      },
      false,
    );
    audioElem.current.addEventListener(
      'ended',
      () => {
        setIsPlaing(false);
        setProgress(0);
      },
      false,
    );
    audioElem.current.addEventListener(
      'pause',
      () => {
        setIsPlaing(false);
      },
      false,
    );
    audioElem.current.addEventListener('timeupdate', () => {
      const duration = (audioElem.current && audioElem.current.duration) || 0;
      setCurrentTime(audioElem.current.currentTime);

      setProgress((audioElem.current.currentTime / duration) * 100);
    });
  }, []);

  const togglePlay = () => {
    if (!isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };

  return (
    <div
      className={classNames('message', {
        'message--isme': isMe,
        'message--is-typing': isTyping,
        'message--is-audio': audio,
        'message--image': attachments && attachments.length === 1,
      })}>
      <div className="message__avatar">
        <img src={avatar} alt={`${user.fullname} avatar`} />
      </div>
      <div className="message__container">
        <IconReaded isMe={isMe} isReaded={isReaded} />
        {(audio || text || isTyping) && (
          <div className="message__bubble">
            {text && <p className="message__text">{text}</p>}
            {isTyping && (
              <div className="message__typing">
                <span />
                <span />
                <span />
              </div>
            )}
            {audio && (
              <div className="message__audio">
                <audio volume="0.1" ref={audioElem} src={audio} preload="auto" />
                <div
                  className="message__audio-progress"
                  style={{ width: progress + '%', height: '100%' }}></div>
                <div className="message__audio-info">
                  <div className="message__audio-btn">
                    <button onClick={togglePlay}>
                      {isPlaying ? (
                        <img src={pauseSvg} alt="Pause svg" />
                      ) : (
                        <img src={playSvg} alt="Play svg" />
                      )}
                    </button>
                  </div>
                  <div className="message__audio-wave">
                    <img src={waveSvg} alt="Wave svg" />
                  </div>
                  <span className="message__audio-duration">00:19</span>
                </div>
              </div>
            )}
            <div className="chat-bubble"></div>
            <img
              src={
                isMe
                  ? isReaded
                    ? readedSvg
                    : noReadedSvg
                  : isReaded
                  ? readedSvgWhite
                  : noReadedSvgWhite
              }
              alt="Check icon"
              className="message__check-icon"
            />
          </div>
        )}
        {attachments && (
          <div className="message__attachments">
            {attachments.map((item) => (
              <div className="message__attachments-item">
                <img src={item.url} alt={item.filename} />
              </div>
            ))}
          </div>
        )}
        {date && (
          <span className="message__date">
            <Time date={date} />
          </span>
        )}
      </div>
    </div>
  );
}

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.object,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool,
  audio: PropTypes.string,
};

export default Message;

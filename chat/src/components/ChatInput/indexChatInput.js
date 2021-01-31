import React, {useState} from "react";
import PropTypes from "prop-types";
import { SmileOutlined, CameraOutlined, AudioOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Button, Input } from 'antd';
import { UploadField } from '@navjobs/upload';
import { Picker } from 'emoji-mart';


import "./ChatInput.scss";

const ChatInput = props =>{
  const [value, setValue] = useState('');
  const [emojiPikerVisible, setShowEmojiPiker] = useState(false);

  const toggleEmojiPiker = () => {
    setShowEmojiPiker(!emojiPikerVisible);
  }

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        {emojiPikerVisible && (
          <div className="chat-input__emoji-piker">
            <Picker set='apple' />
          </div>
        )}
        <Button onClick={toggleEmojiPiker} type="link" shape="circle" icon={<SmileOutlined />} />
      </div>
      <Input 
        onChange={e => setValue(e.target.value)} 
        size="large" 
        placeholder="Введите текст сообщения..." 

      />
      <div className="chat-input__actions">
        
          <UploadField
            onFiles={files => files}
            containerProps={{
              className: 'chat-input__actions-upload-btn'
            }}
            uploadProps={{
              accept: '.jpg,.jpeg,.png,.gif,.bmp',
              multiple: 'multiple'
            }}
          ><Button type="link" shape="circle" icon={<CameraOutlined />}/>
          </UploadField>
        
        {value ? <Button type="link" shape="circle" icon={<CheckCircleOutlined />} /> : <Button type="link" shape="circle" icon={<AudioOutlined />} />}
      </div>
    </div>
  )
};

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;

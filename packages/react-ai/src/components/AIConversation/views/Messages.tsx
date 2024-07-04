import React from 'react';
import { useElement } from '../context/elements';
import { Message as MessageType } from '../types';
import Message from './Message';
import { userAvatar, ravenAvatar } from '../mocks/messagesMock';
export default function Messages({
  messages,
  variation = 'default',
}: {
  messages: MessageType[];
  variation?: 'bubble-1' | 'bubble-2' | 'default' | 'default-bg';
}): JSX.Element {
  const View = useElement('View');
  return (
    <View
      className={`${variation}`}
      style={{ gap: '12px', alignItems: 'flex-start', width: '480px' }}
    >
      {messages.map((message) => (
        <Message
          key={`message-${message.id}`}
          message={message}
          avatar={message.role === 'user' ? userAvatar : ravenAvatar}
        ></Message>
      ))}
    </View>
  );
}

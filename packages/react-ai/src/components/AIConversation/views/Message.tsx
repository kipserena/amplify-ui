import React from 'react';
import { useElement } from '../context/elements';
import Avatar from './Avatar';
import MessageTextContent from './MessageTextContent';
import MessageMediaContent from './MessageMediaContent';
import { Avatar as AvatarType, Message } from '../types';
import { formatDate } from '../utils/helpers';

export default function Message({
  message,
  avatar,
}: {
  avatar: AvatarType;
  message: Message;
}): JSX.Element {
  const View = useElement('View');
  const Paragraph = useElement('Text');
  return (
    <View>
      <View style={{ alignItems: 'center', gap: '8px', display: 'flex', flexDirection: 'row' }}>
        <Avatar avatar={avatar} />
        <View
          style={{
            transform: 'rotate(180deg)',
            height: '16px',
            width: '1px',
            background: '#DCDEE0',
          }}
        />
        <Paragraph
          style={{ fontSize: '12px', lineHeight: '150%', color: '#304050' }}
        >
          {formatDate(message.timestamp)}
        </Paragraph>
      </View>
      {message.content.type === 'text' ? (
        <MessageTextContent content={message.content.value} />
      ) : (
        <MessageMediaContent content={message.content.value} />
      )}
    </View>
  );
}

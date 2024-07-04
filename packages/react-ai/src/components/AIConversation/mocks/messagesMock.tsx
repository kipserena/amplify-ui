import React from 'react';
import { Avatar, ImageContent, Message } from '../types';
import AvatarComponent from './AvatarComponent';
import { ravenAvatarUint8 } from './ravenAvatarUint8';
import { userAvatarUint8 } from './userAvatarUint8';

const mockImgContent: ImageContent = {
  format: 'jpeg',
  bytes: userAvatarUint8.buffer,
};

export const mockMessages: Message[] = [
  {
    id: '1',
    content: { type: 'text', value: 'hello!' },
    role: 'user',
    timestamp: new Date(),
  },
  {
    id: '2',
    content: { type: 'text', value: 'world' },
    role: 'assistant',
    timestamp: new Date(),
  },
  {
    id: '3',
    content: { type: 'image', value: mockImgContent },
    role: 'assistant',
    timestamp: new Date(),
  },
];

const UserAvatarComponent: JSX.Element = <AvatarComponent imgBytes={userAvatarUint8} />;
const RavenAvatarComponent: JSX.Element = <AvatarComponent imgBytes={ravenAvatarUint8} />;

export const userAvatar: Avatar = { username: 'SpongeBob', avatar: UserAvatarComponent };
export const ravenAvatar: Avatar = { username: 'Raven', avatar: RavenAvatarComponent };
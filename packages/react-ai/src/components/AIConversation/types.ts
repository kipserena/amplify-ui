import { ReactNode } from 'react';

export type ImageContent = {
  format: 'png' | 'jpeg' | 'gif' | 'webp';
  bytes: ArrayBuffer;
};

export type TextContent = {
  type: 'text';
  value: string;
};

export type ImageContentType = {
  type: 'image';
  value: ImageContent;
};

export type Content = TextContent | ImageContentType;

export type Message = {
  id: string;
  content: Content;
  role: 'user' | 'assistant';
  timestamp: Date;
};

export type Avatar = {
  username?: string;
  avatar?: string | ReactNode;
};

export type Avatars = {
  user: Avatar;
  ai: Avatar;
};

export type CustomAction = {
  displayName: string;
  handler: (message: Message) => void;
  icon: ReactNode;
}

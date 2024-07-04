import React from 'react';
import { useElement } from '../context/elements';
import { ImageContent } from '../types';

export default function MessageMediaContent({
  content,
}: {
  content: ImageContent;
}): JSX.Element {
  const Image = useElement('Image');

  const blob = new Blob([content.bytes], { type: `image/${content.format}` });
  const url = URL.createObjectURL(blob);
  return <Image style={{ height: '300px' }} src={url} alt="Image message" />;
}

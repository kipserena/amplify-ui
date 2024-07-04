import React from 'react';
import { useElement } from '../context/elements';

export default function AvatarComponent({
  imgBytes,
}: {
    imgBytes: ArrayBuffer;
}): JSX.Element {
  const Image = useElement('Image');

  const blob = new Blob([imgBytes], { type: `image/png` });
  const url = URL.createObjectURL(blob);
  return <Image style={{height: '100%', width:'100%' }}src={url} alt="avatar" />;
}


import React from 'react';
import { useElement } from '../context/elements';
import { Avatar } from '../types';

export default function Avatar({ avatar }: { avatar: Avatar }): JSX.Element {
  const View = useElement('View');
  const Paragraph = useElement('Text');

  return (
    <View style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
      <View
        style={{
          borderRadius: '50%',
          height: '40px',
          width: '40px',
          padding: '6px',
          border: '1px solid rgba(174, 179, 183, 1)',
        }}
      >
        {avatar.avatar}
      </View>
      <Paragraph style={{ fontWeight: '700' }}>{avatar.username}</Paragraph>
    </View>
  );
}

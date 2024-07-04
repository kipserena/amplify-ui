import React from 'react';
import { useElement } from '../context/elements';

export default function MessageTextContent({
  content,
}: {
  content: string;
}): JSX.Element {
  const Paragraph = useElement('Text');
  return <Paragraph>{content}</Paragraph>;
}

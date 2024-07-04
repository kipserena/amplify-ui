import React from 'react';
import { IconElementProps } from '@aws-amplify/ui-react/internal';
import { useElement } from '../context/elements';

export const ActionBarIcon = <T extends IconElementProps>({
  children,
  className,
  ...rest
}: T): JSX.Element => {
  const Icon = useElement('Icon');

  return (
    <Icon className={className} {...rest}>
      {children}
    </Icon>
  );
};

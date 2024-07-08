import * as React from 'react';
import { ButtonElementProps } from '@aws-amplify/ui-react/internal';
import { useElement } from '../../context/elements';

export const Toggle = <T extends ButtonElementProps>({
  className,
  onClick,
  children,
  ...rest
}: T): JSX.Element => {
  const Button = useElement('Button');

  return (
    <Button className={className} {...rest} onClick={onClick}>
      {children ?? 'Actions'}
    </Button>
  );
};

import * as React from 'react';
import { ButtonElementProps } from '@aws-amplify/ui-react/internal';
import { useElement } from '../../context/elements';

export const Toggle = <T extends ButtonElementProps>({
  className,
  id,
  onClick,
  children,
  ...rest
}: T): JSX.Element => {
  const Button = useElement('Button');

  return (
    <Button
      id={id}
      aria-haspopup="menu"
      aria-expanded={false}
      className={className}
      onClick={onClick}
      {...rest}
    >
      {children ?? 'Actions'}
    </Button>
  );
};

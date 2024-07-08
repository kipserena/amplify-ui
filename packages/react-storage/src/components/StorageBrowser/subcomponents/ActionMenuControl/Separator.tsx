import * as React from 'react';
import { HRElementProps } from '@aws-amplify/ui-react/internal';
import { useElement } from '../../context/elements';

export const Separator = <T extends HRElementProps>({
  children,
  className,
  ...rest
}: T): JSX.Element => {
  const HR = useElement('HR');

  return <HR role="presentation" className={className} {...rest} />;
};

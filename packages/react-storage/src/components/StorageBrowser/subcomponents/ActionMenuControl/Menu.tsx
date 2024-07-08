import * as React from 'react';
import { ViewElementProps } from '@aws-amplify/ui-react/internal';
import { useElement } from '../../context/elements';

export const Menu = <T extends ViewElementProps>({
  children,
  ariaLabel,
  className,
  ...rest
}: T): JSX.Element => {
  const View = useElement('View');

  return (
    <View
      className={className}
      role="menu"
      tabIndex={-1}
      aria-label={ariaLabel ?? 'Actions'}
      {...rest}
    >
      {children}
    </View>
  );
};

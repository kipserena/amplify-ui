import * as React from 'react';
import { ViewElementProps } from '@aws-amplify/ui-react/internal';
import { useElement } from '../../context/elements';

export const Layout = <T extends ViewElementProps>({
  children,
  className,
  ...rest
}: T): JSX.Element => {
  const View = useElement('View');

  return (
    <View className={className} {...rest}>
      {children}
    </View>
  );
};

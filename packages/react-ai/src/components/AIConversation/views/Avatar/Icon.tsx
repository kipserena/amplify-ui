import React from 'react';
import { useElement } from '../../context/elements';
import { ViewElementProps } from '@aws-amplify/ui-react/internal';

export const Icon = <T extends ViewElementProps>({
  children,
  className,
  ...rest
}: T): JSX.Element => {
  const View = useElement('View');

  return (
    <View className={className} {...rest}>
      {children ?? 'default'}
    </View>
  );
};

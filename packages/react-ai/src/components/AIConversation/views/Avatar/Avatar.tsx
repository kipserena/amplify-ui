import React from 'react';
import { useElement } from '../../context/elements';
import { ViewElementProps } from '@aws-amplify/ui-react/internal';
import { DisplayName } from './DisplayName';
import { Icon } from './Icon';

const AvatarElement = <T extends ViewElementProps>({
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

const Avatar = Object.assign(AvatarElement, {
  DisplayName,
  Icon,
});

export { Avatar };

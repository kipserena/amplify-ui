import React from 'react';
import { useElement } from '../context/elements';
import { CustomAction } from '../types';
import { ActionBarButton } from './ActionBarButton';

export const ActionBar = <T extends ButtonElementProps>({
    className,
    onClick,
    children,
    ...rest
  }: T): JSX.Element => {
  const View = useElement('View');

  return (
    <View>
      
    </View>
  );
}

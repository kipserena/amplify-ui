import * as React from 'react';
import { ViewElementProps } from '@aws-amplify/ui-react/internal';
import { useElement } from '../../context/elements';
// import { Toggle } from './Toggle';

const ActionMenu = <T extends ViewElementProps>({
  className,
  children,
  ...rest
}: T): JSX.Element => {
  const View = useElement('View');

  return (
    <View {...rest} className={className}>
      <button id="actions-uniqueId" aria-haspopup="menu" aria-expanded={false}>
        Actions
      </button>
      <div role="menu" tabIndex={-1} aria-labelledby="actions-uniqueId">
        <button role="menuitem">Upload file</button>
        <button role="menuitem">Upload folder</button>
      </div>
      {children}
    </View>
  );
};

const ActionMenuControl = Object.assign(ActionMenu, {
  // Toggle,
});

export { ActionMenuControl };

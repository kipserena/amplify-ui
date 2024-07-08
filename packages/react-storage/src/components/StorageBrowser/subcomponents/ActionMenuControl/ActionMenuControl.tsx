import * as React from 'react';
import { ViewElementProps } from '@aws-amplify/ui-react/internal';
import { Container } from './Container';
import { Toggle } from './Toggle';
import { Menu } from './Menu';

const ActionMenu = <T extends ViewElementProps>({
  className,
  children,
  ...rest
}: T): JSX.Element => {
  const toggleId = `actions-menu-toggle-${React.useId()}`;

  return (
    <Container className={className} {...rest}>
      <Toggle id={toggleId} />
      <Menu>
        <button role="menuitem">Upload file</button>
        <button role="menuitem">Upload folder</button>
      </Menu>
    </Container>
  );
};

const ActionMenuControl = Object.assign(ActionMenu, {
  Container,
  Toggle,
});

export { ActionMenuControl };

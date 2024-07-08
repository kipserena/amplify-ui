import * as React from 'react';
import { ViewElementProps } from '@aws-amplify/ui-react/internal';
import { Container } from './Container';
import { Toggle } from './Toggle';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';
import { Separator } from './Separator';

const ActionMenu = <T extends ViewElementProps>({
  className,
  children,
  ...rest
}: T): JSX.Element => {
  return (
    <Container className={className} {...rest}>
      <Toggle />
      <Menu>
        <MenuItem>Create folder</MenuItem>
        <MenuItem>Custom location action</MenuItem>
        <MenuItem>Upload file</MenuItem>
        <MenuItem>Upload folder</MenuItem>
        <Separator />
        <MenuItem>Copy</MenuItem>
        <MenuItem>Custom action</MenuItem>
      </Menu>
    </Container>
  );
};

const ActionMenuControl = Object.assign(ActionMenu, {
  Container,
  Toggle,
});

export { ActionMenuControl };

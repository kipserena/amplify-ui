import React from 'react';
import { withBaseElementProps } from '@aws-amplify/ui-react-core/elements';

import { StorageBrowserElements } from '../../context/elements';

const { Button, ListItem, Nav, OrderedList, Span } = StorageBrowserElements;

const BLOCK_NAME = `history`;

export interface HistoryItem {
  label?: string;
}

export interface HistoryControlProps {
  items?: HistoryItem[];
}

export interface HistoryControl<
  T extends Partial<StorageBrowserElements> = StorageBrowserElements,
> {
  /* TODO: Where/how should we define these top level props */
  ({ items }: HistoryControlProps): React.JSX.Element;
  Container: T['Nav'];
  Item: T['ListItem'];
  HistoryButton: T['Button'];
  Separator: T['Span'];
}

const List = withBaseElementProps(OrderedList, {
  className: `${BLOCK_NAME}__list`,
});

const ContainerBase = withBaseElementProps(Nav, {
  className: `${BLOCK_NAME}__container`,
  'aria-label': `Breadcrumbs`,
});

const Container: typeof ContainerBase = React.forwardRef(function Container(
  { children, ...rest },
  ref
) {
  return (
    <ContainerBase ref={ref} {...rest}>
      <List>{children}</List>
    </ContainerBase>
  );
});

const Item = withBaseElementProps(ListItem, {
  className: `${BLOCK_NAME}__item`,
});

const Separator = withBaseElementProps(Span, {
  className: `${BLOCK_NAME}__separator`,
  children: '/',
});

const HistoryButton = withBaseElementProps(Button, {
  className: `${BLOCK_NAME}__button`,
});

export const HistoryControl: HistoryControl = ({ items }) => (
  <Container>
    {items?.map(({ label }, index) => {
      const isLastItem = index === items.length - 1;
      return (
        <Item key={`breadcrumb-item-${index}`}>
          <HistoryButton aria-current={isLastItem ? 'page' : undefined}>
            {label}
          </HistoryButton>
          {isLastItem ? null : <Separator />}
        </Item>
      );
    })}
  </Container>
);

HistoryControl.Container = Container;
HistoryControl.Item = Item;
HistoryControl.HistoryButton = HistoryButton;
HistoryControl.Separator = Separator;

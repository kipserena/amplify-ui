import {
  ButtonElementBase,
  ImageElementBase,
  IconElementBase,
  ViewElementBase,
  ParagraphElementBase,
  createElementsContext,
  ElementsBase,
} from '@aws-amplify/ui-react/internal';

export interface AIConversationElements
  extends Pick<ElementsBase, 'Button' | 'View' | 'Text' | 'Image' | 'Icon'> {}

const defaultValue: AIConversationElements = {
  Button: ButtonElementBase,
  Icon: IconElementBase,
  Image: ImageElementBase,
  Text: ParagraphElementBase,
  View: ViewElementBase,
};

export const { ElementsProvider, useElement } =
  createElementsContext(defaultValue);

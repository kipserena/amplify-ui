import {
  ButtonElementBase,
  FormElementBase,
  InputElementBase,
  LabelElementBase,
  LiElementBase,
  NavElementBase,
  OlElementBase,
  SectionElementBase,
  ViewElementBase,
  createElementsContext,
  ElementsBase,
} from '@aws-amplify/ui-react/internal';

export interface StorageBrowserElements
  extends Pick<
    ElementsBase,
    | 'Button'
    | 'Form'
    | 'Input'
    | 'Label'
    | 'Li'
    | 'Nav'
    | 'Ol'
    | 'Section'
    | 'View'
  > {}

const defaultValue: StorageBrowserElements = {
  Button: ButtonElementBase,
  Form: FormElementBase,
  Input: InputElementBase,
  Label: LabelElementBase,
  Li: LiElementBase,
  Nav: NavElementBase,
  Ol: OlElementBase,
  Section: SectionElementBase,
  View: ViewElementBase,
};

export const { ElementsProvider, useElement } =
  createElementsContext(defaultValue);

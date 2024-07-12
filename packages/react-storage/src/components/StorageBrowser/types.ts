import React from 'react';

import { StorageBrowserElements } from './context/elements';
import { ActionMenuControl, SearchControl } from './Views';

export interface Controls<T extends Partial<StorageBrowserElements>> {
  (): React.JSX.Element;
  ActionMenu: ActionMenuControl<T>;
  Search: SearchControl<T>;
}

export interface StorageBrowser<T extends Partial<StorageBrowserElements>> {
  (): React.JSX.Element;
  LocationsListView: () => React.JSX.Element;
  LocationDetailView: () => React.JSX.Element;
  Controls: Controls<T>;
  Provider: (props: { children?: React.ReactNode }) => React.JSX.Element;
}

export interface CreateStorageBrowserInput<
  T extends Partial<StorageBrowserElements>,
> {
  elements?: T;
}

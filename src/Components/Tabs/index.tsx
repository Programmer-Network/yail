import classNames from "classnames";
import * as ReactTabs from "react-tabs";

import { ITabListProps, ITabPanelProps, ITabProps, ITabsProps } from "./types";

export const Tabs: ReactTabs.ReactTabsFunctionComponent<ITabsProps> = props => {
  return (
    <ReactTabs.Tabs {...props} className={props.className}>
      {props.children}
    </ReactTabs.Tabs>
  );
};

Tabs.tabsRole = "Tabs";

export const TabList: ReactTabs.ReactTabsFunctionComponent<
  ITabListProps
> = props => {
  return (
    <ReactTabs.TabList
      {...props}
      className={classNames(
        "text-text flex gap-4 border-b-2 border-border pb-4",
        props.className
      )}
    >
      {props.children}
    </ReactTabs.TabList>
  );
};

TabList.tabsRole = "TabList";

export const TabPanel: ReactTabs.ReactTabsFunctionComponent<
  ITabPanelProps
> = props => {
  return (
    <ReactTabs.TabPanel
      {...props}
      className={classNames(
        "animate-in fade-in-0 duration-200",
        props.className
      )}
    >
      {props.children}
    </ReactTabs.TabPanel>
  );
};

TabPanel.tabsRole = "TabPanel";

export const Tab: ReactTabs.ReactTabsFunctionComponent<ITabProps> = props => {
  return (
    <ReactTabs.Tab
      {...props}
      selectedClassName='text-primary'
      disabledClassName='!cursor-not-allowed opacity-50'
      className={classNames(
        "hover:cursor-pointer outline-none focus-visible:outline-none flex gap-1 items-center justify-center transition-all duration-200 ease-in-out text-text-secondary",
        props.className
      )}
    >
      {props.children}
    </ReactTabs.Tab>
  );
};

Tab.tabsRole = "Tab";

export default { Tabs, TabList, TabPanel, Tab };

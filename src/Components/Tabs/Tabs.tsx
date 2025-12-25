import * as ReactTabs from "react-tabs";
import classNames from "classnames";

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
        "yl:text-text yl:border-border yl:flex yl:gap-4 yl:border-b yl:pb-4",
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
        "yl:animate-in fade-in-0 yl:duration-200",
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
        "yl:text-text-secondary yl:flex yl:items-center yl:justify-center yl:gap-1 yl:transition-all yl:duration-200 yl:ease-in-out yl:outline-none yl:hover:cursor-pointer yl:focus-visible:outline-none",
        props.className
      )}
    >
      {props.children}
    </ReactTabs.Tab>
  );
};

Tab.tabsRole = "Tab";

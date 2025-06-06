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
        "yl:text-text yl:flex yl:gap-6 yl:border-b-2 yl:border-border yl:pb-4",
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
        "yl:animate-in yl:fade-in-0 yl:duration-200",
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
      selectedClassName='yl:text-primary'
      disabledClassName='yl:!cursor-not-allowed yl:opacity-50'
      className={classNames(
        "yl:hover:cursor-pointer yl:outline-none yl:focus-visible:outline-none yl:flex yl:gap-1 yl:items-center yl:justify-center yl:transition-all yl:duration-200 yl:ease-in-out yl:text-text-secondary",
        props.className
      )}
    >
      {props.children}
    </ReactTabs.Tab>
  );
};

Tab.tabsRole = "Tab";

export default { Tabs, TabList, TabPanel, Tab };

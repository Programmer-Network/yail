import classNames from "classnames";
import * as ReactTabs from "react-tabs";

import { ITabListProps, ITabPanelProps, ITabProps, ITabsProps } from "./types";

export const Tabs: ReactTabs.ReactTabsFunctionComponent<ITabsProps> = props => {
  return (
    <ReactTabs.Tabs
      {...props}
      selectedTabClassName={classNames(
        "yl:text-primary yl:border-primary yl:bg-primary/5",
        "after:yl:opacity-100 after:yl:scale-x-100",
        "yl:font-semibold",
        props.selectedTabClassName
      )}
    >
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
        "yl:flex yl:gap-1 yl:my-6 yl:overflow-x-auto yl:select-none yl:text-text",
        "yl:bg-card yl:rounded-lg yl:p-1 yl:border-2 yl:border-border",
        "yl:backdrop-blur-sm",
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
        "yl:mt-4 yl:outline-none",
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
      className={classNames(
        "yl:flex yl:gap-2 yl:items-center yl:justify-center",
        "yl:cursor-pointer yl:relative yl:transition-all yl:duration-200",
        "yl:px-4 yl:py-2.5 yl:rounded-md yl:text-sm yl:font-medium",
        "yl:min-w-0 yl:whitespace-nowrap",

        "yl:text-text-secondary yl:bg-transparent",
        "yl:border-2 yl:border-transparent",

        "hover:yl:text-text hover:yl:bg-background/50",
        "hover:yl:border-border/50",

        "focus:yl:outline-none focus:yl:ring-2 focus:yl:ring-primary/20",
        "focus:yl:border-primary/30",

        "after:yl:content-[''] after:yl:absolute after:yl:bottom-0",
        "after:yl:left-1/2 after:yl:-translate-x-1/2",
        "after:yl:w-0 after:yl:h-0.5 after:yl:bg-primary",
        "after:yl:rounded-full after:yl:transition-all after:yl:duration-300",
        "after:yl:opacity-0 after:yl:scale-x-0",

        "disabled:yl:cursor-not-allowed disabled:yl:opacity-50",
        "disabled:hover:yl:text-text-secondary disabled:hover:yl:bg-transparent",

        props.className
      )}
    >
      {props.children}
    </ReactTabs.Tab>
  );
};

Tab.tabsRole = "Tab";

export default { Tabs, TabList, TabPanel, Tab };

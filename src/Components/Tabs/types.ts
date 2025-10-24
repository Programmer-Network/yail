import * as ReactTabs from "react-tabs";
import { ReactNode } from "react";

export interface ITabsProps extends ReactTabs.TabsProps {
  children: ReactNode;
  className?: string;
  selectedTabClassName?: string;
}

export interface ITabListProps extends ReactTabs.TabListProps {
  children: ReactNode;
  className?: string;
}

export interface ITabProps extends ReactTabs.TabProps {
  children: ReactNode;
  className?: string;
}

export interface ITabPanelProps extends ReactTabs.TabPanelProps {
  children: ReactNode;
  className?: string;
}

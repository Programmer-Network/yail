export type ViewType = "card" | "table";

export interface IViewToggleProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  className?: string;
}

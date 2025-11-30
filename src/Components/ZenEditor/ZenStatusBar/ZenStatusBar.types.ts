export type ZenSaveStatus = "saved" | "saving" | "unsaved" | "error";

export interface IZenStatusBarProps {
  saveStatus: ZenSaveStatus;
  onPropertiesToggle: () => void;
  isPropertiesOpen: boolean;
}

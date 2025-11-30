import { ZenSaveStatus } from "./ZenStatusBar.types";

interface IStatusConfig {
  text: string;
  icon: string;
}

export const SAVE_STATUS_CONFIG: Record<ZenSaveStatus, IStatusConfig> = {
  saved: { text: "Saved", icon: "CheckmarkCircleOutline" },
  saving: { text: "Saving...", icon: "SyncOutline" },
  unsaved: { text: "Unsaved changes", icon: "CloudOfflineOutline" },
  error: { text: "Save failed", icon: "AlertCircleOutline" }
};

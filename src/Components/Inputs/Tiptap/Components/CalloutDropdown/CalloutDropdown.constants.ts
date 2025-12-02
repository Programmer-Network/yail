import { CalloutType } from "../Callout";
import { ICalloutOption } from "./CalloutDropdown.types";

export const CALLOUT_OPTIONS: ICalloutOption[] = [
  {
    id: CalloutType.NOTE,
    label: "Note",
    icon: "InfoOutline",
    borderColor: "#3b82f6"
  },
  {
    id: CalloutType.TIP,
    label: "Tip",
    icon: "LightbulbOutline",
    borderColor: "#eab308"
  },
  {
    id: CalloutType.WARNING,
    label: "Warning",
    icon: "WarningOutline",
    borderColor: "#f59e0b"
  },
  {
    id: CalloutType.CRITICAL,
    label: "Critical",
    icon: "ErrorOutline",
    borderColor: "#ef4444"
  },
  {
    id: CalloutType.SUCCESS,
    label: "Success",
    icon: "CheckCircleOutline",
    borderColor: "#22c55e"
  },
  {
    id: CalloutType.EXAMPLE,
    label: "Example",
    icon: "SearchOutline",
    borderColor: "#a855f7"
  },
  {
    id: CalloutType.COMPONENT,
    label: "Component",
    icon: "PuzzleOutline",
    borderColor: "#10b981"
  },
  {
    id: CalloutType.NAVIGATION,
    label: "Navigation",
    icon: "CompassOutline",
    borderColor: "#06b6d4"
  }
];

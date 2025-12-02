/**
 * Enum for all supported callout types
 */
export enum CalloutType {
  WARNING = "warning",
  CRITICAL = "critical",
  TIP = "tip",
  NOTE = "note",
  EXAMPLE = "example",
  COMPONENT = "component",
  NAVIGATION = "navigation",
  SUCCESS = "success"
}

/**
 * Configuration for a single callout type
 */
export interface ICalloutTypeConfig {
  /** Display label shown in the header */
  label: string;
  /** Icon name from the Icon component */
  icon: string;
  /** Unicode symbol fallback for static HTML rendering */
  symbol: string;
  /** Border color (Tailwind class or CSS value) */
  borderColor: string;
  /** Background color (Tailwind class or CSS value) */
  backgroundColor: string;
  /** Text/icon color for the header */
  headerColor: string;
}

/**
 * Attributes stored on the callout node
 */
export interface ICalloutAttrs {
  type: CalloutType;
}

/**
 * Configuration map for all callout types
 */
export const CALLOUT_CONFIG: Record<CalloutType, ICalloutTypeConfig> = {
  [CalloutType.WARNING]: {
    label: "Warning",
    icon: "ExclamationCircleOutline",
    symbol: "⚠",
    borderColor: "yl:border-l-amber-500",
    backgroundColor: "yl:bg-amber-500/10",
    headerColor: "yl:text-amber-500"
  },
  [CalloutType.CRITICAL]: {
    label: "Critical",
    icon: "XCircleOutline",
    symbol: "✕",
    borderColor: "yl:border-l-red-500",
    backgroundColor: "yl:bg-red-500/10",
    headerColor: "yl:text-red-500"
  },
  [CalloutType.TIP]: {
    label: "Tip",
    icon: "BulbOnOutline",
    symbol: "💡",
    borderColor: "yl:border-l-yellow-500",
    backgroundColor: "yl:bg-yellow-500/10",
    headerColor: "yl:text-yellow-500"
  },
  [CalloutType.NOTE]: {
    label: "Note",
    icon: "InfoOutline",
    symbol: "ℹ",
    borderColor: "yl:border-l-blue-500",
    backgroundColor: "yl:bg-blue-500/10",
    headerColor: "yl:text-blue-500"
  },
  [CalloutType.EXAMPLE]: {
    label: "Example",
    icon: "SearchOutline",
    symbol: "🔍",
    borderColor: "yl:border-l-purple-500",
    backgroundColor: "yl:bg-purple-500/10",
    headerColor: "yl:text-purple-500"
  },
  [CalloutType.COMPONENT]: {
    label: "Component",
    icon: "LegoOutline",
    symbol: "🧩",
    borderColor: "yl:border-l-emerald-500",
    backgroundColor: "yl:bg-emerald-500/10",
    headerColor: "yl:text-emerald-500"
  },
  [CalloutType.NAVIGATION]: {
    label: "Navigation",
    icon: "CompassOutline",
    symbol: "🧭",
    borderColor: "yl:border-l-cyan-500",
    backgroundColor: "yl:bg-cyan-500/10",
    headerColor: "yl:text-cyan-500"
  },
  [CalloutType.SUCCESS]: {
    label: "Success",
    icon: "TickCircleOutline",
    symbol: "✓",
    borderColor: "yl:border-l-green-500",
    backgroundColor: "yl:bg-green-500/10",
    headerColor: "yl:text-green-500"
  }
};

/**
 * Get the configuration for a callout type
 */
export const getCalloutConfig = (type: CalloutType): ICalloutTypeConfig => {
  return CALLOUT_CONFIG[type] || CALLOUT_CONFIG[CalloutType.NOTE];
};

/**
 * Check if a string is a valid CalloutType
 */
export const isValidCalloutType = (type: string): type is CalloutType => {
  return Object.values(CalloutType).includes(type as CalloutType);
};

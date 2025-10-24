import { IPill } from "../Card/types";
import { PillSize, PillVariant } from "../Pill/Pill.types";

/**
 * Get card border/background classes based on status
 */
export const getStatusCardClasses = (
  status: "draft" | "published" | "cancelled" | "completed"
): string => {
  switch (status) {
    case "published":
      return "border-green-500/30 bg-green-500/5";
    case "cancelled":
      return "border-red-500/30 bg-red-500/5";
    case "completed":
      return "border-gray-500/30 bg-gray-500/5";
    case "draft":
      return "border-yellow-500/30 bg-yellow-500/5";
    default:
      return "";
  }
};

/**
 * Get status pill variant
 */
export const getStatusPillVariant = (
  status: "draft" | "published" | "cancelled" | "completed"
): PillVariant => {
  switch (status) {
    case "published":
      return PillVariant.SUCCESS;
    case "cancelled":
      return PillVariant.ERROR;
    case "completed":
      return PillVariant.SECONDARY;
    case "draft":
      return PillVariant.WARNING;
    default:
      return PillVariant.SECONDARY;
  }
};

/**
 * Get status display text
 */
export const getStatusText = (
  status: "draft" | "published" | "cancelled" | "completed"
): string => {
  switch (status) {
    case "published":
      return "LIVE";
    case "cancelled":
      return "CANCELLED";
    case "completed":
      return "COMPLETED";
    case "draft":
      return "DRAFT";
    default:
      return "DRAFT";
  }
};

/**
 * Format event type for display
 */
export const formatEventType = (
  eventType: "meetup" | "hackathon" | "workshop" | "live-stream"
): string => {
  switch (eventType) {
    case "live-stream":
      return "LIVE-STREAM";
    case "hackathon":
      return "HACKATHON";
    case "workshop":
      return "WORKSHOP";
    case "meetup":
      return "MEETUP";
    default:
      return "EVENT";
  }
};

/**
 * Get event type pill variant
 */
export const getEventTypePillVariant = (
  eventType: "meetup" | "hackathon" | "workshop" | "live-stream"
): PillVariant => {
  switch (eventType) {
    case "live-stream":
      return PillVariant.PRIMARY;
    case "hackathon":
      return PillVariant.INDIGO;
    case "workshop":
      return PillVariant.WARNING;
    case "meetup":
      return PillVariant.SUCCESS;
    default:
      return PillVariant.SECONDARY;
  }
};

/**
 * Generate default pills for an event
 * This creates pills for event type and optionally status
 */
export const getDefaultEventPills = (
  eventType: "meetup" | "hackathon" | "workshop" | "live-stream",
  status?: "draft" | "published" | "cancelled" | "completed",
  additionalPills?: IPill[]
): IPill[] => {
  const pills: IPill[] = [];

  // Event type pill (always shown)
  pills.push({
    title: formatEventType(eventType),
    variant: getEventTypePillVariant(eventType),
    size: PillSize.SMALL
  });

  // Status pill (only for certain statuses)
  if (status && status !== "published") {
    pills.push({
      title: getStatusText(status),
      variant: getStatusPillVariant(status),
      size: PillSize.SMALL
    });
  }

  // Add any additional custom pills
  if (additionalPills && additionalPills.length > 0) {
    pills.push(...additionalPills);
  }

  return pills;
};

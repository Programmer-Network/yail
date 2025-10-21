export const getAspectRatioClass = (aspectRatio: string) => {
  switch (aspectRatio) {
    case "16:9":
      return "aspect-video";
    case "4:3":
      return "aspect-[4/3]";
    case "1:1":
      return "aspect-square";
    case "3:2":
      return "aspect-[3/2]";
    case "auto":
    default:
      return "";
  }
};

export const getVariantClasses = (variant: string) => {
  switch (variant) {
    case "compact":
      return "text-sm";
    case "featured":
      return "border-primary shadow-lg";
    case "default":
    default:
      return "";
  }
};

export const getLineClampClass = (lines: number) => {
  if (lines <= 0) {
    return "";
  }

  const clampMap: Record<number, string> = {
    1: "line-clamp-1",
    2: "line-clamp-2",
    3: "line-clamp-3",
    4: "line-clamp-4",
    5: "line-clamp-5",
    6: "line-clamp-6"
  };

  return clampMap[lines] || "line-clamp-3";
};

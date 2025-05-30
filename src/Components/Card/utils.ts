export const getAspectRatioClass = (aspectRatio: string) => {
  switch (aspectRatio) {
    case "16:9":
      return "yl:aspect-video";
    case "4:3":
      return "yl:aspect-[4/3]";
    case "1:1":
      return "yl:aspect-square";
    case "3:2":
      return "yl:aspect-[3/2]";
    case "auto":
    default:
      return "";
  }
};

export const getVariantClasses = (variant: string) => {
  switch (variant) {
    case "compact":
      return "yl:text-sm";
    case "featured":
      return "yl:border-primary yl:shadow-lg";
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
    1: "yl:line-clamp-1",
    2: "yl:line-clamp-2",
    3: "yl:line-clamp-3",
    4: "yl:line-clamp-4",
    5: "yl:line-clamp-5",
    6: "yl:line-clamp-6"
  };

  return clampMap[lines] || "yl:line-clamp-3";
};

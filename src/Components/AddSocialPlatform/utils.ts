export const getValueHint = (platform: string): string => {
  if (platform === "Website") {
    return "The URL of your website. Include the protocol (http:// or https://).";
  }

  return "Username, a slug or a handle. Different platforms call it differently. Do not include the base URL.";
};

export const getValueLabel = (platform: string): string => {
  if (platform === "Website") {
    return "URL";
  }

  return "Username";
};

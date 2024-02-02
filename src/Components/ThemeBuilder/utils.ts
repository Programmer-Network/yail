export const setCSSVariable = (variable: string, value: string) =>
  document.documentElement.style.setProperty(variable, value);

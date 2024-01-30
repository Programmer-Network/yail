export interface IColors {
  primary: string;
  background: string;
  text: string;
}

export interface IThemeBuilder {
  onColorsChange: (colors: IColors) => void;
  onReset: () => void;
  isResetButtonShown: boolean;
  settings: {
    primary: string;
    background: string;
    text: string;
  };
  buttons: {
    label: string;
    type: string;
    cssVariable: string;
    className?: string;
  }[];
}

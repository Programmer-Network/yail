export interface IThemeBuilderSetting {
  label: string;
  type: string;
  customCSSProperty: string;
  color: string;
  defaultColor: string;
  className?: string;
}

export interface IThemeBuilder {
  onChange: (settings: IThemeBuilderSetting[]) => void;
  onReset: () => void;
  settings: IThemeBuilderSetting[];
  defaultSettings: IThemeBuilderSetting[];
}

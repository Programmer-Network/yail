export interface ISwitchProps {
  name: string;
  isChecked: boolean;
  onChange: (input: Record<string, boolean>) => void;
  label?: string;
  className?: string;
}

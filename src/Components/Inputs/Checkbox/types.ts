export interface ICheckboxProps {
  name?: string;
  text?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputWrapperClassName?: string;
  error?: string;
}

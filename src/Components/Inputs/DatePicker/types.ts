export interface IDatePickerProps {
  name?: string;
  label?: string;
  value?: Date;
  selected?: Date | null;
  required?: boolean;
  onChange: (value: Record<string, Date | null>) => void;
  timeFormat?: string;
  timeIntervals?: number;
  timeCaption?: string;
  dateFormat?: string;
  showTimeSelect?: boolean;
  minDate?: Date;
  maxDate?: Date;
  error?: string | string[] | Record<string, string>;
}

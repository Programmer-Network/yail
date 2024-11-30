import { InputHeaderProps } from "../Common/InputHeader/types";

export interface IDatePickerProps extends InputHeaderProps {
  selected?: Date;
  onChange: (value: Record<string, Date | null>) => void;
  timeFormat?: string;
  timeIntervals?: number;
  timeCaption?: string;
  dateFormat?: string;
  showTimeSelect?: boolean;
}

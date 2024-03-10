export interface IStarsProps {
  name: string;
  stars?: number;
  onChange?: (value: Record<string, number>) => void;
  value?: number;
  error?: string;
}

export interface AlertProps {
  className?: string;
  type: "success" | "error" | "warning" | "info";
  children: React.ReactNode;
}

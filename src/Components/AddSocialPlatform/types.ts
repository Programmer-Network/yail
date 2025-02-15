export interface IAddSocialPlatformProps {
  className?: string;
  platforms: { name: string; url: string }[];
  onAdd: (data: Record<string, string>) => void;
}

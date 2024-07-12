export interface IAddSocialPlatformProps {
  platforms: { name: string; url: string }[];
  onAdd: (data: Record<string, string>) => void;
  valueProps?: {
    name: string;
    label: string;
    hint?: string;
  };
}

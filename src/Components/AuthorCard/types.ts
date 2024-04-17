export interface IAuthorCardProps {
  name: string;
  avatar?: string;
  about: string;
  onClick?: (author: { name: string; avatar?: string; about: string }) => void;
  className?: string;
}

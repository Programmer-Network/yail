export interface IBookmarkProps {
  isBookmarked: boolean;
  handleDelete: () => void;
  handleAdd: () => void;
  isLoading: boolean;
}

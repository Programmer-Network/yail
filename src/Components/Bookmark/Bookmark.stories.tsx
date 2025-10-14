import Bookmark from ".";

export default {
  title: "Core / Bookmark",
  tags: ["autodocs"]
};

const args = {
  isBookmarked: false,
  handleDelete: () => null,
  handleAdd: () => null,
  isLoading: false
};

export const NotBookmarked = () => <Bookmark {...args} />;
export const Bookmarked = () => <Bookmark {...args} isBookmarked />;
export const IsLoading = () => <Bookmark {...args} isLoading={true} />;

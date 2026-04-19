import Fuse, { IFuseOptions } from "fuse.js";
import { useMemo, useState } from "react";

import useDebounce from "../useDebounce";

interface UseSearchResultsReturn<T> {
  searchTerm: string;
  searchResults: T[];
  handleSearch: (event: { search: string }) => void;
}

const useSearchResults = <T>(
  data: T[],
  options: { debounceDelay?: number; fuseOptions: IFuseOptions<T> }
): UseSearchResultsReturn<T> => {
  const { debounceDelay = 250, fuseOptions } = options;

  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce<string>(searchTerm, debounceDelay);

  const searchResults = useMemo(() => {
    if (!Array.isArray(data) || data.length === 0) {
      return [];
    }

    const defaultKeys = [
      "title",
      "name",
      "slug",
      "summary",
      "description",
      "tags.name",
      "tags.description",
      "tags.label"
    ];
    const keys = fuseOptions.keys
      ? [...fuseOptions.keys, ...defaultKeys]
      : defaultKeys;

    const fuse = new Fuse(data, { ...fuseOptions, keys });

    if (debouncedSearchTerm) {
      return fuse.search(debouncedSearchTerm).map(({ item }) => item);
    }

    return data;
  }, [debouncedSearchTerm, data, fuseOptions]);

  const handleSearch = ({ search }: { search: string }) => {
    setSearchTerm(search);
  };

  return {
    searchTerm,
    searchResults,
    handleSearch
  };
};

export default useSearchResults;

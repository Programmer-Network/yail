import Fuse, { IFuseOptions } from "fuse.js";
import { useEffect, useState } from "react";

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
  const [searchResults, setSearchResults] = useState(data || []);
  const debouncedSearchTerm = useDebounce<string>(searchTerm, debounceDelay);

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

  useEffect(() => {
    if (!Array.isArray(data) || data.length === 0) {
      return setSearchResults([]);
    }

    const fuse = new Fuse(data, { ...fuseOptions, keys });

    if (debouncedSearchTerm) {
      const results = fuse.search(debouncedSearchTerm).map(({ item }) => item);
      setSearchResults(results);
    } else {
      setSearchResults(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm, data]);

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

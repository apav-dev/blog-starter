import * as React from "react";
import {
  provideHeadless,
  SearchHeadlessProvider,
} from "@yext/search-headless-react";

const SEARCH_API_KEY = import.meta.env.YEXT_PUBLIC_SEARCH_API_KEY;

export const searchConfig = {
  apiKey: SEARCH_API_KEY,
  locale: "en",
};

interface SearchExperienceProps {
  experienceKey: string;
  verticalKey?: string;
  children?: React.ReactNode;
}

const SearchExperience = ({
  experienceKey,
  verticalKey,
  children,
}: SearchExperienceProps) => {
  const search = provideHeadless({
    ...searchConfig,
    verticalKey,
    experienceKey,
  });

  return (
    <SearchHeadlessProvider searcher={search}>
      {children}
    </SearchHeadlessProvider>
  );
};

export default SearchExperience;

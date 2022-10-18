import {
  SearchBar,
  StandardCard,
  VerticalResults,
} from "@yext/search-ui-react";
import { useSearchActions, useSearchState } from "@yext/search-headless-react";
import { ImSpinner3 } from "react-icons/im";
import * as React from "react";

const BlogSearchSection = () => {
  return (
    <div className="centered-container pt-4">
      <SearchBar />
      <VerticalResults CardComponent={StandardCard} />
    </div>
  );
};

export default BlogSearchSection;

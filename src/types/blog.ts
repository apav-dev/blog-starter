import { ImageProps } from "@yext/pages/components";

interface Blog {
  id: string;
  name: string;
  datePosted?: string;
  body?: string;
  slug?: string;
  coverPhoto?: ImageProps;
}

export default Blog;

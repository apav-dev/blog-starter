import * as React from "react";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateConfig,
} from "@yext/pages";

export const config: TemplateConfig = {
  stream: {
    $id: "blog_posts",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: ["id", "name", "datePosted", "body", "slug"],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["ce_blog"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  const { name } = document;
  return {
    title: name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const BlogPost: Template<TemplateRenderProps> = ({ document }) => {
  const { name, body } = document;

  return (
    <>
      <div>{name}</div>
      <div>{body}</div>
    </>
  );
};

export default BlogPost;

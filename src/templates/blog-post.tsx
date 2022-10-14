import * as React from "react";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateProps,
  TemplateRenderProps,
  TemplateConfig,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import InfoSection from "../components/info-section";
import { formatDate, renderBlogContent } from "../util";
import { Image } from "@yext/pages/components";

export const config: TemplateConfig = {
  stream: {
    $id: "blog",
    filter: {
      entityTypes: ["ce_blog"],
    },
    fields: ["id", "name", "datePosted", "body", "slug", "c_coverPhoto"],
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

const BlogPost: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  return (
    <>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start justify-center">
        <InfoSection titleCssStyles="text-5xl pb-4" title={document.name}>
          {document.c_coverPhoto && <Image image={document.c_coverPhoto} />}
          <p className="font-semibold">{formatDate(document.datePosted)}</p>
          <div className="font-display">{renderBlogContent(document.body)}</div>
        </InfoSection>
      </div>
    </>
  );
};

export default BlogPost;

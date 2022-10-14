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
import { Image, ImageType } from "@yext/pages/components";

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
  const { _site } = document;
  const coverPhoto = document.c_coverPhoto as ImageType | undefined;
  const headshot = _site.c_headshot as ImageType | undefined;

  // some code updates makes this section look a little different than the video
  return (
    <>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start justify-center">
        <InfoSection titleCssStyles="text-5xl pb-4" title={document.name}>
          {coverPhoto && <Image image={coverPhoto} />}
          <div className="flex items-center gap-2">
            {headshot && (
              <Image
                className="rounded-full"
                image={headshot}
                layout={"aspect"}
                aspectRatio={1}
                width={40}
              />
            )}
            <div className="flex gap-2 py-4">
              {(_site.firstName || _site.lastName) && (
                <p className="font-semibold">{`${_site.firstName} ${_site.lastName}`}</p>
              )}
              {(_site.firstName || _site.lastName) && document.datePosted && (
                <p className="font-semibold">•</p>
              )}
              {document.datePosted && (
                <p className="font-semibold">
                  {formatDate(document.datePosted)}
                </p>
              )}
            </div>
          </div>
          <div className="font-display">{renderBlogContent(document.body)}</div>
        </InfoSection>
      </div>
    </>
  );
};

export default BlogPost;

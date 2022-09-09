import * as React from "react";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import InfoSection from "../components/info-section";
import { Image } from "@yext/pages/components";

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return "blog";
};

const BlogPost: Template<TemplateRenderProps> = ({
  document,
}: TemplateProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  const renderBlogContent = (content: string) => {
    const blogParts = content.split(/\n/g);
    return (
      <>
        {blogParts.map((part, i) => (
          <p key={`paragraph_${i}`} className="py-1">
            {part}
          </p>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start justify-center">
        <InfoSection titleCssStyles="text-5xl pb-4" title={"insert name"}>
          {/* TODO: move this along with cover photo to InfoSection...pass info as props */}
          <div className="flex items-center font-display">
            <p className="py-2 font-display">Aaron Pavlick / INSERT DATE</p>
          </div>
          {/* TODO: Replace with better body font */}
          <div className="font-display">{"INSERT BLOG CONTENT"}</div>
        </InfoSection>
      </div>
    </>
  );
};

export default BlogPost;

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
import InfoSection from "../components/info-section";

export const config: TemplateConfig = {
  stream: {
    $id: "blog_posts",
    fields: ["id", "name", "datePosted", "body", "slug"],
    filter: {
      entityTypes: ["ce_blog"],
    },
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

const body =
  "Penatibus et magnis dis parturient montes. Vitae nunc sed velit dignissim sodales ut eu sem." +
  "Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Etiam dignissim diam quis" +
  "enim lobortis scelerisque. Viverra orci sagittis eu volutpat odio facilisis mauris sit. Elementum" +
  "sagittis vitae et leo. Sollicitudin tempor id eu nisl nunc. Tellus in metus vulputate eu scelerisque." +
  "Augue eget arcu dictum varius. Elit duis tristique sollicitudin nibh sit amet commodo.\nSit amet nulla" +
  "facilisi morbi tempus iaculis urna id. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi." +
  "Viverra adipiscing at in tellus integer feugiat. Dolor sed viverra ipsum nunc aliquet. At tempor commodo" +
  "ullamcorper a lacus. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. Blandit" +
  "cursus risus at ultrices. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Nullam" +
  "non nisi est sit amet. Aliquam ut porttitor leo a diam sollicitudin tempor id. Vel fringilla est ullamcorper" +
  "eget nulla facilisi. Posuere morbi leo urna molestie at elementum eu. Dignissim cras tincidunt lobortis" +
  "feugiat vivamus at augue eget. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Tempor" +
  "commodo ullamcorper a lacus vestibulum sed arcu non. Nec sagittis aliquam malesuada bibendum arcu vitae" +
  "elementum. Purus sit amet volutpat consequat. Porttitor lacus luctus accumsan tortor posuere ac ut consequat." +
  "Pharetra sit amet aliquam id diam maecenas. Scelerisque fermentum dui faucibus in ornare quam viverra orci.";

const BlogPost: Template<TemplateRenderProps> = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  const renderBlogContent = () => {
    const blogParts = body.split(/\n/g);
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
        <InfoSection
          titleCssStyles="text-5xl pb-4"
          title="A Creative Blog Post"
        >
          <div className="flex items-center font-display">
            <p className="py-2 font-display">Aaron Pavlick / August 1, 2022</p>
          </div>
          <div className="font-display">{renderBlogContent()}</div>
        </InfoSection>
      </div>
    </>
  );
};

export default BlogPost;

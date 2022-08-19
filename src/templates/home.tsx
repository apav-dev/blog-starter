import * as React from "react";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import SocialLinks from "../components/social-links";
import HomeLayout from "../components/layouts/home-layout";
import InfoSection from "../components/info-section";
import BioSection from "../components/bio-section";
import Greeting from "../components/greeting";

export const getPath: GetPath<TemplateProps> = () => {
  return `index.html`;
};

// TODO: mention this to Andrew
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    title: "My Personal Site",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Home: Template<TemplateRenderProps> = ({ document }) => {
  const { _site } = document;
  const site: Site = _site;

  return (
    <>
      <HomeLayout
        GreetingContent={() => (
          <Greeting
            name={site.name}
            role={site.c_role}
            headshot={site.c_headshot}
          />
        )}
        InfoContent={() => (
          <div className="centered-container">
            <SocialLinks
              twitter={site.c_twitter}
              github={site.c_github}
              dev_to={site.c_devTo}
            />
            <InfoSection title="Introduction">
              <p className="text-lg">{site.c_introduction}</p>
            </InfoSection>
            <InfoSection title="Bio">
              <BioSection
                home={site.c_home}
                skills={site.c_skills}
                interests={site.c_interests}
              />
            </InfoSection>
          </div>
        )}
      />
    </>
  );
};

export default Home;

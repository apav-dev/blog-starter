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

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    title: "My Personal Site",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const Home: Template<TemplateRenderProps> = ({
  document,
}: TemplateRenderProps) => {
  const { _site } = document;
  return (
    <>
      <HomeLayout
        firstName={_site.firstName}
        lastName={_site.lastName}
        GreetingContent={() => (
          <Greeting
            name={_site.firstName}
            role={_site.c_role}
            headshot={_site.c_headshot}
          />
        )}
        InfoContent={() => (
          <div className="centered-container">
            <SocialLinks
              twitter={_site.c_twitter}
              github={_site.c_github}
              dev_to={_site.c_devTo}
            />
            <InfoSection title="Introduction">
              <p className="text-lg">{_site.c_introduction}</p>
            </InfoSection>
            <InfoSection title="Bio">
              <BioSection
                home={_site.c_home}
                skills={_site.c_skills}
                interests={_site.c_interests}
              />
            </InfoSection>
          </div>
        )}
      />
    </>
  );
};

export default Home;

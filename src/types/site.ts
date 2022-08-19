import { ImageType } from "@yext/pages/components";

interface Site {
  name: string;
  c_role?: string;
  c_headshot?: ImageType;
  c_twitter?: string;
  c_github?: string;
  c_devTo?: string;
  c_introduction?: string;
  c_home?: string;
  c_interests?: string[];
  c_skills?: string[];
}

export default Site;

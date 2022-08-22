import * as React from "react";
import Divider from "./divider";
import { twMerge } from "tailwind-merge";
import YextIcon from "../icons/YextIcon";
import ReactIcon from "../icons/ReactIcon";

interface FooterProps {
  footerContainerStyle?: string;
}

const Footer = ({ footerContainerStyle }: FooterProps) => {
  return (
    <footer
      className={twMerge(
        "mx-auto px-5 md:px-14 py-4 w-full",
        footerContainerStyle
      )}
    >
      <Divider />
      <p className="text-xl font-bold">&copy; Aaron Pavlick</p>
      <div className="inline-flex items-center">
        <span className="mr-2">Built with</span>
        <ReactIcon />
        <span className="mx-2">on</span>
        <div className="w-7">
          <YextIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

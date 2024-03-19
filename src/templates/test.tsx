import { SocialPosts } from "../components/social/SocialPosts";
import "../index.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TemplateRenderProps,
} from "@yext/pages";

export const getPath: GetPath<TemplateRenderProps> = () => {
  return `test`;
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Widgets Demo Repo",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "This repo contains examples of Widgets in Pages.",
        },
      },
    ],
  };
};

const Test: Template<TemplateRenderProps> = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SocialPosts entityId="9965661" />
      </div>
    </div>
  );
};

export default Test;

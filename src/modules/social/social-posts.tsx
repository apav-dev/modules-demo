import { Module, ModuleConfig } from "@yext/pages/*";
import { ModuleWrapper } from "../../components/util/ModuleWrapper";
import { SocialPosts } from "../../components/social/SocialPosts";

export const config: ModuleConfig = {
  name: "social-posts",
};

const Social: Module = () => {
  return (
    <ModuleWrapper>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SocialPosts entityId="9965661" />
        </div>
      </div>
    </ModuleWrapper>
  );
};

export default Social;

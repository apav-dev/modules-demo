import { Module, ModuleConfig } from "@yext/pages/*";

export const config: ModuleConfig = {
  name: "search",
};

export const TailwindWidget: Module = () => {
  return <div>Search code here</div>;
};

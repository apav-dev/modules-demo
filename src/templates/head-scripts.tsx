import "../index.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TemplateRenderProps,
} from "@yext/pages";
import { useEffect } from "react";
import { useScript } from "../hooks/useScript";

export const getPath: GetPath<TemplateRenderProps> = () => {
  return `head-scripts`;
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Modules Demo",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "This repo contains examples of Modules in Pages.",
        },
      },
      {
        type: "script",
        attributes: {
          type: "module",
          src: "https://modules.pgsdemo.com/modules/reviews.umd.js",
        },
      },
      {
        type: "script",
        attributes: {
          type: "module",
          src: "https://modules.pgsdemo.com/modules/social-posts.umd.js",
        },
      },
    ],
  };
};

const HeadScripts: Template<TemplateRenderProps> = ({ document }) => {
  // const { loaded: reviewsScript, error: reviewsErrorScript } = useScript(
  //   "https://modules.pgsdemo.com/modules/reviews.umd.js"
  // );
  // const { loaded: socialScript, error: socialErrorScript } = useScript(
  //   "https://modules.pgsdemo.com/modules/social-posts.umd.js"
  // );

  // useEffect(() => {
  //   if (reviewsScript) {
  //     console.log("First script loaded and ready to use");
  //   }
  //   if (reviewsErrorScript) {
  //     console.error("Error loading the first script", reviewsErrorScript);
  //   }
  // }, [reviewsScript, reviewsErrorScript]);

  // useEffect(() => {
  //   if (socialScript) {
  //     console.log("Second script loaded and ready to use");
  //   }
  //   if (socialErrorScript) {
  //     console.error("Error loading the second script", socialErrorScript);
  //   }
  // }, [socialScript, socialErrorScript]);

  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg> */}
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <img
            className="h-11"
            src="src/assets/images/yext-logo.png"
            alt="Yext"
          />
          <h1 className="mt-10 text-4xl font-poppins font-bold tracking-tight text-gray-900 sm:text-6xl">
            Modules in Pages JS
          </h1>
          <p className="mt-6 text-lg leading-8 font-poppins text-gray-600">
            PagesJS allows you to write React components and use them as modules
            so that you can add them to your website as a script tag.
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                className="h-5 mr-2"
              />
              <a
                href="https://github.com/apav-dev/modules-demo"
                className="text-blue-500 font-poppins hover:underline"
              >
                Source Code
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            {/* TODO: Add screenshot of a module */}
            {/* <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 ">
          <h2 className="text-xl text-poppins font-bold">Reviews</h2>
          <div id="reviews"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 ">
          <h2 className="text-xl text-poppins font-bold">Social</h2>
          <div className="mt-20">
            <div id="social-posts"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadScripts;

import { Module, ModuleConfig, ModuleProps } from "@yext/pages/*";
// import { AnalyticsProvider } from "@yext/pages-components";
import "./index.css";

const templateData: ModuleProps = {
  document: {
    businessId: "REPLACE_ME",
    siteId: "REPLACE_ME",
    __: {
      name: "your-module",
      staticPage: true,
    },
  },
  __meta: {
    mode: "production",
  },
};

export const config: ModuleConfig = {
  name: "your-module",
};

const YourModule: Module = () => {
  return (
    // <AnalyticsProvider
    //   apiKey="REPLACE_ME"
    //   defaultCurrency="REPLACE_ME"
    //   templateData={templateData}
    //   productionDomains={["REPLACE_ME"]}
    // >
    <div className="tailwind">
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-20 h-12 bg-regal-blue">
          <p className="font-poppins text-gray-100 text-center">Module</p>
        </div>
      </div>
    </div>
    // </AnalyticsProvider>
  );
};

export default YourModule;

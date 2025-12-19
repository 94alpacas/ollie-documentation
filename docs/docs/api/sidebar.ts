import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/ollie-api",
    },
    {
      type: "category",
      label: "N8N Workflows",
      items: [
        {
          type: "doc",
          id: "api/agent-interaction",
          label: "Main Interaction",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

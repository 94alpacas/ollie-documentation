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
          id: "api/trigger-n-8-n-workflow",
          label: "Trigger N8N workflow",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Custom Webhooks",
      items: [
        {
          type: "doc",
          id: "api/trigger-custom-webhook",
          label: "Trigger custom webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-webhook-status",
          label: "Get webhook status",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Health",
      items: [
        {
          type: "doc",
          id: "api/get-health",
          label: "Health check endpoint",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;

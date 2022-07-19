/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  docs: [
    {
      type: "category",
      label: "Overview",
      link: {
        type: "doc",
        id: "index",
      },
      items: [
        "overview/index",
        "overview/what-is-zuplo",
        "overview/how-does-zuplo-work",
        "overview/should-you-use-zuplo",
        "overview/handlers",
        "overview/policies",
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/github-source-control",
        "guides/api-key-management",
        "guides/oauth-client-management",
      ],
    },
    {
      type: "category",
      label: "Deployments",
      items: [
        "deployments/environments",
        "deployments/environment-variables",
        "deployments/settings-json",
        "deployments/custom-domains",
        "deployments/deployment-options",
      ],
    },
    {
      type: "category",
      label: "Quick Starts",
      items: [
        "quickstarts/proxy-public-api",
        "quickstarts/add-api-key-auth",
        "quickstarts/instant-api-docs-and-dev-portal",
        "quickstarts/validation-and-docs-with-json-schema",
        "quickstarts/per-customer-rate-limits",
      ],
    },
    {
      type: "category",
      label: "Policies",
      link: {
        type: "doc",
        id: "policies/index",
      },
      items: [
        {
          type: "category",
          label: "Authentication",
          items: [
            "policies/api-key-auth-inbound",
            "policies/auth0-jwt-auth-inbound",
            "policies/okta-jwt-auth-inbound",
            "policies/cognito-jwt-auth-inbound",
            "policies/open-id-jwt-auth-inbound",
            "policies/basic-auth-inbound",
            "policies/mtls-auth-inbound",
            "policies/ldap-auth-inbound",
            "policies/hmac-auth-inbound",
          ],
        },
        {
          type: "category",
          label: "Security & Validation",
          items: [
            "policies/rate-limit-inbound",
            "policies/audit-log-inbound",
            "policies/validate-json-schema-inbound",
            "policies/bot-detection-inbound",
          ],
        },
        {
          type: "category",
          label: "Billing & Quotas",
          items: ["policies/quota-inbound", "policies/billing-inbound"],
        },
        {
          type: "category",
          label: "Testing",
          items: [
            "policies/ab-test-inbound",
            "policies/mock-api-inbound",
            "policies/sleep-inbound",
          ],
        },
        {
          type: "category",
          label: "Request Filtering",
          items: [
            "policies/acl-policy-inbound",
            "policies/geo-location-inbound",
            "policies/ip-restriction-inbound",
            "policies/request-size-limit-inbound",
          ],
        },
        {
          type: "category",
          label: "Request Modification",
          items: [
            "policies/transform-body-inbound",
            "policies/remove-headers-inbound",
            "policies/clear-headers-inbound",
            "policies/change-method-inbound",
            "policies/formdata-to-json-inbound",
            "policies/remove-query-params-inbound",
            "policies/request-termination-inbound",
            "policies/set-headers-inbound",
            "policies/set-query-params-inbound",
          ],
        },
        {
          type: "category",
          label: "Response Modification",
          items: [
            "policies/transform-body-outbound",
            "policies/remove-headers-outbound",
            "policies/clear-headers-outbound",
            "policies/set-headers-outbound",
          ],
        },
        {
          type: "category",
          label: "Other",
          items: [
            "policies/caching-inbound",
            "policies/archive-request-inbound",
            "policies/archive-response-outbound",
            "policies/custom-code-inbound",
            "policies/custom-code-outbound",
            "policies/upstream-gcp-jwt-inbound",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Handlers",
      link: {
        type: "doc",
        id: "handlers/index",
      },
      items: [
        "handlers/url-rewrite",
        "handlers/aws-lambda",
        "handlers/custom-handler",
      ],
    },
    {
      type: "category",
      label: "Developer Portal",
      items: [
        "developer-portal/index",
        "developer-portal/setup",
        "developer-portal/configuration",
        "developer-portal/version-management",
        "developer-portal/adding-pages",
        "developer-portal/open-api",
      ],
    },
    {
      type: "category",
      label: "Examples",
      items: [
        "examples/hello-world-api",
        "examples/archiving-requests-to-storage",
        "examples/gateway-over-airtable",
        "examples/gateway-over-salesforce",
        "examples/proxy-a-request-with-body",
        "examples/proxy-a-simple-get-request",
        "examples/rick-and-morty-api-developer-portal-example",
      ],
    },
    {
      type: "category",
      label: "Reference",
      items: [
        "reference/zuplo-request",
        "reference/zuplo-context",
        "reference/web-standard-apis",
        "reference/node-modules",
        "reference/path-matching",
        "reference/testing-your-api",
        "reference/reusing-code",
        "reference/safely-clone-a-request-or-response",
        "reference/key-value-store",
      ],
    },
    {
      type: "doc",
      id: "sample-apis",
    },
    {
      type: "html",
      value: "<hr />", // The HTML to be rendered
      defaultStyle: false, // Use the default menu item styling
    },
    {
      type: "doc",
      id: "changelog",
    },
    {
      type: "doc",
      id: "support",
    },
    {
      type: "doc",
      id: "security",
    },
    {
      type: "doc",
      id: "pricing",
    },
  ],
};

module.exports = sidebars;

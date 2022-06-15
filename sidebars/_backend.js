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
  backendDocsSidebar: [
    {
      type: 'category',
      label: 'Welcome',
      items: [{
        type: 'doc',
        id: 'backend/console-readme',
        label: 'Introduction'
      }],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'backend/getting-started-readme',
        'backend/getting-started-quick-start',
        'backend/getting-started-connecting-to-api'
      ],
    },
    {
      type: 'category',
      label: 'Backend Console',
      items: [
        'backend/8base-console-readme',
        'backend/8base-console-teams',
        'backend/8base-console-authentication',
        'backend/8base-console-roles-and-permissions',
        'backend/8base-console-handling-files',
        {
          type: 'category',
          label: 'Tools',
          items: [
            'backend/8base-console-platform-tools-data-builder',
            'backend/8base-console-platform-tools-data-viewer',
            'backend/8base-console-platform-tools-functions',
            'backend/8base-console-platform-tools-api-explorer',
            'backend/8base-console-platform-tools-users',
            'backend/8base-console-platform-tools-ci-cd',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'GraphQL API',
      items: [
        'backend/8base-console-graphql-api-readme',
        {
          type: 'category',
          label: 'Queries',
          items: [
            'backend/8base-console-graphql-api-queries-readme',
            'backend/8base-console-graphql-api-queries-single-record-query',
            'backend/8base-console-graphql-api-queries-record-list-query',
            'backend/8base-console-graphql-api-queries-related-record-query',
            'backend/8base-console-graphql-api-queries-sort-list-query',
            'backend/8base-console-graphql-api-queries-combining-queries',
            'backend/8base-console-graphql-api-queries-aggregation-query',
            'backend/8base-console-graphql-api-queries-combining-arguments',
            'backend/8base-console-graphql-api-queries-filtered-list-query',
            'backend/8base-console-graphql-api-queries-paginated-query-results',
          ],
        },
        {
          type: 'category',
          label: 'Mutations',
          items: [
            'backend/8base-console-graphql-api-mutations-readme',
            'backend/8base-console-graphql-api-mutations-single-record-mutations',
            'backend/8base-console-graphql-api-mutations-related-record-mutations',
            'backend/8base-console-graphql-api-mutations-update-by-filter-mutations',
          ],
        },
        {
          type: 'category',
          label: 'Subscriptions',
          items: [
            'backend/8base-console-graphql-api-subscriptions-readme',
            'backend/8base-console-graphql-api-subscriptions-simple-record-subscriptions',
            'backend/8base-console-graphql-api-subscriptions-complex-record-subscriptions',
            'backend/8base-console-graphql-api-subscriptions-client',
          ],
        },
        'backend/8base-console-graphql-api-grouping-and-aggregations-readme',
        'backend/8base-console-graphql-api-geo-fields-readme',
        'backend/8base-console-graphql-api-variables',
        'backend/8base-console-graphql-api-error-handling',
      ],
    },
    {
      type: 'category',
      label: 'Custom Functions',
      items: [
        'backend/8base-console-custom-functions-readme',
        'backend/8base-console-custom-functions-resolvers',
        'backend/8base-console-custom-functions-triggers',
        'backend/8base-console-custom-functions-webhooks',
        'backend/8base-console-custom-functions-tasks',
        'backend/8base-console-custom-functions-debugging',
      ],
    },
    {
      type: 'category',
      label: 'Plugins and Integrations',
      items: [
        'backend/8base-console-plugins-integrations-readme',
        'backend/8base-console-plugins-integrations-salesforce',
      ],
    },
    {
      type: 'category',
      label: 'Local Development Environment',
      items: [
        {
          type: 'category',
          label: 'Environment',
          items: [
            'backend/development-tools-dev-env-readme',
            'backend/development-tools-dev-env-project-structure',
            'backend/development-tools-dev-env-8base-yml',
            'backend/development-tools-dev-env-runtime-environment',
            'backend/development-tools-dev-env-hosting',
          ],
        },
        {
          type: 'category',
          label: 'Command Line Interface (CLI)',
          items: [
            'backend/development-tools-cli-readme',
            'backend/development-tools-cli-commands',
            'backend/development-tools-cli-generators',
            'backend/development-tools-cli-ci-cd',
          ],
        },
        {
          type: 'category',
          label: 'SDK',
          items: [
            'backend/development-tools-sdk-readme',
            'backend/development-tools-sdk-api-readme',
            'backend/development-tools-sdk-auth-readme',
            'backend/development-tools-sdk-file-upload',
            'backend/development-tools-sdk-filestack-uploader',
            'backend/development-tools-sdk-vs-code-plugin',
          ],
        }
      ],
    },
  ],
};

module.exports = sidebars;

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
      type: 'doc',
      id: 'console-readme',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'projects/introduction/what-is-8base',
        'projects/introduction/who-uses-8base',
        'projects/introduction/quickstart',
        'projects/introduction/main-modules-and-capabilities',
        'projects/introduction/projects',
        'projects/introduction/backend-capabilities-overview',
        'projects/introduction/frontend-capabilities-overview',
        'projects/introduction/built-application-architecture',
        'projects/introduction/using-8base-at-scale',
        // 'projects/introduction/navigating-our-docs',
        'projects/introduction/developer-resources'
      ],
    },
    {
      type: 'category',
      label: 'Getting started',
      items: [
        {
          type: 'category',
          label: 'Walkthroughs',
          items: [
            'projects/gettingstarted/walkthroughs-fullstack',
            'projects/gettingstarted/walkthroughs-backend-movieapp',
            'projects/gettingstarted/walkthroughs-frontend-movieapp',                               
          ]
        },
        {
          type: 'category',
          label: 'Common tasks',
          link: {
            type: 'doc',
            id: 'projects/gettingstarted/common-tasks-index',
          },
          items: [
            'projects/backend/8base-console-graphql-api-grouping-and-aggregations-tutorial',
            'projects/gettingstarted/common-tasks-create-multiple-records-single-operation',
            'projects/gettingstarted/common-tasks-extending-the-api', 
            'projects/gettingstarted/common-tasks-implementing-pagination-api-queries',
            'projects/gettingstarted/common-tasks-using-validating-forms', 
            'projects/gettingstarted/common-tasks-leveraging-navigation-events',
            'projects/gettingstarted/common-tasks-building-responsive-applications',
            'projects/gettingstarted/common-tasks-real-time-applications',                   
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Backend development',
      items: [
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'projects/backend/getting-started-readme',
            'projects/backend/getting-started-quick-start',
            'projects/backend/getting-started-connecting-to-api',
          ],
        },
        {
          type: 'category',
          label: 'Backend',
          items: [
            'projects/backend/8base-console-readme',
            'projects/backend/8base-console-teams',
            'projects/backend/8base-console-authentication',
            'projects/backend/8base-console-roles-and-permissions',
            'projects/backend/8base-console-handling-files',
            {
              type: 'category',
              label: 'Tools',
              items: [
                'projects/backend/8base-console-platform-tools-data-builder',
                'projects/backend/8base-console-platform-tools-data-viewer',
                'projects/backend/8base-console-platform-tools-functions',
                'projects/backend/8base-console-platform-tools-api-explorer',
                {
                  type: 'category',
                  label: 'Advanced',
                  items: [
                    'projects/backend/8base-console-platform-tools-advanced-advanced-introspection',
                  ],
                },
                'projects/backend/8base-console-platform-tools-users',
                'projects/backend/8base-console-platform-tools-ci-cd',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'GraphQL API',
          items: [
            'projects/backend/8base-console-graphql-api-readme',
            {
              type: 'category',
              label: 'Queries',
              items: [
                'projects/backend/8base-console-graphql-api-queries-readme',
                'projects/backend/8base-console-graphql-api-queries-single-record-query',
                'projects/backend/8base-console-graphql-api-queries-record-list-query',
                'projects/backend/8base-console-graphql-api-queries-related-record-query',
                'projects/backend/8base-console-graphql-api-queries-sort-list-query',
                'projects/backend/8base-console-graphql-api-queries-combining-queries',
                'projects/backend/8base-console-graphql-api-queries-aggregation-query',
                'projects/backend/8base-console-graphql-api-queries-combining-arguments',
                'projects/backend/8base-console-graphql-api-queries-filtered-list-query',
                'projects/backend/8base-console-graphql-api-queries-paginated-query-results',
              ],
            },
            {
              type: 'category',
              label: 'Mutations',
              items: [
                'projects/backend/8base-console-graphql-api-mutations-readme',
                'projects/backend/8base-console-graphql-api-mutations-single-record-mutations',
                'projects/backend/8base-console-graphql-api-mutations-related-record-mutations',
                'projects/backend/8base-console-graphql-api-mutations-update-by-filter-mutations',
              ],
            },
            {
              type: 'category',
              label: 'Subscriptions',
              items: [
                'projects/backend/8base-console-graphql-api-subscriptions-readme',
                'projects/backend/8base-console-graphql-api-subscriptions-simple-record-subscriptions',
                'projects/backend/8base-console-graphql-api-subscriptions-complex-record-subscriptions',
                'projects/backend/8base-console-graphql-api-subscriptions-client',
              ],
            },
            'projects/backend/8base-console-graphql-api-grouping-and-aggregations-readme',
            'projects/backend/8base-console-graphql-api-geo-fields-readme',
            'projects/backend/8base-console-graphql-api-variables',
            'projects/backend/8base-console-graphql-api-error-handling',
          ],
        },
        {
          type: 'category',
          label: 'Custom Functions',
          items: [
            'projects/backend/8base-console-custom-functions-readme',
            'projects/backend/8base-console-custom-functions-resolvers',
            'projects/backend/8base-console-custom-functions-triggers',
            'projects/backend/8base-console-custom-functions-webhooks',
            'projects/backend/8base-console-custom-functions-tasks',
            'projects/backend/8base-console-custom-functions-debugging',
          ],
        },
        {
          type: 'category',
          label: 'Plugins and Integrations',
          items: [
            'projects/backend/8base-console-plugins-integrations-readme',
            'projects/backend/8base-console-plugins-integrations-salesforce',
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
                'projects/backend/development-tools-dev-env-readme',
                'projects/backend/development-tools-dev-env-project-structure',
                'projects/backend/development-tools-dev-env-8base-yml',
                'projects/backend/development-tools-dev-env-runtime-environment',
                'projects/backend/development-tools-dev-env-hosting',
              ],
            },
            {
              type: 'category',
              label: 'Command Line Interface (CLI)',
              items: [
                'projects/backend/development-tools-cli-readme',
                'projects/backend/development-tools-cli-commands',
                'projects/backend/development-tools-cli-generators',
                'projects/backend/development-tools-cli-ci-cd',
              ],
            },
            {
              type: 'category',
              label: 'SDK',
              items: [
                'projects/backend/development-tools-sdk-readme',
                'projects/backend/development-tools-sdk-api-readme',
                'projects/backend/development-tools-sdk-auth-readme',
                'projects/backend/development-tools-sdk-file-upload',
                'projects/backend/development-tools-sdk-filestack-uploader',
                'projects/backend/development-tools-sdk-vs-code-plugin',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Frontend development',
      items: [

        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'projects/frontend/getting-started-introduction',
            'projects/frontend/getting-started-what-is-app-builder',
            'projects/frontend/getting-started-building-fullstack-gotomarket-apps-on-8base',
          ],
        },
        {
          type: 'category',
          label: 'Building Front-ends App Builder Walkthrough',
          items: [
            'projects/frontend/building-frontends-app-builder-walkthrough-introduction',
            'projects/frontend/building-frontends-app-builder-walkthrough-selecting-a-design-theme',
            'projects/frontend/building-frontends-app-builder-walkthrough-managing-app-pages',
            'projects/frontend/building-frontends-app-builder-walkthrough-dragging-and-dropping-components',
            'projects/frontend/building-frontends-app-builder-walkthrough-connecting-to-a-data-source-8base-be-workspace',
            'projects/frontend/building-frontends-app-builder-walkthrough-accessing-frontend-data',
            {
              type: 'category',
              label: 'Data Binding',
              items: [
                'projects/frontend/data-binding-example-binding-request-to-table-component',
                'projects/frontend/data-binding-example-binding-custom-entries-to-card-component',
                'projects/frontend/data-binding-example-binding-function-to-looper-component',
                'projects/frontend/data-binding-example-binding-request-to-looper-component',
              ],
            },
            'projects/frontend/building-frontends-app-builder-walkthrough-deploying-publishing-an-app',
          ],
        },
        {
          type: 'category',
          label: 'App Editor',
          items: [
            'projects/frontend/app-editor-introduction',
            {
              type: 'category',
              label: 'Understanding the App Builder Interface',
              items: [
                'projects/frontend/app-editor-understanding-the-app-builder-interface-editor-header-menu-tools',
                'projects/frontend/app-editor-understanding-the-app-builder-interface-editor-page-canvas',
                'projects/frontend/app-editor-understanding-the-app-builder-interface-editor-hidden-canvas',
                'projects/frontend/app-editor-understanding-the-app-builder-interface-editor-components-drawer',
                'projects/frontend/app-editor-understanding-the-app-builder-interface-editor-page-context-menu',
                'projects/frontend/app-editor-understanding-the-app-builder-interface-editor-settings-and-global-shortcuts',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Custom App Styling',
          items: [
            'projects/frontend/custom-app-styling-introduction',
            'projects/frontend/custom-app-styling-understanding-the-app-builder-interface-using-a-css-design-framework',
            'projects/frontend/custom-app-styling-understanding-the-app-builder-interface-configurations-in-the-theme-editor',
            'projects/frontend/custom-app-styling-understanding-the-app-builder-interface-adding-custom-fonts-and-icons-to-your-app',
            {
              type: 'category',
              label: 'Creating a Global App Theme',
              items: [
                'projects/frontend/custom-app-styling-creating-a-global-app-theme-introduction',
                'projects/frontend/custom-app-styling-creating-a-global-app-theme-exporting-importing-app-themes',
              ],
            },
            'projects/frontend/custom-app-styling-creating-a-global-app-theme-setting-default-styles-on-components',
            'projects/frontend/custom-app-styling-creating-a-global-app-theme-component-styling-settings',
          ],
        },
        {
          type: 'category',
          label: 'Responsive Design in App Builder',
          items: [
            'projects/frontend/responsive-design-in-app-builder-introduction',
            'projects/frontend/responsive-design-in-app-builder-managing-media-query-definitions',
            'projects/frontend/responsive-design-in-app-builder-writing-custom-media-query-rules',
            {
              type: 'category',
              label: 'The Viewport',
              items: [
                'projects/frontend/responsive-design-in-app-builder-changing-the-viewport',
                'projects/frontend/responsive-design-in-app-builder-changing-the-viewport-setting-a-mobile-viewport',
                'projects/frontend/responsive-design-in-app-builder-changing-the-viewport-setting-a-tablet-viewport',
                'projects/frontend/responsive-design-in-app-builder-changing-the-viewport-setting-a-desktop-viewport',
                'projects/frontend/responsive-design-in-app-builder-changing-the-viewport-setting-a-custom-viewport',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Application Layouts',
          items: [
            'projects/frontend/application-layouts-creating-and-editing-layouts',
            // "projects/frontend/application-layouts-adding-nested-layouts"
          ],
        },
        {
          type: 'category',
          label: 'App Navigation',
          items: [
            'projects/frontend/app-navigation-introduction',
            {
              type: 'category',
              label: 'App Pages States and Settings',
              items: [
                'projects/frontend/app-navigation-create-and-editing-app-pages',
                'projects/frontend/app-navigation-create-and-editing-app-pages-page-url-settings',
                'projects/frontend/app-navigation-create-and-editing-app-pages-access-states-for-routes',
                'projects/frontend/app-navigation-create-and-editing-app-pages-using-url-parameters',
                // "projects/frontend/app-navigation-create-and-editing-app-pages-handling-redirects",
                // "projects/frontend/app-navigation-create-and-editing-app-pages-using-url-query-parameters",
                'projects/frontend/app-navigation-create-and-editing-app-pages-using-url-fragment-parameters',
                'projects/frontend/app-navigation-create-and-editing-app-pages-adding-logic-to-navigation-events',
                'projects/frontend/app-navigation-create-and-editing-app-pages-using-metadata-stored-on-pages',
              ],
            },
            'projects/frontend/app-navigation-404-and-error-pages',
          ],
        },
        {
          type: 'category',
          label: 'App Components',
          items: [
            'projects/frontend/app-components-introduction',
            'projects/frontend/app-components-customizing-app-builder-components',
            'projects/frontend/app-components-using-component-property-inputs',
            'projects/frontend/app-components-customizing-styling-on-components',
            'projects/frontend/app-components-setting-event-listeners-on-components',
            'projects/frontend/app-components-component-categories',
            'projects/frontend/app-components-component-groups',
            {
              type: 'category',
              label: 'Components',
              items: [
                'projects/frontend/app-components-common-component-properties',
                'projects/frontend/app-components-common-component-style-attributes',
                //{
                 // type: 'category',
                 // label: 'Form Components',
                 // items: [
                 //   'projects/frontend/app-components-form-components-overview',
                 // ],
               // },
                {
                  type: 'category',
                  label: 'Layout Components',
                  items: [
                    'projects/frontend/app-components-layout-components-async-content',
                    'projects/frontend/app-components-layout-components-card',
                    'projects/frontend/app-components-layout-components-container',
                    'projects/frontend/app-components-layout-components-footer',
                    'projects/frontend/app-components-layout-components-header',
                    'projects/frontend/app-components-layout-components-menu',
                    'projects/frontend/app-components-layout-components-paper',
                    'projects/frontend/app-components-layout-components-popper',
                  ],
                },
                {
                  type: 'category',
                  label: 'Control Components',
                  items: [
                    'projects/frontend/app-components-control-components-form-block',
                    'projects/frontend/app-components-control-components-autocomplete',
                    'projects/frontend/app-components-control-components-button',
                    'projects/frontend/app-components-control-components-checkbox',
                    'projects/frontend/app-components-control-components-date-picker',
                    'projects/frontend/app-components-control-components-field-array',
                    'projects/frontend/app-components-control-components-file-picker-8base',
                    'projects/frontend/app-components-control-components-file-picker-button-8base',
                    'projects/frontend/app-components-control-components-file-dropzone-8base',
                    'projects/frontend/app-components-control-components-file-upload',
                    'projects/frontend/app-components-control-components-file-picker-button',
                    'projects/frontend/app-components-control-components-file-dropzone',
                    'projects/frontend/app-components-control-components-multiselect',
                    'projects/frontend/app-components-control-components-radio',
                    'projects/frontend/app-components-control-components-radio-group',
                    'projects/frontend/app-components-control-components-select',
                    'projects/frontend/app-components-control-components-slider',
                    'projects/frontend/app-components-control-components-switch',
                    'projects/frontend/app-components-control-components-text-field',
                    'projects/frontend/app-components-control-components-time-picker',
                    'projects/frontend/app-components-control-components-toggle-button',
                    'projects/frontend/app-components-control-components-toggle-button-group',
                  ],
                },
                {
                  type: 'category',
                  label: 'Data Components',
                  items: [
                    'projects/frontend/app-components-data-components-looper',
                  ],
                },
                {
                  type: 'category',
                  label: 'Other Components',
                  items: [
                    'projects/frontend/app-components-other-components-accordion',
                    'projects/frontend/app-components-other-components-alert',
                    'projects/frontend/app-components-other-components-avatar',
                    'projects/frontend/app-components-other-components-badge',
                    'projects/frontend/app-components-other-components-breadcrumbs',
                    'projects/frontend/app-components-other-components-chip',
                    'projects/frontend/app-components-other-components-divider',
                    'projects/frontend/app-components-other-components-heading',
                    'projects/frontend/app-components-other-components-icon',
                    'projects/frontend/app-components-other-components-icon-button',
                    'projects/frontend/app-components-other-components-image',
                    'projects/frontend/app-components-other-components-link',
                    'projects/frontend/app-components-other-components-list',
                    'projects/frontend/app-components-other-components-list-item',
                    'projects/frontend/app-components-other-components-nav-list-item',
                    'projects/frontend/app-components-other-components-table',
                    'projects/frontend/app-components-other-components-text',
                    'projects/frontend/app-components-other-components-tooltip',
                    'projects/frontend/app-components-other-components-typography',
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'Connecting to Data Sources',
          items: [
            'projects/frontend/connecting-to-data-sources-introduction',
            {
              type: 'category',
              label: 'Creating API Connections',
              items: [
                'projects/frontend/connecting-to-data-sources-creating-api-connections',
                'projects/frontend/connecting-to-data-sources-creating-api-connections-connecting-to-an-8base-be-workspace',
                'projects/frontend/connecting-to-data-sources-creating-api-connections-connecting-to-a-graphql-api',
                'projects/frontend/connecting-to-data-sources-creating-api-connections-connecting-to-a-rest-api',
              ],
            },
            {
              type: 'category',
              label: 'How to make API Calls (Requests)',
              items: [
                'projects/frontend/connecting-to-data-sources-how-to-make-api-calls',
                'projects/frontend/connecting-to-data-sources-how-to-make-api-calls-how-to-execute-a-graphql-query-mutation',
                'projects/frontend/connecting-to-data-sources-how-to-make-api-calls-how-to-execute-a-rest-api-call',
              ],
            },
            'projects/frontend/connecting-to-data-sources-send-form-data-with-an-api-request',
          ],
        },
        {
          type: 'category',
          label: 'Data in the Frontend (State)',
          items: [
            'projects/frontend/data-in-the-frontend-introduction',
            'projects/frontend/data-in-the-frontend-understanding-local-vs-global-state-objects',
            {
              type: 'category',
              label: 'Data scopes for App Builder Elements',
              items: [
                'projects/frontend/data-in-the-frontend-data-scopes-for-app-builder-elements-layouts',
                'projects/frontend/data-in-the-frontend-data-scopes-for-app-builder-elements-views',
                'projects/frontend/data-in-the-frontend-data-scopes-for-app-builder-elements-requests',
                'projects/frontend/data-in-the-frontend-data-scopes-for-app-builder-elements-resource',
                'projects/frontend/data-in-the-frontend-data-scopes-for-app-builder-elements-functions',
                'projects/frontend/data-in-the-frontend-data-scopes-for-app-builder-elements-components',
                // "projects/frontend/data-in-the-frontend-(state)-data-scopes-for-app-builder-elements-theme"
              ],
            },
            'projects/frontend/data-in-the-frontend-getting-and-setting-state-data',
            'projects/frontend/data-in-the-frontend-adding-custom-state-data-entries',
          ],
        },
        {
          type: 'category',
          label: 'Custom Frontend Logic',
          items: [
            'projects/frontend/custom-frontend-logic-introduction',
            {
              type: 'category',
              label: 'Creating custom frontend functions',
              items: [
                'projects/frontend/custom-frontend-logic-creating-custom-frontend-functions',
              ],
            },
            {
              type: 'category',
              label: 'Calling frontend functions',
              items: [
                'projects/frontend/custom-frontend-logic-calling-frontend-functions',
                'projects/frontend/custom-frontend-logic-calling-a-function-from-an-event',
                'projects/frontend/custom-frontend-logic-calling-a-function-from-a-callback',
                'projects/frontend/custom-frontend-logic-calling-a-function-from-a-function',
              ],
            },
            'projects/frontend/custom-frontend-logic-using-installed-js-libraries-in-scripts',
          ],
        },
        {
          type: 'category',
          label: 'Triggering Events in the App',
          items: [
            'projects/frontend/triggering-events-in-the-app-introduction',
            'projects/frontend/triggering-events-in-the-app-specifying-events-in-editor',
            'projects/frontend/triggering-events-in-the-app-managing-events-on-components-and-requests',
            'projects/frontend/triggering-events-in-the-app-triggering-events-in-custom-frontend-logic',
          ],
        },
        {
          type: 'category',
          label: 'Images and Files in App Builder',
          items: [
            'projects/frontend/images-and-files-in-app-builder-introduction',
            'projects/frontend/images-and-files-in-app-builder-uploading-an-image-or-file',
            'projects/frontend/images-and-files-in-app-builder-displaying-an-image-or-file-on-a-page',
            // "projects/frontend/images-and-files-in-app-builder-available-attributes-on-uploaded-files",
            // "projects/frontend/images-and-files-in-app-builder-available-attributes-on-uploaded-images"
          ],
        },
        {
          type: 'category',
          label: 'Publishing Apps',
          items: [
            'projects/frontend/publishing-apps-introduction',
            'projects/frontend/publishing-apps-making-an-app-public',
            'projects/frontend/publishing-apps-seeing-deployment-history',
            // "projects/frontend/publishing-apps-deployment-settings",
            // "projects/frontend/publishing-apps-cname-records-for-custom-domain",
            // "projects/frontend/publishing-apps-adding-ssl-to-custom-domains",
            // "projects/frontend/publishing-apps-publishing-apps-to-a-cdn"
          ],
        },
          ],
    },
  ],
};

module.exports = sidebars;

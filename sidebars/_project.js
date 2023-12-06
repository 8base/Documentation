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
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'projects/introduction/index',
      },
      items: [
        'projects/introduction/01-what-is-8base',       
        'projects/introduction/05-backend-capabilities-overview',       
        'projects/introduction/07-built-application-architecture',
        'projects/introduction/08-using-8base-at-scale',       
        'projects/introduction/10-developer-resources',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'projects/gettingstarted/gettingstarted-index',
      },
      items: [
        {
          type: 'category',
          label: 'Walkthroughs',
          link: {
            type: 'doc',
            id: 'projects/gettingstarted/walkthroughs',
          },
          items: [
            'projects/gettingstarted/walkthroughs-backend-movieapp',            
          ],
        },      
        {
          type: 'category',
          label: 'Common Tasks',
          link: {
            type: 'doc',
            id: 'projects/gettingstarted/common-tasks-index',
          },
          items: [
            'projects/gettingstarted/common-tasks-configuring-role-based-access-control',
            'projects/gettingstarted/common-tasks-using-groups-and-aggregations-queries',
            'projects/gettingstarted/common-tasks-create-multiple-records-single-operation',
            'projects/gettingstarted/common-tasks-extending-the-api',           
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '8base Home',
      link: {
             type: 'doc',
             id: 'projects/8basehome/8basehome-index',
            },
          items: [                    
              {
              type: 'category',
              label: 'Projects',
              link: {
                    type: 'doc',
                    id: 'projects/8basehome/projects/projects-index',
                    },
                items: [
                  'projects/8basehome/projects/creating-projects',
                  {
                    type: 'category',
                    label: 'Project Dashboard Walkthrough',
                    link: {
                      type: 'doc',
                          id: 'projects/8basehome/projects/projects-dashboard-walkthrough',
                          },
                        items: [                 
                            'projects/8basehome/projects/projects-backend-ui',
                            'projects/8basehome/projects/projects-team-management',
                            'projects/8basehome/projects/projects-billing', 
                            'projects/8basehome/projects/projects-settings',                   
                          ],
                      },
                    ],
                  },
              {
                type: 'category',
                label: 'Organizations',
                link: {
                      type: 'doc',
                      id: 'projects/8basehome/organizations/organizations-index',
                      },
                  items: [
                    'projects/8basehome/organizations/organizations-overview',
                    'projects/8basehome/organizations/organizations-team-management',
                    'projects/8basehome/organizations/organizations-billing',                 
                  ],
                },               
            ],
        },                
    {
      type: 'category',
      label: 'Backend Development',
      link: {
        type: 'doc',
        id: 'projects/backend/backend-index',
      },
      items: [
        {
          type: 'category',
          label: 'Backend Overview',
          link: {
            type: 'doc',
            id: 'projects/backend/getting-started-readme',
          },
          items: [
            'projects/backend/getting-started-quick-start',
            'projects/backend/getting-started-connecting-to-api',
          ],
        },
        {
          type: 'category',
          label: 'Data',
          link: {
            type: 'doc',
            id: 'projects/backend/data/data-index',
          },
          items: [
            {
              type: 'category',
              label: 'Data Builder',
              link: {
                type: 'doc',
                id: 'projects/backend/data/8base-console-platform-tools-data-builder',
              },
              items: [
                {
                  type: 'category',
                  label: 'Fields',
                  link: {
                    type: 'doc',
                    id: 'projects/backend/data/data-fields-index',
                  },
                  items: [                    
                    'projects/backend/data/data-fields-text',
                    'projects/backend/data/data-fields-number',
                    'projects/backend/data/data-fields-date',  
                    'projects/backend/data/data-fields-switch',  
                    'projects/backend/data/data-fields-file',  
                    'projects/backend/data/data-fields-table',  
                    'projects/backend/data/data-fields-smart',
                    'projects/backend/data/data-fields-json',
                    'projects/backend/data/data-fields-geo',
                    'projects/backend/data/data-fields-advanced-settings',              
                  ],
                },              
              ],
            },            
            {
              type: 'category',
              label: 'Data Viewer',
              link: {
                type: 'doc',
                id: 'projects/backend/data/8base-console-platform-tools-data-viewer',
              },
              items: [
                'projects/backend/data/data-table-importing',
                'projects/backend/data/8base-console-handling-files',
                'projects/backend/8base-console-plugins-integrations-salesforce',             
              ],
            },
            {
              type: 'category',
              label: 'Data Settings',
              link: {
                type: 'doc',
                id: 'projects/backend/data/data-settings',
              },
              items: [
                'projects/backend/data/data-table-indexes',                             
              ],
            },            
          ],
        },
        {
          type: 'category',
          label: 'Custom Functions',
          link: {
            type: 'doc',
            id: 'projects/backend/custom-functions/custom-functions-readme',
          },
          items: [
            {
              type: 'category',
              label: 'Development Environment',
              link: {
                type: 'doc',
                id: 'projects/backend/development-tools-dev-env-readme',
              },
              items: [
                'projects/backend/development-tools-dev-env-project-structure',
                'projects/backend/development-tools-dev-env-8base-yml',
                'projects/backend/development-tools-dev-env-runtime-environment',                
              ],
            },
            {
              type: 'category',
              label: 'Working with Custom Functions',
              link: {
                type: 'doc',
                id: 'projects/backend/custom-functions/custom-functions-types',
              },
              items: [
                'projects/backend/custom-functions/custom-functions-resolvers',
                'projects/backend/custom-functions/custom-functions-triggers',
                'projects/backend/custom-functions/custom-functions-webhooks',
                'projects/backend/custom-functions/custom-functions-tasks',             
              ],
            },
            'projects/backend/custom-functions/custom-functions-debugging',
            'projects/backend/custom-functions/custom-functions-deployment',
            'projects/backend/custom-functions/custom-functions-executing-functions',
            'projects/backend/custom-functions/custom-functions-logs',
          ],
        },
        {
          type: 'category',
          label: 'GraphQL API Overview',
          link: {
            type: 'doc',
            id: 'projects/backend/graphql/graphql-api-readme'
          },
          items: [
            
                {
                  type: 'category',
                  label: 'GraphQL Queries',
                  link: {
                    type: 'doc',
                    id: 'projects/backend/graphql/graphql-api-queries-readme',
                  },
                  items: [
                    'projects/backend/graphql/graphql-api-queries-single-record-query',
                    'projects/backend/graphql/graphql-api-queries-record-list-query',
                    'projects/backend/graphql/graphql-api-queries-related-data',
                   // {
                    //  type: 'category',
                   //   label: 'Related Data',
                    //  link: {
                    //    type: 'doc',
                    //    id: 'projects/backend/graphql/graphql-api-queries-related-data',
                    //  },
                    //  items: [
                    //   'projects/backend/graphql/graphql-api-queries-related-record-retrieve-list',
                     //   'projects/backend/graphql/graphql-api-queries-related-record-query',                                
                     // ],
                   // },
                    'projects/backend/graphql/graphql-api-queries-combining-queries',
                    'projects/backend/graphql/graphql-api-queries-combining-arguments',
                    'projects/backend/graphql/graphql-api-queries-sort-list-query',
                    'projects/backend/graphql/graphql-api-queries-filtered-list-query',
                    'projects/backend/graphql/graphql-api-queries-paginated-query-results',
                    'projects/backend/graphql/graphql-api-queries-aggregation-query',
                    'projects/backend/graphql/graphql-api-grouping-and-aggregations-readme',                   
                    'projects/backend/graphql/graphql-api-geo-fields-readme',                     
                  ],
                },
                {
                  type: 'category',
                  label: 'GraphQL Mutations',
                  link: {
                    type: 'doc',
                    id: 'projects/backend/graphql/graphql-api-mutations-readme',
                  },
                  items: [
                    'projects/backend/graphql/graphql-api-mutations-single-record-mutations',
                    'projects/backend/graphql/graphql-api-mutations-update-by-filter-mutations',
                    'projects/backend/graphql/graphql-api-mutations-related-record-mutations',                    
                  ],
                },
                {
                  type: 'category',
                  label: 'GraphQL Subscriptions',
                  link: {
                    type: 'doc',
                    id: 'projects/backend/graphql/graphql-api-subscriptions-readme',
                  },
                  items: [
                    'projects/backend/graphql/graphql-api-subscriptions-simple-record-subscriptions',
                    'projects/backend/graphql/graphql-api-subscriptions-complex-record-subscriptions',                 
                  ],
                },
                'projects/backend/graphql/graphql-api-variables',
                // {
                //  type: 'category',
                //  label: 'GraphQL Code Samples',
                //  link: {
                //    type: 'doc',
                //    id: 'projects/backend/graphql/graphql-api-code-samples',
                 // },
                 // items: [                   
                 //   'projects/backend/graphql/graphql-api-subscriptions-client',
                 // ],
               // },
                'projects/backend/graphql/graphql-api-error-handling',
              ], 
        },
        'projects/backend/8base-console-platform-tools-api-explorer',
        {
          type: 'category',
          label: 'App Services',
          link: {
            type: 'doc',
            id: 'projects/backend/app-services/app-services-index',
          },
          items: [                
            {
              type: 'category',
              label: 'Roles and Permissions',
              link: {
                type: 'doc',
                id: 'projects/backend/app-services/roles-and-permissions',
              },
              items: [
                // 'projects/backend/app-services/app-services-data-permissions',
                // 'projects/backend/app-services/app-services-apps',
                'projects/backend/app-services/administer-users',
              ],
            },
            {
              type: 'category',
              label: 'Authentication',
              link: {
                type: 'doc',
                id: 'projects/backend/app-services/authentication-index',
              },
              items: [
                'projects/backend/app-services/authentication-8base',
                'projects/backend/app-services/authentication-auth0',
                'projects/backend/app-services/authentication-openID',
              ],
            },        
          ],
        },       
        {
          type: 'category',
          label: 'Continuous Integration and Continuous Deployment (CI/CD)',
          link: {
            type: 'doc',
            id: 'projects/backend/8base-console-platform-tools-ci-cd',
          },
          items: [                      
            
          ],
        }, 
       // {
       //   type: 'category',
       //   label: 'Plugins and Integrations',
       //   link: {
       //     type: 'doc',
       //     id: 'projects/backend/8base-console-plugins-integrations-readme',
       //   },
       //   items: [
       //     
       //   ],
       // },
        
      ],
    },    
    {
      type: 'category',
      label: 'Advanced',
      link: {
        type: 'doc',
        id: 'projects/backend/8base-console-platform-tools-advanced',
      },
      items: [         
            {
              type: 'category',
              label: 'Command Line Interface (CLI)',
              link: {
                type: 'doc',
                id: 'projects/backend/development-tools-cli-readme',
              },
              items: [
                'projects/backend/development-tools-cli-commands',
                'projects/backend/development-tools-cli-generators',
                'projects/backend/development-tools-cli-ci-cd',
              ],
            },
            {
              type: 'category',
              label: 'JavaScript SDK',
              link: {
                type: 'doc',
                id: 'projects/backend/development-tools-sdk-readme',
              },
              items: [
                'projects/backend/development-tools-sdk-api-readme',
                'projects/backend/development-tools-sdk-auth-readme',
                'projects/backend/development-tools-sdk-file-upload',
                'projects/backend/development-tools-sdk-filestack-uploader',
                'projects/backend/development-tools-sdk-vs-code-plugin',
              ],
            },         
        'projects/backend/8base-console-platform-tools-advanced-advanced-introspection',
      ],
    }, 
  ],
};

module.exports = sidebars;

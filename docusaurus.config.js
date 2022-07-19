// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '8base Docs',
  tagline: '8base Platform Documentation',
  url: 'https://docs-silk.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ahmed3520', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars/sidebar.js'),
          routeBasePath: '/',
          sidebarCollapsible:false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/8base/new-docs/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/8base/new-docs/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: { 
        style:'dark',
        logo: {
          alt: '8base Logo',
          src: 'img/logo.svg',
        },
        items: [
          
          {
            type: 'doc',
            docId: 'backend/console-readme',
            position: 'left',
            label: 'Backend',
          },
          {
            type: 'doc',
            docId: 'frontend/getting-started-introduction',
            position: 'left',
            label: 'Frontend',
          },
          {
            href:'https://github.com/8base/new-docs',
            position:'right',
            icon:{
              alt:'github icon',
              src: `/logos/github.svg`,
              href: 'https://github.com/ionic-team/ionic-framework',
              target: '_blank',
            }
          },
          {
            href:'https://twitter.com/8base',
            position:'right',
            icon:{
              alt:'twitter icon',
              src: `/logos/twitter.svg`,
              href: 'https://twitter.com/8base',
              target:'_blank'

            }

          }
        /*   {
            href: 'https://github.com/8base/new-docs',
            position: 'right',
          },
          {
            href: 'https://twitter.com/8base',
            position: 'right',
          },
          */
        ],
      },
  
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/backend/README',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/8base',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/8base',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://8base.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/8base/new-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 8base, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'IJ4YA19CBT',
  
        // Public API key: it is safe to commit it
        apiKey: 'b350c396cfdbb63646a0d4e51d9e1564',
  
        indexName: 'docusaurus_up_tmp',
  
        // Optional: see doc section below
        contextualSearch: false,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
//externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
       // searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
  
        //... other Algolia params
      },
    }),
 

};

module.exports = config;

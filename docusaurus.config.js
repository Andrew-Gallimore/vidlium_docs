// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vidlium Docs',
  tagline: 'Learn about Vidlium and how developers can use its libraries.',
  favicon: 'img/Logo v2.1 - 64px.png',

  // Set the production url of your site here
  url: 'https://docs.vidlium.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'general-guide',
          routeBasePath: 'general-guide',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'vdowrapper',
        path: 'vdowrapper',
        routeBasePath: 'vdowrapper',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Vidlium Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Logo v2.1 - 64px.png',
        },
        items: [
          {
            to: '/general-guide',
            label: 'General Guide',
            position: 'left',
          },
          {
            to: '/vdowrapper', 
            label: 'VDOwrapper', 
            position: 'left',
          },
          {
            href: 'https://github.com/Andrew-Gallimore/vidlium_docs',
            label: 'Docs GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'General Guide',
                to: '/general-guide',
              },
              {
                label: 'VDOwrapper.js',
                to: '/vdowrapper',
              },
            ],
          },
          {
            title: 'Pages',
            items: [
              {
                label: 'Homepage',
                href: 'https://vidlium.com',
              },
              {
                label: 'Docs (here)',
                to: '/',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Docs GitHub',
                href: 'https://github.com/Andrew-Gallimore/vidlium_docs',
              },
              {
                label: 'Directors page GitHub',
                href: 'https://github.com/Andrew-Gallimore/vidlium_director',
              },
              {
                label: 'Website GitHub',
                href: 'https://github.com/Andrew-Gallimore/vidlium_website',
              },
              {
                label: 'Discord in the works...',
                href: '#',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vidlium, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

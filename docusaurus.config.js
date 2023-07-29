// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hello',
  tagline: 'Andrei Builds Software',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://andrei-builds-software.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AndreySurzhan', // Usually your GitHub org/user name.
  projectName: 'andrei-builds-software.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs:false
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Andrei Builds Software',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: '/resume',
            position: 'left',
            label: 'Resume',
          },
          {
            href: 'https://www.linkedin.com/in/andreisurzhan/',
            label: 'Linkedin',
            position: 'right',
          },
          {
            href: 'https://github.com/AndreySurzhan',
            label: 'GitHub',
            position: 'right',
          },
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resume',
            items: [
              {
                label: 'Resume',
                to: '/resume',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/4043541/andrei-surzhan',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/andrei.surzhan',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/andrei.surzhan/',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Andrei Builds Software, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        href: '/img/apple-touch-icon.png',
        sizes:"180x180"
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/favicon-32x32.png',
        type: "image/png",
        sizes: "32x32"
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/favicon-16x16.png',
        type: "image/png",
        sizes: "16x16"
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    }

  ]
};

module.exports = config;

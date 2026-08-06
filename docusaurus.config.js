// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Portfolio',
  tagline: 'Documentation in a modern doc-as-code workflow to create a portfolio site for Kennedy Binegar, technical writer.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://kbinegar.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docusaurus-portfolio/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kbinegar', // Usually your GitHub org/user name.
  projectName: 'docusaurus-portfolio', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: '/img/kb-social-card.png',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: false,
      },
navbar: {
  title: 'Kennedy Binegar',
  logo: {
    alt: 'My Site Logo',
    src: 'img/logo.svg',
  },
  items: [
    {
      to: '/docs/about',
      position: 'left',
      label: 'About',
      activeBaseRegex: `/docs/intro`,
    },
    {
      to: '/docs/category/portfolio',
      position: 'left',
      label: 'Portfolio',
      activeBaseRegex: `/docs/category/portfolio`,
    },
    { to: '/blog', label: 'Blog', position: 'left' },
    {
      to: '/docs/how-i-built-this',
      position: 'left',
      label: 'How I Built This',
      activeBaseRegex: `/docs/how-i-built-this`,
    },
    
    /* Social media links in the navbar */
    {
      href: 'https://github.com/kbinegar', 
      position: 'right',
      className: 'header-github-link',
      'aria-label': 'GitHub repository',
    },
        {
      href: 'https://www.linkedin.com/in/kennedy-binegar-53060b161', 
      position: 'right',
      className: 'header-linkedin-link',
      'aria-label': 'LinkedIn profile',
    },
  ],
},
      footer: {
        style: 'light',
        links: [
          {
            title: 'Hire Me',
            items: [
              {
                label: 'kcbinegar@gmail.com',
                href: 'mailto:kcbinegar@gmail.com'
              },
              {
                html: 'Portland, OR',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/kennedy-binegar-53060b161',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kbinegar',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                html: 'Rev. July 2026'
              },
              {
                html: 'Hosted on GitHub Pages'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kennedy Binegar. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

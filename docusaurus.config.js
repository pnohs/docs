/**
 * Copyright (c) HPCDE lab, USTB.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteBaseUrl = process.env.NODE_ENV === 'production'? '/hydrology/pnohs-document/' : '/'

module.exports = {
  title: 'pnohs',
  tagline: 'A massively parallel hydrology simulation framework.',
  url: 'https://git.hpcer.dev/HPCer/hydrology/pnohs',
  baseUrl: siteBaseUrl,
  favicon: 'img/favicon.ico',
  organizationName: 'HPCDE lab of USTB', // Usually your GitHub org/user name.
  projectName: 'pnohs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'pnohs',
      logo: {
        alt: 'pnohs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'docs/pnohs/overview', label: 'pnohs', position: 'left'},
        {to: 'docs/pnohs-alpha/overview', label: 'pnohs-alpha', position: 'left'},
        // {to: 'docs/pnohs-alpha-ref/' , label: 'pnohs-alpha Reference',  position: 'left'},
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/pnohs/pnohs',
          label: 'GitHub',
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
              label: 'pnohs guide',
              to: 'docs/pnohs/overview',
            },
            {
              label: 'pnohs-alpha',
              to: 'docs/pnohs-alpha/overview',
            },
            // {
            //   label: 'pnohs-alpha reference',
            //   to: 'docs/doc1',
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Repositories',
          items: [
            {
              label: 'pnohs',
              to: 'https://git.hpcer.dev/HPCer/hydrology/pnohs',
            },
            {
              label: 'pnohs github mirror',
              to: 'https://github.com/pnohs/pnohs',
            },
            {
              label: 'pnohs-alpha',
              to: 'https://git.hpcer.dev/HPCer/hydrology/pnohs-alpha',
            },
            {
              label: 'pnohs-disp',
              to: 'https://git.hpcer.dev/HPCer/hydrology/pnohs-disp',
            },
          ],
        },
      ],
      logo: {
        alt: 'HPCDE lab Source Logo',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} HPCDE lab of USTB. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://git.hpcer.dev/HPCer/hydrology/pnohs-document/blob/master/docs/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

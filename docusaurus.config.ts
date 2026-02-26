import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "MF-DOCTOR",
  tagline:
    "Static analyzer for Module Federation setups. Discovers federation participants, extracts config, and runs checks to catch version drift, shared-config mismatches, and other issues before they hit production.",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // GitHub Pages: https://tiagocastro070.github.io/mf-doctor-docs/
  url: "https://tiagocastro070.github.io",
  baseUrl: "/mf-doctor-docs/",

  organizationName: "tiagocastro070",
  projectName: "mf-doctor-docs",
  trailingSlash: false,

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/tiagocastro070/mf-doctor-docs/tree/main/",
          // Enable when in a git repo: showLastUpdateTime: true
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        googleTagManager: {
          containerId: "G-HQ2DYB13FL",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "MF-DOCTOR",
      // logo: {
      //   alt: "MF-DOCTOR Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/tiagocastro070/mf-doctor",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/intro",
            },
            {
              label: "Getting Started",
              to: "/docs/getting-started/quick-start",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/tiagocastro070/mf-doctor",
            },
            {
              label: "License",
              href: "https://opensource.org/licenses/MIT",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MF-DOCTOR. MIT License.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

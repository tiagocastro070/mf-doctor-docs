import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        description: 'Install mfdoc and run your first analysis.',
      },
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/requirements',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'generated-index',
        title: 'Guides',
        description: 'Configuration, polyrepo, runtime remotes, and CI.',
      },
      items: [
        'guides/configuration',
        'guides/ignoring-findings',
        'guides/polyrepo',
        'guides/runtime-remotes',
        'guides/ci',
        {
          type: 'category',
          label: 'Showcases',
          link: {
            type: 'doc',
            id: 'guides/showcases/index',
          },
          items: [
            'guides/showcases/rsbuild-basic',
            'guides/showcases/webpack-basic',
            'guides/showcases/graph',
            'guides/showcases/json-ci',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'generated-index',
        title: 'Reference',
        description: 'CLI, analyzers, and config schemas.',
      },
      items: [
        'reference/cli',
        'reference/analyzers',
        'reference/config-file',
        'reference/ignore-file',
      ],
    },
  ],
};

export default sidebars;

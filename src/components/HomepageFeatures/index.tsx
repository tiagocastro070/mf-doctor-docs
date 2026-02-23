import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Discover & extract',
    description: (
      <>
        Discovers federation participants (shell + remotes) in your workspace
        and extracts Module Federation config from rsbuild, webpack, and rspack.
      </>
    ),
    to: '/docs/intro',
  },
  {
    title: 'Run analyzers',
    description: (
      <>
        Detects React version drift, shared-config mismatches, duplicate expose
        names, orphan exposes, circular dependencies, and more.
      </>
    ),
    to: '/docs/reference/analyzers',
  },
  {
    title: 'CI-ready',
    description: (
      <>
        JSON output and configurable <code>--fail-on</code> severity. Exit
        non-zero when findings meet your threshold so CI can gate deploys.
      </>
    ),
    to: '/docs/guides/ci',
  },
  {
    title: 'Polyrepo support',
    description: (
      <>
        Use a <code>.code-workspace</code> file to analyze shell and remotes
        across separate repos in one run.
      </>
    ),
    to: '/docs/guides/polyrepo',
  },
];

function Feature({title, description, to}: FeatureItem) {
  return (
    <div className={clsx('col col--6', styles.featureCol)}>
      <Link to={to} className={styles.featureLink}>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
        <span className={styles.featureCta}>Learn more →</span>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

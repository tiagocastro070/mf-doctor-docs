import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--surface", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <div className={styles.buttonsRow}>
            <Link
              className="button button--primary button--lg"
              to="/docs/getting-started/quick-start"
            >
              Get started
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/reference/cli"
            >
              CLI reference
            </Link>
          </div>
          <Link className={styles.seeInActionLink} to="/docs/guides/showcases">
            See it in action
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Static analyzer for Module Federation. Discover participants, extract config, and catch version drift and shared-config mismatches before production."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

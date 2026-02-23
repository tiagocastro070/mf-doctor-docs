import React, { type ReactNode } from "react";
import Footer from "@theme-original/Footer";
import type FooterType from "@theme-original/Footer";
import type { WrapperProps } from "@docusaurus/types";
import styles from "./styles.module.css";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  return (
    <>
      <section className={styles.donationBanner}>
        <div className="container">
          <h2 className={styles.donationTitle}>Enjoying MF-DOCTOR?</h2>
          <p className={styles.donationText}>
            Consider{" "}
            <a
              href="https://buymeacoffee.com/tiago070"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.donationLink}
            >
              supporting its development
            </a>
            .
          </p>
        </div>
      </section>
      <Footer {...props} />
    </>
  );
}

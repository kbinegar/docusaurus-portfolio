import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Kennedy Binegar
        </Heading>
        <p className="hero__subtitle">
          I enjoy untangling complexity.
        </p>
        <p className={styles.heroDescription}>
          Technical writer focused on clear, user-centered documentation: 
          tutorials, docs-as-code, style guides, and content that genuinely
          helps users.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin--sm"
            to="/docs/about">
            About & Resume
          </Link>
          <Link
            className="button button--secondary button--lg margin--sm"
            to="/docs/category/portfolio">
            Portfolio
          </Link>
          <Link
            className="button button--secondary button--lg margin--sm"
            to="/blog">
            Blog
          </Link>
          <Link
            className="button button--secondary button--lg margin--sm"
            to="/docs/how-i-built-this">
            How I Built This Site
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Kennedy Binegar — Technical Writer"
      description="Portfolio and documentation site for Kennedy Binegar, technical writer focused on clear, user-centered documentation.">
      <HomepageHeader />
    </Layout>
  );
}
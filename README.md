# Kennedy Binegar — Docusaurus Portfolio

This site is a small case study in itself — it's built with the same docs-as-code principles I use professionally, applied to my own portfolio.

**Live site:** https://kbinegar.github.io/docusaurus-portfolio/

## Tech Stack

- [Docusaurus](https://docusaurus.io/) — static site generator built on React
- Markdown & MDX for content
- GitHub Actions for CI/CD
- GitHub Pages for hosting

## Local Development

​```bash
npm install
npm run start
​```

This starts a local dev server at `localhost:3000` with live reload.

## Build

​```bash
npm run build
​```

Outputs a static, deployable site to the `build/` folder.

## Pipeline

The site deploys automatically through a GitHub Actions workflow (`.github/workflows/deploy.yml`) that runs on every push to `main`. It follows the standard CI/CD stages:

* **Source:** Code lives in a Git repository on GitHub. Every push to `main` triggers the pipeline.

* **Build:**
    * Checkout the repository
    * Install dependencies with `npm ci`
    * Compile the site with `npm run build`, which compiles all Markdown/MDX content and React components into a static `build/` folder

* **Test:** Docusaurus' build step includes a broken-link check. If any internal link points to a page that does not exist, the build fails outright instead of shipping a broken link. This is currently the only automated check in the pipeline — see "Updates to Come" below for the custom checks I'm adding on top of it.

* **Deploy:**
    * Upload the built `build/` folder as a GitHub Pages artifact
    * Deploy that artifact to the `github-pages` environment, which serves the live site

## Updates to Come

This page will be updated as the site evolves. I am currently building out a custom set of automated checks — using Claude Code to help design and implement them — that will run as part of the GitHub Actions pipeline on every push. Planned checks include:

* **Grammar:** flagging grammatical issues in both doc and blog content.
* **Deployment Validation:** confirming the site builds and deploys cleanly, beyond the broken-link check.
* **File Extension Checks:** enforcing consistent naming and extension conventions across `docs/` and `blog/` (e.g. catching stray or misplaced file types)

The goal is to demonstrate not just the operation of CI/CD tooling, but that I can design and build my own checks tailored to a documentation-heavy site. Once these are in place, I'll add a breakdown and diagram of the pipeline to this page. This will allow users to see the actual build-and-deploy process rather than just reading about it here.

Check back for updates, or follow the [commit history](https://github.com/kbinegar/docusaurus-portfolio/commits/main/) on GitHub to watch it evolve in real time.
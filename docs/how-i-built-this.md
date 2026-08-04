---
sidebar_position: 4
sidebar_label: 'How I Built This'
---
# How I Built This
This site is a small case study in itself — it's built with the same docs-as-code principles I use professionally, applied to my own portfolio.

## Stack
* [**Docusaurus:**](https://docusaurus.io/) A static site generator that uses React as its core framework, built for the purpose of creating documentation-style content.
* **Markdown & MDX:** The content on this site is written in Markdown. Pages that need interactive React components use MDX, allowing me to drop JavaScript XML directly into a Markdown file. 
* **GitHub:** Source control and version history for each change to the site. 
* **GitHub Pages:** Free static hosting, serving the built site directly from my repository. 
* **GitHub Actions:** Automated build and deploy pipeline, triggered on every push to `main`.

## Why Docusaurus
I wanted a portfolio that reflected how I actually work as a technical writer: organized around docs, versioned in Git, and built from plain Markdown rather than a drag-and-drop site builder. Docusaurus gave me:

* A `docs/` folder structure that mirrors real documentation projects (sidebars, categories, versioning support).
* MDX support, so I can mix prose with custom components when needed.
* Built-in blog support, search, and navigation without extra configuration.
* A build process that catches broken internal links before they reach production.

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
* **File Extension Checks:** enforcing consistent naming and extension conventions across `docs/` and `blog/` (e.g. catching stray misplaced file types) 

The goal is to demonstrate not just the operation of CI/CD tooling, but that I can design and build my own checks tailored to a documentation-heavy site. Once these are in place, I'll add a breakdown and diagram of the pipeline to this page. This will allow users to see the actual build-and-deploy process rather than just reading about it here. 

Check back for updates, or follow the [commit history](https://github.com/kbinegar/docusaurus-portfolio/commits/main/) on GitHub to watch it evolve in real time.
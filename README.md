# MCSAATCHI Performance – Website

A responsive, optimized, and performance-focused website built using Next.js and React.

## Tech Stack

| Technology | Version |
|---|---|
| Next.js | 16.4.6 |
| React | 19.3.0 |
| TypeScript | TypeScript 5 |
| Bootstrap | 5.3.9 |
| Bootstrap Icons | 1.13.2 |
| ESLint | 9 |
| Node.js | 20.11.1 |
| npm | 10.5.0 |

Additional dependencies:
- `@livechat/widget-react`
- `@next/third-parties`

## Getting Started

Follow the instructions below to set up and run the project on your local machine.

### Prerequisites

Make sure the following tools are installed:

- **Node.js:** Version 20.9.0 or later.
- **npm:** Version 10.5.0 or compatible.
- **Git:** Required to clone the repository.

You can verify your installed versions using:

```bash
node -v
npm -v
```

### Installation & Setup

**Step 1: Clone the repository**

```bash
git clone https://github.com/AdarshVishwakarma96/mcsaatchiperformance.git
```

**Step 2: Navigate to the project directory**

```bash
cd mcsaatchiperformance
```

**Step 3: Install dependencies**

Install all project dependencies using the committed `package-lock.json` file.

```bash
npm ci
```

**Step 4: Start the development server**

```bash
npm run dev
```

**Step 5: Open the application**

Open the following URL in your browser:

http://localhost:3000

The development server automatically refreshes the application when changes are made to the source files.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server. |
| `npm run build` | Generates an optimized production build. |
| `npm start` | Starts the production server after a successful build. |
| `npm run lint` | Runs ESLint to check code quality and identify potential issues. |

### Production Build

To generate and verify the production build locally:

```bash
npm run build
```

After a successful build, start the production server:

```bash
npm start
```

The production application will be available at:

http://localhost:3000

## Environment Variables

No environment variables are currently required to run this project locally.

## Project Structure

The project follows the Next.js App Router architecture.

```text
mcsaatchiperformance/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── ...
│
├── public/
│   └── ...
│
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
└── README.md
```

**Key directories and files:**

- `app/` – Contains application routes, layouts, pages, and global styles.
- `public/` – Stores static assets such as images, icons, and other media files.
- `package.json` – Defines project dependencies and available npm scripts.
- `package-lock.json` – Maintains consistent dependency versions.
- `next.config.ts` – Next.js configuration.
- `tsconfig.json` – TypeScript configuration.
- `eslint.config.mjs` – ESLint configuration.

*Note: Update the folder tree to reflect the actual project files and directories before publishing.*

## Technical Decisions

The following technologies and approaches are used in the project:

- **Next.js:** Selected for its App Router architecture, server-side rendering capabilities, routing, and built-in performance optimizations.
- **React:** Used to build reusable and maintainable UI components.
- **TypeScript:** Provides static type checking and improves code maintainability.
- **Bootstrap:** Used for responsive layout and UI styling.
- **Bootstrap Icons:** Provides consistent interface icons.
- **npm:** Used for dependency management and project scripts.

## SEO & Performance Optimizations

The project includes website improvements focused on performance, accessibility, and search engine optimization.

Key areas addressed:

- Page metadata and SEO optimization.
- Robots directives for controlling search engine indexing.
- Responsive layouts across different screen sizes.
- Image optimization and lazy loading where appropriate.
- Semantic HTML and accessibility improvements.
- Reusable components and maintainable code structure.
- Performance optimization and Lighthouse evaluation.

## Vercel Deployment

The project is deployed using Vercel.

**Live Deployment:** https://mcsaatchiperformance-nine.vercel.app/

**GitHub Repository:** https://github.com/AdarshVishwakarma96/mcsaatchiperformance.git

### Deployment Steps

1. Push the project code to GitHub.
2. Log in to Vercel.
3. Import the GitHub repository.
4. Configure the project using the Next.js framework preset.
5. Keep the default build command: `npm run build`.
6. Deploy the project.
7. Verify the deployed website and test its functionality.

Vercel can automatically deploy subsequent changes when new commits are pushed to the connected GitHub repository.

### Search Engine Indexing (Noindex)

The Vercel development deployment is configured to prevent search engines from indexing the development version.

The `noindex, nofollow` directives are configured through the Next.js metadata/robots configuration.

**Important:**

- The development deployment should remain excluded from search engine indexing.
- The live production website should have its intended indexing directives enabled.
- Before production release, remove or conditionally disable the development-only `noindex, nofollow` configuration.
- Verify the final robots directives using the browser's page source and an SEO testing tool.

## Performance Comparison

Lighthouse or Google PageSpeed Insights reports should be used to evaluate the improvements made to the website.

The reports should compare the original live website with the updated Vercel deployment.

| Metric | Original Website | Updated Vercel Website |
|---|---|---|
| Performance | [99] | [96] |
| Accessibility | [79] | [95] |
| Best Practices | [100] | [100] |
| SEO | [85] | [69] |

**PageSpeed Insights Reports:**

- Original Website: 
https://pagespeed.web.dev/analysis/https-www-mcsaatchiperformance-com/kip0ohhb3f?form_factor=desktop

https://pagespeed.web.dev/analysis/https-www-mcsaatchiperformance-com/kip0ohhb3f?form_factor=mobile

- Updated Vercel Website: 
https://pagespeed.web.dev/analysis/https-mcsaatchiperformance-nine-vercel-app/eq1olqaumc?form_factor=desktop

https://pagespeed.web.dev/analysis/https-mcsaatchiperformance-nine-vercel-app/eq1olqaumc?form_factor=mobile

*Performance scores may vary depending on network conditions, device configuration, and testing environment.*

## Key Implementation Decisions

Document the important technical decisions made during development, including:

- Component architecture and code organization.
- Responsive design implementation.
- SEO and metadata configuration.
- Image loading and performance strategies.
- Accessibility improvements.
- Third-party integrations and their implementation.

## Future Improvements

With additional development time, the following improvements could be considered:

- Further optimize Core Web Vitals.
- Improve accessibility and WCAG compliance.
- Expand automated testing and code quality checks.
- Review third-party scripts and reduce unnecessary JavaScript.
- Further improve image delivery and loading strategies.
- Conduct additional cross-browser and device testing.

## License

This project was developed as part of a website improvement and technical evaluation assignment.


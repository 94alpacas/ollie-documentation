# ollie-documentation

API Documentation for Ollie HTTP API - includes N8N workflow endpoints, custom webhooks, and additional custom targets.

## Overview

This repository contains the documentation site for the Ollie API, built with [Docusaurus](https://docusaurus.io/) and featuring interactive OpenAPI documentation.

## Features

- 📚 Comprehensive API documentation
- 🔄 Interactive API explorer with OpenAPI/Swagger support
- 🎨 Modern, responsive design
- 🚀 Easy to deploy to GitHub Pages, Netlify, or Vercel
- 📝 Markdown-based documentation with MDX support

## API Endpoints

The documentation covers:

- **N8N Workflows** - Trigger and manage N8N workflows via HTTP webhooks
- **Custom Webhooks** - Custom webhook endpoints for integrations
- **Health Checks** - API health and monitoring endpoints

## Local Development

### Prerequisites

- Node.js 20.0 or higher
- npm 10.0 or higher

### Installation

```bash
cd docs
npm install
```

### Development Server

Start the development server to preview the documentation locally:

```bash
cd docs
npm start
```

This will open the documentation site at `http://localhost:3000`.

### Building for Production

Build the static site for production:

```bash
cd docs
npm run build
```

The built site will be in the `docs/build` directory.

### Serving Production Build

Test the production build locally:

```bash
cd docs
npm run serve
```

## Updating API Documentation

The API documentation is generated from the OpenAPI specification located at `docs/openapi/ollie-api.yaml`.

### Modifying the API Specification

1. Edit the OpenAPI spec file: `docs/openapi/ollie-api.yaml`
2. Regenerate the API docs:

```bash
cd docs
npm run gen-api-docs
```

3. Test your changes locally with `npm start`

### OpenAPI Specification Structure

The OpenAPI spec includes:
- API metadata and versioning
- Server configurations (production, staging, development)
- Authentication schemes
- Endpoint definitions with request/response examples
- Reusable components and schemas

## Deployment

### GitHub Pages

Deploy to GitHub Pages:

```bash
cd docs
npm run deploy
```

### Netlify or Vercel

Both Netlify and Vercel can automatically deploy Docusaurus sites:

1. Connect your repository
2. Set the build command to: `cd docs && npm run build`
3. Set the publish directory to: `docs/build`

## Project Structure

```
.
├── docs/                      # Docusaurus site
│   ├── docs/                  # Documentation markdown files
│   │   ├── api/              # Generated API documentation
│   │   └── intro.md          # Getting started guide
│   ├── openapi/              # OpenAPI specifications
│   │   └── ollie-api.yaml    # Main API specification
│   ├── src/                   # React components and pages
│   ├── static/                # Static assets
│   ├── docusaurus.config.ts   # Docusaurus configuration
│   └── package.json          # Dependencies and scripts
└── README.md                 # This file
```

## Documentation Site Features

### Interactive API Explorer

Each API endpoint includes:
- Method and path
- Description and operation ID
- Request parameters
- Request body schema with examples
- Response codes and schemas
- Authentication requirements
- Try-it-out functionality

### Customization

You can customize the documentation site by:

1. **Branding**: Update colors and styles in `docs/src/css/custom.css`
2. **Logo**: Replace `docs/static/img/logo.svg`
3. **Content**: Edit markdown files in `docs/docs/`
4. **Configuration**: Modify `docs/docusaurus.config.ts`

## Contributing

When adding or updating API endpoints:

1. Update the OpenAPI specification (`docs/openapi/ollie-api.yaml`)
2. Regenerate API docs with `npm run gen-api-docs`
3. Add any additional guides in `docs/docs/`
4. Test locally with `npm start`
5. Submit a pull request

## Support

For questions or issues:
- Check the documentation at the deployed site
- Review the [Docusaurus documentation](https://docusaurus.io/)
- Open an issue in this repository

## License

MIT

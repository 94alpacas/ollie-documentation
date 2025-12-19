---
sidebar_position: 2
---

# Deployment Guide

This guide explains how to deploy the Ollie API documentation to various hosting platforms.

## GitHub Pages (Recommended)

The documentation site is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. **Enable GitHub Pages** in your repository settings:
   - Go to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Push to main branch**: The workflow will automatically build and deploy your site when you push to the `main` branch.

3. **Access your site**: After deployment, your documentation will be available at:
   ```
   https://94alpacas.github.io/ollie-documentation/
   ```

### Manual Deployment

You can also deploy manually using the Docusaurus CLI:

```bash
cd docs
GIT_USER=<your-github-username> npm run deploy
```

## Alternative Hosting Platforms

### Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Base directory**: `docs`
   - **Build command**: `npm run build`
   - **Publish directory**: `docs/build`

3. Deploy! Netlify will automatically deploy on every push to your repository.

### Vercel

1. Import your repository in Vercel
2. Configure the project:
   - **Root Directory**: `docs`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

3. Deploy! Vercel will handle continuous deployment automatically.

### Docker

Build and run the documentation in a Docker container:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY docs/package*.json ./
RUN npm ci

COPY docs/ .
RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

EXPOSE 80
```

## Environment Configuration

### Production URL

Update the production URL in `docs/docusaurus.config.ts`:

```typescript
url: 'https://your-domain.com',
baseUrl: '/',
```

### Custom Domain

For GitHub Pages with a custom domain:

1. Add a `CNAME` file to `docs/static/`:
   ```
   docs.yourdomain.com
   ```

2. Configure your DNS:
   - Add a CNAME record pointing to `<username>.github.io`

3. Enable custom domain in GitHub Pages settings

## Build Optimization

### Production Build

Always test your production build before deploying:

```bash
cd docs
npm run build
npm run serve
```

### Clear Cache

If you encounter build issues, clear the Docusaurus cache:

```bash
cd docs
npm run clear
```

## Continuous Integration

The included GitHub Actions workflow:

- Builds on every push and pull request
- Deploys to GitHub Pages only on pushes to `main`
- Uses Node.js 20 for consistency
- Caches dependencies for faster builds

## Troubleshooting

### Build Failures

If the build fails, check:

1. Node.js version (must be 20.0 or higher)
2. All dependencies are installed: `npm ci`
3. OpenAPI spec is valid
4. No broken internal links

### Deployment Issues

For GitHub Pages deployment issues:

1. Verify GitHub Pages is enabled in repository settings
2. Check workflow permissions in Settings → Actions
3. Review the Actions logs for specific errors

### 404 Errors

If you get 404 errors after deployment:

1. Verify `baseUrl` in `docusaurus.config.ts` matches your hosting setup
2. For GitHub Pages: use `/repository-name/`
3. For custom domains: use `/`

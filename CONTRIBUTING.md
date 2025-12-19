# Contributing to Ollie API Documentation

Thank you for your interest in contributing to the Ollie API documentation! This guide will help you understand how to add or update API endpoints and documentation.

## Quick Start

1. Clone the repository
2. Install dependencies: `cd docs && npm install`
3. Start development server: `npm start`
4. Make your changes
5. Test locally
6. Submit a pull request

## Adding or Updating API Endpoints

### Step 1: Update the OpenAPI Specification

All API endpoints are defined in the OpenAPI specification file:

```
docs/openapi/ollie-api.yaml
```

#### Adding a New Endpoint

Add your endpoint definition to the `paths` section. Example:

```yaml
paths:
  /your-new-endpoint:
    post:
      tags:
        - Your Tag
      summary: Brief description
      description: Detailed description
      operationId: uniqueOperationId
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                field1:
                  type: string
                  example: value1
      responses:
        '200':
          description: Success response
          content:
            application/json:
              schema:
                type: object
                properties:
                  result:
                    type: string
```

#### Updating an Existing Endpoint

1. Find the endpoint in `docs/openapi/ollie-api.yaml`
2. Update the relevant fields (description, parameters, responses, etc.)
3. Ensure examples are up-to-date

### Step 2: Regenerate API Documentation

After updating the OpenAPI spec, regenerate the documentation:

```bash
cd docs
npm run gen-api-docs
```

This will:
- Update the API documentation pages in `docs/docs/api/`
- Update the sidebar navigation
- Preserve the structure based on tags

### Step 3: Test Your Changes

1. Start the development server:
   ```bash
   npm start
   ```

2. Navigate to the API section and verify:
   - New endpoints appear in the sidebar
   - Documentation is clear and complete
   - Examples are correct
   - Try-it-out functionality works

3. Build the production version:
   ```bash
   npm run build
   ```

## Adding General Documentation

### Creating a New Documentation Page

1. Create a new markdown file in `docs/docs/`:
   ```bash
   touch docs/docs/your-new-page.md
   ```

2. Add frontmatter to control sidebar position:
   ```markdown
   ---
   sidebar_position: 3
   ---
   
   # Your Page Title
   
   Content goes here...
   ```

3. The page will automatically appear in the sidebar

### Updating Existing Documentation

Edit the relevant markdown file in `docs/docs/` and save. The development server will hot-reload your changes.

## OpenAPI Specification Best Practices

### Structure Your API by Tags

Use tags to organize endpoints:

```yaml
tags:
  - name: N8N Workflows
    description: Endpoints for N8N workflow webhooks
  - name: Custom Webhooks
    description: Custom webhook endpoints
```

### Provide Comprehensive Examples

Always include realistic examples:

```yaml
example:
  userId: user-123
  email: user@example.com
  timestamp: '2024-01-15T10:30:00Z'
```

### Document All Response Codes

Include all possible HTTP responses:

```yaml
responses:
  '200':
    description: Success
  '400':
    description: Bad request
  '401':
    description: Unauthorized
  '404':
    description: Not found
  '500':
    description: Server error
```

### Use Schema References

For reusable schemas, define them in `components/schemas`:

```yaml
components:
  schemas:
    Error:
      type: object
      properties:
        error:
          type: string
        message:
          type: string

# Then reference them:
responses:
  '400':
    content:
      application/json:
        schema:
          $ref: '#/components/schemas/Error'
```

## Testing

### Local Testing

```bash
cd docs

# Development mode with hot reload
npm start

# Production build
npm run build

# Test production build locally
npm run serve
```

### Validation

Before submitting a PR:

1. ✅ Build succeeds without errors
2. ✅ All links work (no broken links)
3. ✅ OpenAPI spec is valid
4. ✅ Examples are correct and realistic
5. ✅ Navigation is logical

## Deployment

### Automatic Deployment

The documentation automatically deploys to GitHub Pages when changes are merged to `main`.

### Manual Deployment

If needed, deploy manually:

```bash
cd docs
GIT_USER=<your-github-username> npm run deploy
```

## Common Tasks

### Clean Build Cache

If you encounter build issues:

```bash
cd docs
npm run clear
npm run build
```

### Update Dependencies

```bash
cd docs
npm update
```

### Add a New Tag/Category

1. Add the tag to the OpenAPI spec:
   ```yaml
   tags:
     - name: New Category
       description: Description of this category
   ```

2. Add endpoints with this tag
3. Regenerate docs: `npm run gen-api-docs`

## Style Guidelines

### Markdown

- Use ATX-style headers (`#` not underlines)
- Include a blank line before and after headers
- Use fenced code blocks with language identifiers

### OpenAPI

- Use clear, descriptive `operationId` values
- Write descriptions in complete sentences
- Include examples for all request/response fields
- Use consistent naming conventions

## Getting Help

- Check the [Docusaurus documentation](https://docusaurus.io/)
- Review the [OpenAPI Specification](https://swagger.io/specification/)
- Look at existing endpoints for examples
- Open an issue for questions

## Pull Request Process

1. Create a feature branch
2. Make your changes
3. Test locally
4. Update this CONTRIBUTING.md if you add new workflows
5. Submit a pull request with a clear description
6. Wait for review and address feedback

Thank you for contributing! 🎉

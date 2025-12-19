---
sidebar_position: 1
---

# Getting Started

Welcome to the **Ollie API Documentation**! This site provides comprehensive documentation for the Ollie HTTP API.

## Overview

The Ollie API is a collection of HTTP endpoints that includes:

- **N8N Workflow Endpoints** - Trigger and manage N8N workflows
- **Custom Webhooks** - Custom webhook endpoints for integrations
- **Additional Custom Targets** - Specialized endpoints for specific use cases

## Quick Start

### Authentication

Most API endpoints require authentication using an API key. Include your API key in the request headers:

```bash
curl -H "X-API-Key: your-api-key-here" https://your-domain.com/api/health
```

### Base URLs

The API is available at different base URLs depending on the environment:

- **Production**: `https://your-domain.com/api`
- **Staging**: `https://staging.your-domain.com/api`
- **Development**: `http://localhost:3000/api`

## Key Features

### N8N Integration

Trigger N8N workflows via HTTP webhooks. Each workflow has a unique ID that you can use to trigger it programmatically:

```bash
POST /webhooks/n8n/{workflowId}
```

### Custom Webhooks

Create and manage custom webhook endpoints for your integrations. Monitor their status and track usage:

```bash
POST /webhooks/custom/{hookId}
GET /webhooks/custom/{hookId}/status
```

## Next Steps

- Check out the [API Reference](/docs/api/ollie-api) for detailed endpoint documentation
- See example requests and responses in the interactive API documentation

## Need Help?

If you need assistance or have questions:

- Check the API Reference documentation
- Review the examples provided for each endpoint
- Contact API support at support@example.com


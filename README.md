# gds-frontend
Basic sandbox scaffolding of a GDS frontend in Javascript, with next.js

# DHSC
The Get-Adult-Social Care frontend uses OpenAPI spec for their backend to generate Typescript types for frontend.
They are using a monorepo structure with Backend and Frontend in same repo, but different folders, allowing them to more easily share openAPI spec and build pipelines.

## Package.json scripts

Some scripts which won't work in this Repo or straight into anything new we produce, as we'll have different Dbs etc, but give an example of how DHSC setup their scripts for running locally and in CI
```json
{
  "scripts": {
    "test:nocov": "vitest run",
    "test:watch": "vitest",
    "test:setupusers": "tsx ./TestData/setup-test-users.ts",
    "db:test:seed": "tsx ./TestData/seed-test-database.ts",
    "db:migrate": " ./node_modules/@better-auth/cli/dist/index.mjs migrate",
    "db:migrate:ci": " ./node_modules/@better-auth/cli/dist/index.mjs migrate --yes",
    "db:user:add": "tsx scripts/bootstrap-user.ts",
    "openapi:lint": "redocly lint --extends recommended ../gascd_metrics_api/openapi.yaml",
    "openapi:types:generate": "openapi-typescript ../gascd_metrics_api/openapi.yaml -o ./src/metrics-api-schema.d.ts",
    "openapi:types:check": "openapi-typescript ../gascd_metrics_api/openapi.yaml -o ./src/metrics-api-schema.d.ts --check"
  }
}
```

## Directory Structure

`app` - contains all the pages for the front end, folder structure equals url path
`src` - contains all the shared code for the front end, such as components, utils, styles, etc.
---
id: '07-built-application-architecture'
sidebar_label: 'Built Application Architecture'
slug: '/introduction/built-application-architecture'
---
# Built Application Architecture

## Cloud Infrastructure

8base utilizes Amazon Web Services (AWS) for hosting backend applications.

## Data Layer

8base employs a fully redundant and fault-tolerant Aurora MySQL relational database within AWS. For scalability and performance, automatic load-balancing is implemented across these redundant databases.

## Logic Layer

8base uses Amazon Lambda for serverless functions. The supported functions include:

- Custom Resolvers: Custom logic for queries and mutations.
- Triggers: Responses to database events.
- Scheduled and On-demand Tasks: Tasks that run based on a schedule or manual triggering.
- Web Hooks: For external integrations.

## API Layer

8base offers a GraphQL API that provides:

- Auto-generated CRUD commands
- Pagination
- Filtering
- Sorting
- Full-text search
- Groupings
- Aggregations
- Documentation

The API can be extended using custom resolvers through serverless JavaScript and Typescript functions.

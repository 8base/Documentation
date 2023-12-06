---
id: '08-using-8base-at-scale'
sidebar_label: 'Using 8base at Scale'
slug: '/introduction/using-8base-at-scale'
---
# Using 8base at Scale

As businesses grow, so do their technological needs. Scalability isn't just about handling more users; it's about ensuring consistent performance, security, and cost-effectiveness at every level of growth. 8base was built to operate large applications at scale and offers a variety of cloud instance types to cater to different scalability requirements. 

## Introduction

Scaling with 8base is a combination of leveraging its built-in capabilities and implementing best practices. By staying proactive, monitoring performance, and optimizing regularly, you can ensure that your 8base application remains robust and efficient, even as it handles a growing number of users and operations.

### 8base’s Standard Multi-Tenant Infrastructure

This is the default offering from 8base and a great way to get started. It provides a shared environment where resources are distributed among multiple clients. It's designed for quick setup and is most suitable for small to mid-sized applications.

### Dedicated Instances

8base offers the ability to host backend applications in dedicated instances, which  allocate exclusive and isolated cloud resources. This ensures more consistent performance and offers a higher degree of configuration flexibility such as the size and memory of the database server, global clustering, more replicas and tunable parameters, while remaining a fully-managed service.

### Self-Hosted Instances

For businesses that require complete control over their computing environment, 8base offers self-hosted instances. This option allows businesses to run 8base inside of their own AWS account, ensuring full customization, data sovereignty, and the ability to integrate any tool or service. It's the most hands-on option and requires a comprehensive understanding of both infrastructure management and 8base.

## Best Practices

As applications grow and user bases expand, the need for scalable infrastructure becomes paramount. 8base, with its robust architecture built on top of Amazon Web Services (AWS), is designed to handle scale. However, leveraging its full potential requires understanding and strategic implementation. This article delves into best practices and considerations for using 8base at scale.

### Data Layer Optimization

#### Database Indexing

Ensure that your Aurora MySQL database tables are properly indexed using 8base’s indexing functions. Indexing accelerates data retrieval speeds by providing quicker paths to data. Regularly review and optimize indexes based on query patterns.

#### Data Partitioning

For large datasets, consider partitioning your tables. This divides your table into smaller, more manageable pieces and can improve query performance.

### Efficient Use of Serverless Functions

#### Stateless Design

Design your Lambda functions to be stateless. This ensures they can be quickly initiated and terminated, allowing for efficient scaling.

#### Concurrency Management

Monitor and adjust the concurrency settings for your Lambda functions. While AWS Lambda scales automatically, setting appropriate concurrency limits can prevent unexpected spikes and associated costs.

### GraphQL API Considerations

#### Batch Operations

Instead of making multiple individual requests, batch operations where possible. This reduces the number of API calls and the associated overhead.

#### Optimize Queries
Avoid fetching unnecessary data. Use GraphQL's flexibility to request only the data needed, reducing the payload and improving performance.

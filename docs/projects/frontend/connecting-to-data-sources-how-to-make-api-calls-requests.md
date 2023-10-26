---
id: 'connecting-to-data-sources-how-to-make-api-calls'
redirect_from: '/frontend/connecting-to-data-sources/how-to-make-api-calls'
slug: '/projects/frontend/connecting-to-data-sources/how-to-make-api-calls'
---

# How to make API Calls (Requests)

This article describes how developers can think about making API Calls (Requests) in App Builder.

---

When building an app, you'll often need to fetch data from a remote source via an API. This data could be anything from a user's profile information to the latest news stories. Regardless of what the data is, the process for fetching it is generally the same.

In App Builder, we differentiate between Resources and Requests. A Resource is an object that represents a specific API, such as https://myapi.com/v1/. A Request is an object that gets sent to a Resource for execution and contains the parameters necessary to fetch specific data from that API, such as https://myapi.com/v1/users?id=123.

**When you want to fetch data from an API in App Builder, you'll need to first create a Resource and then a Request.**

In the next pages, we'll demonstrate how to create both GraphQL and REST API Requests.

---
id: 'connecting-to-data-sources-creating-api-connections-connecting-to-a-rest-api'
sidebar_label: 'Connecting to a REST API'
slug: '/frontend/connecting-to-data-sources/creating-api-connections/connecting-to-a-rest-api'
---

# Connecting to a REST API

This article describes how developers can quickly create a Resource connected to a 3rd party REST API

___

To set up a REST API as a data source, click on the Resources icon in the left-side menu. It will open a modal that lists all of the available data sources. 

![Resources in App Builder](./_images/ab-resources-1.png)

In the "Add a Resource" area, select "REST API." This will open up a configuration window in which you can specify the name of your API, Base URL, and any default headers and URL parameters.

Click "Save" to save your changes. Once saved, the new data source will be visible in the Resources list when creating Requests. 

![Configuring a REST API](./_images/ab-connecting-to-data-sources-creating-api-connections-connecting-to-a-rest-api.png)

## Making an API Request to the Data Source

Once your Resource gets configured, it will become available in your app! You can then make API requests to it using the Request Modal.

![Request Modal](./_images/ab-resources-requests-1.png)

To create an API request, click on the "+" button in the top-right corner of the Request modal.

In the Request create form, you can select which Resource you want to request and the different settings for that Request. The input variables, headers, and operation type can all be set. These options will vary based on the type of data source you're sending the Request to (e.g, GraphQL, REST, 8base Backend).

![Making a request in the Request Modal](./_images/ab-resources-request-2.png)

After you've made your request, you'll see the response. The data also gets stored in the State pane, making it accessible by components and other parts of your app.

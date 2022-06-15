const fs = require("fs");
const path = require("path");

// This is the old docs to the new docs mapping
const docsMapping = {
  "/docs": "/backend",
  "/docs/getting-started": "/backend/getting-started",
  "/docs/getting-started/quick-start": "/backend/getting-started/quick-start",
  "/docs/getting-started/connecting-to-api":
    "/backend/getting-started/connecting-to-api",
  "/docs/8base-console": "/backend/overview",
  "/docs/8base-console/teams": "/backend/teams",
  "/docs/8base-console/authentication": "/backend/authentication",
  "/docs/8base-console/roles-and-permissions": "/backend/roles-and-permissions",
  "/docs/8base-console/handling-files": "/backend/handling-files",
  "/docs/8base-console/platform-tools/data-builder":
    "/backend/console/data-builder",
  "/docs/8base-console/platform-tools/data-viewer":
    "/backend/console/data-viewer",
  "/docs/8base-console/platform-tools/api-explorer":
    "/backend/console/api-explorer",
  "/docs/8base-console/platform-tools/ci-cd": "/backend/console/ci-cd",
  "/docs/8base-console/platform-tools/functions": "/backend/console/functions",
  "/docs/8base-console/platform-tools/users": "/backend/console/users",
  "/docs/8base-console/platform-tools": "/backend/tools",
  "/docs/8base-console/graphql-api/queries/single-record-query":
    "/backend/graphql-api/queries/single-record-query",
  "/docs/8base-console/graphql-api/queries/related-record-query":
    "/backend/graphql-api/queries/related-record-query",
  "/docs/8base-console/graphql-api/queries/aggregation-query":
    "/backend/graphql-api/queries/aggregation-query",
  "/docs/8base-console/graphql-api/queries/record-list-query":
    "/backend/graphql-api/queries/record-list-query",
  "/docs/8base-console/graphql-api/queries/filtered-list-query":
    "/backend/graphql-api/queries/filtered-list-query",
  "/docs/8base-console/graphql-api/queries/sort-list-query":
    "/backend/graphql-api/queries/sort-list-query",
  "/docs/8base-console/graphql-api/queries/paginated-query-results":
    "/backend/graphql-api/queries/paginated-query-results",
  "/docs/8base-console/graphql-api/queries/combining-arguments":
    "/backend/graphql-api/queries/combining-arguments",
  "/docs/8base-console/graphql-api/queries/combining-queries":
    "/backend/graphql-api/queries/combining-queries",
  "/docs/8base-console/graphql-api/queries": "/backend/graphql-api/queries",
  "/docs/8base-console/graphql-api/mutations/single-record-mutations":
    "/backend/graphql-api/mutations/single-record-mutations",
  "/docs/8base-console/graphql-api/mutations/related-record-mutations":
    "/backend/graphql-api/mutations/related-record-mutations",
  "/docs/8base-console/graphql-api/mutations/update-by-filter-mutations":
    "/backend/graphql-api/mutations/update-by-filter-mutations",
  "/docs/8base-console/graphql-api/mutations": "/backend/graphql-api/mutations",
  "/docs/8base-console/graphql-api/subscriptions/simple-record-subscriptions":
    "/backend/graphql-api/subscriptions/simple-record-subscriptions",
  "/docs/8base-console/graphql-api/subscriptions/complex-record-subscriptions":
    "/backend/graphql-api/subscriptions/complex-record-subscriptions",
  "/docs/8base-console/graphql-api/subscriptions":
    "/backend/graphql-api/subscriptions",
  "/docs/8base-console/graphql-api/geo-fields":
    "/backend/graphql-api/geo-fields",
  "/docs/8base-console/graphql-api/grouping-and-aggregations":
    "/backend/graphql-api/grouping-and-aggregations",
  "/docs/8base-console/graphql-api/variables": "/backend/graphql-api/variables",
  "/docs/8base-console/graphql-api/error-handling":
    "/backend/graphql-api/error-handling",
  "/docs/8base-console/graphql-api": "/backend/graphql-api",
  "/docs/8base-console/custom-functions/resolvers":
    "/backend/custom-functions/resolvers",
  "/docs/8base-console/custom-functions/tasks":
    "/backend/custom-functions/tasks",
  "/docs/8base-console/custom-functions/webhooks":
    "/backend/custom-functions/webhooks",
  "/docs/8base-console/custom-functions/triggers":
    "/backend/custom-functions/triggers",
  "/docs/8base-console/custom-functions/debugging":
    "/backend/custom-functions/debugging",
  "/docs/8base-console/custom-functions": "/backend/custom-functions",
  "/docs/8base-console/plugins-integrations/salesforce":
    "/backend/plugins-integrations/salesforce",
  "/docs/8base-console/plugins-integrations": "/backend/plugins-integrations",
  "/docs/development-tools/dev-env/project-structure":
    "/backend/development-tools/dev-env/project-structure",
  "/docs/development-tools/dev-env/8base-yml":
    "/backend/development-tools/dev-env/8base-yml",
  "/docs/development-tools/dev-env/runtime-environment":
    "/backend/development-tools/dev-env/runtime-environment",
  "/docs/development-tools/dev-env/hosting":
    "/backend/development-tools/dev-env/hosting",
  "/docs/development-tools/dev-env": "/backend/development-tools/dev-env",
  "/docs/development-tools/cli/commands":
    "/backend/development-tools/cli/commands",
  "/docs/development-tools/cli/generators":
    "/backend/development-tools/cli/generators",
  "/docs/development-tools/cli/ci-cd": "/backend/development-tools/cli/ci-cd",
  "/docs/development-tools/cli": "/backend/development-tools/cli",
  "/docs/development-tools/sdk/api": "/backend/development-tools/sdk/api",
  "/docs/development-tools/sdk/auth": "/backend/development-tools/sdk/auth",
  "/docs/development-tools/sdk/file-upload":
    "/backend/development-tools/sdk/file-upload",
  "/docs/development-tools/sdk/vs-code-plugin":
    "/backend/development-tools/sdk/vs-code-plugin",
  "/docs/development-tools/sdk/filestack-uploader":
    "/backend/development-tools/sdk/filestack-uploader",
  "/docs/development-tools/sdk": "/backend/development-tools/sdk",
  "/docs/development-tools/dev-env/project-structure":
    "/backend/development-tools/dev-env/project-structure",
};

const pathToSlug = (docPath) => {
    var isReadme = /README.md/.test(docPath)
    var docKey = ("/docs" + docPath.split("docs/oldDocs")[1])

    if (isReadme) {
        docKey = docKey.replace('/README.md', '');
    } else {
        docKey = docKey.replace('.md', '')
    }

    return docsMapping[docKey];
};

const getAllFiles = function (dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};

const result = getAllFiles("./oldDocs");

// Example paths:
//
//   '/Users/sebscholl/Code/8base/docs/docs/oldDocs/development-tools/dev-env/README.md'
//   '/Users/sebscholl/Code/8base/docs/docs/oldDocs/development-tools/dev-env/hosting.md'
//
const pathToName = (docPath) => {
  var filename = docPath.split("/").pop();
  var formattedName = filename
    .replace(/(-|_)/g, " ")
    .replace(/(\b[a-z](?!\s))/g, (c) => c.toUpperCase())
    .split(".")[0];

  return /README/i.test(formattedName) ? "Overview" : formattedName;
};

const pathToId = (docPath) => {
  return docPath
    .split("/")
    .slice(7)
    .join("-")
    .replace(/_/g, "")
    .replace("oldDocs-", "")
    .split(".")[0]
    .toLowerCase();
};

function ensureDirectoryExistence(filePath) {
    var dirname = path.dirname(filePath);
    
    if (fs.existsSync(dirname)) {
        return true;
    }

    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
}

result.forEach((docPath) => {
  if (docPath.endsWith(".md") && !/_archive/.test(docPath)) {
    var id = pathToId(docPath)
    var name = pathToName(docPath)
    var slug = pathToSlug(docPath)
    var newPathFull = path.resolve(__dirname, 'backend', id + '.md')

    var meta = `---
id: '${id}'
sidebar_label: '${name}'
slug: '${slug}'
---

`;
    
    const doc = fs.readFileSync(docPath, 'utf-8')

    console.log('Writing ', id)
    
    ensureDirectoryExistence(newPathFull)
    fs.writeFileSync(newPathFull, meta + doc)
  } else {
    console.log("Not Markdown file, skipping...\n   ", docPath, "\n");
  }
});

const fs = require("fs");
const path = require("path");

const pathToSlug = (docPath) => {
  var isReadme = /README.md/.test(docPath);
  var docKey = "/docs" + docPath.split("docs/oldDocs")[1];

  if (isReadme) {
    docKey = docKey.replace("/README.md", "");
  } else {
    docKey = docKey.replace(".md", "");
  }

  return docsMapping[docKey];
};

const readToc = function (dirPath, arrayOfFiles) {
  return fs.readFileSync(dirPath, "utf-8").split("\n");
};

const result = readToc("./.toc");

var sidebar = [];

var category = {
  type: "category",
  label: undefined,
  items: [],
};

var nestedCategory = {
  type: "category",
  label: undefined,
  items: [],
};

var currentCategory;
var currentNestedCategory;

// {
//     type: 'category',
//     label: 'Command Line Interface (CLI)',
//     items: [
//       'frontend/development-tools-cli-readme',
//     ],
//   }

const topicToId = (topic) => {
  var a = currentCategory.replaceAll(/-/g, "");
  var b = (currentNestedCategory || "").replaceAll(/-/g, "");
  var c = topic.replaceAll(/-/g, "");

  return `${a} ${b} ${c}`.replaceAll(/(\s+|\/)/g, "-").toLowerCase();
  s;
};

const topicToName = (topic) => {
  return topic
    .replace(/[^a-z0-9 -]/gi, "")
    .replace(/\s+/g, " ")
    .trim();
};

const topicToSlug = (name) => {
  var a = currentCategory.replaceAll(/-/g, "");
  var b = (currentNestedCategory || "").replaceAll(/-/g, "");
  var c = name
    .replace(/[^a-z0-9\s+]/gi, " ")
    .trim()
    .replace(/ /g, '-');

  return `/${a}/${b}/${c}`.replaceAll(/(\s+)/g, "-").toLowerCase();
};

function writeDoc(topic) {
  //   console.log(topic);
  var id = topicToId(topic);
  var name = topicToName(topic);
  var slug = topicToSlug(name);

  var newPathFull = path.resolve(__dirname, "frontend", id + ".md");

  var meta = `---
id: '${id}'
sidebar_label: '${name}'
slug: '${slug}'
---

# ${name}

...coming soon.
`;
      
  return id // fs.writeFileSync(newPathFull, meta)
}

result.forEach((topic, i) => {
  // Is new category
  if (/:/.test(topic)) {
    // Add last category to sidebar
    sidebar.push(category);
    // Update current category
    currentCategory = topic.replace(":", "");
    // Create new category
    category = {
      type: "category",
      label: currentCategory,
      items: [],
    };
  }
  // Is nested category
  else if (/>/.test(topic)) {
    currentNestedCategory = topic.replace(" >", "");

    nestedCategory.label = currentNestedCategory;
  }
  // If nested doc
  else if (/- /.test(topic)) {
    var id = writeDoc(topic);

    nestedCategory.items.push(id);

    if (!/- /.test(result[i + 1])) {
      category.items.push(nestedCategory);

      // Create new nested category
      nestedCategory = {
        type: "category",
        label: undefined,
        items: [],
      };
    }
  }
  // If docs
  else if (topic != "") {
    var id = writeDoc(topic);

    category.items.push(id);
  }
});

fs.writeFileSync(path.resolve(__dirname, 'sidebar22.js'), JSON.stringify(sidebar, null, 2))
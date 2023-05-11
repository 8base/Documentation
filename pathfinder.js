/**
 * This function is to be called with 'npm run build'
 * It iterates thorugh all .md files in /docs folder recursively
 * and saves an array of all redirect links to ./redirects.json
 * redirects.json is used during built time by Docusaurus
 */

const fs = require('fs');
const path = require('path');

async function traverseDirectory(dir) {
  const files = await fs.promises.readdir(dir);
  const contents = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await fs.promises.stat(filePath);

    if (stats.isDirectory()) {
      const subdirContents = await traverseDirectory(filePath);
      contents.push(...subdirContents);
    } else if (path.extname(file) === '.md') {
      const data = await fs.promises.readFile(filePath, 'utf-8');
      const lines = data.split('\n');
      let inHeader = false;
      let redirectFrom = '';
      let slug = '';

      for (const line of lines) {
        if (line.startsWith('---')) {
          inHeader = !inHeader;
        } else if (inHeader) {
          let [key, value] = line.split(':').map((s) => s.trim());

          // Trim quotation marks from value
          if (
            value.charAt(0) === value.charAt(value.length - 1) &&
            (value.charAt(0) === "'" || value.charAt(0) === '"')
          ) {
            value = value.slice(1, -1); // Remove first and last character
          }

          if (key === 'redirect_from') {
            redirectFrom = value;
          } else if (key === 'slug') {
            slug = value;
          }
        } else {
          break;
        }
      }

      const content = {
        from: redirectFrom,
        to: slug,
      };

      if (redirectFrom) {
        contents.push(content);
      }
    }
  }

  return contents;
}

async function writeContentsToFile(contents, filePath) {
  const data = JSON.stringify(contents, null, 2);
  await fs.promises.writeFile(filePath, data);
  console.log(`Wrote contents to file: ${filePath}`);
}

async function main() {
  const contents = await traverseDirectory('./docs');
  await writeContentsToFile(contents, './redirects.json');
}

main();

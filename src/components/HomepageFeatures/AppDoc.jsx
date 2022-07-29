import React from "react";

import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const backendList = {
  "Welcome": "https://docs.8base.com/backend",
  "Getting Started": "https://docs.8base.com/backend/getting-started",
  "Backend Console": "https://docs.8base.com/backend/overview",
  "GraphQL API": "https://docs.8base.com/backend/graphql-api",
  "Custom Functions": "https://docs.8base.com/backend/custom-functions",
  "Plugins and Integrations": "https://docs.8base.com/backend/plugins-integrations",
  "Local Environment": "https://docs.8base.com/backend/development-tools/dev-env",
  "Command-line (CLI)": "https://docs.8base.com/backend/development-tools/cli",
}

const frontendList = {
  "Getting Started": "https://docs.8base.com/frontend/building-frontends-app-builder-walkthrough/introduction",
  "App Editor": "https://docs.8base.com/frontend/app-editor/introduction",
  "App Styling": "https://docs.8base.com/frontend/custom-app-styling/introduction",
  "Responsive Design": "https://docs.8base.com/frontend/responsive-design-in-app-builder/introduction",
  "Application Layouts": "https://docs.8base.com/frontend/application-layouts/introduction",
  "App Navigation": "https://docs.8base.com/frontend/app-navigation/introduction",
  "App Components": "https://docs.8base.com/frontend/app-components/introduction",
  "Connecting to APIs": "https://docs.8base.com/frontend/connecting-to-data-sources/introduction"
}

function DocumentList({ data }) {
  return (
    <div className={styles.doc_urls}>
      <ul className={styles.ul_home}>
        {Object.entries(data).map((entry, index) => {
          let [label, url] = entry
          return (
            <li key={'li-' + index}>
              <Link href={`${url}`} style={{ color: "#0874f9" }}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const AppDoc = ({ renderItem }) => <DocumentList data={(renderItem == "backend" ? backendList : frontendList)} />;

export default AppDoc;

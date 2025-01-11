import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const openSource = {
  githubConvertedToken: process.env.GITHUB_TOKEN,
  githubUserName: process.env.GITHUB_USERNAME,
};

const query_pr = {
  query: `
  query {
    user(login: "${openSource.githubUserName}") {
      pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
        totalCount
        nodes {
          id
          title
          url
          state
          mergedBy {
            avatarUrl
            url
            login
          }
          createdAt
          number
          changedFiles
          additions
          deletions
          baseRepository {
            name
            url
            owner {
              avatarUrl
              login
              url
            }
          }
        }
      }
    }
  }
  `,
};

const query_issue = {
  query: `query {
    user(login: "${openSource.githubUserName}") {
      issues(last: 100, orderBy: {field:CREATED_AT, direction: DESC}) {
        totalCount
        nodes {
          id
          closed
          title
          createdAt
          url
          number
          assignees(first: 100) {
            nodes {
              avatarUrl
              name
              url
            }
          }
          repository {
            name
            url
            owner {
              login
              avatarUrl
              url
            }
          }
        }
      }
    }
  }`,
};

const query_org = {
  query: `query {
    user(login: "${openSource.githubUserName}") {
      repositoriesContributedTo(last: 100) {
        totalCount
        nodes {
          owner {
            login
            avatarUrl
            __typename
          }
        }
      }
    }
  }`,
};

const query_pinned_projects = {
  query: `
  query {
    user(login: "${openSource.githubUserName}") {
      pinnedItems(first: 6, types: REPOSITORY) {
        totalCount
        nodes {
          ... on Repository {
            id
            name
            createdAt
            url
            description
            isFork
            languages(first: 10) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
  `,
};

const baseUrl = "https://api.github.com/graphql";

const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + openSource.githubConvertedToken,
};

// Utility to handle fetching and error logging
const fetchData = (query, filePath) => {
  fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(query),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.statusText}`);
      }
      console.log(`Fetching data for ${filePath}...\n`);
      return response.text();
    })
    .then((txt) => {
      const data = JSON.parse(txt);
      processFetchedData(data, filePath);
    })
    .catch((error) => console.log(`Error while fetching data for ${filePath}: ${error.message}`));
};

// Process and save the fetched data
const processFetchedData = (data, filePath) => {
  let cropped = { data: [] };

  // Process pull requests
  if (filePath === "./src/shared/opensource/pull_requests.json") {
    cropped["data"] = data["data"]["user"]["pullRequests"]["nodes"];
    let open = 0, closed = 0, merged = 0;
    cropped["data"].forEach((pr) => {
      if (pr["state"] === "OPEN") open++;
      else if (pr["state"] === "MERGED") merged++;
      else closed++;
    });
    cropped["open"] = open;
    cropped["closed"] = closed;
    cropped["merged"] = merged;
    cropped["totalCount"] = cropped["data"].length;
  }

  // Process issues
  else if (filePath === "./src/shared/opensource/issues.json") {
    cropped["data"] = data["data"]["user"]["issues"]["nodes"];
    let open = 0, closed = 0;
    cropped["data"].forEach((issue) => {
      if (issue["closed"] === false) open++;
      else closed++;
    });
    cropped["open"] = open;
    cropped["closed"] = closed;
    cropped["totalCount"] = cropped["data"].length;
  }

  // Process contributed organizations
  else if (filePath === "./src/shared/opensource/organizations.json") {
    const orgs = data["data"]["user"]["repositoriesContributedTo"]["nodes"];
    let newOrgs = { data: [] };
    orgs.forEach((org) => {
      const obj = org["owner"];
      if (obj["__typename"] === "Organization" && !newOrgs["data"].some((existing) => JSON.stringify(existing) === JSON.stringify(obj))) {
        newOrgs["data"].push(obj);
      }
    });
    cropped = newOrgs;
  }

  // Process pinned projects
  else if (filePath === "./src/shared/opensource/projects.json") {
    const projects = data["data"]["user"]["pinnedItems"]["nodes"];
    let newProjects = { data: [] };
    projects.forEach((obj) => {
      const langobjs = obj["languages"]["nodes"];
      const newLangobjs = langobjs.filter((lang) => languages_icons[lang["name"]]).map((lang) => ({
        name: lang["name"],
        iconifyClass: languages_icons[lang["name"]],
      }));
      obj["languages"] = newLangobjs;
      newProjects["data"].push(obj);
    });
    cropped = newProjects;
  }

  // Save the data to a file
  fs.writeFile(filePath, JSON.stringify(cropped), (err) => {
    if (err) {
      console.log(`Error writing to file ${filePath}:`, err);
    } else {
      console.log(`Data saved to ${filePath}.\n`);
    }
  });
};

// Fetch and process data for each query
fetchData(query_pr, "./src/shared/opensource/pull_requests.json");
fetchData(query_issue, "./src/shared/opensource/issues.json");
fetchData(query_org, "./src/shared/opensource/organizations.json");
fetchData(query_pinned_projects, "./src/shared/opensource/projects.json");

// Language icons
const languages_icons = {
  Python: "logos-python",
  "Jupyter Notebook": "logos-jupyter",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  JavaScript: "logos-javascript",
  "C#": "logos-c-sharp",
  Java: "logos-java",
  Shell: "simple-icons:shell",
  Ruby: "logos:ruby",
  PHP: "logos-php",
  Dockerfile: "simple-icons:docker",
  Rust: "logos-rust",
};

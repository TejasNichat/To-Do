const fs = require("fs");

const filePath = "TO-DO/README.md";

// Read README
let readme = fs.readFileSync(filePath, "utf8");

// PR data from GitHub Actions
const title = process.env.PR_TITLE || "No title";
const body = process.env.PR_BODY || "No description";
const number = process.env.PR_NUMBER || "";

// New entry
const newEntry = `
### PR #${number}
**Title:** ${title}

**Description:** ${body}

Merged on: ${new Date().toDateString()}
`;

// Check if markers exist
if (!readme.includes("<!-- PR-UPDATES-START -->")) {
  console.log("Markers not found in README");
  process.exit(0);
}

// Replace content between markers
const updatedReadme = readme.replace(
  /<!-- PR-UPDATES-START -->[\s\S]*<!-- PR-UPDATES-END -->/,
  `<!-- PR-UPDATES-START -->
${newEntry}
<!-- PR-UPDATES-END -->`
);

// Write back to file
fs.writeFileSync(filePath, updatedReadme);

console.log("✅ README updated successfully");

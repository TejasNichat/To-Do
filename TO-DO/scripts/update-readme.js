const fs = require("fs");

const filePath = "TO-DO/README.md";

// Read existing README
let readme = fs.readFileSync(filePath, "utf8");

// Get PR data from environment
const title = process.env.PR_TITLE;
const body = process.env.PR_BODY;
const number = process.env.PR_NUMBER;

// New content
const newEntry = `
### PR #${number}
**Title:** ${title}

**Description:** ${body}

Merged on: ${new Date().toDateString()}
`;

// Replace inside marker section
const updated = readme.replace(
  /<!-- PR-UPDATES-START -->[\s\S]*<!-- PR-UPDATES-END -->/,
  `<!-- PR-UPDATES-START -->
${newEntry}
<!-- PR-UPDATES-END -->`
);

// Write updated README
fs.writeFileSync(filePath, updated);

console.log("README updated successfully!");


//testing
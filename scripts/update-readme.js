const fs = require("fs");
const { execSync } = require("child_process");

const filePath = "TO-DO/README.md";
let readme = fs.readFileSync(filePath, "utf8");

const title = process.env.PR_TITLE || "";
const body = process.env.PR_BODY || "";
const number = process.env.PR_NUMBER || "";

// 🔍 Get changed files
let changedFiles = "";
try {
  changedFiles = execSync("git diff --name-only HEAD~1 HEAD").toString();
} catch (e) {
  console.log("Could not get changed files");
}

const lowerText = (title + " " + body).toLowerCase();

// ------------------
// 1. Always update PR section
// ------------------
const prEntry = `
### PR #${number}
**Title:** ${title}

**Description:** ${body}

Merged on: ${new Date().toDateString()}
`;

readme = readme.replace(
  /<!-- PR-UPDATES-START -->[\s\S]*<!-- PR-UPDATES-END -->/,
  `<!-- PR-UPDATES-START -->
${prEntry}
<!-- PR-UPDATES-END -->`
);

// ------------------
// 2. Detect type of change
// ------------------
const isComponent = changedFiles.includes(".component");
const isFeature = lowerText.includes("feature");
const isBugFix = lowerText.includes("fix") || lowerText.includes("bug");
const isVersion = lowerText.includes("version") || lowerText.includes("upgrade");
const isArchitecture = lowerText.includes("architecture");

// ------------------
// 3. Update Features
// ------------------
if (isFeature) {
  readme = readme.replace(
    /## Features([\s\S]*?)\n##/,
    (match) => {
      return match.replace(
        "\n##",
        `\n- ✅ **${title}** - Added via PR\n\n##`
      );
    }
  );
}

// ------------------
// 4. Update Project Structure
// ------------------
if (isComponent) {
  readme = readme.replace(
    /src\/([\s\S]*?)styles\.css/,
    (match) => {
      return match + `\n├── New Component (from PR #${number})`;
    }
  );
}

// ------------------
// 5. Update Technologies (version change)
// ------------------
if (isVersion) {
  readme = readme.replace(
    /## Technologies Used([\s\S]*?)##/,
    (match) => {
      return match.replace(
        "\n##",
        `\n- Updated version via PR #${number}\n\n##`
      );
    }
  );
}

// ------------------
// 6. Update Architecture section
// ------------------
if (isArchitecture) {
  readme = readme.replace(
    /## Component Architecture([\s\S]*?)##/,
    (match) => {
      return match.replace(
        "\n##",
        `\n\n> Updated architecture based on PR #${number}\n\n##`
      );
    }
  );
}

// ------------------
// 7. Bug fix → keep in PR section only
// ------------------

fs.writeFileSync(filePath, readme);

console.log("✅ Fully smart README updated");

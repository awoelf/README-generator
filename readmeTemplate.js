export const title = (title) => {
  return `# ${title}`;
};

export const description = (description) => {
  return `## Description
    ${description}`;
};

export const installation = (installation) => {
    return `## Installation
      ${installation}`;
};

export const license = (license) => {
    return `## License
      Distributed unter the ${license} license. See \`LICENSE.txt\` for more information.`;
};

export const contributing = (contributing) => {
    return `## Contributing
      If you are interested in contributing to this project, please ${contributing}.`;
};

export const tests = (tests) => {
    return `## Contributing
      ${tests}.`;
};

// Creates a table of contents for all of the included sections
export const table = (sections) => {
    this.tableOfContents = `## Table of Contents`;
    for (let i = 0; i < sections.length; i++) {
        this.tableOfContents += `<br>-[${sections[i][0].toUpperCase() + sections[i].substring(1)}](#${sections[i]})`
    }
};
const { createReadStream } = require("fs");
/**
 * Search function that identifies line numbers containing the search query
 * @param {string} query - Space delimited search terms
 * @returns {Promise<number[]>} - Array of line numbers where query terms are found
 */
function searchQuestions(query) {
  return new Promise((resolve, reject) => {
    try {
      const stream = createReadStream("questions.csv");
      const searchTerms = query.toLowerCase().split(" ");
      const results = [];
      let lineNumber = 1;
      let buffer = "";

      stream.on("data", (chunk) => {
        const content = buffer + chunk.toString();
        const lines = content.split("\n");

        // Last line might be incomplete, keep it for the next chunk
        buffer = lines.pop();

        for (const line of lines) {
          const lineContent = line.toLowerCase();
          // Check if all search terms are in the line
          const allTermsFound = searchTerms.every((term) =>
            lineContent.includes(term)
          );
          if (allTermsFound) {
            results.push(lineNumber);
          }
          lineNumber++;
        }
      });

      stream.on("end", () => {
        // Process the last line in buffer if it exists
        if (buffer) {
          const lineContent = buffer.toLowerCase();
          const allTermsFound = searchTerms.every((term) =>
            lineContent.includes(term)
          );
          if (allTermsFound) {
            results.push(lineNumber);
          }
        }
        resolve(results);
      });

      stream.on("error", (err) => {
        reject(err);
      });
    } catch (error) {
      reject(error);
    }
  });
}

// Example usage:
searchQuestions("wine v")
  .then((results) => {
    console.log(results); // Expected output: [2, 37]
  })
  .catch((error) => {
    console.error("Error:", error);
  });

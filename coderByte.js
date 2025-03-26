const INVALID_VALUES = ["N/A", "-", ""];

function cleanObject(obj) {
  let removedCount = 0;

  function recurse(current) {
    if (Array.isArray(current)) {
      // Filter out bad values from array
      const originalLength = current.length;
      current = current.filter((item) => !INVALID_VALUES.includes(item));
      removedCount += originalLength - current.length;
      return current.map((item) =>
        typeof item === "object" ? recurse(item) : item
      );
    } else if (typeof current === "object" && current !== null) {
      for (let key in current) {
        if (INVALID_VALUES.includes(current[key])) {
          delete current[key];
          removedCount++;
        } else if (typeof current[key] === "object") {
          current[key] = recurse(current[key]);
        }
      }
      return current;
    }
    return current;
  }

  const cleaned = recurse(obj);
  cleaned["items_removed"] = removedCount;
  return cleaned;
}

// Perform GET request
// https
//   .get("https://coderbyte.com/api/challenges/json/json-cleaning", (res) => {
//     let data = "";

//     res.on("data", (chunk) => {
//       data += chunk;
//     });

//     res.on("end", () => {
//       try {
//         const jsonData = JSON.parse(data);
//         const cleanedData = cleanObject(jsonData);
//         console.log(JSON.stringify(cleanedData));
//       } catch (err) {
//         console.error("Error parsing JSON:", err);
//       }
//     });
//   })
//   .on("error", (err) => {
//     console.error("Request failed:", err);
//   });
// You can also directly test with the sample object
console.log("\nDirect test with sample object:");
const obj = {
  name: { first: "Robert", middle: "", last: "Smith" },
  age: 25,
  DOB: "-",
  hobbies: ["running", "coding", "-"],
  education: { highschool: "N/A", college: "Yale" },
};

const cleanedObj = cleanObject(obj);
console.log(JSON.stringify(cleanedObj, null, 2));

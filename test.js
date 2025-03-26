// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together.
// Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.

// Example 1:

// Input: stones = [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.
// Example 2:

// Input: stones = [1]
// Output: 1

function finalWeight(arr) {
  let sortedArr = arr.sort((a, b) => b - a);
  while (sortedArr.length > 1) {
    let maxX = sortedArr[1];
    let maxY = sortedArr[0];
    sortedArr.splice(1, 1);
    sortedArr.splice(0, 1);

    if (maxX === maxY) {
      sortedArr.push(0);
    } else if (maxX !== maxY) {
      sortedArr.push(maxY - maxX);
    }
    sortedArr = arr.sort((a, b) => b - a);
  }

  return sortedArr[0];
}

let stones = [2, 7, 4, 1, 8, 1];
let stoneInp = [2, 4];
let stoneInp2 = [3, 6, 9, 15];

console.log(finalWeight(stoneInp2));

const https = require("https");

function cleanObject(obj) {
  // Track items removed
  let itemsRemoved = 0;

  // Recursive function to clean objects and arrays
  function clean(item) {
    if (Array.isArray(item)) {
      // Handle arrays - filter out invalid values
      const newArray = [];
      for (const element of item) {
        if (element === "N/A" || element === "-" || element === "") {
          itemsRemoved++;
        } else if (typeof element === "object" && element !== null) {
          const cleanedElement = clean(element);
          if (Object.keys(cleanedElement).length > 0) {
            newArray.push(cleanedElement);
          } else {
            itemsRemoved++;
          }
        } else {
          newArray.push(element);
        }
      }
      return newArray;
    } else if (typeof item === "object" && item !== null) {
      // Handle objects
      const cleanedObj = {};
      for (const [key, value] of Object.entries(item)) {
        if (value === "N/A" || value === "-" || value === "") {
          itemsRemoved++;
        } else if (typeof value === "object" && value !== null) {
          const cleanedValue = clean(value);

          // If it's an array, add it if it has elements
          if (Array.isArray(cleanedValue)) {
            if (cleanedValue.length > 0) {
              cleanedObj[key] = cleanedValue;
            } else {
              itemsRemoved++;
            }
          }
          // If it's an object, add it if it has properties
          else if (Object.keys(cleanedValue).length > 0) {
            cleanedObj[key] = cleanedValue;
          } else {
            itemsRemoved++;
          }
        } else {
          cleanedObj[key] = value;
        }
      }
      return cleanedObj;
    }
    return item;
  }

  // Start the cleaning process
  const cleanedObj = clean(obj);

  // Add items_removed count
  cleanedObj.items_removed = itemsRemoved;

  return cleanedObj;
}

// Make the GET request to fetch the JSON data
https
  .get("https://coderbyte.com/api/challenges/json/json-cleaning", (resp) => {
    let data = "";

    // Collect response data chunks
    resp.on("data", (chunk) => {
      data += chunk;
    });

    // Process complete response
    resp.on("end", () => {
      try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Clean the object according to the rules
        const cleanedData = cleanObject(jsonData);

        // Output the modified object as a string
        console.log(JSON.stringify(cleanedData));
      } catch (error) {
        console.error("Error processing data:", error.message);
      }
    });
  })
  .on("error", (error) => {
    console.error("Error making request:", error.message);
  });

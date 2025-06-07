let str = "abbyuguyguigiohoijpcghcaahgujblkphutdytfgiuchihgiuhhnoklmddbcbb";

function lengthOfLongestSubstring(str) {
  let startWindow = 0;
  let maxLength = 0;
  let charMap = new Map();
  let startIndexOfMax = 0;

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (charMap.has(currentChar) && charMap.get(currentChar) >= startWindow) {
      startWindow = charMap.get(currentChar) + 1;
    }

    charMap.set(currentChar, i);
    if (i - startWindow + 1 > maxLength) {
      maxLength = i - startWindow + 1;
      startIndexOfMax = startWindow;
    }
  }

  const longestSubstring = str.slice(
    startIndexOfMax,
    startIndexOfMax + maxLength
  );
  console.log("Longest substring:", longestSubstring);
  return maxLength;
}

console.log(lengthOfLongestSubstring(str));

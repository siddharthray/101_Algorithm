function longestConsecutive(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const numSet = new Set(nums);
    console.log("numSet ", numSet);
    let longestStreak = 0;

    for (const num of numSet) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Keep checking for the next elements in the sequence
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // Update the longest streak
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

// Test examples
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// function lengthOfLIS(nums) {
//     if (nums.length === 0) return 0;

//     let dp = new Array(nums.length).fill(1);
//     let maxAns = 1;

//     for (let i = 1; i < nums.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (nums[i] > nums[j]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1);
//             }
//         }
//         maxAns = Math.max(maxAns, dp[i]);
//     }

//     return maxAns;
// }


function lengthOfLIS(nums) {
    const LIS = new Array(nums.length).fill(1);

    for (let i = nums.length - 2; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                LIS[i] = Math.max(LIS[i], 1 + LIS[j]);
            }
        }
    }

    return Math.max(...LIS);
}

// Test the function with the given examples
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // Output: 4
// console.log(lengthOfLIS([0,1,0,3,2,3])); // Output: 4
// console.log(lengthOfLIS([7,7,7,7,7,7,7])); // Output: 1

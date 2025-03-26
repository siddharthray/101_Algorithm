function coinChange(coins, amount) {
    const max = amount + 1;
    const dp = new Array(amount + 1).fill(max);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    console.log("dp array ", dp);

    return dp[amount] !== max ? dp[amount] : -1;
}

console.log(coinChange([1,2], 3));


// function coinChange(coins, amount) {
//     const max = amount + 1;
//     const dp = new Array(amount + 1).fill(max);
//     const lastCoin = new Array(amount + 1).fill(-1);
//     dp[0] = 0;

//     for (let i = 1; i <= amount; i++) {
//         for (let coin of coins) {
//             if (coin <= i && dp[i - coin] + 1 < dp[i]) {
//                 dp[i] = dp[i - coin] + 1;
//                 lastCoin[i] = coin;
//             }
//         }
//     }

//     if (dp[amount] === max) return [-1, []];

//     // Backtrack to find which coins were used
//     const coinsUsed = [];
//     let remainingAmount = amount;
//     while (remainingAmount > 0) {
//         const coin = lastCoin[remainingAmount];
//         coinsUsed.push(coin);
//         remainingAmount -= coin;
//     }

//     return [dp[amount], coinsUsed];
// }

// console.log(coinChange([1,2,5], 11));
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let requiredNum = target - nums[i];
        if (map[requiredNum] !== undefined) {
            return [map[requiredNum], i]
        } else {
            map[nums[i]] = i
            console.log(map)
        }

    }
};

console.log(twoSum([2,7,11,15], 9))
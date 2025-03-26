function topKFrequent (nums, k) {
    let hashMap = {};
    let freq = Array.from({length: nums.length + 1}, () => []);
    let res = [];
    // nums.forEach(n => {
    //     hashMap[n] = (hashMap[n] || 0) + 1;
    // })
    for(let i of nums) {
        hashMap[i] = (hashMap[i] || 0) + 1;
    }
    for (let n in hashMap) {
        freq[hashMap[n]].push(n);
    }

    for(let i = freq.length - 1; i >= 0; i--) {
        for(let n of freq[i]) {
            res.push(n);
            if(res.length === k) {
                return res;
            }
        }
    }

};

console.log(topKFrequent([4,1,-1,2,-1,2,3], 2));
console.log(topKFrequent([1], 1));
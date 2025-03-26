const factorPairs = (n: number) =>
    [...Array(Math.floor(Math.sqrt(n)))].map((_, i) => i + 1)
        .flatMap(f => n % f == 0 ? [[f, n / f], [n / f, f]] : [])

export const balanced = (s: string): boolean => {
    let ss = [...s];
    if (ss.length === 0) {
        return true;
    }
    const chars = [...new Set(ss.filter(s => s != '*'))]
    const counts = ss.reduce(
        (counts, s) => s == '*' ? counts : ((counts[s] += 1), counts),
        Object.fromEntries(chars.map(l => [l, 0]))
    )
    const maxCount = Math.max(...Object.values(counts))
    return factorPairs(ss.length).some(
        ([count, letters]) =>
            letters <= 52 &&
            letters >= chars.length &&
            count >= maxCount
    )
}

console.log(balanced("aabb***"));

//aabb***
//ab*
//aabbc****
//abd*xdx*yba*
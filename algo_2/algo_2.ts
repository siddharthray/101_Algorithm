function add(param1: number, param2: number) :number {
    return param1 + param2;
}
function add2(...param1: number[]): number {
    let total = 0;
    param1.forEach((num) => {
        total += num;

    });
    return total;
}

console.log(add(1,2));
console.log(add(3,2));
console.log(add2(3,2,3));
console.log(add2(3,2,3,4));
for (var i = 0; i <= 5; i++) {
    setTimeout(() => console.log(i), 0)
} // return 6 times 6


for (var i = 0; i <= 5; i++) {
    setTimeout((i) => console.log(i), 0)
} // return 6 times undefined


for (let i = 0; i <= 5; i++) {
    setTimeout(() => console.log(i), 0)
} // return 0 to 5


for (let i = 0; i <= 5; i++) {
    setTimeout((i) => console.log(i), 0)
} // return 6 times undefined


for (let i = 0; i <= 5; i++) {
    setTimeout(() => console.log(i++), 0)
} // return 0 to 5


for (var i = 0; i <= 5; i++) {
    setTimeout(() => console.log(i++), 0)
} // return 6 to 11
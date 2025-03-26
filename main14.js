var employee = {
    details: {
        salary: {
            ctc: 1000,
            bonus: 200
        },
        name: 'abc',
        dob: '01-07-1986',
        role: 'developer',

    },
    name: "xyz"
};

var foundObj = Object.keys(employee);
console.log("found", foundObj)
var update = {
    ...employee,
    name: "abcd"
}

var tmp = { ...employee };
var upadte2 = tmp.details.salary.ctc = 5000;

console.log("update => ", update);
// console.log(tmp);

console.log('1' - - 1);
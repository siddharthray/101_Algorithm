let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
};

// console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)())

let sumAd = function (a) {
  return function (b) {
    if (b) {
      return sumAd(a + b);
    } else {
      return a;
    }
  };
};

console.log(sumAd(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)());

function sum(a) {
  return function (b) {
    return b ? sum(a + b) : a;
  };
}

console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)());

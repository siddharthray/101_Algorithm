var a = 5;
// var b = 6;
var c = 7;

var arr = [0, 1, 2, 3, 0, 4, 4, 0, 0, 6, 6, 7];
console.log([...new Set(arr)]);
function uniqueArr(arr) {
  let obj = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      result.push(arr[i]);
    } else {
      continue;
    }
  }
  return result;
}
console.log(uniqueArr(arr));
// console.log(a)
// setTimeout(() => {
//     console.log(b)
// }, 0)
// let b = 6;
// console.log(c)

// user | user Profile | Post | tags | comments | images
// id                  id                      id                 id                       id                      id
// name                profile_name            comment_id         tagName                  userId                  image_type
// email               postid                  image_id                                    comment_type            size
// password            ranking                 tagId
// retweets_id

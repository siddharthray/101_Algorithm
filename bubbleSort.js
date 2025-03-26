// function bubbleSort(arr) {
//     let n = arr.length;
//     let swapped;

//     do {
//         swapped = false;
//         for (let i = 0; i < n - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 // Swap the elements
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//         // Reduce n by 1 since the largest element is now at the end
//         n--;
//     } while (swapped);

//     return arr;
// }

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

let inputArr = [4.5, 2.8, 5.0, 1.7, 3.3, 4.7, 1.2, 3.6, 4.8, 2.5];
console.log(bubbleSort(inputArr));

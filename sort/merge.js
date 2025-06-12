
// function mergeSort(arr){
//   if(arr.length<=1)return arr //base case 
//   let mid = Math.floor(arr.length/2),
//   left = arr.slice(0,mid),
//   right = arr.slice(mid)
//   return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//   let result = [],
//   i=0,j=0
//   while(i<left.length && j<right.length){
//     if(left[i]<right[j]){
//       result.push(left[i])
//       i++
//     }else{
//       result.push(right[j])
//       j++
//     }
//   }
//   return result.concat(left.slice(i)).concat(right.slice(j))
// }




function mergeSort(arr){
     if(arr.length<=1)return arr;
     let mid = Math.floor(arr.length/2)
     let left = mergeSort(arr.slice(0,mid))
     let right = mergeSort(arr.slice(mid))
     
     return merge(left,right)
}

function merge(left,right){
    let sortedArr = []
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr,...left,...right]

}

console.log(mergeSort([1,5,3,9,8,2,3,6,12,0]))




// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;

//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }

// function merge(left, right) {
//   let sortedArr = [];
//   let i = 0, j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       sortedArr.push(left[i]);
//       i++;
//     } else {
//       sortedArr.push(right[j]);
//       j++;
//     }
//   }

//   return sortedArr.concat(left.slice(i)).concat(right.slice(j));
// }

// console.log(mergeSort([1, 5, 3, 9, 8, 2, 3, 6, 12, 0]));

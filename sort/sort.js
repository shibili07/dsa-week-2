// function bubbleSort(arr){
//      for(let i=0;i<arr.length;i++){
//          for(let j=0;j<arr.length-i-1;j++){
//              if(arr[j]>arr[j+1]){
//                  [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//              }
//          }
//      }
//      return arr
// }

// console.log(bubbleSort([5,4,3,2,1,3,2,365,7,1,0,23,2,1]))



//selection sort 

// function selection(arr){
//     for(let i=0;i<arr.length;i++){
//         let minIndex  = i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minIndex]>arr[j]){
//                 minIndex = j
//             }
//             if(i!==minIndex){
//                 [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
//             }
//         }
//     }
//     return arr
// }

// console.log(selection([2,4,1,4,6,79,3,2,6,0]))

//insertion sort 

// function insertion(arr){
//     for(let i=0;i<arr.length;i++){
//         let key = arr[i]
//         let j=i-1
//         while(j>=0&&arr[j]>key){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=key
//     }
//     return arr
// }
// console.log(insertion([2,1,3,5,2,0,2,3,16,8]))



function quickSort(arr){
    if(arr.length<=1){
       return arr
    }
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
   
    console.log(arr)
    return [...quickSort(right),pivot,...quickSort(left)]
}

console.log(quickSort([5,4,8,3,9,1,0,7,2,6]))
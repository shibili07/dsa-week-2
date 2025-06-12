function quickSort(arr){
  if(arr.length<=1) return arr
  let pivot = arr[arr.length-1],
  left = [],
  right = []
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([1,7,4,6,2,4,0,78,12]))
//selection sort 


function selection(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex  =  i
        for(let j=i+1;j<arr.length-1;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        if(i!==minIndex){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
    return arr
}

console.log(selection([1,5,7,2,4,2,9,0,12,31,6]))
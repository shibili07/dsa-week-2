
let bubble = (arr) =>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}

console.log(bubble([9,3,5,1,7,4,8,10]));



//ITHINTE WORKING =  swap cheyth cheyth athile largest element nte last lek move cheyyum atlast aa element ne consider cheyyyilla itartion ,
// j loop lengthil ninnn kuranj varum


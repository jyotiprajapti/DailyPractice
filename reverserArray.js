const array = [8,9,4,56,12,9]

// for(let i = 0; i<=array.length/2-1; i++){
//     let temp = array[i]
//     array[i] = array[array.length-i-1]
// array[array.length-i-1]= temp
// }

 const array_ =array.map((item,idx)=>array[array.length-1-idx])
console.log("array", array_)

const array =[8,9,4,11]
const initialValue = 0
const sum = array.reduce((a,b)=>a+b,initialValue)
console.log("sum", sum)
// witout using initial value
const sum3 = array.reduce((a,b)=>a+b)

console.log("sum3", sum3)
//without reduce
let sum2=0
array.forEach(item=>{sum2 +=item})
console.log("sum2",sum2)


//round the numbres and return sum
const array2=[2.2,1.1,6.6,7.8]
const roundedsum = array2.reduce((total,num)=>total+Math.floor(num),0)
console.log("roundedsum", roundedsum)
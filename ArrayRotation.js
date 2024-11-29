const array = [1,2,3,4,5,6,7,8]

function rotateArrayUsingAnotherArray(array, number){
let rotatedArray =[]
count = 0
while(count!=number){
    for(let i=1;i<array.length;i++){
rotatedArray.push(array[i])
    }
    rotatedArray.push(array[0])
    count++

}
return rotatedArray
}

const rotatedArray = rotateArrayUsingAnotherArray(array,3)
console.log("rotatedArray", rotatedArray)

function rotateArrayWithoutAnotherArray(array, number){
let count =0;
while(count!=number){
    const temp = array[0]
    for(let i=0;i<array.length;i++){
        array[i] = array[i+1]
    }
    array[array.length-1]=temp
    count++
}
}


rotateArrayWithoutAnotherArray(array, 3)

console.log("array", array)

//Anticlockwise
const antiArray = [1,2,3,4,5,6]
function rotateArrayAnticlockwise(array, number)
{
    let count = 0
    while(count !=number){
        const temp =array[array.length-1]
 for(let i = array.length-1;i>0;i--){
array[i] = array[i-1]
 }
 array[0] = temp
        count++
    }
}
 rotateArrayAnticlockwise(antiArray, 3)

console.log("antiarray",antiArray)


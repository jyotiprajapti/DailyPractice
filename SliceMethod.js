// const array = [1,2,3,4,5,6,7]
// const arr1 = array.slice(3)
// console.log("arr1",arr1)
// const arr2 = array.slice(0,3)
// console.log("arr2",arr2)
// const arr3 = array.slice(-2)
// console.log("arr3",arr3)
// const arr4  = array.slice(6,8)
// console.log("arr4",arr4)

function rotateArray(arr, rotateBy) {
    const n = arr.length;
    console.log("arr.slice(rotateBy)",arr.slice(rotateBy))
    console.log("arr.slice(0, rotateBy)",arr.slice(0, rotateBy))
    return arr.slice(rotateBy).concat(arr.slice(0, rotateBy));
}
 
const originalArray = [1, 2, 3, 4, 5];
const rotatedArray = rotateArray(originalArray, 2);
console.log(rotatedArray);



// function rotateArray(arr, rotateBy) {
//     const n = arr.length;
//     rotateBy %= n;
 
//     arr.push(...arr.splice(0, rotateBy));
//     return arr;
// }
 
// const originalArray = [1, 2, 3, 4, 5];
// const rotatedArray = rotateArray(originalArray, 2);
// console.log(rotatedArray);
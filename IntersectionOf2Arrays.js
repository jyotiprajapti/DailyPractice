const array2 = [1,2,3,4,5,6,7]
const arra3 = [7,4,0,9,3,8,4]



function intersectionElements (){
 const commonElements =new Set()
 for(let i=0;i<array2.length;i++){
    for(let j=0;j<arra3.length;j++){
        if(arra3[j]==array2[i]){
commonElements.add(array2[i])
continue
        }
    }
 }
 return commonElements
}
console.log("common elements", intersectionElements())


// Using sets
let set1 = new Set(array2)
let set2 = new Set(arra3)
function intersect (){
    const arr =[]
    for(let element of set1){
        if(set2.has(element)){
            arr.push(element)
        }
    }
    return arr
}
console.log("intersetction", intersect())

const acc =[]
// Using the reduce method
const redicedIntersect = ()=>{
    const intersect = array2.reduce((acc, b)=>{
        if(arra3.includes(b)){
            acc.push(b)
        }
        return acc
    },[])
    return intersect
}

console.log("intersected elements", redicedIntersect())
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6,2,2];

let intersection = arr1.reduce((acc, curr) => {
  if (arr2.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(intersection);
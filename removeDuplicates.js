const array = [8, 9, 12, 8, 21, 9, 56, 45, 56, 7];
const arr = [];
// Method 1 using traditional for loops
for (let i = 0; i < array.length; i++) {
  let flag = false;
  for (let j = i - 1; j >= 0; j--) {
    if (array[j] == array[i]) {
      flag = true;
      break;
    }
  }
  if (!flag) {
    arr.push(array[i]);
  }
}
console.log("array", arr);
// Method 2: using Filter method
const newAray = array.filter((item, index)=>array.indexOf(item)==index)
console.log("new array", newAray)
// Method 3: using forech method
let foreachArry=[];
array.forEach((item, index)=>{
    if(!foreachArry.includes(item)){
foreachArry.push(item)
    }
})
console.log("foreachbarray", foreachArry)
